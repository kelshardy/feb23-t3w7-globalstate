import './App.css';
import ApiTester from './ApiTester';
import ConnectionContext, { defaultConnectionData } from './context/ConnectionContext';
import UserGlobalData from './context/UserContext';
import UserDisplay from './UserDisplay';
import ConnectionProvider from './context/ConnectionContext';

function App() {



  return (
    <div className="App">

      <UserGlobalData>
        <ConnectionProvider>
          <ApiTester />
          <UserDisplay />
        </ConnectionProvider>
      </UserGlobalData>

    </div>
  );
}

export default App;
