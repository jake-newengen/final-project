import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PrimaryLayout } from "layouts/Primary";
import { Urls } from "routes/Urls";
import { Login } from "routes/Login";
import { Register } from "routes/Register";
import { Logout } from "routes/Logout";
import { AuthLayout } from "layouts/Auth";

/**
 * App
 */
const App: React.FC<any> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth/*" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/*" element={<PrimaryLayout />}>
          <Route path="/" element={<Urls />} />
          <Route path="urls" element={<Urls />} />
        </Route>
      </Routes>
    </Router>
  );
};

export { App };
