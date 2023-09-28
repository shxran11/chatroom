import ChatTop from '../../components/chatWindow/top';
import Messages from '../../components/chatWindow/messages';
import ChatBottom from '../../components/chatWindow/bottom';
import { useParams } from 'react-router';
import { useRooms } from '../../context/RoomsContext';
import { Loader } from 'rsuite';

const Chat = () => {
  const { chatId } = useParams();

  const rooms = useRooms();

  if (!rooms) {
    return <Loader center vertical size="md" content="Loading" speed="slow" />;
  }

  const currRoom = rooms.find(room => room.id === chatId);

  if (!currRoom) {
    return <h6 className="text-center mt-page">Chat {chatId} not found</h6>;
  }

  return (
    <>
      <div className="chat-top">
        <ChatTop />
      </div>
      <div className="chat-middle">
        <Messages />
      </div>
      <div className="chat-bottom">
        <ChatBottom />
      </div>
    </>
  );
};

export default Chat;
