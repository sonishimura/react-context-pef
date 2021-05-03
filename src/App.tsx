import SomeComponent from "./SomeComponent"
import Color from "./Color"
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log("App")
  })

  return (
    <div className="App">
      <Color />
      <SomeComponent />
    </div>
  );
}

export default App;
