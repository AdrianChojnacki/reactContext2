import React, { PureComponent } from 'react';

import UserInfo from './UserInfo';
import Button from './Button';

import { AppContext, defaultObject } from './AppContent';

import './App.css';

class App extends PureComponent {
  state = {
    isUserLogged: defaultObject.isUserLogged,
  }

  handleToggleStateIsLogged = () => this.setState(prevState => ({
    isUserLogged: !prevState.isUserLogged
  }));

  render() {
    return (
      <div>
        <AppContext.Provider value={{
          isUserLogged: this.state.isUserLogged,
          toggleLoggedState: this.handleToggleStateIsLogged
        }}>
          <UserInfo />
          <Button />
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;
