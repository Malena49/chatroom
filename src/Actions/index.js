
export const SEND_MESSAGE = "SEND_MESSAGE";

export const sendMessage = () => ({ type: SEND_MESSAGE });

export const SET_CURRENT_MESSAGE = 'SET_CURRENT_MESSAGE';

export const setCurrentMessage = (currentMessage) => (
    {
      type: SET_CURRENT_MESSAGE,
      value: currentMessage,
    }
  );
export const SET_SETTINGS= "SET_SETTINGS";
export const setSettings = (etat)=>(
  {
    type : SET_SETTINGS,
    etat: etat,
  }
)
export const LOGIN_IN = "LOGIN_IN"
export const loginIn =()=>({type: LOGIN_IN});
export const SET_LOGIN_INFO = "SET_LOGIN_INFO";
export const setLoginInfo =(name,id)=>({
  type: SET_LOGIN_INFO,
  name,
  id,
})