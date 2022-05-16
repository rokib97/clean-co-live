import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./authentication/PrivateRoute";
import Navbar from "./components/Navbar";
import { privateRoutes } from "./routes/privateRoutes";
import { publicRoute } from "./routes/publicRoute";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Navbar>
      <Routes>
        {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route element={<PrivateRoute />}>
          {privateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </Navbar>
  );
}

export default App;
