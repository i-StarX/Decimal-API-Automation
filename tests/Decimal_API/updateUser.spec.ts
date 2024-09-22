import { test, expect, } from '@playwright/test';

test('updateUser', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "user",
module_2: "update"
},
        data: {
    "effectiveDate": "2024-03-12",
    "ineffectiveDate": "2034-03-12",
    "status": true,
    "createdBy": "aman.aggarwal@decimal.co.in",
    "createdTimestamp": "2024-03-12T16:14:30.159",
    "modifiedBy": "aman.aggarwal@decimal.co.in",
    "modifiedTimestamp": "2024-03-12T16:14:30.161",
    "approvalRemarks": "By Super Admin",
    "approvalBy": "aman.aggarwal@decimal.co.in",
    "approvalStatus": "APPROVED",
    "finalApprovalBy": "aman.aggarwal@decimal.co.in",
    "approvalTimestamp": "2024-03-12T16:14:30.157",
    "recordId": "6d55b8ff-adea-4441-8927-259558803102",
    "executionAttribute": null,
    "userId": "RashmiTest14",
    "userName": "ytdy",
    "userType": true,
    "domainName": "",
    "domain": null,
    "employeeId": "",
    "password": "",
    "authentication": null,
    "role": "",
    "systemRole": "CURATOR100",
    "supervisorId": "",
    "designation": "",
    "homeLocation": "MAIN_MARKET_MBD",
    "parentEntity": null,
    "hierarchyId": null,
    "mobileNumber": "7535988912",
    "emailId": "sandeep.kumar4@decimal.co.in",
    "sortSequence": 0,
    "accessLevel": null,
    "blockFlag": null,
    "passwordUpdateTimestamp": null,
    "dob": null,
    "passwordChangeFlag": false,
    "passwordResponseMessage": null,
    "orgId": null,
    "appId": null,
    "loginId": null,
    "superAdmin": false,
    "makerChecker": null,
    "attributes": "[{\"key\":\"usermaster\",\"value\":\"\"},{\"key\":\"mobile number\",\"value\":\"\"},{\"key\":\"Designation\",\"value\":\"\"}]",
    "mpin": "",
    "deviceId": "",
    "mpinStatus": "",
    "makerCheckerRequired": false,
    "effectiveDateValid": true,
    "effectiveTill": true,
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