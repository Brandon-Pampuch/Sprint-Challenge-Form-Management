import React from 'react';
import { withFormik, Form, Field } from "formik";
import axios from 'axios'

import Data from './Data'

class Login extends React.Component {
    constructor(props){
    super(props)
        this.state = { 
            username: '',
            password: ''
        }
    }

      



    render() { 
        console.log('login props', this.props)
        return ( 
            <div>
                <Form>
                    <h2>Login</h2>
                    <Field type="username" name="username" placeholder="username" />
                    <Field type="password" name="password" placeholder="Password" />
                    <button type='submit'>Submit!</button>
                    <Data data={this.props.status}></Data>
                </Form>
            </div>

         );
    }
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }) {
      return {
        username: username || "",
        password: password || ""
      };
    },
  
    handleSubmit(values,{setStatus,resetForm}) {
    
      axios
      .post("http://localhost:5000/api/login", values)
      .then(res => {
            console.log(res)
        axios
        .get(`http://localhost:5000/api/restricted/data`,{Authorization:res.token})
        .then(res => {
            setStatus(res)

        })

        
        console.log(res.token)
        setStatus(res);
        resetForm();
        console.log(res)
         // Data was created successfully and logs to console
      })
      .catch(err => {
        console.log(err); // There was an error creating the data and logs to console
      });
     
      //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
    }
  })(Login);
  
 
export default FormikLoginForm;