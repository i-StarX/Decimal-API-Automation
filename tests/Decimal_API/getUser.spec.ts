import { test, expect, } from '@playwright/test';

test('getUser', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "user",
module_2: "get"
},
        data: {
    "code": "dec1313"
},
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
        apiResponse.body().then(body => {
            let expected = '{    "ADMIN_PORTAL_API": {        "records": [            {                "primary_key": "",                "data": [                    {                        "status": "success",                        "success": {                            "code": "200",                            "message": "User(s) Details Found",                            "details": {                                "effectiveDate": "2024-01-24",                                "ineffectiveDate": null,                                "status": true,                                "createdBy": "harshdeep.s@decimal.co.in",                                "createdTimestamp": "2024-01-24T15:09:32.988",                                "modifiedBy": "harshdeep.s@decimal.co.in",                                "modifiedTimestamp": "2024-06-05T18:52:18.825",                                "approvalRemarks": "IMPORT",                                "approvalBy": "harshdeep.s@decimal.co.in",                                "approvalStatus": "APPROVED",                                "finalApprovalBy": "harshdeep.s@decimal.co.in",                                "approvalTimestamp": "2024-06-05T18:52:18.825",                                "recordId": "a16ed4f2-cc95-475f-a876-38d8c87d8401",                                "executionAttribute": null,                                "userId": "dec1313",                                "userName": "MUKESH",                                "userType": true,                                "domainName": "it",                                "domain": "",                                "employeeId": "TEST1223",                                "password": "MFku5+oFKRYwWcxZDBlwassh2dX0wYN9fCKamkSmytqKE+Fiv/qYmy3bNqQwUZj9V+oyLyDT2x3G\r\nCHxV88MgVw==",                                "authentication": "",                                "role": "DOPS",                                "systemRole": "Test12",                                "supervisorId": "",                                "designation": "",                                "homeLocation": "MH",                                "parentEntity": "",                                "hierarchyId": "",                                "mobileNumber": "7535988912",                                "emailId": "abc@gmail.com",                                "sortSequence": 100,                                "accessLevel": "",                                "blockFlag": "",                                "passwordUpdateTimestamp": null,                                "dob": null,                                "passwordChangeFlag": false,                                "passwordResponseMessage": "",                                "orgId": "",                                "appId": "",                                "loginId": "",                                "superAdmin": true,                                "makerChecker": null,                                "attributes": "[{\"key\":\"usermaster\",\"value\":\"\"},{\"key\":\"mobile number\",\"value\":\"\"}]",                                "mpin": "y5LTYYmA1RGG3x+n+t2qFzgyCNBHx3X6eKVN56XDWFsF9P9ivc8ZTT+6F4eLSapbPS7L3s38R4O5\r\n8qNjN/b8MA==",                                "deviceId": "",                                "mpinStatus": "",                                "makerCheckerRequired": false                            }                        }                    }                ]            }        ],        "responseHandledBy": "MOBILE APP",        "isSuccessRuleValidated": true    }}';
            expect(body.toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });
    });

});