import { useDispatch, useSelector} from 'react-redux';
import {loginIn, setLoginInfo} from '../Actions';
function FormSettings({socket}) {
    const dispatch = useDispatch();
    const currentname = useSelector((state) => state.etat.currentUser.name);  
const currentid = useSelector((state) => state.etat.currentUser.id);  

const namechange =(e)=>{
    dispatch(setLoginInfo(e.target.value, currentid));
}
const idchange =(e)=>{
    dispatch(setLoginInfo(currentname,e.target.value));
}
const handleclick=(e)=>{
    e.preventDefault();
    if(currentname !=="" && currentid!==""){
        dispatch(loginIn());
        socket.emit("join_room", currentid)
    }
   
}
    return (
        <form>
             <input type="text" placeholder="Your Name" onChange={namechange} value={currentname}/>
            <input type="text" placeholder="Room ID" onChange={idchange} value={currentid} />
            <input type="submit" onClick={handleclick} value="Join A Room"/>
        </form>
    )
}

export default FormSettings
