

export default function fillout(){
    return(
<div className="container my-5" id="fillout">
    <div className="container" id="filloutDiv">
        <center>
        <form id='form-id'>
            <div className="row d-inline-flex col-12 col-md-5">
                <div className="divInput">
                    <label for="fname">First Name:</label>
                    <input type="text" className="form-control input-form" id="fname" placeholder=' First name'/>
                </div>

                <div className="divInput">
                    <label for="fname">Middle Name:</label>
                    <input type="text" className="form-control input-form" id="mname" placeholder=' Middle name'/>
                </div>

                <div className="divInput">
                    <label for="fname">Last Name:</label>
                    <input type="text" className="form-control input-form" id="lname" placeholder=' Last name'/>
                </div>
            </div>  

            
            <div className="row d-inline-flex col-12 col-md-5">
                <div className="divInput">
                    <label for="fname">Contact Number:</label>
                    <input type="text" className="form-control input-form" id="contactNo" placeholder=' Contact Number'/>
                </div>

                <div className="divInput">
                    <label for="fname">City:</label>
                    <input type="text" className="form-control input-form" id="city" placeholder=' City'/>
                </div>

                <div className="divInput">
                    <label for="fname">Email:</label>
                    <input type="text" className="form-control input-form" id="email" placeholder=' Email'/>
                </div>
            </div> 
            <div className="sumbit-btn">
            <button className="col-md-4 btn btn-outline-primary my-3" id="submitForm">Submit</button>
            </div>
        </form>
        </center>
    </div>
</div>
    )
};