import { Routes, Route } from 'react-router-dom';
import './App.css';
import TweetsPage from '../page/Tweets/TweetsPage';
import Home from '../page/Home/Home';
import Layout from './Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<TweetsPage />} />
        <Route path="*" element={<div>NotFound</div>} />
      </Route>
    </Routes>
  );
}

export default App;
