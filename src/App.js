import './App.scss';
import { Route, Routes } from 'react-router';
import HomePage from './components/HomePage/HomePage';
import MyAccount from './components/HomePage/MyAccount/MyAccount';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/my-account' element={<MyAccount/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
