export default {
    schema: {
        title: "Variance Saftey",
        type: "object",
        required: [
            "facility",
            "eventNo",
            "eventDate",
            "eventType",
            "locationOfEvent"
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
            "departmentReportingVariance": {
                "type": "string",
                "title": "Department Reporting Variance"
            },
            "departmentsInvolved": {
                "type": "string",
                "title": "Departments Involved Variance"
            },
            "eventNo": {
                "type": "string",
                "title": "Event No"
            },
            "eventDate": {
                "type": "string",
                "title": "Event Date",
                format: 'date'
            },
            "locationOfEvent": {
                "type": "string",
                "title": "Location Of Event"
            },
            "room": {
                "type": "string",
                "title": "Room"
            },
            "time": {
                "type": "string",
                "title": "Time"
            },
            "shift": {
                "type": "string",
                "title": "Shift"
            },
            eventType: {
                type: 'string', title: 'Event Type', enum: [
                    "Bed Flow Tracking",
                    "Laboratory",
                    "Physician",
                    "Patient Care",
                    "Safety",
                    "Radiology",
                    "Orders",
                    "Security"
                ]
            },
            eventParameters: {
                type: 'string', title: 'Event Parameters', enum: [
                    "Bed Flow Tracking Delay 2 Hr For Bed Assignment",
                    "Bed Flow Tracking Inappropriate Unit Placement",
                    "Bed Flow Tracking Inpatient/Observation Error",
                    "Laboratory Collection Error",
                    "Laboratory Delay In Collection",
                    "Laboratory Report Result In Error",
                    "Laboratory Specimen Mislabled",
                    "Laboratory Specimen Rejection",
                    "Laboratory Specimen Unlabeled",
                    "Order Not Entered",
                    "Order Not Initiated",
                    "Patient Care Ama",
                    "Patient Care Delay Impacting Care",
                    "Patient Care Error Omission With Increased Los",
                    "Patient Care Extended Delay In Procedure",
                    "Patient Care Nosocomial Pressure Ulcer",
                    "Patient Care Nosocomial Upper Gi Bleed",
                    "Patient Care Registration Delay",
                    "Patient Care Transfer To Facility Of Higher Acuity",
                    "Patient Care Transfer To Unit Of Higher Acuity",
                    "Patient Care Unexpected Return To Ed",
                    "Patient Care Unexpected Return To Or",
                    "Patient Care Unstable Pacu Transfer",
                    "Physician Delay In Response",
                    "Physician Legibility",
                    "Physician Patient Family Issue",
                    "Radiology Delay In Procedure",
                    "Radiology Pacs Malfunction",
                    "Safety Armband Error",
                    "Safety Environment Safety Hazards",
                    "Safety Hand Off Communication",
                    "Safety Inappropriate Communication",
                    "Safety Incorrect Consent",
                    "Safety Medication Not Reconciled",
                    "Safety Patient Injury R T Treament",
                    "Safety Patient With No Armband",
                    "Safety Visitor Disturbance",
                    "Safety Visitor Injury",
                    "Security Breach",
                    "Security Loss Of Property",
                    "Security Visitor Disturbance"
                ]
            },
            "physNotified": {
                "type": "string",
                "title": "Physician Notified",
                "enum": [
                    "Yes",
                    "No"
                ]
            },
            "actionTaken": {
                "type": "string",
                "title": "Variance Immediate Action Taken",
                enum: [
                    "Armband Applied",
                    "Family Significant Other Notified",
                    "Investigation Initiated",
                    "Nurse Assessment Of Pt Completed",
                    "Physician Notified New Order Received",
                    "Physician Notified No New Order Received"
                ]
            },
            "notifiedPerson": {
                "type": "string",
                "title": "Please provide name/relationship of person who was notified"
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
                "title": "Abstract (Comments)"
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
          "departmentReportingVariance": {
            "ui:placeholder": "Departments reporting variane"
        },
          "eventNo": {
            "ui:placeholder": "Event number"
          },
          "eventType": {
            "ui:placeholder": "Choose an option"
          },
          "eventParameters": {
            "ui:placeholder": "Choose an option"
          },
          "eventDate": {
          },
          "locationReportingMedError": {
            "ui:placeholder": "Location reporting error"
          },
          locationOfEvent:{
            "ui:placeholder": "Location"
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
          "notifiedPerson": {
          "ui:placeholder":"Relationship with patient"
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
        formType:"Variance"
    },
};
