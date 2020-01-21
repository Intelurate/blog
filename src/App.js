import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Main from './routes/Main/Main';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}
