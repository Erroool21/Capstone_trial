import './styles.css';
import Date from './datepicker.js';
import Quantity from './quantity';

function form(){
    return (
<div className="container">
        <form action='/passengerForm' method='GET'>
            <div className='my-2'>
                <div class="form-check d-inline-flex m-3">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                    <label class="form-check-label" for="exampleRadios1">
                    One-way
                    </label>
                </div>
                <div class="form-check d-inline-flex m-3">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                    <label class="form-check-label" for="exampleRadios2">
                    Round-trip
                    </label>
                </div>
            

            <center>
                <div className="row">
                    <div className="d-inline-flex col-12 col-md-2">
                        <select class="form-select form-select-md mb-3" aria-label=".form-select-md example">
                            <option selected disabled hidden>From</option>
                            <option value="1">Baguio</option>
                            <option value="2">Tagaytay</option>
                            <option value="3">Batangas</option>
                        </select>
                    </div>
                    <div className="d-inline-flex col-12 col-md-2">
                    <select class="form-select form-select-md mb-3" aria-label=".form-select-md example">
                        <option selected disabled hidden>To</option>
                        <option value="1">Manila</option>
                        <option value="2">Tagaytay</option>
                        <option value="3">Batangas</option>
                    </select>
                    </div>
                    <Date/>
                    <Quantity/>
                    <input type="submit" className='btn btn-outline-primary d-inline-flex col-2 mx-3 col-md-2' value='Search' id='submit'/>
                </div>
            </center>
            </div>
        </form>
    </div>


    )
}
export default form;