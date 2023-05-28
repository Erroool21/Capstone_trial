import React, {useState} from "react";

function Quantity(){
    const [Quantity, setQuantity] = useState('1');
    console.log(Quantity);
    return(
        <div className="quantity  col-2 col-md-4 d-inline-flex">
            <input className="form-control" id="quantity1" min="0" max="5"
            name="quantity" type="number" onChange={e => setQuantity(e.target.value)} placeholder="Passengers"/>
        </div>
    )
}
export default Quantity;