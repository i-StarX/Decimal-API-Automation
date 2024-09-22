import { test, expect, } from '@playwright/test';

test('createFunctionRole', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "org-function-role",
module_2: "create"
},
        data: {
    "createdBy": "",
    "createdTimestamp": "2024-03-05T06:34:04.000Z",
    "modifiedBy": "",
    "modifiedTimestamp": "",
    "approvalBy": "",
    "approvalRemarks": "",
    "approvalStatus": "",
    "approvalTimestamp": "",
    "effectiveDate": "2024-09-14",
    "ineffectiveDate": "2026-03-05",
    "recordId": "",
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
    "udfVal10": "",
    "code": "HIRASH",
    "name": "Hi Rashmi",
    "status": true,
    "description": "Testing Rashmi",
    "functionCode": "ELECTRICAL",
    "parentRoleCode": "",
    "defaultSystemRoleCode": "",
    "sortSequence": "",
    "attributes": "[{\"key\":\"lest test\",\"value\":\"\"}]",
    "effectiveDateSaved": "2024-09-14"
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