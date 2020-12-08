import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div style={{height: "100%", textAlign: "center", backgroundColor: "#01305f"}}>
                <img alt="news channels" src="https://www.steveontv.com/images/SoTV-allStations.jpg" style={{width: "100%", height: "100%"}}/>
                <div style={{fontFamily: "Verdana", fontSize: "14px", fontWeight: "bold", color: "#CCC", padding: "10px", paddingBottom: "8em"}}>Siebold Success Network • 395 E. Main Street • Buford, GA 30518 • (561) 436-5761</div>
            </div>
        )
    }
}
