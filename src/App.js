import PageRoutes from './routes/PageRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div style={{ backgroundColor: '#95989c' }}>
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
