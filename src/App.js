import './App.css';
import Header from './component/Header';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Post from './pages/Post';

function App() {
  return (
    <BrowserRouter basename='/tutorial'>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/post/:id" component={Post} />
        <Route component={NotFound}/>
        <Route path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
