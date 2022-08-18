import store from '../../store'
import { riskActions } from '../../store/RiskStore'

const dispatch = store.dispatch

let riskStore = store.getState().riskStore
store.subscribe(() => {
    riskStore = store.getState().riskStore
})


export const handleUpdateRiskCount = (props, isStoreUpdated) => {
    //update this based on List from API
    dispatch(riskActions.setRiskCount(10))
}