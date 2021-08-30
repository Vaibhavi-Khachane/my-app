import React from 'react';
function Form() {
return(
    <div className = "container-sm border rounded border-info mx-auto">
        <h1 className = "text-center text-info bg-dark rounded m-1">Registration Form</h1>
        <form>
            <div className = "form-group">
                <label for="Name" className = "m-2">Name</label>
                <input type="text" className="form-control" id="Name" placeholder="Enter Name"></input>
            </div>

            <div className = "form-group">
                <label for="Email" className = "m-2">Email</label>
                <input type="email" className="form-control" id="Email" placeholder="Enter Email"></input>
            </div>

            <div className = "form-group">
                <label for="Password" className = "m-2">Password</label>
                <input type="password" className="form-control" id="Password" placeholder="Enter Password"></input>
            </div>

            <div className="form-group">
                <label for="textarea" className = "m-2">Address</label>
                <textarea className="form-control" id="teaxtarea" rows="3" placeholder="Enter Address"></textarea>
            </div>
            
        <div className="form-group">
            <select className="form-select m-2" aria-label="size 3 select example">
                <option selected>Select country</option>
                <option value="1">India</option>
                <option value="2">USA</option>
                <option value="3">UK</option>
            </select>
        </div>

        <label for="gender" className = "m-2">Select Gender</label>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" id="Radio1" value="option1"/>
            <label className="form-check-label" for="inlineRadio1">Male</label>
        </div>

        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" id="Radio2" value="option2"/>
            <label className="form-check-label" for="inlineRadio1">Female</label>
        </div>

        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" id="Radio3" value="option3"/>
            <label className="form-check-label" for="inlineRadio1">Other</label>
        </div>

    
        Select Hobby
        <div className="form-check m-1">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">
                Playing
            </label>
        </div>

        <div className="form-check m-1">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">
                Reading
            </label>
        </div>

        <div className="form-check m-1">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">
                Drawing
            </label>
        </div>


        <button type="submit" className="btn btn-primary btn-lg m-2">Submit</button>
        </form>

    </div>
);
}
export default Form;