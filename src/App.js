import logo from './logo.svg';
import './App.css';
import AgeChecker from './AgeChecker';
import Counter from './Counter';
import Card from './Card';

function App() {
  return (
    <div>
      <Card>
        <p>hello</p>
      </Card>

      <Card>
        <AgeChecker />
      </Card>

      <Card>
        <Counter />
      </Card>
    </div>
  );
}

export default App;
