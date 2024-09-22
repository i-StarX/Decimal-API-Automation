import { test, expect, } from '@playwright/test';

test('createWorkflow', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "WORKFLOW_API",
module: "workflow_mst",
module_2: "create"
},
        data: {
    "name": "RashmiTest14",
    "description": "iStarX",
    "purgeDays": "10",
    "workflowId": null,
    "taskCode": null
},
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
        apiResponse.body().then(body => {
            let expected = '{    "WORKFLOW_API": {        "records": [            {                "primary_key": "",                "data": [                    {                        "status": "success",                        "success": {                            "code": "200",                            "message": "Request Processed Successfully",                            "details": {                                "effectiveDate": "2024-09-14",                                "ineffectiveDate": null,                                "status": true,                                "createdBy": "dheeraj.yadav@decimal.co.in",                                "createdTimestamp": "2024-09-14T06:38:24.869+00:00",                                "modifiedBy": "dheeraj.yadav@decimal.co.in",                                "modifiedTimestamp": "2024-09-14T06:38:24.869+00:00",                                "approvalRemarks": "By Super Admin",                                "approvalBy": "dheeraj.yadav@decimal.co.in",                                "approvalStatus": "APPROVED",                                "finalApprovalBy": "dheeraj.yadav@decimal.co.in",                                "approvalTimestamp": "2024-09-14T06:38:24.869+00:00",                                "recordId": "26863b97-7dc8-4295-86f2-c88430ff208e",                                "id": 250,                                "name": "RashmiTest14",                                "description": "iStarX",                                "purgeDays": 10                            }                        }                    }                ]            }        ],        "responseHandledBy": "MOBILE APP",        "isSuccessRuleValidated": true    }}';
            expect(body.toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });
    });

});