import { useWaitForWhatsAppLoad } from './composables/useWaitForWhatsAppLoad';

// const filteredConversations = [
//   {
//     name: 'The Huts Thornham'
//   }
// ];

// // filteredConversations.forEach((conversation) => {
// //   const converationElement = document.querySelector(`span[title="${conversation.name}"]`)?.closest('[role="listitem"]');

// // });

import { createApp } from 'vue';
import Categories from './Categories.vue';
import { useInsertBefore } from './composables/useInsertBefore';
import './style.css';

useWaitForWhatsAppLoad(() => {
  // append a div under the message search bar
  useInsertBefore('wac-categories', 'pane-side');

  // mount vue
  const app = createApp(Categories);
  app.mount('#wac-categories');
});