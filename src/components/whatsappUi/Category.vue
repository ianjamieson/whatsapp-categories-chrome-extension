<script setup lang="ts">
import { ref } from 'vue';
import ButtonLabel from '../ui/ButtonLabel.vue';
const props = defineProps<{
  category: Category,
}>();


const blacklistDom = () => {
  props.category.matches.forEach((match) => {
    const el = document.querySelector(`[title="${match}"]`);
    const chat = el?.closest('[role="listitem"]');
    chat?.classList.add('overflow-hidden', '!h-0');
    chat?.setAttribute('data-removed', 'true');
  })
};
const whitelistDom = () => {
  Array.from(document.querySelector('[data-testid="chat-list"] > [role="grid"]').children)
    .filter((chatElement) => {
      const title = chatElement.querySelector(`[title]`).getAttribute('title');
      return !props.category.matches.includes(title);
    })
    .forEach((chatElement) => {
      chatElement?.classList.add('overflow-hidden', '!h-0');
      chatElement?.setAttribute('data-removed', 'true');
    });
}

const selected = ref(false);

const select = () => {
  // set to selected
  selected.value = true;

  switch (props.category.type) {
    case 'blacklist':
      blacklistDom();
      break;
    case 'whitelist':
      whitelistDom();
      break;
  }

  // refresh translateY values
  // Array.from(document.querySelector('[data-testid="chat-list"] > [role="grid"]')?.children as HTMLCollectionOf<HTMLElement>).map((chatElement) => chatElement.style['transform']);

  // get translateY values
  // const chatIdsWithTranslateY: {
  //   [key: string]: string
  // } =
  const chatIdsWithTranslateY =
    Array.from(document.querySelectorAll('[data-testid="chat-list"] > [role="grid"] > :not([data-removed="true"]'))
      .reduce((acc, chatElement) => {
        const transform = chatElement.style['transform']
        const translateY = transform.match(/translateY\((-?\d+\.?\d*)px\)/)[1];
        const title = chatElement.getAttribute('data-testid') ?? '';
        return {
          ...acc,
          [title]: translateY
        }
      }, {});

  // sort
  const sortedEntries = Object.entries(chatIdsWithTranslateY).sort((a, b) => parseInt(a[1], 10) - parseInt(b[1], 10));

  // now reapply translateY values
  let translateY = 0;
  sortedEntries.forEach((sortedEntry) => {
    const id = sortedEntry[0];
    const el = document.querySelector(`[role="listitem"][data-testid="${id}"]`);
    el.style.transform = `translateY(${translateY}px)`;
    translateY += 72;
  });

  // set the div height
  document.querySelector('[data-testid="chat-list"] > [role="grid"]')?.setAttribute('style', `height: ${translateY}px`)

}

</script>

<template>
  <ButtonLabel
          :class="{
            [props.category.color]: true,
            'opacity-50': !selected,
          }"
          @click.prevent="select()">
    {{ props.category.name }} {{ props.category.color }}
  </ButtonLabel>
</template>

