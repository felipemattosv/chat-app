import { Store } from 'pullstate';

import { Message } from '../../types/message';

interface Props {
  messages: Message[];
}

const defaultState = {
  messages: [],
};

export const MessagesStore = new Store<Props>(defaultState);
