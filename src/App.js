import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Main from './routes/Main/Main';

export default function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}
