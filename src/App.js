import './App.css';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import ThemedComponent from './ThemedComponent';


function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Context API デモ</h1>
        <ThemeToggle />
        <ThemedComponent />
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
