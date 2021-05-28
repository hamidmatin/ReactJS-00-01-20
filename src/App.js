import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Students from './components/student/Students';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound_404 from './components/404/NotFound_404';
import ClassComponentLifeCycle from './components/classComponentLifeCycle/ClassComponentLifeCycle';
import { Users } from './components/users/Users';
import { NewUser } from './components/users/NewUser';
import { EditUser } from './components/users/EditUser';
import Posts from './components/posts/Posts';
import ReduxCC from './components/redux/ReduxCC';


const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/students' component={Students} />
            <Route path='/render' render={()=><h3>Created by Render </h3>} />
            <Route path='/classcomponentlifecycle' component={ClassComponentLifeCycle} />
            <Route path='/reduxcc' component={ReduxCC} />
            
            <Route path='/users' component={Users} exact/>
            <Route path='/users/new' component={NewUser}/>
            <Route path='/users/edit/:id' component={EditUser} />
            
            <Route path='/posts' component={Posts} exact/>

            <Route path='*' component={NotFound_404}/>
          </Switch>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
