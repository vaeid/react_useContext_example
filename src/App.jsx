import './App.css';
import Form from './components/Form';
import { ThemeProvider, useTheme } from './context/ThemeContext';

export default function MyApp() {
  return (
    <ThemeProvider>
      <div>
        <Form />
        <ToggleTheme />
      </div>
    </ThemeProvider>
  );
}
function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  return (
    <label>
      <input
        type='checkbox'
        checked={theme === 'dark'}
        onChange={(e) => {
          setTheme(e.target.checked ? 'dark' : 'light');
        }}
      />
      Use dark mode
    </label>
  );
}
