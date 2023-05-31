import {useContext} from 'react';
import SampleContext from "./Data";

function Landing (){
    const {userName, setUser} = useContext(SampleContext)
    return (
        <div>
            <h1>Welcome {userName}</h1>
        </div>
    )
}
export default Landing;