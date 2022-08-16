export default {
  schema: {
    title: "Medication Saftey",
    type: "object",
    required: [
      "facility",
      "eventNo",
      "eventDate",
      "eventType",
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
        "title": "Event Date"
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
        type: 'string', title: 'processes', enum: [
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
        type: 'string', title: 'saftey Processes', enum: [
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
      signigicance: { type: 'string', title: 'signigicance' },

      "physNotified": {
        "type": "string",
        "title": "Physician Notified"
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
    actionTaken: { "ui:widget": "textarea" },
    comments: { "ui:widget": "textarea" }
    // languages: {
    //   "ui:widget": "select",
    // },
    // firstName: {
    //   "ui:autofocus": true,
    //   "ui:emptyValue": "",
    // },
    // age: {
    //   "ui:widget": "updown",
    //   "ui:title": "Age of person",
    //   "ui:description": "(earthian year)",
    // },
    // bio: {
    //   "ui:widget": "textarea",
    // },
    // password: {
    //   "ui:widget": "password",
    //   "ui:help": "Hint: Make it strong!",
    // },
    // date: {
    //   "ui:widget": "alt-datetime",
    // },
    // telephone: {
    //   "ui:options": {
    //     inputType: "tel",
    //   },
    // },
  },
  formData: {
    formType:"medication"
  },
};
