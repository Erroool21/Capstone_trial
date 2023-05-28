import React, {useState} from 'react';
import './styles.css';


function Date(){
    const [Date, setDate] = useState("");
    console.log(Date);
    return(
        <div className="d-inline-flex col-2 col-md-2 input-group" id='datepicker'> 
            <input className='d-inline-flex form-control' type='date' onChange={e => setDate(e.target.value)}/>
        </div>
    );
}
export default Date;