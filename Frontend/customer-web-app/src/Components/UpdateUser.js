import React, { useState } from "react";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { useNavigate } from "react-router-dom";

const UpdateUser = () => {
    const [credentials, setCredentials] = useState({
        username:"",
        fname:"",
        lname:"",
        email:"",
        phone:"",
        password:"",
        cpassword:"",
        addressLine1:"",
        country:"",
        state:"",
        city:"",
        zipCode:""
      });
    //   let navigate=useNavigate()
      const handleSubmit = async (e) => {
        
       e.preventDefault()
       toast.success("changes saved")

      };
      const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };
      return (
        <div className="container">
          <div className="row mt-5">
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  id="username"
                  placeholder='username'
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="fname"
                  id="fname"
                  placeholder='first name'
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lname" className="form-label">
                  
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lname"
                  id="lname"
                  placeholder='last name'
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                 
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder='email id'
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                 
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder='mobile number'
                  onChange={onChange}
                />
              </div>
             
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder='password'
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">
                  
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="cpassword"
                  name="cpassword"
                  placeholder='confirm password'
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="addressLine1" className="form-label">
                  
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="addressLine1"
                  name="addressLine1"
                  placeholder='address line 1'
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                 
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  name="country"
                  placeholder='country'
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="state" className="form-label">
                  
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                  placeholder='state'
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  placeholder='city'
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="zipCode" className="form-label">
                  
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="zipCode"
                  name="zipCode"
                  placeholder="zipCode"
                  onChange={onChange}
                />
              </div>
              <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{width:"201px"}}>Close</button>
        <button type="button" onClick={handleSubmit} className="btn btn-primary" style={{width:"201px"}}>Save Changes</button>
        {/* <Link className="btn btn-primary mx-1" to="/" role="button">
            Submit
          </Link> */}
        
      </div>
            </form>
          </div>
        </div>
      );
}

export default UpdateUser