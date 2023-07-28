import React from 'react';

export default function NavBar(props) {
    return (
      <div style={{ padding: 5 }}>
        <ul>
          {props.children}
        </ul>
      </div>
  
    );
  }