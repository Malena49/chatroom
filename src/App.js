import './App.css';
import Form from './Components/Form';
import Settings from './Components/Settings'
import io from 'socket.io-client';

const socket = io.connect("https://chatroom-malenadesign.herokuapp.com")

function App() {
 
  return (
    <div id='conteneur'>
      <h1>Live chat</h1>
      <Settings socket={socket}/>
    <Form socket={socket}/>
    </div>
  );
}

export default App;
