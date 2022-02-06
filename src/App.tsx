import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Auth } from './ui/Auth';
import { User } from './ui/User';
import { Front } from './ui/Front';

import { Header } from './ui/Header';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Route path='/auth' element={Auth} />
        <Route path='/user' element={User} />
        <Route path='/' element={Front} />
      </div>
    </Router>
  );
}

export default App;