import './App.css';
import { UserProvider } from './UserContext';
import ThemeToggle from './ThemeToggle';
import ThemedComponent from './ThemedComponent';
import UserProfile from './UserProfile';
import { ThemeProvider } from './ThemeContext';


function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div>
          <h1>複数Context デモ</h1>
          <ThemeToggle />
          <UserProfile />
          <ThemedComponent />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
