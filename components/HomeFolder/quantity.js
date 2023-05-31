

function Quantity(){
    return(
        <div className="quantity col-2 col-md-4 d-inline-flex" id="form-float">
             <select class="form-select form-select-md mb-3" aria-label=".form-select-md example">
                <option selected disabled hidden>Passengers</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="3">4</option>
            </select>
        </div>
    )
}
export default Quantity;