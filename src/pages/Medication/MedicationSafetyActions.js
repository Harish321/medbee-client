import store from '../../store'
import { medicationSafetyActions } from '../../store/MedicationSafetyStore'

const dispatch = store.dispatch

let medicationSafetyStore = store.getState().medicationSafetyStore
store.subscribe(() => {
    medicationSafetyStore = store.getState().medicationSafetyStore
})


export const handleUpdateMedicationSafetyIncidentCount = (props, isStoreUpdated) => {
    //update this based on List from API
    dispatch(medicationSafetyActions.setMedicationSafetyIncidentCount(10))
}