import { Authenticated, Refine } from "@refinedev/core";

import routerProvider from "@refinedev/react-router";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router";
import "./App.css";
import { authProvider } from "./providers/auth";
import { JSX } from "react";
import { RESOURCE } from "./constants";
import Login from "./pages/_auth/Login";
import DashBoardLayout from "./components/layout/DashBoardLayout";
import Dashboard from "./pages/_dashboard/dashboard/Dashboard";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Refine
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
                <DashBoardLayout />
              </Authenticated>
            }
          >
            <Route index element={<Dashboard />} />
          </Route>

          <Route
            element={
              <Authenticated key="auth-pages" fallback={<Outlet />}>
                <Navigate to="/" />
              </Authenticated>
            }
          >
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Refine>
    </BrowserRouter>
  );
}
