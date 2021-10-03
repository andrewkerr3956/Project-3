import React, {useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactContent = () => {

    // Contact component will handle it's own state.
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [comments, setComments] = useState("");

    const updateFirstName = (event) => {
        setFirstName(event.target.value)
    }

    const updateLastName = (event) => {
        setLastName(event.target.value)
    }

    const updateEmail = (event) => {
        setEmail(event.target.value)
    }

    const updateComments = (event) => {
        setComments(event.target.value)
    }

    // State variables for submitting to formspree.
    const [submission, setSubmission] = useForm("xdoyjzgr");
  
    if(submission.succeeded) {
        return(
            <div>
                <h1 style={{textAlign: "center"}}>Submission Successful!</h1>
                <h4 style={{textAlign: "center"}}>Your Submission:</h4>
                <label>{submission.firstName}</label> <p />
                <label>{submission.lastName}</label> <p />
                <label>{submission.email}</label> <p />
                <label>{submission.comments}</label> <p />
            </div>
        )
    }

    return (
      <div className="container">
        <h2 style={{textAlign: "center"}}>Please enter details below to contact us.</h2>
        <div className="form-container">
          <form className="container-fluid" onSubmit={setSubmission}>
            <label for="firstName">First Name</label> <br />
            <input id="firstName" type="text" name="firstName" value={firstName} onChange={updateFirstName}/>
            <ValidationError prefix="First Name" field="firstName" errors={submission.errors} /> 
            <p />
            <label for="lastName">Last Name</label> <br />
            <input id="lastName" type="text" name="lastName" value={lastName} onChange={updateLastName} />
            <ValidationError prefix="Last Name" field="lastName" errors={submission.errors} />
            <p />
            <label for="email">E-Mail Address</label> <br />
            <input id="email" type="email" name="email"  value={email} onChange={updateEmail}/>
            <ValidationError prefix="Email" field="email" errors={submission.errors} />
            <p />
            <label for="comments">Comments</label> <br />
            <textarea id="comments" name="comments" rows="5" cols="50" value={comments} onChange={updateComments}></textarea>
            <ValidationError prefix="Comments" field="comments" errors={submission.errors} />
            <p />
            <button type="submit" disabled={submission.submitting}>Submit</button>
          </form>
        </div>
      </div>
    )
  }

export {ContactContent};


