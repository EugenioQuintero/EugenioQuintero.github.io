import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Rating, RatingSpanish, Youth, YouthSpanish, Home, Couples, CouplesSpanish } from './components';


const App = () => {
  return (
<BrowserRouter>
      <main>
        <Routes>
          {/* Home component */}
          <Route path="/" element={<Home />} />

          {/* Rating component */}
          <Route path="/rating" element={<Rating />} />
          <Route path="/rating/spanish" element={<RatingSpanish />} />

          {/* Youth component */}
          <Route path="/youth" element={<Youth />} />
          <Route path="/youth/spanish" element={<YouthSpanish />} />

          {/* Couples component */}
          <Route path="/couples" element={<Couples />} />
          <Route path="/couples/spanish" element={<CouplesSpanish />} />
        </Routes>
      </main>      
    </BrowserRouter>
  )
}

export default App