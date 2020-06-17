import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PrimaryLayout } from "layouts/Primary";
import { Urls } from "routes/Urls";
import { Stats } from "routes/Stats";
import { Auth } from "routes/Auth";
import { Register } from "routes/Register";

/**
 * App
 */
const App: React.FC<any> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<PrimaryLayout />}>
          <Route path="urls" element={<Urls />} />
          <Route path="stats" element={<Stats />} />
          <Route path="auth" element={<Auth />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
};

export { App };
