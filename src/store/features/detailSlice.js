import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getGameDetails, getGameScreenshots } from "../api";

const initialState = {
	details: {},
	screens: [],
	isDetailsLoading: false
};

export const fetchDetails = createAsyncThunk(
	"details/fetchGameDetails",
	async (userId) => {
		const gameDetails = await axios.get(getGameDetails(userId));
		const gameScreenshots = await axios.get(getGameScreenshots(userId));

		return {
			game: userId,
			details: gameDetails.data,
			screenshots: gameScreenshots.data.results
		};
	}
);
const detailSlice = createSlice({
	name: "details",
	initialState,
	reducers: {
		removeDetails(state) {
			state.details = {};
			state.screens = [];
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchDetails.fulfilled, (state, action) => {
			state.details = action.payload.details;
			state.screens = action.payload.screenshots;
			state.isDetailsLoading = false;
		});
		builder.addCase(fetchDetails.pending, (state, action) => {
			state.isDetailsLoading = true;
		});
	}
});

export default detailSlice.reducer;

export const { removeDetails } = detailSlice.actions;
