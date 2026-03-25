import Main from './pages/main';
import Cart from './pages/cart';
import Contact from './pages/contact';
import Layout from './components/layout';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
 

  return (
    <Router>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Main />} />
        <Route path='cart' element={<Cart />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
    </Router>
  )
}

export default App;
