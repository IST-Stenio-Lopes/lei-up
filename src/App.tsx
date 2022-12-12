import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './contexts';
import { Router } from './routes/router';

function App() {
  return (
    // <div className="App">
     
    // </div>
    <BrowserRouter>
      <AppProvider>
        <Router/>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
