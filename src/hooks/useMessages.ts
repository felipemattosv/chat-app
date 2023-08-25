import {
  createTextMessage,
  createImageMessage,
  deleteMessage,
  updateMessage,
  clearStore,
} from '../store/messages/actions';
import { MessagesStore as store } from '../store/messages/index';

export const useMessages = () =>
  store.useState((s) => ({
    ...s,
    createTextMessage,
    createImageMessage,
    deleteMessage,
    updateMessage,
    clearStore,
  }));
