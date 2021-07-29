export const INCREMENT = 'increment'; //action constants avoid typos and allow them to be imported by other modules
export const DECREMENT = 'decrement';

export function actionIncrement() {
    return {
        type: INCREMENT
    };
}

export function actionDecrement() {
    return {
        type: DECREMENT
    }
}