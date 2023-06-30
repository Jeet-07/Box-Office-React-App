import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { QueryClient, QueryClientProvider} from 'react-query'
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import ShowPage from './pages/ShowPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/starred" element={<Starred/>}/>
        </Route>
        <Route path="/show/:showId" element={<ShowPage/>}/>
        <Route path="*" element={<div>Page Not Found</div>}/> 
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
