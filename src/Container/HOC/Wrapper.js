import React from 'react';
import { withRouter } from 'react-router';
import Skeleton from '../../Component/skeleton';

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
    
        setTimer = () => (this.timeout = setTimeout(this.timer, 600))
        
        render = () => (
            <div>
            {this.state.isLoading
            ?<div>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>   
            </div>
            : <WrappedComponent {...this.props} />}
            </div>
        )
        
        }
        return withRouter(Wrapper);
    }
    
