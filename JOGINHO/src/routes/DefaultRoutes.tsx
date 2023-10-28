import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { SalaDeEspera } from "../pages/SalaDeEspera";

export function DefaultRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<SalaDeEspera /> } path="/sala-de-espera/:id"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
