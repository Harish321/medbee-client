import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    varianceSafetyIncidentCount: 0
}

const varianceSlice = createSlice({
    name: 'varianceSafety',
    initialState: initialState,
    reducers: {
        setVarianceSafetyIncidentCount: (state, action) => {
            state.varianceSafetyIncidentCount = action.payload
        }
    }
})

export const varianceSafetyActions = varianceSlice.actions

export default varianceSlice