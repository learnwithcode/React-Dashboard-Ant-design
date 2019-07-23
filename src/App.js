import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';

import Layout from './layout';


class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>  
            
      );
  }
}

export default App;
