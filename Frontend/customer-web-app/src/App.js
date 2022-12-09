import React from 'react';
import Home from './Components/Homepage';
import LeftComponent from './Components/LeftComponent';
import RightComponent from './Components/RightComponent';

function App() {
  return (
  <div>
  <Home/>
  <div className="row" style={{marginTop: "20px"}}>
    <div className="col-sm-3 col-md-6 col-lg-3">
      <LeftComponent/>
    </div>
    <div className="col-sm-9 col-md-6 col-lg-9" value="rightComponent" style={{backgroundColor:"pink"}} >
      <p><RightComponent/></p>
    </div>
        </div>
  </div>
  );
}

export default App;
