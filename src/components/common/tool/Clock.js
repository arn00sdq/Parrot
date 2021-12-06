
import React,{ReactComponent} from 'react';


class Clock extends React.Component {

    constructor(props) {
        
        super(props);
        this.state = {
            d: 0,
            h: 0,
            m: 0,
            s: 0,
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        
        var second = new Date().getSeconds()
        var minute = new Date().getMinutes()
        var hour = new Date().getHours();
        var day = new Date().getDay();
        
        this.setState({
            d: day,
            h: hour,
            m: minute,
            s: second,
        });
    }

    render() {
        return (
            <div>
                <h1>Bonjour, monde !</h1>
                <h2>Il est .</h2>
                <h2>Il est {this.state.m}.</h2>
                <h2>Il est {this.state.h}.</h2>
            </div>
        );
    }
}

export default Clock