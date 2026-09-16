import './App.css'
import Header from './components/header';
import Menu from './containers/menu/index';
import About from './containers/about-us/index'
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer'

function App() {
  return (
    <div className='main-div'>
      <div>
        <Header/>
        <div className='line'></div>
      </div>
      <Routes>
        <Route path='/' element={<Menu/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
