import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Students from './components/student/Students';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound_404 from './components/404/NotFound_404';
import ClassComponentLifeCycle from './components/classComponentLifeCycle/ClassComponentLifeCycle';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Switch>
            {/* <Route path='/' exact>
              <Home att="value"/>
            </Route> */}
            <Route path='/' exact component={Home}/>

            <Route path='/students' component={Students} />
            <Route path='/render' render={()=><h3>Created by Render </h3>} />
            <Route path='/classcomponentlifecycle' component={ClassComponentLifeCycle} />

            <Route path='*' component={NotFound_404}/>
          </Switch>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
