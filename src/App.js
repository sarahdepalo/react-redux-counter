import React from 'react';
import CounterApp from './components/CounterApp';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';

//The Provider component makes the Redux store available to any nested components that need to access it! This is why it is usually rendered at the top level with the rest of the app inside of it. 
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterApp />
      </div>
    </Provider>
  );
}

export default App;
