import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import './layout.css';
import 'stream-chat-react/dist/css/v2/index.css';

const chatClient = new StreamChat('u3dzudjmt9w4');
const storedObject = localStorage.getItem("NETTEE_TOKEN");
const object = JSON.parse(storedObject);

chatClient.connectUser(
  {
    id: 'jolly-wave-0',
    name: 'jolly-wave-0',
  },
  chatClient.devToken('jolly-wave-0'),
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  name: 'Message',
  members: ['jolly-wave-0'],
});

const ChatsPage = () => (
  <Chat client={chatClient} theme='str-chat__theme-light'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default ChatsPage;
