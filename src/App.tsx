import { Authenticated, Refine } from "@refinedev/core";

import routerProvider from "@refinedev/react-router";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router";
import "./App.css";
import { authProvider } from "./providers/auth";
import { JSX } from "react";
import { RESOURCE } from "./constants";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Refine
        dataProvider={{}}
        resources={RESOURCE}
        routerProvider={routerProvider}
        authProvider={authProvider}
      >
        {/* Protected Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <Authenticated key="protected" redirectOnFail="/login">
                {/* Layout */}
              </Authenticated>
            }
          >
            {/* Pages */}
          </Route>

          <Route
            element={
              <Authenticated key="auth-pages" fallback={<Outlet />}>
                <Navigate to="/" />
              </Authenticated>
            }
          >
            {/* Login Page */}
          </Route>
        </Routes>
      </Refine>
    </BrowserRouter>
  );
}
