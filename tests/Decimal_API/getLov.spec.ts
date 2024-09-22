import { test, expect, } from '@playwright/test';

test('getLov', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "lov-mst",
module_2: "get"
},
        data: {
    "code": "DOB1"
},
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
        apiResponse.body().then(body => {
            let expected = '{    "ADMIN_PORTAL_API": {        "records": [            {                "primary_key": "",                "data": [                    {                        "status": "success",                        "success": {                            "code": "200",                            "message": "User(s) Details Found",                            "details": {                                "effectiveDate": "2024-03-18",                                "ineffectiveDate": "2034-03-18",                                "status": true,                                "createdBy": "aman.aggarwal@decimal.co.in",                                "createdTimestamp": "2024-03-18T10:06:34.891",                                "modifiedBy": "harshdeep.s@decimal.co.in",                                "modifiedTimestamp": "2024-05-31T10:02:46.617",                                "approvalRemarks": "IMPORT",                                "approvalBy": "harshdeep.s@decimal.co.in",                                "approvalStatus": "APPROVED",                                "finalApprovalBy": "harshdeep.s@decimal.co.in",                                "approvalTimestamp": "2024-05-31T10:02:46.617",                                "recordId": "ded15fb9-b869-48d4-97ea-6f963e6aeed3",                                "executionAttribute": null,                                "code": "DOB1",                                "name": "pankaj kumar",                                "description": "",                                "lovGroupCode": "OCCUPATION",                                "parentLovCode": "STUDENT",                                "attributes": "[{\"key\":\"123\",\"value\":\"\"}]",                                "sortSeq": 0,                                "moduleAttributes": ""                            }                        }                    }                ]            }        ],        "responseHandledBy": "MOBILE APP",        "isSuccessRuleValidated": true    }}';
            expect(body.toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });
    });

});