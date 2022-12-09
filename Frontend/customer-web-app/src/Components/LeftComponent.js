import {React} from 'react'
import Createuser from './CreateUser'
import GetUser from './GetUser'

// import axios from "axios"
const LeftComponent = () => {
    
    //  const onChange = (e) => {
    //     setCredentials({ ...credentials, [e.target.name]: e.target.value });
    //   };

    return (
        <div>
            <form >
                <div className="row g-0">
                    <div className="col-md">


                        <select className="form-select">
                            <option selected>SearchBy</option>
                            <option value="1">name</option>
                            <option value="2">username</option>
                            <option value="3">country</option>
                            <option value="4">state</option>
                            <option value="5">city</option>
                           
                            
                        </select>

                    </div>
                    <div className="col-md">

                        <input className="form-control input-default" type="text" placeholder="Search Here" style={{width:"150px"}} />


                    </div>
                    <div className="col-md">

                        <button className='btn bg-transparent' type="button">🔍</button>


                    </div>
                    <div className="col-md">


                        <button type="button" className="btn btn-primary bg-transparent" data-bs-toggle="modal" data-bs-target="#exampleModal">➕</button>



                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Adding User|User Details</h1>
                                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                                    </div>
                                    <div className="modal-body">
                                        <Createuser />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
            <div style={{marginTop:"20px"}} className="my-custom-scrollbar my-custom-scrollbar-primary">
            <GetUser />
            </div>
        </div>
    )
}

export default LeftComponent