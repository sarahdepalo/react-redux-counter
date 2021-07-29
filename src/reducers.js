import { INCREMENT, DECREMENT } from './actions';

export function counter(state, action) {
    switch(action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            }
        case DECREMENT:
            return {
                count: state.count - 1 
            }
        // Make sure you always return the default state!
        default:
            return state
    }
};