import {useContext} from 'react';
import SampleContext from "./Data";


function Profile(){
    const {userName, setUser} = useContext(SampleContext);
    const changeUsername = () => {
        let fname = document.getElementById('fname').value;
        let lname = document.getElementById('lname').value;
        let fullname = fname + " " + lname + '' ;
        setUser(fullname);
    }
    return (
        <div>
            <h1>Hello! {userName}</h1>
            First Name: 
            <input type='text' id='fname'/> <br/> 
            Last Name: 
            <input type='text' id='lname'/> <br/>   
            <button onClick={changeUsername}>New userName</button>
        </div>
    )
}
export default Profile;