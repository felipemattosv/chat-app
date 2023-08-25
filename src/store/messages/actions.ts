/* eslint-disable object-shorthand */
/* eslint-disable no-param-reassign */
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';

import { MessagesStore as store } from '.';
import { db } from '../../services/firebase-config';
import type { Message } from '../../types/message';

const messagesCollectionRef = collection(db, 'messages');

// Firestore Database Listener
onSnapshot(messagesCollectionRef, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === 'added') {
      const newMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Message[];

      store.update((s) => {
        s.messages = newMessages.sort((a, b) => a.createdAt - b.createdAt);
      });
    } else if (change.type === 'removed') {
      store.update((s) => {
        s.messages = s.messages.filter((m) => m.id !== change.doc.id);
      });
    } else if (change.type === 'modified') {
      store.update((s) => {
        s.messages = s.messages.map((m) => {
          if (m.id === change.doc.id) {
            return {
              ...m,
              ...change.doc.data(),
            };
          }
          return m;
        });
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

export async function deleteMessage(messageId: string) {
  const docRef = doc(db, 'messages', messageId);
  await deleteDoc(docRef);
}

export async function updateMessage(messageId: string, newContent: string) {
  const docRef = doc(db, 'messages', messageId);
  await updateDoc(docRef, {
    content: newContent,
  });
}

export function clearStore() {
  store.update((s) => {
    s.messages = [];
  });
}
