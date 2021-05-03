import { useEffect } from "react";
import { useTheme } from './ThemeProvider';

function Color() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    console.log("render Color")
  })

  return (
    <div className="App">
      <button onClick={() => setTheme(theme => theme === "light" ? "dark" : "light")}>SetColor</button>
      <div style={{ height: 300, width: 300, background: theme === "light" ? "white" : "black" }} />
    </div>
  );
}

export default Color;
