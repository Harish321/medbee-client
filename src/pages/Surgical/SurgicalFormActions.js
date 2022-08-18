import store from '../../store'
import { surgicalFormActions } from '../../store/SurgicalFormStore'

const dispatch = store.dispatch

let surgicalFormStore = store.getState().surgicalFormStore
store.subscribe(() => {
    surgicalFormStore = store.getState().surgicalFormStore
})


export const handleUpdateSurgicalFormIncidentCount = (props, isStoreUpdated) => {
    //update this based on List from API
    dispatch(surgicalFormActions.setSurgicalFormIncidentCount(10))
}