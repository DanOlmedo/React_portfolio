import React from'react';

function Contact () {

    return (
        <>
        <div className="contactForm">
            <h2>
                Want to get in touch? Fill out the form
            </h2>
            <h2>
                Name
                </h2>
            <input id="nameInput" name="nameInput">

            </input>
            <h2>
                Email
            </h2>
            <input id="emailInput" name="emailInput">

            </input>
            <h2>
                Message
            </h2>
            <textarea id="textInput" name="textInput">

            </textarea>
            <button id="submitBtn">Submit</button>
        </div>
        </>
    )
};

export default Contact;
