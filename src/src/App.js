import './App.css';
import { HashRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import UserContext from './components/UserContext';
import Home from './components/Home';
import Deposit from './components/Deposit';
import AllData from './components/AllData';
import Withdraw from './components/Withdraw';
import Balance from './components/Balance';

function App() {

    return (
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={{users:[{name: '', email: '', password: '', balance: 0}]}}>
                <div className="container" style={{padding: "20px"}}>
                    <Routes>
                        <Route path="/" exact element={<Home/>} />
                        <Route path="/CreateAccount/" element={<CreateAccount/>} />
                        <Route path="/login/" element={<Login/>} />
                        <Route path="/deposit/" element={<Deposit/>} />
                        <Route path="/withdraw/" element={<Withdraw/>} />
                        <Route path="/balance/" element={<Balance/>} />
                        <Route path="/alldata/" element={<AllData/>} />
                    </Routes>
                </div>
            </UserContext.Provider>
        </HashRouter>
    );
}

export default App;