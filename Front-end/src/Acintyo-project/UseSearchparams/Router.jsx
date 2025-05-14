import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyComponent from "./UseSearchparams";

function MyComponentRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyComponentRoute;
