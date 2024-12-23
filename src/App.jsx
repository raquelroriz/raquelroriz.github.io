import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Portfolio from './pages/Portfolio';

function App() {

  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App