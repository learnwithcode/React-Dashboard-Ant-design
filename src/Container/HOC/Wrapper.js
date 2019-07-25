import React from 'react';
import { withRouter } from 'react-router';
import Spinner from '../../Component/spinner';

const style = {
    position : 'absolute',
    top : '50%',
    left : '50%',
    transform : 'translate(-50%, -50%)',
    
}

export default WrappedComponent => {
    class Wrapper extends React.Component {
        state = {isLoading: true};
    
        componentDidMount = () => this.setTimer();
    
        componentDidUpdate = prevProps => {
            if (this.props.location !== prevProps.location) {
                this.clearTimer();
                this.setState({isLoading : true}, () => this.setTimer());
            }
        };
    
        clearTimer = () => clearTimeout(this.timeout);
    
        timer = () => this.setState({ isLoading: false}, () => this.clearTimer());
    
        setTimer = () => (this.timeout = setTimeout(this.timer, 700))
        
        render = () => (
            <div>
            {this.state.isLoading
            ?<div style={style}>
               
                <Spinner/>   
            </div>
            : <WrappedComponent {...this.props} />}
            </div>
        )
        
        }
        return withRouter(Wrapper);
    }
    
