import { useEffect } from "react";
import AllRoutes from "./App.routing";
import { useTheme } from "./contexts/theme";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <>
      <AllRoutes />
    </>
  )
}

export default App
