import Search from './components/search';
import Navbar from './components/navbar';
import './App.css';
function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar/>
        <Search />
      </header>
    </div>
  )
}

export default App
