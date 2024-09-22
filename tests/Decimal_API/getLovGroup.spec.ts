import { test, expect, } from '@playwright/test';

test('getLovGroup', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "ov-grp",
module_2: "get"
},
        data: {
    "code": "RASHTEST14"
},
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
        apiResponse.body().then(body => {
            let expected = '{    "ADMIN_PORTAL_API": {        "records": [            {                "primary_key": "",                "data": [                    {                        "status": "success",                        "success": {                            "code": "200",                            "message": "User(s) Details Found",                            "details": {                                "effectiveDate": "2024-09-14",                                "ineffectiveDate": "2034-09-14",                                "status": true,                                "createdBy": "aman.aggarwal@decimal.co.in",                                "createdTimestamp": "2024-09-14T12:23:05.634+05:30",                                "modifiedBy": "aman.aggarwal@decimal.co.in",                                "modifiedTimestamp": "2024-09-14T12:23:05.634+05:30",                                "approvalRemarks": "By Super Admin",                                "approvalBy": "aman.aggarwal@decimal.co.in",                                "approvalStatus": "APPROVED",                                "finalApprovalBy": "aman.aggarwal@decimal.co.in",                                "approvalTimestamp": "2024-09-14T12:23:05.631+05:30",                                "recordId": "32ac2ab3-7cdf-40c0-87ab-d670c72fd210",                                "isDelete": false,                                "attributes": "[{\"key\":\"lov\",\"value\":\"\"},{\"key\":\"lov2\",\"value\":\"\"},{\"key\":\"lov3\",\"value\":\"\"}]",                                "code": "RASHTEST14",                                "name": "RashmiTesting",                                "description": "Testing data created by Rashmi",                                "sortSeq": 1                            }                        }                    }                ]            }        ],        "responseHandledBy": "MOBILE APP",        "isSuccessRuleValidated": true    }}';
            expect(body.toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });
    });

});