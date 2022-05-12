import PageRoutes from './routes/PageRoutes';
import PageRoutes2 from './routes/PageRoutes2';
import { BrowserRouter } from 'react-router-dom';
import Section from './components/Section/Section';
import CardAnime from './components/Card/CardAnime';

function App() {
  return (<>
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  </>
  );
}

export default App;
