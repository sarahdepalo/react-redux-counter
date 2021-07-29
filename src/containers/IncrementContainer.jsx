import Increment from '../components/Increment';
import { connect } from 'react-redux';
import { actionIncrement } from '../actions';

//translation function: this one will translate Redux dispatch() into React props.
//Returns an object whose keys will be prop names that you can use in React. 
function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {
            dispatch(actionIncrement());
        }
    }
}
// null is passed since we don't have mapStateToProps()
export default connect(null, mapDispatchToProps)(Increment);