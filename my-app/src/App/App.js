import './App.css';
import Greeting from '../greeting/greeting';
import Header from '../Header/header';
import Choose from '../choose/choose';

const App = () => (
    <div className="App">
        <Header />
        <Greeting />
        <Choose />
    </div>
)

export default App;
