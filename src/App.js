import Child from './components/Child'
import './App.css'
import './Child.css'

// this is a functional component
const App = () => (
  // this is called JSX
  <div className="App">
    <header className="App-header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <Child />
    </header>
  </div>
)

export default App
