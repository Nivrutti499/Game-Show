import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
	Outlet
} from "react-router-dom";
import { loadGameDetailHandler } from "./components/GameCard";
import Home from "./pages/Home";
import Detail from "./components/Detail";
const Root = () => {
	return (
		<div>
			<h2>Navigation</h2>
			<Outlet />
		</div>
	);
};

export const router = (dispatch) => {
	return createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />}>
				<Route index element={<Home />} />
				<Route
					path={"/game/:id"}
					loader={({ params }) => loadGameDetailHandler(dispatch, params.id)}
					element={<Detail />}
				/>
			</Route>
		)
	);
};
