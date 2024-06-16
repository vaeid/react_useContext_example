import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

export default function MyApp() {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <Form theme={theme} />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        Use dark mode
      </label>
    </div>
  );
}
