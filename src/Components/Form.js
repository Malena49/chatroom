import Messages from "./Messages"
import { sendMessage, setCurrentMessage } from "../Actions";
import { useSelector, useDispatch } from 'react-redux';
import { useFocus } from '../Hooks/useFocus';
import { useEffect, useState } from "react";

function Form({ socket }) {

  const dispatch = useDispatch();

  const currentMessage = useSelector((state) => state.message.currentMessage);
  const username = useSelector((state) => state.etat.userinfo.name);
  const roomid = useSelector((state) => state.etat.userinfo.id);

  const [messageList, setmessageList] = useState([])
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (currentMessage !== "" && roomid !== "" && username !== "") {
      dispatch(sendMessage());

      const messageData = {
        id: messageList.length - 1,
        room: roomid,
        author: username,
        message: currentMessage,
        time: new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      }
      await socket.emit("send_message", messageData);
      setmessageList((list) => [...list, messageData])
    }else if (roomid == "" || username == ""){
      alert("Please join a room first!")
    }
     else {
      alert("Please enter your message !")
    }

  }
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setmessageList((list) => [...list, data])
    })

  }, [socket])

  function handleChange(event) {
    dispatch(setCurrentMessage(event.target.value));

  }


  //const inputRef = useFocus();

  return (
    <form onSubmit={handleSubmit}>
      <Messages messageList={messageList} />
      <div id="messageinput">
        <input type="text"
          ref={useFocus()}
          value={currentMessage}
          onChange={handleChange}
          placeholder="Enter your message here"
        />

        <button type="submit" ><i className="far fa-paper-plane"></i></button>
      </div></form>
  )
}

export default Form
