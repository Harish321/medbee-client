import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    medicationSafetyIncidentCount: 0
}

const medicationSafetySlice = createSlice({
    name: 'medicationSafety',
    initialState: initialState,
    reducers: {
        setMedicationSafetyIncidentCount: (state, action) => {
            state.medicationSafetyIncidentCount = action.payload
        }
    }
})

export const medicationSafetyActions = medicationSafetySlice.actions

export default medicationSafetySlice