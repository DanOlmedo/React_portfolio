import React from 'react';

function Header(props) {

  console.log(props)
  return (
    <>
    <ul className="nav">
  <li>
    <a className="nav-btn" href="#" onClick={()=> props.setPage("About")}>About me</a>
  </li>
  <li>
    <a className="nav-btn" href="#" onClick={()=> props.setPage("Projects")}>Portfolio</a>
  </li>
  <li>
    <a className="nav-btn" href="#" onClick={()=> props.setPage("Contact")}>Contact</a>
  </li>
  <li>
    <a className="nav-btn" href="#" onClick={()=> props.setPage("Resume")}>Resume</a>
  </li>
  <li>
    <a className="nav-btn" href="#" onClick={()=> props.setPage("Full")}>Full page</a>
  </li>
</ul>
    </>
  )
};

export default Header;