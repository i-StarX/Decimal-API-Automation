import { test, expect, } from '@playwright/test';

test('getWorkflow', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "WORKFLOW_API",
module: "workflow_mst",
module_2: "get"
},
        data: {
    "name": "RashmiTest"
},
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
        apiResponse.body().then(body => {
            let expected = '{    "WORKFLOW_API": {        "records": [            {                "primary_key": "",                "data": [                    {                        "status": "success",                        "success": {                            "code": "200",                            "message": "User(s) Details Found",                            "details": {                                "effectiveDate": "2024-09-13",                                "ineffectiveDate": null,                                "status": true,                                "createdBy": "aman.aggarwal@decimal.co.in",                                "createdTimestamp": "2024-09-14T02:15:09.401",                                "modifiedBy": "aman.aggarwal@decimal.co.in",                                "modifiedTimestamp": "2024-09-14T02:15:09.401",                                "approvalRemarks": "By Super Admin",                                "approvalBy": "aman.aggarwal@decimal.co.in",                                "approvalStatus": "APPROVED",                                "finalApprovalBy": "aman.aggarwal@decimal.co.in",                                "approvalTimestamp": "2024-09-14T02:15:09.401",                                "recordId": "95228fdf-218f-4298-a827-1ed114ff11b7",                                "id": 249,                                "name": "RashmiTest",                                "description": "testing by Rashmi",                                "purgeDays": 10,                                "orgId": null,                                "appId": null                            }                        }                    }                ]            }        ],        "responseHandledBy": "MOBILE APP",        "isSuccessRuleValidated": true    }}';
            expect(body.toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });
    });

});