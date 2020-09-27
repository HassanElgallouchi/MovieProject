import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {

  render () {
    return (
      <nav>
          <Link to='/'>Accueil</Link> |
          <Link to='/movies'>Films</Link> |
          <Link to='/series'>Séries</Link> |
          <Link to='/login'>LogIn</Link> |
          <Link to='/signin'>SignIn</Link>
        </nav>
    );
  }
}
export default Navigation;