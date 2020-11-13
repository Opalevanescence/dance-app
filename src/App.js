import './App.css';

const greet = {
  greeting: "Welcome",
  title: 'Dancers'
}

function App() {
  return (
    <div className="App">
      <h1>{greet.greeting} {greet.title}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
