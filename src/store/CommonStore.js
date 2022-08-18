import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    allIncidentList: [],
    reportAggregateData: [{},{},{},{}]
}

const commonSlice = createSlice({
    name: 'common',
    initialState: initialState,
    reducers: {
        setAllIncidentList: (state, action) => {
            state.allIncidentList = action.payload
        }
    }
})

export const commonActions = commonSlice.actions

export default commonSlice