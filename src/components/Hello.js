import React from 'react';

// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.
// The `Hello` component is a child of our `App` component and is responsible for rendering the "Hello World" header.
function Hello() {
  const message = 'Check out some projects I have worked on';
  // The return statement contains something called "JSX"
  // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
  // Expressions in JSX should be placed in curly braces {}
  return (
    <>
    <svg class="sqimg" width="500" height="500">
      <polygon id="sq1" points="250,496.78 6.87,253.65 250,253.65"/>
      <polygon id="sq2" points="6.87,253.65 250,10.52 250,253.65"/>
      <polygon id="sq3" points="493.13,253.65 250,496.78 250,253.65"/>
      <polygon id="sq4" points="250,10.52 493.13,253.65 250,253.65"/>
    </svg>
    <div className="container">
      <h2>{message}</h2>
    </div>
    </>    
  );
}

export default Hello;
