import React,{ useContext, useState} from "react"

export type Theme = "light" | "dark"

export type ThemeValue = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = React.createContext<ThemeValue>({
  theme: "light",
  setTheme: () => {}
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light")
  const themeValue = React.useMemo(() => ({ theme, setTheme}), [theme])

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)