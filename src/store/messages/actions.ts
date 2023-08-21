/* eslint-disable object-shorthand */
/* eslint-disable no-param-reassign */
import { collection, addDoc } from 'firebase/firestore';

import { MessagesStore as store } from '.';
import { db } from '../../services/firebase-config';

const messagesCollectionRef = collection(db, 'messages');

export async function createTextMessage(authorEmail: string, content: string) {
  await addDoc(messagesCollectionRef, {
    authorEmail: authorEmail,
    content: content,
    createdAt: new Date().getTime(),
    type: 'text',
  });
}

export async function createImageMessage(
  authorEmail: string,
  imageURL: string
) {
  await addDoc(messagesCollectionRef, {
    authorEmail,
    content: imageURL,
    createdAt: new Date().getTime(),
    type: 'image',
  });
}

export function clearStore() {
  store.update((s) => {
    s.messages = [];
  });
}
