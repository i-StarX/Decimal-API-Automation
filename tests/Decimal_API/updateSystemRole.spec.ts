import { test, expect, } from '@playwright/test';

test('updateSystemRole', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "system-role",
module_2: "update"
},
        data: {
    "id": "TESTADMIN14",
    "appId": "ADMIN-PORTAL-BGQIQLMILQ",
    "roleName": "test12",
    "status": true,
    "description": "",
    "createdBy": "",
    "createdTimestamp": "2024-03-12T10:55:22.743Z",
    "modifiedBy": "",
    "modifiedTimestamp": "",
    "approvalBy": "",
    "approvalRemarks": "",
    "approvalStatus": "",
    "approvalTimestamp": "",
    "effectiveDate": "2024-03-12",
    "ineffectiveDate": "2034-03-12",
    "homeLocation": "",
    "attributes": "[{\"key\":\"1\",\"value\":\"\"},{\"key\":\"2\",\"value\":\"\"},{\"key\":\"test\",\"value\":\"\"},{\"key\":\"33\",\"value\":\"\"}]",
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