import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import NoMatch from "./NoMatch";
import Navigation from "../layout/navigation";

const Routeur = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
};

export default Routeur;
