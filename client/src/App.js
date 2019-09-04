import React from 'react';
import './App.css';

import Form from './components/Form'
import Login from './components/Login'

class App extends React.Component {
  state = { 
    response: ''
   }



  render() { 
    return ( 
    <div>
      <h1>hello</h1>
      <Form apple={'apples'}></Form>
      <Login></Login>
    </div> 
    );
  }
}
 
export default App;


