import logo from './logo.svg';
import './App.css';
import ReactHelmet from 'react-helmet';
import { Route , Router, Routes} from 'react-router-dom';
import Home from './Component/Home';
import VSplayer from './Component/VSplayer';
import VScomputer from './Component/VScomputer';

function App() {
  return (
    <>
    <ReactHelmet>
      <title >Tic-Tac-Toe</title>
    </ReactHelmet>
   <div className="title">
    Tic Tac Toe 
   </div>
   <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/vscomputer' exact element={<VScomputer/>}/>
    <Route path='/vsplayer' exact element={<VSplayer/>}/>
   </Routes>
    </>
  );
}

export default App;
