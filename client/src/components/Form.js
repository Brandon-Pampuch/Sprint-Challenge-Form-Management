import React from 'react';
import { withFormik, Form, Field } from "formik";
import axios from 'axios';


class FormikForm extends React.Component {
    constructor({status, apple}){
        super(status, apple)
        this.state = { 
            username: '',
            password: ''
         }
         console.log("props",status)
         console.log("props",apple)
    }


    componentDidUpdate(prevProps,prevState){
        if(prevProps !== this.props){
            this.setState(this.props.values)
       
        }
    }
    
    
    render() { 
       
        return ( <div>
            <Form>
                <h2>register</h2>
                <Field type="username" name="username" placeholder="username" />
                <Field type="password" name="password" placeholder="Password" />
                <button type='submit'>Submit!</button>
            </Form>
        </div> );
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
      .post("http://localhost:5000/api/register", values)
      .then(res => {

        axios
        .get(`http://localhost:5000/api/restricted/data`,{Authorization:res.token})
        .then(res => {
            
        })

        
     
        setStatus(res);
        resetForm();
 
         // Data was created successfully and logs to console
      })
      .catch(err => {
        console.log(err); // There was an error creating the data and logs to console
      });
    
      //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
    }
  })(FormikForm);
  
  export default FormikLoginForm;