import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";


export default function Navigation() {

  return (
    <>
    
      <nav className="nav" >
        <Link to="/" id="title">BOOKS R US</Link>
        <ul>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/library">Library</CustomLink>
          <CustomLink to="/reviews">Reviews</CustomLink>
        </ul>
 
      </nav>
      
     
    </>
    
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )

}


