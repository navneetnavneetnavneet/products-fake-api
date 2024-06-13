import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import NotFound from "./components/NotFound";

const App = () => {
  const { pathname, search } = useLocation();

  return (
    <div className="w-full h-screen flex">
      {(pathname != "/" || search.length > 0) && (
        <Link to="/" className="text-red-300 absolute left-[20%] top-[3%]">
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
