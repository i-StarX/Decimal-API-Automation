import { test, expect, } from '@playwright/test';

test('updateUserRoleMapping', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "role-user-map",
module_2: "update"
},
        data: {
    "appId": "CORE42-37COMPQ9VL",
    "userId": "WORKER_07",
    "systemRole": "WORKER",
    "status": false,
    "createdBy": "",
    "createdTimestamp": "2024-03-18T18:53:09.277Z",
    "modifiedBy": "",
    "modifiedTimestamp": null,
    "approvalBy": "",
    "approvalRemarks": "",
    "approvalStatus": "",
    "approvalTimestamp": null,
    "effectiveDate": "2024-03-18",
    "ineffectiveDate": "2034-03-12",
    "recordId": "",
    "attributes": "[{\"key\":\"attributes\",\"value\":\"\"},{\"key\":\"Desgination\",\"value\":\"\"},{\"key\":\"44\",\"value\":\"\"}]",
    "orgId": "VLIBRARY-LKBBJW41RM",
    "effectiveDateSaved": "2024-03-12"
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