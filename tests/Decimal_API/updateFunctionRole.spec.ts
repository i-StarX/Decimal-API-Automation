import { test, expect, } from '@playwright/test';

test('updateFunctionRole', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "org-function-role",
module_2: "update"
},
        data: {
    "effectiveDate": "2024-03-06",
    "ineffectiveDate": "2034-03-06",
    "status": true,
    "createdBy": "aman.aggarwal@decimal.co.in",
    "createdTimestamp": "2024-03-06T13:15:54.437",
    "modifiedBy": "aman.aggarwal@decimal.co.in",
    "modifiedTimestamp": "2024-03-06T13:15:54.437",
    "approvalRemarks": "By Super Admin",
    "approvalBy": "aman.aggarwal@decimal.co.in",
    "approvalStatus": "APPROVED",
    "finalApprovalBy": "aman.aggarwal@decimal.co.in",
    "approvalTimestamp": "2024-03-06T13:15:54.408",
    "recordId": "8d5e5c36-750e-422d-ae82-5848dc280d63",
    "executionAttribute": null,
    "udfVal1": "",
    "udfLbl1": "",
    "udfVal2": "",
    "udfLbl2": "",
    "udfVal3": "",
    "udfLbl3": "",
    "udfVal4": "",
    "udfLbl4": "",
    "udfVal5": "",
    "udfLbl5": "",
    "udfVal6": "",
    "udfLbl6": "",
    "udfVal7": "",
    "udfLbl7": "",
    "udfVal8": "",
    "udfLbl8": "",
    "udfVal9": "",
    "udfLbl9": "",
    "udfVal10": "",
    "udfLbl10": "",
    "functionCode": "Bart83",
    "name": "Property holderA",
    "code": "TESTQ11",
    "parentRoleCode": "",
    "defaultSystemRoleCode": "",
    "sortSeq": 0,
    "internalFlag": false,
    "description": "",
    "attributes": "[{\"key\":\"Test test\",\"value\":\"GAH\"}]",
    "effectiveTill": true,
    "effectiveDateSaved": "2024-03-06"
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