import React from 'react'


const Homepage = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-danger">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">🪟Customer Details</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div>
                    <ul className="navbar-nav me-5 my-2 my-lg-0 navbar-nav-scroll">
                        
                        <li className="nav-item">
                            <a className="nav-link" href="/">Customer Admin</a>
                        </li>
                        <li className="nav-item dropdown" >
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                User#001
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Profile</a></li>
                                <li><a className="dropdown-item" href="/">Logout</a></li>
                                
                            </ul>
                        </li>
                       
                    </ul>
                    
                           
                </div>
            </div>
            
        </nav>
        
        </div>
    )
}

export default Homepage