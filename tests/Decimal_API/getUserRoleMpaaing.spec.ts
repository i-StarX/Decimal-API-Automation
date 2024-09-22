import { test, expect, } from '@playwright/test';

test('getUserRoleMapping', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "role-user-map",
module_2: "get"
},
        data: {
    "systemRole": "WORKER",
    "userId": "WORKER_07"
},
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
        apiResponse.body().then(body => {
            let expected = '{    "ADMIN_PORTAL_API": {        "records": [            {                "primary_key": "",                "data": [                    {                        "status": "success",                        "success": {                            "code": "200",                            "message": "User(s) Details Found",                            "details": {                                "effectiveDate": "2024-03-18",                                "ineffectiveDate": "2034-03-12",                                "status": false,                                "createdBy": "sandeep.kumar@decimal.co.in",                                "createdTimestamp": "2024-03-18T19:03:05.321",                                "modifiedBy": "dheeraj.yadav@decimal.co.in",                                "modifiedTimestamp": "2024-09-14T19:24:03.829",                                "approvalRemarks": "By Super Admin",                                "approvalBy": "dheeraj.yadav@decimal.co.in",                                "approvalStatus": "APPROVED",                                "finalApprovalBy": "dheeraj.yadav@decimal.co.in",                                "approvalTimestamp": "2024-09-14T19:24:03.822",                                "recordId": "77e8830d-378f-4c72-b86f-e2c64994ab2f",                                "executionAttribute": null,                                "systemRole": "WORKER",                                "userId": "WORKER_07",                                "appId": "CORE42-37COMPQ9VL",                                "orgId": "VLIBRARY-LKBBJW41RM",                                "attributes": "[{\"key\":\"attributes\",\"value\":\"\"},{\"key\":\"Desgination\",\"value\":\"\"},{\"key\":\"44\",\"value\":\"\"}]"                            }                        }                    }                ]            }        ],        "responseHandledBy": "MOBILE APP",        "isSuccessRuleValidated": true    }}';
            expect(body.toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });
    });

});