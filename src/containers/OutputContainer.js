import Output from '../components/Output';
import { connect } from 'react-redux';

//The provider we wrapped our app around makes the state available. 
function mapStateToProps(state) {
    return {
        amount: state.count 
    }
}
// Wrapping our dumb component with a connection to the redux store. Making this a 'connected component'.
// Now you can have access to all the cool stuff in the store!!
export default connect(mapStateToProps)(Output);
