import { handleUpdateRiskCount } from "../pages/Risk/RiskActions";

export const actionMapper = {
    handleUpdateRiskCount: (props, isStoreUpdated) => handleUpdateRiskCount(props, isStoreUpdated)
}