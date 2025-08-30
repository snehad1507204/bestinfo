import React from 'react';
import { BrowserRouter as Router,} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/About" element={<About />} />
        <Route path="/GreenWasty" element={<GreenWasty />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes> */}
    </Router>
  );
}

export default App;
