import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
}

export const loading = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		setIsLoadingState(state, action) {
			const { isLoading } = action.payload
			state.isLoading = isLoading
		},
	},
})

export const { setIsLoadingState } = loading.actions
export const isLoadingState = (state) => state.isLoading
export default loading.reducer
