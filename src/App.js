import { fetchGames } from "./store/features/gamesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import GlobalStyles from "./components/GlobalStyles";
import { fadeIn } from "./animation";
import Navbar from "./components/Navbar";
import ErrorElement from "./components/ErrorElement";

import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./components/Detail";
import Search from "./pages/Search";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);
  return (
    <div className="App">
      <GlobalStyles />
      <RouterProvider router={router()}></RouterProvider>
    </div>
  );
}

const Root = () => {
  return (
    <>
      <Navbar variants={fadeIn} initial="hidden" animate="show" />
      <Outlet />
    </>
  );
};

const router = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="game/:id" element={<Detail />} errorElement={<ErrorElement />} />
        <Route path="search" element={<Search />} errorElement={<ErrorElement />}>
          <Route path=":id" element={<Detail />} errorElement={<ErrorElement />} />
        </Route>
      </Route>
    ),
    { basename: "/nivrutti499/Game-Show" }
  );
};