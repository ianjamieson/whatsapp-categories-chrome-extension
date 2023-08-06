import { defineStore } from 'pinia';
import { EntityState, createAdapter } from '@tixel/pinia-entity';
export interface Category {
    id: number;
    name?: string;
    type: 'whitelist' | 'blacklist';
    color: string;
    matches: string[];
}
const adapter = createAdapter<Category>('id');

const { getAll } = adapter.getSelectors();

type CategoryStoreState = EntityState<Category>;

const exampleState: CategoryStoreState = {
    ids: ['1', '2', '3'],
    entities: {
        '1': {
            id: 1,
            name: 'All',
            type: 'blacklist',
            color: 'bg-gray-300',
            matches: [],
        },
        '2': {
            id: 2,
            name: 'Filtered',
            type: 'blacklist',
            color: 'bg-red-300',
            matches: ['Ian / Tom / Ian', 'Ian / Nat']
        },
    },
};

export const useCategoryStore = defineStore('CategoryStore', {
    // state: (): CategoryStoreState => ({
    //     ids: [],
    //     entities: {},
    // }),
    state: (): CategoryStoreState => exampleState,
    getters:{
        getAll
    }
})