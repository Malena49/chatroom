import Message from "./Message"
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

function Messages({messageList}) {

  const messagesRef = useRef();


  useEffect(
    // dans l'effet, on se sert de la référence pour accéder à l'élément du dom
    () => {
      messagesRef.current.scrollTo({
        top: messagesRef.current.scrollHeight,
     
        behavior: 'smooth',
      });
    },
    [messageList],
  );

    return (
        <ul id="chatroom" ref={messagesRef}>
            {
        messageList.map(
          (message) => <Message key={message.id} {...message} />,
        )
      }
        </ul>
            
    )
}
Message.propTypes = {
  
  id: PropTypes.number.isRequired,

};
export default Messages
