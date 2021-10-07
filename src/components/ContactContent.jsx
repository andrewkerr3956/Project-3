import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react'; 

const ContactContent = () => {

    // Contact component will handle it's own state.
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [comments, setComments] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [submission, setSubmission] = useForm("xdoyjzgr");

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

    

    // Here we handle the FIRST submission. This will lead to the confirmation page.
    const handleSubmit = async () => {
        setSubmitted(true);
    }

    // Here we handle if the user wants to go back and edit the form after the FIRST submission.
    const handleCancel = async () => {
        setSubmitted(false);
    }

    // If the form submission was successfully sent to Formspree after the confirmation page.
    if(submission.succeeded) {
        return (
            <div className="container">
                <h1 className="contact-heading">Submission successful.</h1>
                <h4 className="contact-heading">The submission has been received. Thank you.</h4>
            </div>
        )
    }

    // If the form has been submitted the FIRST time
    if (submitted) {
        const bold = {fontWeight: "bold"}
        return (
            <div className="container">
                <h1 className="contact-heading">Confirm your information.</h1>
                <h4 className="contact-heading">Verify that the information shown below is correct.</h4>
                <div className="form-container">
                    <form className="container-fluid" onSubmit={setSubmission}>
                        <label for="firstName">First Name</label> <br />
                        <input style={bold} id="firstName" type="text" name="firstName" value={firstName}  readOnly/>
                        <ValidationError prefix="First Name" field="firstName" errors={submission.errors} />
                        <p />
                        <label for="lastName">Last Name</label> <br />
                        <input style={bold} id="lastName" type="text" name="lastName" value={lastName}  readOnly/>
                        <ValidationError prefix="Last Name" field="lastName" errors={submission.errors} />
                        <p />
                        <label for="email">E-Mail Address</label> <br />
                        <input style={bold} id="email" type="email" name="email" value={email}  readOnly/>
                        <ValidationError prefix="Email" field="email" errors={submission.errors} />
                        <p />
                        <label for="comments">Comments</label> <br />
                        <textarea style={bold} id="comments" name="comments" rows="5" cols="50" value={comments} readOnly></textarea>
                        <ValidationError prefix="Comments" field="comments" errors={submission.errors} />
                        <p />
                        <button onClick={handleCancel}>Go back</button>
                        <button type="submit" disabled={submission.submitting}>Confirm</button>
                    </form>
                </div>
            </div>
        )
    }

    // If the form has not been submitted for the first time, or the user needs to go back to edit.
    else {
        return (
            <div className="container">
                <h2 className="contact-heading">Please enter details below to contact us.</h2>
                <div className="form-container">
                    <form className="container-fluid" onSubmit={handleSubmit}>
                        <label for="firstName">First Name</label> <br />
                        <input id="firstName" type="text" name="firstName" value={firstName} onChange={updateFirstName} required/>
                        <p />
                        <label for="lastName">Last Name</label> <br />
                        <input id="lastName" type="text" name="lastName" value={lastName} onChange={updateLastName} required/>
                        <p />
                        <label for="email">E-Mail Address</label> <br />
                        <input id="email" type="email" name="email" value={email} onChange={updateEmail} required/>
                        <p />
                        <label for="comments">Comments</label> <br />
                        <textarea id="comments" name="comments" rows="5" cols="50" value={comments} onChange={updateComments}></textarea>
                        <p />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export { ContactContent }
