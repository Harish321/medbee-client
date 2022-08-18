import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    surgicalFormIncidentCount: 0
}

const surgicalFormSlice = createSlice({
    name: 'surgicalForm',
    initialState: initialState,
    reducers: {
        setSurgicalFormIncidentCount: (state, action) => {
            state.surgicalFormIncidentCount = action.payload
        }
    }
})

export const surgicalFormActions = surgicalFormSlice.actions

export default surgicalFormSlice