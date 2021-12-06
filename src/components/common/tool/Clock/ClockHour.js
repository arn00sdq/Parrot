
import React,{ReactComponent} from 'react';


class ClockHour extends React.Component {

    constructor(props) {
        
        super(props);
        this.state = {
            h: 0,
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
        
        var hour = new Date().getHours();
        this.setState({
            h: hour,
        });
    }

    render() {
        return (
            <>
               {this.state.h}
            </>
        );
    }
}

export default ClockHour