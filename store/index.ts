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
        }
    },
};

export const useStore = globalState(initState);
