import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Provider } from 'react-redux';
import { Pages } from "./components/pages/Pages"

import store from './controller/store';

function App() {
  return (
    <>
        <Pages />
    </>
  );
}

export default App;
