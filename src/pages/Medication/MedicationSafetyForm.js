export default {
  schema: {
    title: "Medication Saftey",
    type: "object",
    required: [
      "facility",
      "eventNo",
      "eventDate",
      "processes"
    ],
    properties: {
      "enteredBy": {
        "type": "string",
        "title": "Entered By"
      },
      "facility": {
        "type": "string",
        "title": "Facility"
      },
      "departmentsInvolved": {
        "type": "string",
        "title": "Departments Involved in Med Error"
      },
      "eventNo": {
        "type": "string",
        "title": "Event No"
      },
      "eventDate": {
        "type": "string",
        "title": "Event Date",
        "format": 'date'
      },
      "locationReportingMedError": {
        "type": "string",
        "title": "Location Reporting Med Error"
      },
      "time": {
        "type": "string",
        "title": "Time"
      },
      "room": {
        "type": "string",
        "title": "Room"
      },
      "shift": {
        "type": "string",
        "title": "Shift"
      },
      processes: {
        type: 'string', title: 'Processes', enum: [
          "Prescribing",
          "Interpretation Transcription",
          "Dispensing",
          "Administration",
          "Controlled Substance",
          "Med Admin Record Mar",
          "Adverse Drug Reaction",
          "Blood Blood Products",
          "Extravesation",
        ]
      },
      safteyProcesses: {
        type: 'string', title: 'Saftey Processes', enum: [
          "2 Identifiers Not Used Failed To Transcribe Med",
          "Allergy Omission Error Incorrect Entry Pharmacy",
          "Armband Error Incorrect Entry Unit",
          "Epidural Pump Failure Missed Medication",
          "Improper Disposal Wastage Delay In Administration",
          "Iv Pump Failure Dose Omitted",
          "Look Alike Sound Alike Wrong Patient",
          "Medication Cart Unlocked Wrong Dose",
          "Medication Left At Bedside Wrong Drug",
          "Medication Room Unlocked Wrong Frequency",
          "Pca Pump Failure Wrong Route",
          "Reconciliation Admission Wrong Time",
          "Reconciliation Discharge Blood Infused Gt 2 Hrs",
          "Reconciliation Transfer Possible Blood Reaction",
          "Unlabeled Wrong Blood Component",
          "Unsecured Mar Entry Not Verified",
          "Controlled Substance Loss Not Scanned To Pharmacy",
          "Count Discrepancy Strike Over On Mar",
          "Pca Pump Programming Error Adverse Drug Reaction",
          "Legibility Incorrectly Labeled",
          "Telephone Verbal Order Incorrectly Prepared",
          "Failed To Dc Med Per Order Incorrectly Prescribed",
          "Blood Transfused Lt 4 Hrs Wrong Documentation",
          "Iv Pump Mode Not Checked Iv Pump Guardrails Not Used",
          "Iv Pump Incorrect Profile Used Iv Pump Programming Error",
          "Delay In Dispensing",
          "Profile Override"
        ]
      },
      signigicance: { type: 'string', title: 'Significance' },

      "physNotified": {
        "type": "string",
        "title": "Physician Notified",
        "enum": [
          "Yes",
          "No"
        ]
      },
      "notifiedPhysician": {
        "type": "string",
        "title": "Notified Physician"
      },
      errorDetectedTime: {
        type: 'string', title: 'When was Error Detected', enum: [
          "Found 24 Hrs",
          "Found During Audit",
          "Found W In 24 Hr Check",
          "Prior To Administration",
          "Same Shift"
        ]
      },
      drugRoute: {
        type: 'string', title: 'Drug Route', enum: [
          "Endotracheal",
          "Intramuscular",
          "Intraosseous",
          "Intravenous",
          "Orally",
          "Subcutaneous",
          "Sublingual",
          "Topical",
          "Transdermal"
        ]
      },
      listOfDrugs: { type: 'string', title: 'Please list name of Drug' },
      actionTaken: {
        type: 'string', title: 'Immediate Action Taken', enum: [
          "No Action Required",
          "Airway Established Pt Ventilated",
          "Antidote Administered",
          "Cpr Administered",
          "Drug Therapy Initiated Changed",
          "Laboratory Tests Performed"
        ]
      },
      "employeeWitnesses": {
        "type": "string",
        "title": "Employee Witnesses"
      },
      "physicianWitnesses": {
        "type": "string",
        "title": "Physician Witnesses"
      },
      "otherWitnesses": {
        "type": "string",
        "title": "Other Witnesses"
      },
      "comments": {
        "type": "string",
        "title": "Comments"
      }
    },
  },
  uiSchema: {
    comments: { 
      "ui:widget": "textarea", 
      "ui:placeholder": "Comments"
    },
    "enteredBy": {
      "ui:placeholder": "Entered by"
    },
    "facility": {
      "ui:placeholder": "Facility"
    },
    "departmentsInvolved": {
      "ui:placeholder": "Departments involved"
    },
    "eventNo": {
      "ui:placeholder": "Event number"
    },
    "eventDate": {
    },
    "locationReportingMedError": {
      "ui:placeholder": "Location reporting error"
    },
    "time": {
      "ui:placeholder": "Time"
    },
    "room": {
      "ui:placeholder": "Room"
    },
    "shift": {
      "ui:placeholder": "Shift"
    },
    processes: {
      "ui:placeholder": "Choose an option"
    },
    safteyProcesses: {
      "ui:placeholder": "Choose an option"
    },
    signigicance: { 
      "ui:placeholder": "Significance"
    },
    "physNotified": {
      "ui:placeholder": "Choose an option"
    },
    "notifiedPhysician": {
      "ui:placeholder": "Physician name"
    },
    errorDetectedTime: {
      "ui:placeholder": "Choose an option"
    },
    drugRoute: {
      "ui:placeholder": "Choose an option"
    },
    listOfDrugs: { 
      "ui:placeholder": "List of drugs"
    },
    actionTaken: {
      "ui:placeholder": "Choose an option"
    },
    "employeeWitnesses": {
      "ui:placeholder": "Employee witness"
    },
    "physicianWitnesses": {
      "ui:placeholder": "Physician witness"
    },
    "otherWitnesses": {
      "ui:placeholder": "Other witness"
    }
  },
  formData: {
    formType: "Medication"
  },
};
