import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 ">
      <Button component={Link} to="/rating" variant="contained" color="primary" className="btn">
        Rating
      </Button>
      <Button component={Link} to="/rating/spanish" variant="contained" color="primary" className="btn">
        Rating (Spanish)
      </Button>
      <Button component={Link} to="/youth" variant="contained" color="primary" className="btn">
        Youth
      </Button>
      <Button component={Link} to="/youth/spanish" variant="contained" color="primary" className="btn">
        Youth (Spanish)
      </Button>
      <Button component={Link} to="/couples" variant="contained" color="primary" className="btn">
        Couples
      </Button>
      <Button component={Link} to="/couples/spanish" variant="contained" color="primary" className="btn">
        Couples (Spanish)
      </Button>
    </div>
  );
};

export default Home;
 