import React, {
    Component
} from 'react'
import './App.css';



export class App extends Component {
    constructor() {
        super()
        this.state = {
            second: 0,
            minute: 0,
            hour: 0,
            status: "stop"
        }
    }

    // start timer

    start = () => {
        if (this.state.interval) {
            return
        }
        let interval = setInterval(() => {
            if (this.state.status === "start") {
                this.setState({
                    second: this.state.second + 1
                })
                this.secTomin()
                this.minTohour()
            } 
        }, 1000)
        this.setState({
            interval: interval
        })
    }
// start/pause button

status  = () => {
    
        if(this.state.status==="start"){
            this.setState({
            status: "stop"
            })
        }
        else {
            this.setState({
                status:"start"
            })
            this.start()
        }
}
               
    // convert Seconds to minutes
    secTomin = () => {
        setTimeout(() => {
            if (this.state.second === 60) {
                this.setState({
                    minute: this.state.minute + 1,
                    second: 0
                })
            }
        }, 1000)
    }


    // convert minutes to hours
    minTohour = () => {
        setTimeout(() => {
            if (this.state.minute === 60) {
                this.setState({
                    hour: this.state.hour + 1,
                    minute: 0
                })
            }
        }, 1000)
    }
    // reset timer
    reset = () => {
        this.setState({
            second: 0,
            minute: 0,
            hour: 0,
            status: "stop"
        })
    }


    render() {
        return ( <
            div className = "App" >
            <
            img src = "https://www.shareicon.net/data/512x512/2015/12/27/693917_phone_512x512.png"
            className = "time-phone"
            alt = "logo" / >
            <
            div className = "time-container" >
            <
        span> {
                String(this.state.hour).padStart(2, '0') + ":" + String(this.state.minute).padStart(2, '0') + ":" + String(this.state.second).padStart(2, '0')
            }</span> <div className = "time-units"> <
            h6 className = "time-unit" > Hours < /h6> <h6 className = "time-unit" > Minutes < /h6 > < h6 className = "time-unit" > Seconds < /h6> </div > < button onClick = {
                this.status
            } className="start"> {this.state.status==="stop"?"Start":"Stop"} < /button>  <
            button onClick = {
                this.reset
            } className="reset"> Reset < /button>< /div > < /div>
        )
    }
}




export default App
