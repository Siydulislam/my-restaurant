import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent from './Components/MainComponent';
import myStore from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponent></MainComponent>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
