import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { RootAppWithRoute } from './routes/routeWrapper';

function App() {
  return (
    <div className="App">
      <RootAppWithRoute></RootAppWithRoute>
    </div>
  );
}

export default App;
