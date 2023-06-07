// React
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Error from "./pages/Error";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;