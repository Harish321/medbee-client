import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    riskCount: 0
}

const riskSlice = createSlice({
    name: 'risk',
    initialState: initialState,
    reducers: {
        setRiskCount: (state, action) => {
            state.riskCount = action.payload
        }
    }
})

export const riskActions = riskSlice.actions

export default riskSlice