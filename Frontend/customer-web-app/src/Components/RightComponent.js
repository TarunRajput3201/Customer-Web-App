import React from 'react'
import UpdateUser from './UpdateUser'

const RightComponent = () => {
  return (
   <div style={{backgroundColor:"white" , margin:"20px",height:"475px"}}>
    <div>
    <h3 style={{marginLeft:"40px" }}>Full Name</h3>
     <div style={{marginLeft:"40px"}}>
     ⚪ UserName   ✉ EmailId 📞MobileNumber
     <br/>
     


     <button type="button" className="btn btn-primary" style={{marginLeft:"40px"}} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
     🖊Edit
</button>


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Updating User Details</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <UpdateUser/>
      </div>
      
    </div>
  </div>
</div>
<button type="button" className="btn btn-primary" style={{marginLeft:"40px"}} data-bs-toggle="modal" >
🗑DeleteCustomer
</button>
    <hr style={{marginRight:"40px"}}/>
    </div>
   </div>
   <h4 style={{marginLeft:"40px"}}>Personal Details</h4>
   <div className="card-group">
  <div className="card" style={{marginLeft:"40px",marginRight:"20px",height:"100px",backgroundColor:"pink"}}>
    <div className="card-body" align="center">
      
      <p className="card-text">First Name</p>
      <h5 className="card-title">First Name</h5>
    </div>
  </div>
  <div className="card" style={{marginLeft:"20px",marginRight:"40px",height:"100px",backgroundColor:"pink"}}>
   
    <div className="card-body" align="center">
      
      <p className="card-text">Last Name</p>
      <h5 className="card-title">Last Name</h5>
    </div>
  </div>
  
</div>
<h4 style={{marginLeft:"40px",marginTop:"20px"}}>Address</h4>
<ul className="list-group">
<li className="list-group-item list-group-item-light">Country</li>
<li className="list-group-item list-group-item-danger">State</li>
<li className="list-group-item list-group-item-light">City</li>
<li className="list-group-item list-group-item-danger">ZipCode</li>

 
</ul>
   </div>
  )
}

export default RightComponent
