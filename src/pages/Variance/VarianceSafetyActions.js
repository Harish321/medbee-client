import store from '../../store'
import { varianceSafetyActions } from '../../store/VarianceSafetyStore'

const dispatch = store.dispatch

let varianceSafetyStore = store.getState().varianceSafetyStore
store.subscribe(() => {
    varianceSafetyStore = store.getState().varianceSafetyStore
})


export const handleUpdateRiskCount = (props, isStoreUpdated) => {
    //update this based on List from API
    dispatch(varianceSafetyActions.setVarianceSafetyIncidentCount(10))
}