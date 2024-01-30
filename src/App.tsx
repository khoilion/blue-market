import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePages from "./pages/HomePages.tsx";
import {ConnectWallet} from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePages/>}/>
                <Route path='/connect-wallet' element={<ConnectWallet/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
