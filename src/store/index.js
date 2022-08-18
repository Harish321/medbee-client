import { configureStore } from "@reduxjs/toolkit";
import medicationSafetySlice from "./MedicationSafetyStore";
import riskSlice from "./RiskStore";
import surgicalFormSlice from "./SurgicalFormStore";
import varianceSlice from "./VarianceSafetyStore";

const store = configureStore({
    reducer: {
        riskStore: riskSlice.reducer,
        medicationSafetyStore: medicationSafetySlice.reducer,
        varianceSafetyStore: varianceSlice.reducer,
        surgicalFormStore: surgicalFormSlice.reducer
    }
})

export default store