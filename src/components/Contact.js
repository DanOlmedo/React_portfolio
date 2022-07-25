import React from'react';

function Contact () {

    return (
        <>
        <div id="contactForm">
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
            <h3>
                Message
            </h3>
            <textarea id="textInput" name="textInput">

            </textarea>
        </div>
        </>
    )
};

export default Contact;
