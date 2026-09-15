import './App.css'
import Header from './components/header';
import Menu from './containers/menu/index';
import About from './containers/about-us/index'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <div className='line'></div>
      <Routes>
        <Route path='/' element={Menu}></Route>
        <Route path='/about' element={About}></Route>
      </Routes>
    </div>
  )
}

export default App
