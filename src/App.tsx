import { RouterProvider } from 'react-router-dom';
import RouterNav from './Route/RouterNav';

function App() {
  return (
    <div className="App">
      <RouterProvider router={RouterNav} />
    </div>
  );
}

export default App;
