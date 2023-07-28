import React from 'react';

export default function MenuItems(props) {
    return (
      <div style={{ padding: 5 }}>
        <li>
          <a href={props.name}>{props.children}</a>
        </li>
      </div>
    );
  }