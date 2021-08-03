import logo from './logo.svg';
import './App.css';
// import './top-bar.scss'
import Main from './components.js/Main';
import { BrowserRouter } from 'react-router-dom';


function App() {
    return (
        <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Main/>
        </BrowserRouter>
        </>
    );
}

export default App;
