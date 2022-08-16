export default {
    schema: {
        title: "Fall Safety",
        type: "object",
        required: [
            "facility",
            "eventNo",
            "eventDate",
            "locationOfFall",
            "typeOfFall"
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
            "departmentReportingFall": {
                "type": "string",
                "title": "Department Reporting Fall"
            },
            "departmentsInvolved": {
                "type": "string",
                "title": "Departments Involved"
            },
            "eventNo": {
                "type": "string",
                "title": "Event No"
            },
            "eventDate": {
                "type": "string",
                "title": "Event Date",
                "format": "date"
            },
            "locationOfFall": {
                "type": "string",
                "title": "Location Of Fall"
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
            "typeOfFall": {
                "type": "string",
                "title": "Type Of Fall",
                "enum": [
                    "Ambulating",
                    "Eliminating",
                    "Fall During Bath/Shower",
                    "Fall From Lying Position",
                    "Fall From Sitting Position",
                    "Fall On Hospital Grounds",
                    "Fall Reported By Patient Family",
                    "Found On Floor",
                    "Other Fall",
                    "Transferring"
                ]
            },
            "contributingFactors": {
                "type": "string",
                "title": "Contributing Factors",
                "enum": [
                    "2 Bed Rails Up Position",
                    "4 Bed Rails Up Position",
                    "Assisted By Staff",
                    "Assisted By Family",
                    "Assistive Device",
                    "Call Light Out Of Reach",
                    "Changing Position",
                    "Cluttered Area",
                    "Cognitive Impairment",
                    "Dressing Undressing",
                    "Equipment Failure",
                    "Exercise Equipment",
                    "History Of Fall W In 12 Months",
                    "Information Unavailable",
                    "Not On Fall Precautions",
                    "Inclined Surface",
                    "Medication Regimen Sedated",
                    "Observed",
                    "On Fall Precaution",
                    "Poor Lighting",
                    "Reaching For Item",
                    "Restraint",
                    "Sensory Impairment",
                    "Steps",
                    "Unassisted"
                ]
            },
            "typeOfInjury": {
                "type": "string",
                "title": "Type Of Injury",
                "enum": [
                    "Abrasions",
                    "Asphyxia/Strangulation",
                    "Bleeding",
                    "Bruise",
                    "Burn Deep",
                    "Burn Superficial",
                    "Change In Level Of Consciousness",
                    "Consussion",
                    "Contusions",
                    "Dislocation",
                    "Erythema",
                    "Fracture",
                    "Hematoma",
                    "Lacerations Deep",
                    "Lacerations Superficial",
                    "No Injury",
                    "Pain",
                    "Sprain Strain",
                    "Swelling Edema",
                    "Unknown At This Time"
                ]
            },
            "significance": {
                "type": "string",
                "title": "Significance",
                "enum": [
                    "LEVEL 1--NO INJURY or harm to patient",
                    "LEVEL 2--MINOR INJURY requires wound care complaint of minor pain",
                    "LEVEL 3--MODERATE INJURY extended length of stay or transfer to unit of",
                    "higher acuity",
                    "LEVEL 4--MAJOR INJURY fracture, ED evaluation",
                    "LEVEL 5--PERMANENT INJURY fall resulted in permanent injury to patient"
                ]
            },
            "physNotified": {
                "type": "string",
                "title": "Physician Notified",
                "enum": [
                    "yes",
                    "No"
                ]
            },
            "notifiedPhysician": {
                "type": "string",
                "title": "Notified Physician"
            },
            "newOrderReceived": {
                "type": "string",
                "title": "New Order Received",
                "enum": [
                    "yes",
                    "No"
                ]
            },
            "interventionInPlacePriorToFall": {
                "type": "string",
                "title": "Intervention to Fall"
            },
            "medicationList": {
                "type": "string",
                "title": "Medication List"
            },
            "postFallActionsTaken": {
                "type": "string",
                "title": "Post Actions Taken"
            },
            "lastFallAssessment": {
                "type": "string",
                "title": "Last Fall Assessment",
                "enum": [
                    "0-12 HRS",
                    "12-24 HRS",
                    "24-48 HRS",
                    "48-72 HRS",
                    "72 HRS -1 WEEK",
                    "> 1 WEEK"
                ]
            },
            "notifiedPerson": {
                "type": "string",
                "title": "Notified Person"
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
        contributingFactors: {
            "ui:widget": "textarea"
        },
        comments: {
            "ui:widget": "textarea"
        },
        postFallActionsTaken: {
            "ui:widget": "textarea"
        },
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
        formType:"risk"
    },
};
