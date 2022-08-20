export default {
    schema: {
        title: "Fall Safety",
        type: "object",
        required: [
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
                    "Yes",
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
                    "Yes",
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
        enteredBy:{
            "ui:field": "autoCompleter2",
            "ui:placeholder": "Entered by"
        },
        comments: {
            "ui:widget": "textarea",
            "ui:placeholder": "Comments"
        },
        postFallActionsTaken: {
            "ui:widget": "textarea",
            "ui:placeholder": "Action taken"
        },
        "facility": {
            "ui:placeholder": "Facility"
        },
        "departmentReportingFall": {
            "ui:placeholder": "Department reporting fall"
        },
        "departmentsInvolved": {
            "ui:placeholder": "Departments involved"
        },
        "eventNo": {
            "ui:placeholder": "Event number"
        },
        "eventDate": {
        },
        "locationOfFall": {
            "ui:placeholder": "Location"
        },
        "room": {
            "ui:placeholder": "Room"
        },
        "time": {
            "ui:placeholder": "Time"
        },
        "shift": {
            "ui:placeholder": "Shift"
        },
        "typeOfFall": {
            "ui:placeholder": "Choose an option"
        },
        "contributingFactors": {
            "ui:placeholder": "Choose an option"
        },
        "typeOfInjury": {
            "ui:placeholder": "Choose an option"
        },
        "significance": {
            "ui:placeholder": "Choose an option"
        },
        "physNotified": {
            "ui:placeholder": "Choose an option"
        },
        "notifiedPhysician": {
            "ui:placeholder": "Physician name"
        },
        "newOrderReceived": {
            "ui:placeholder": "Choose an option"
        },
        "interventionInPlacePriorToFall": {
            "ui:placeholder": "Intervention place"
        },
        "medicationList": {
            "ui:placeholder": "Medication"
        },
        "lastFallAssessment": {
            "ui:placeholder": "Choose an option"
        },
        "notifiedPerson": {
            "ui:placeholder": "Notified to"
        },
        "employeeWitnesses": {
            "ui:placeholder": "Employee witness"
        },
        "physicianWitnesses": {
            "ui:placeholder": "Physician witness"
        },
        "otherWitnesses": {
            "ui:placeholder": "Other witness"
        },
    },
    formData: {
        formType:"Risk"
    },
    readonly:true
};
