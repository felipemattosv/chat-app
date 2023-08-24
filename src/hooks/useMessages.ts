import {
  createTextMessage,
  createImageMessage,
  deleteMessage,
  clearStore,
} from '../store/messages/actions';
import { MessagesStore as store } from '../store/messages/index';

export const useMessages = () =>
  store.useState((s) => ({
    ...s,
    createTextMessage,
    createImageMessage,
    deleteMessage,
    clearStore,
  }));
