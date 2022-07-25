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
    <a className="nav-btn" href="#" onClick={()=> props.setPage("Projects")}>Projects</a>
  </li>
  <li>
    <a className="nav-btn" href="#">Contact</a>
  </li>
  <li>
    <a className="nav-btn" href=".#contact">Social</a>
  </li>
</ul>
    </>
  )
};

export default Header;