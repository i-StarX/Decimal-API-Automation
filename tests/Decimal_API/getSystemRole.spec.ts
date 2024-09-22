import { test, expect, } from '@playwright/test';

test('getSystemRole', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "system-role",
module_2: "get"
},
        data: {
    "code": "TESTADMIN"
},
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
        apiResponse.body().then(body => {
            let expected = '{    "ADMIN_PORTAL_API": {        "records": [            {                "primary_key": "",                "data": [                    {                        "status": "success",                        "success": {                            "code": "200",                            "message": "User(s) Details Found",                            "details": {                                "effectiveDate": "2024-08-12",                                "ineffectiveDate": "2034-08-12",                                "status": true,                                "createdBy": "harshdeep.s@decimal.co.in",                                "createdTimestamp": "2024-08-12T11:26:48.991+05:30",                                "modifiedBy": "harshdeep.s@decimal.co.in",                                "modifiedTimestamp": "2024-08-12T11:26:48.991+05:30",                                "approvalRemarks": "By Super Admin",                                "approvalBy": "harshdeep.s@decimal.co.in",                                "approvalStatus": "APPROVED",                                "finalApprovalBy": "harshdeep.s@decimal.co.in",                                "approvalTimestamp": "2024-08-12T11:26:48.984+05:30",                                "recordId": "c2ecc6fc-251e-441f-9f59-4ea8ca2ee382",                                "isDelete": false,                                "attributes": "[{\"key\":\"1\",\"value\":\"\"},{\"key\":\"2\",\"value\":\"\"},{\"key\":\"test\",\"value\":\"\"},{\"key\":\"33\",\"value\":\"\"}]",                                "id": "TESTADMIN",                                "roleName": "TESTRT10",                                "description": "",                                "appId": "ADMIN-PORTAL-BGQIQLMILQ",                                "orgId": "VLIBRARY-LKBBJW41RM"                            }                        }                    }                ]            }        ],        "responseHandledBy": "MOBILE APP",        "isSuccessRuleValidated": true    }}';
            expect(body.toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });
    });

});