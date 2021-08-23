import Child from './components/Child'
import './App.css'
import './Child.css'
import ClassComponent from './components/ClassComponent'

// this is a functional component
const App = () => (
  // this is called JSX
  <div className="App">
    <header className="App-header">
      <ClassComponent name="Stefano" />
      <ClassComponent name="Stefano" />

      <Child title="First child component" titleClass="text-bold" counter={100} />
      <Child title="Second child component" titleClass="text-italic" counter={0} />
    </header>
  </div>
)

export default App

// PROPS
// props are dynamic values you can pass to your component invocations in order to customize them

// STATE
// the state is an object. it's useful for remembering values over time and keep track of them
// for the entire life of a component
// the state object can be declared and used just on CLASS COMPONENTS
