import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DetailCard from "./DetailCard";
import Loading from "./Loading";
import { removeDetails } from "../store/features/detailSlice";
const Detail = ({ pathId }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		return () => dispatch(removeDetails());
	}, []);
	const { details, screens } = useSelector((state) => state.detail);
	const isDetailsLoading = useSelector(
		(state) => state.detail.isDetailsLoading
	);
	return (
		<div>
			{!isDetailsLoading ? (
				<DetailCard pathId={pathId} screens={screens} details={details} />
			) : (
				<Loading />
			)}
		</div>
	);
};

export default Detail;
