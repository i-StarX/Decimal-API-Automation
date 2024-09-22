import { test, expect, } from '@playwright/test';

test('getLovValue', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "lov-value",
module_2: "get"
},
        data: {
    "lovCode": "DOB1",
    "code": "DOB1"
},
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
        apiResponse.body().then(body => {
            let expected = '{    "ADMIN_PORTAL_API": {        "records": [            {                "primary_key": "",                "data": [                    {                        "status": "success",                        "success": {                            "code": "200",                            "message": "User(s) Details Found",                            "details": {                                "effectiveDate": "2024-03-18",                                "ineffectiveDate": "2034-03-18",                                "status": true,                                "createdBy": "sandeep.kumar@decimal.co.in",                                "createdTimestamp": "2024-03-28T13:23:56.897",                                "modifiedBy": "harshdeep.s@decimal.co.in",                                "modifiedTimestamp": "2024-05-31T10:03:23.282",                                "approvalRemarks": "IMPORT",                                "approvalBy": "harshdeep.s@decimal.co.in",                                "approvalStatus": "APPROVED",                                "finalApprovalBy": "harshdeep.s@decimal.co.in",                                "approvalTimestamp": "2024-05-31T10:03:23.282",                                "recordId": "64f8aa38-6e9d-4c01-9f4c-9b4dbfad3d3a",                                "executionAttribute": null,                                "code": "DOB1",                                "lovValue": "DATEOB",                                "parentCodeL1": "LOVVALUE",                                "parentCodeL2": "Test value 01",                                "parentCodeL3": "Student",                                "sortSeq": 1,                                "attributes": "[{\"key\":\"attribute_1\",\"value\":\"\"},{\"key\":\"attribute_2\",\"value\":\"\"},{\"key\":\"age\",\"value\":\"\"}]",                                "lovCode": "DOB1",                                "moduleAttributesValue": ""                            }                        }                    }                ]            }        ],        "responseHandledBy": "MOBILE APP",        "isSuccessRuleValidated": true    }}';
            expect(body.toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });
    });

});