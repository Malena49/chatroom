import { setSettings } from "../Actions";
import { useDispatch, useSelector} from 'react-redux';
import FormSettings from './FormSettings';
function Settings({socket}) {
    const dispatch = useDispatch();
    const handlclik=()=>{
      dispatch(setSettings());
     
  }
  const etat = useSelector((state) => state.etat.etat);
    return (
        <div className="inscription" id={etat? 'ouverture' : 'fermeture'}>
              <button onClick={handlclik} className="settings-button" id={etat? 'ouverture-button' : 'fermeture-button'}>+</button>
           <FormSettings socket={socket}/>
        </div>
    )
}

export default Settings
