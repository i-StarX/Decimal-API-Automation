import { test, expect, } from '@playwright/test';

test('getProduct', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "prd-mst",
module_2: "get"
},
        data: {
    "code": "AC101"
},
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
        apiResponse.body().then(body => {
            let expected = '{    "ADMIN_PORTAL_API": {        "records": [            {                "primary_key": "",                "data": [                    {                        "status": "success",                        "success": {                            "code": "200",                            "message": "User(s) Details Found",                            "details": {                                "effectiveDate": "2024-08-13",                                "ineffectiveDate": "2034-08-13",                                "status": true,                                "createdBy": "ghulam.mustafa@decimal.co.in",                                "createdTimestamp": "2024-08-13T15:50:38.960+05:30",                                "modifiedBy": "ghulam.mustafa@decimal.co.in",                                "modifiedTimestamp": "2024-08-13T15:50:38.960+05:30",                                "approvalRemarks": "By Super Admin",                                "approvalBy": "ghulam.mustafa@decimal.co.in",                                "approvalStatus": "APPROVED",                                "finalApprovalBy": "ghulam.mustafa@decimal.co.in",                                "approvalTimestamp": "2024-08-13T15:50:38.958+05:30",                                "recordId": "c3cebbc8-9d3e-4bcf-8ff6-2f6d12b80150",                                "isDelete": false,                                "attributes": "[{\"key\":\"age\",\"value\":\"\"},{\"key\":\"salary\",\"value\":\"\"}]",                                "code": "AC101",                                "name": "ACCOUNT",                                "description": "Short description for ACCOUNT",                                "sortSeq": 1,                                "shortName": null                            }                        }                    }                ]            }        ],        "responseHandledBy": "MOBILE APP",        "isSuccessRuleValidated": true    }}';
            expect(body.toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });
    });

});