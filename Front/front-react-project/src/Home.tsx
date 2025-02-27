import { Link } from "react-router-dom";
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Component</h1>
     

      <nav>
        <ul>
          <li>
            <Link to="/photo-list">Go to Photo List</Link>
          </li>
          <li>
            <Link to="/input">Go to Input Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
