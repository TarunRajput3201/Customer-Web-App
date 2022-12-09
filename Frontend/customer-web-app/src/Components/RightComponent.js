import React from 'react'

const RightComponent = () => {
  return (
   <div style={{backgroundColor:"white" , margin:"20px",height:"475px"}}>
    <div>
    <h3 style={{marginLeft:"40px" }}>Full Name</h3>
     <div style={{marginLeft:"40px"}}>
     ⚪ UserName   ✉ EmailId 📞MobileNumber
     <br/>
     <button style={{marginLeft:"60px"}}>🖊Edit</button><button style={{marginLeft:"60px"}}>🗑DeleteCustomer</button>
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
<ul class="list-group">
<li class="list-group-item list-group-item-light">Country</li>
<li class="list-group-item list-group-item-danger">State</li>
<li class="list-group-item list-group-item-light">City</li>
<li class="list-group-item list-group-item-danger">ZipCode</li>

 
</ul>
   </div>
  )
}

export default RightComponent