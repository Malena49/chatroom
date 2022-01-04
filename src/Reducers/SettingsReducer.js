import { SET_SETTINGS, LOGIN_IN, SET_LOGIN_INFO } from '../Actions'

const initialState = {
  etat: true,
  userinfo :{
    name: "",
    id: ""
  },
  currentUser: {
    name: "",
    id: ""
  },
};
const SettingsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SETTINGS:
      return {
        ...state,
        etat: !state.etat
      };

    case LOGIN_IN:
      return {
        etat: !state.etat,
        userinfo:{
          name: state.currentUser.name,
          id: state.currentUser.id
        },
        currentUser: {
          name: "",
          id: ""
        }
      };
      case SET_LOGIN_INFO:
        return {
          ...state,
          currentUser: {
            name: action.name,
            id: action.id,
          }
        };
    default:
      return state
  }
}

export default SettingsReducer
