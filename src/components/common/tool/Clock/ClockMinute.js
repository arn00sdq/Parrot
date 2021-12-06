
import React,{ReactComponent} from 'react';


class ClockMinute extends React.Component {

    constructor(props) {
        
        super(props);
        this.state = {
            m: 0,
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
        var minute = new Date().getMinutes()
        this.setState({
            m: minute,
        });
    }

    render() {
        return (
            <>
               {this.state.m}
            </>
        );
    }
}

export default ClockMinute