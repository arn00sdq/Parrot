
import React,{ReactComponent} from 'react';


class ClockDay extends React.Component {

    constructor(props) {
        
        super(props);
        this.state = {
            d: 0,
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
        var day = new Date().getDay();
        this.setState({
            d: day,
        });
    }

    render() {
        return (
            <>
               {this.state.d}
            </>
        );
    }
}

export default ClockDay