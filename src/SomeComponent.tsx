import React, { useEffect } from 'react';
import './App.css';

function SomeComponent() {

  useEffect(() => {
    console.log("render SomeComponent")
  })

  return (
    <div style={{height: 100}}>
      Color
    </div>
  );
}

export default SomeComponent;
