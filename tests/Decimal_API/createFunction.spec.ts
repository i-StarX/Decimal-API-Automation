import { test, expect, } from '@playwright/test';

test('createFunction', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "org-function",
module_2: "create"
},
        data: {
    "code": "hey",
    "name": "RTTEST",
    "status": "true",
    "description": "         ",
    "sortSequence": "1",
    "createdBy": "Rashmi",
    "createdTimestamp": " ",
    "modifiedBy": "Rashmi",
    "modifiedTimestamp": " ",
    "approvalBy": " ",
    "approvalRemarks": " ",
    "approvalStatus": " ",
    "effectiveDate": "2024-09-06",
    "ineffectiveDate": "2025-07-24",
    "recordId": " ",
    "typeCode": {
        "code": "",
        "value": "",
        "CODE": "",
        "VALUE": ""
    },
    "headEmpId": "",
    "udfLbl1": "",
    "udfVal1": "",
    "udfLbl2": "",
    "udfVal2": "",
    "udfLbl3": "",
    "udfVal3": "",
    "udfLbl4": "",
    "udfVal4": "",
    "udfLbl5": "",
    "udfVal5": "",
    "udfLbl6": "",
    "udfVal6": "",
    "udfLbl7": "",
    "udfVal7": "",
    "udfLbl8": "",
    "udfVal8": "",
    "udfLbl9": "",
    "udfVal9": "",
    "udfLbl10": "",
    "udfVal10": ""
},
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
        apiResponse.body().then(body => {
            let expected = '{    "ADMIN_PORTAL_API": {        "records": [            {                "primary_key": "",                "data": [                    {                        "status": "success",                        "success": {                            "code": "200",                            "message": "Request Processed Successfully"                        }                    }                ]            }        ],        "responseHandledBy": "MOBILE APP",        "isSuccessRuleValidated": true    }}';
            expect(body.toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });
    });

});