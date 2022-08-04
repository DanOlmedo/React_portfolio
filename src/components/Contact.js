import React from'react';

function Contact () {

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

function blurEmail(e){

    console.log(e.target.name)
    console.log(e.target.value)

        if(e.target.name === 'emailInput'){
            if (!isValidEmail(e.target.value)) {
                console.log('Email is invalid');
                return
              }   
        }
}

function blurName(e){
    console.log(e.target.name)
    console.log(e.target.value)

    if(e.target.name === 'nameInput'){
        if (e.target.value === ''){
            console.log('Name field can not be empty')
         return
    }}

}

function blurText(e){
    console.log(e.target.name)
    console.log(e.target.value)

    if(e.target.name === 'textInput'){
        if (e.target.value === ''){
            console.log('Message can not be empty')
            return
        }
    }
}

    return (
        
        <>
        <div className="contactForm">
            <h2 id="formTopText">
                Want to get in touch? Fill out the form
            </h2>
            <h2>
                Name
                </h2>
            <input id="nameInput" name="nameInput" onBlur = { blurName }>

            </input>
            <h2>
                Email
            </h2>
            <input id="emailInput" name="emailInput" onBlur = { blurEmail }>

            </input>
            <h2>
                Message
            </h2>
            <textarea id="textInput" name="textInput" onBlur = { blurText }>

            </textarea>
            <button id="submitBtn">Submit</button>
        </div>
        </>
    )
};

export default Contact;
