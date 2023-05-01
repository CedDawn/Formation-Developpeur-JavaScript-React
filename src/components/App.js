import NavBarX from './NavBarX.js';
import NavBarY from './NavBarY.js';
import { Routes, Route } from "react-router-dom";
import { Home } from '../pages/home.js';
import { Id } from '../pages/id.js';

/**
 * The mainstay of the site with routes system
 */
function App() {
  return (
    <>
      <NavBarX />
      <NavBarY />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Id />} />
      </Routes>
    </>
  );
}

export default App;
