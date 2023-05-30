import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../ui/layouts/MainLayout";
import Loader from "../ui/components/Loader";

import {
  URL_HOME,
  URL_COURSES,
  URL_LIBRARIES,
  URL_STATISTICS,
  URL_USER_GUIDELINE,
} from "./URLs";

const HomePage = lazy(() => import("../ui/pages/HomePage"));
const InDevelopmentPage = lazy(() => import("../ui/pages/InDevelopmentPage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          <Route index element={<Navigate to={URL_HOME} />} />
          <Route path={URL_HOME} element={<HomePage />} />
          <Route
            path={URL_COURSES}
            element={<InDevelopmentPage page={"courses"} />}
          />
          <Route
            path={URL_LIBRARIES}
            element={<InDevelopmentPage page={"libraries"} />}
          />
          <Route
            path={URL_STATISTICS}
            element={<InDevelopmentPage page={"statistics"} />}
          />
          <Route
            path={URL_USER_GUIDELINE}
            element={<InDevelopmentPage page={"user guideline"} />}
          />
          <Route
            path="*"
            element={<div>Page not found, try something else</div>}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
