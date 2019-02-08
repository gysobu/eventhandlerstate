import React from 'react';
import PropTypes from 'prop-types';

class Test extends React.Component {
    constructor() {
        super();
        this.state={
            msg:"this is initial message",
            counter:0
        }
        
    
    }
    handlerClick(){
        let newcounter= this.state.counter + 1;
    this.setState({
        msg:"new state",
        counter:newcounter

    }
        
    );
}

    render() {
        return (
            <div>
                {this.state.msg} {this.state.counter}
                <button onClick={this.handlerClick.bind(this)}>
                  Submit
                </button>
            </div>
            
        );
    }
}


// Test.propTypes = {
    
// };

export default Test
