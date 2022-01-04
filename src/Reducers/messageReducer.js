import { SEND_MESSAGE, SET_CURRENT_MESSAGE } from "../Actions";
import { getMaxId } from '../Selectors'

const initialState = {
    messages: [
    ],

    currentMessage: '',
  };

const messageReducer = (state = initialState, action = {})=>{
switch(action.type){
    case SEND_MESSAGE :
        return { ...state,
           messages:  [...state.messages, {
            id: getMaxId(state) + 1,
           content: state.currentMessage,
        }],
        currentMessage: '',
      };

      case SET_CURRENT_MESSAGE:
      return {
        ...state,
        currentMessage: action.value,
      };

    default:
        return state
}
}
export default messageReducer;