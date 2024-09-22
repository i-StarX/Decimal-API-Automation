import { test, expect, } from '@playwright/test';

test('createUser', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "user",
module_2: "create"
},
        data: {
    "userId": "RashmiTest14",
    "userName": "rtrivedi",
    "domainName": "",
    "status": true,
    "userType": true,
    "designation": "",
    "emailId": "rtrivedi@getmail.com",
    "dob": "",
    "description": "",
    "mobileNumber": "7535988913",
    "employeeId": "009",
    "supervisorId": "",
    "role": "",
    "homeLocation": "",
    "superAdmin": "",
    "createdBy": "",
    "createdTimestamp": "2024-04-08T10:43:45.308Z",
    "modifiedBy": "",
    "modifiedTimestamp": "",
    "approvalBy": "",
    "approvalRemarks": "",
    "approvalStatus": "",
    "approvalTimestamp": "",
    "effectiveDate": "2024-04-08",
    "ineffectiveDate": "2034-04-12",
    "recordId": "",
    "functionRole": null,
    "password": "test",
    "mpin": "test",
    "deviceId": "test",
    "mpinStatus": "",
    "effectiveDateSaved": "2024-04-08",
    "attributes": "[{\"key\":\"usermaster\",\"value\":\"\"},{\"key\":\"mobile number\",\"value\":\"\"},{\"key\":\"Designation\",\"value\":\"\"}]",
    "systemRole": "CURATOR100"
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