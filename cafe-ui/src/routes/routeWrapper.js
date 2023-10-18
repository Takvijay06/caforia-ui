import React from "react";
import { AppWrapper } from "../container/appWrapper";
import { Route, Routes } from "react-router-dom";
import pageRoutes from "./routeConfig";

const MainRouter = () => {
  return (
    <Routes>
      {pageRoutes.map((route) => (
        <Route exact path={route.path} element={route.component}></Route>
      ))}
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export const RootAppWithRoute = () => {
  return (
    <AppWrapper>
      <MainRouter />
    </AppWrapper>
  );
};
