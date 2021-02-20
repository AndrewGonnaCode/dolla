
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
    <BrowserRouter>
        <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/signin" component={SigninPage}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
