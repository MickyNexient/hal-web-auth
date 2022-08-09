import { useEffect, useState } from 'react';
import './App.css';
import Auth from './Auth/Auth';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // TODO: handle refresh token and auth token
  }, []);

  return (
    <div className="App">
      <Auth />
    </div>
  )
}

export default App
