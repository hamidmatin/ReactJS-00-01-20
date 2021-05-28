import React, { useState } from 'react';
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

const App = () => {
  const initialUsers = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
          lat: '-43.9509',
          lng: '-34.4618',
        },
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains',
      },
    },
  ];
  const [users, setUsers] = useState(initialUsers);

  const addNewUser = (user) =>{
    setUsers([...users, user])
  }
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
            {/* <Route path='/users' component={Users} exact/> */}
            <Route path='/users' exact>
              <Users users={users} />
            </Route>
            {/* <Route path='/users/new' component={NewUser}/> */}
            <Route path='/users/new'>
              <NewUser addNewUser={addNewUser}/>
            </Route>
            
            <Route path='*' component={NotFound_404}/>
          </Switch>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
