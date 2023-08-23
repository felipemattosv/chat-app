/* eslint-disable object-shorthand */
/* eslint-disable no-param-reassign */
import { collection, addDoc, onSnapshot } from 'firebase/firestore';

import { MessagesStore as store } from '.';
import { db } from '../../services/firebase-config';
import type { Message } from '../../types/message';

const messagesCollectionRef = collection(db, 'messages');

// Firestore Database Listener
onSnapshot(messagesCollectionRef, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === 'added') {
      const newMessages = snapshot.docs.map((doc) => doc.data() as Message);

      store.update((s) => {
        s.messages = newMessages.sort((a, b) => a.createdAt - b.createdAt);
      });
    }
  });
});

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
