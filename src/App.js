import React from 'react';
import RoutesApp from './routes';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './styles/responsive.css';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000}/>
      <RoutesApp/>
    </div>
  );
}

export default App;
