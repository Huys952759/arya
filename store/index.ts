import { globalState } from '@/hooks/useStore/globalState';

/**
 * @typedef {Object} GlobalStateType
 *
 * @property {'English', 'Chinese'} language
 * @property {Object} words
 */

/** @type {GlobalStateType} */
const initState = {
    language: 'English',
    words: {
        stories: {
            English: 'STORIES',
            Chinese: '品牌故事'
        },
        material: {
            English: 'Materials',
            Chinese: '材质'
        },
        description: {
            English: 'Description',
            Chinese: '描述'
        },
        maintenance: {
            English: 'Care',
            Chinese: '保养'
        },
        discover: {
            English: 'Discover',
            Chinese: '发现'
        },
        more: {
            English: 'More',
            Chinese: '更多'
        }

    },
};

export const useStore = globalState(initState);
