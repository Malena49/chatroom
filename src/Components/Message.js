import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

export default function Message({ author,message, time}) {
  const  username= useSelector((state) => state.etat.userinfo.name);  

  return (
    <div className="message" id={username=== author? "you":"other"}>
    <p>{author}</p>
    <div className="message__content">{message}
    <div id='time'>{time}</div>
    </div>
   
  </div>
  )
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,

};

