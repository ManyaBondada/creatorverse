import React from 'react';
import './App.css';
import ShowCreators from './pages/ShowCreators';
import AddCreator from './pages/AddCreator';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';



function App() {

  

  return (
    <Router>
      <div>
        <div className='Header'>
          <h1 id='Title'>CREATORVERSE</h1>
          <div className='NavBar'>
            <Link to="/"><button className='NavBtn'>Homepage</button></Link>
            <Link to="/new"><button className='NavBtn'>Add Creator</button></Link>
          </div>
        </div>

        <div>
          <Routes>
            <Route exact path="/" element={<ShowCreators/>}/>
            <Route exact path="/new" element={<AddCreator/>}/>
            <Route exact path ="/detail/:id" element={<ViewCreator/>}/>
            <Route exact path="/detail/:id/edit/:id" element={<EditCreator/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
