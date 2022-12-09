import { React, useState, useEffect } from 'react'
import axios from "axios"
const GetUser = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        getusers();
    }, [])
    let getusers = async () => {
       
        
        let response=await axios.get("http://localhost:5000/selectCustomers")
        
        
        if (response.status === 200) {
            setData(response.data.data)
        }
    }
    

    console.log("data=>",data)

    return (

        <>
        <div className="list-group">
           {data && data.map((item)=>{
            return (
                <>
                <div>
            <a href="#rightComponent" className="list-group-item list-group-item-action" aria-current="true" >
                {item.fname+" "+item.lname}<br/>
                {item.email}

            </a>
            </div>
            </>
          )})}

        </div>
        </>
    )
}

export default GetUser