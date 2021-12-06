
import React,{ReactComponent} from 'react';


class ClockSeconds extends React.Component {

    constructor(props) {
        
        super(props);
        this.state = {
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
        this.setState({
            s: second,
        });
    }

    render() {
        return (
            <>
               {this.state.s}
            </>
        );
    }
}

export default ClockSeconds