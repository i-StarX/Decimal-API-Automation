import { test, expect, } from '@playwright/test';

test('getFunctionRole', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "org-function-role",
module_2: "get"
},
        data: {
     "code":"TESTQ11"
},
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
        apiResponse.body().then(body => {
            let expected = '{    "ADMIN_PORTAL_API": {        "records": [            {                "primary_key": "",                "data": [                    {                        "status": "success",                        "success": {                            "code": "200",                            "message": "Request Processed Successfully",                            "details": {                                "effectiveDate": "2024-03-06",                                "ineffectiveDate": "2034-03-06",                                "status": true,                                "createdBy": "aman.aggarwal@decimal.co.in",                                "createdTimestamp": "2024-03-06T13:15:54.437",                                "modifiedBy": "dheeraj.yadav@decimal.co.in",                                "modifiedTimestamp": "2024-09-06T15:34:44.054",                                "approvalRemarks": "By Super Admin",                                "approvalBy": "dheeraj.yadav@decimal.co.in",                                "approvalStatus": "APPROVED",                                "finalApprovalBy": "dheeraj.yadav@decimal.co.in",                                "approvalTimestamp": "2024-09-06T15:34:44.052",                                "recordId": "9845ea15-23d3-423c-80db-3e42a3f52cce",                                "executionAttribute": null,                                "udfVal1": "",                                "udfLbl1": "",                                "udfVal2": "",                                "udfLbl2": "",                                "udfVal3": "",                                "udfLbl3": "",                                "udfVal4": "",                                "udfLbl4": "",                                "udfVal5": "",                                "udfLbl5": "",                                "udfVal6": "",                                "udfLbl6": "",                                "udfVal7": "",                                "udfLbl7": "",                                "udfVal8": "",                                "udfLbl8": "",                                "udfVal9": "",                                "udfLbl9": "",                                "udfVal10": "",                                "udfLbl10": "",                                "functionCode": "ELECTRICAL",                                "name": "Property holderA",                                "code": "TESTQ11",                                "parentRoleCode": "",                                "defaultSystemRoleCode": "",                                "sortSeq": 0,                                "internalFlag": false,                                "description": "",                                "attributes": "[{\"key\":\"Test test\",\"value\":\"GAH\"}]"                            }                        }                    }                ]            }        ],        "responseHandledBy": "MOBILE APP",        "isSuccessRuleValidated": true    }}';
            expect(body.toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });
    });

});