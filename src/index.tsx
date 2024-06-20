import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import './index.css'; 
import HOME from './pages/home';
import ABOUT from './pages/about';
import MAP from './pages/map';
import PROJECTS from './pages/projects';

const App = () => (
  <div>
    {Navbar()}
    <div className="text-xl font-medium text-black">
      <header className="App-header">
        <p>
          {/* Your content here */}
        </p>
      </header>
    </div>
  </div>
);

function router (){
return (
  <Router>
    <Navbar />
</Router>
)
  }
 

ReactDOM.render(
  <React.StrictMode>
    {router()}
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
