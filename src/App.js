import React, { Fragment } from "react";
import Navbar from './components/Navbar'
// import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import HomeBanner from "./components/HomeBanner";

const App = () => {
  return (
    <div className="App">
      <Fragment>
            <Navbar/>
            <div
                style={{
                    // overflowY: "scroll",
                    // height: "800px",
                }}
            ></div>
        </Fragment>

        {/* <Banner/> */}
        <HomeBanner/>
        <FAQ/>
        </div>
    
  )
}

export default App
