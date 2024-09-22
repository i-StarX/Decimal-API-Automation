import { test, expect, } from '@playwright/test';

test('getProductSubVariant', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "prd-sub-vrnt-mst",
module_2: "get"
},
        data: {
    "code": "2012"
},
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
        apiResponse.body().then(body => {
            let expected = '{    "ADMIN_PORTAL_API": {        "records": [            {                "primary_key": "",                "data": [                    {                        "status": "success",                        "success": {                            "code": "200",                            "message": "User(s) Details Found",                            "details": {                                "effectiveDate": "2024-04-29",                                "ineffectiveDate": "2034-04-29",                                "status": true,                                "createdBy": "aman.aggarwal@decimal.co.in",                                "createdTimestamp": "2024-04-29T16:14:18.593",                                "modifiedBy": "aman.aggarwal@decimal.co.in",                                "modifiedTimestamp": "2024-04-29T16:14:18.593",                                "approvalRemarks": "By Super Admin",                                "approvalBy": "aman.aggarwal@decimal.co.in",                                "approvalStatus": "APPROVED",                                "finalApprovalBy": "aman.aggarwal@decimal.co.in",                                "approvalTimestamp": "2024-04-29T16:14:18.568",                                "recordId": "b8be69a4-f477-480f-a9f2-0cf046fd1659",                                "executionAttribute": null,                                "code": "2012",                                "name": "Java 8",                                "description": "Java 8 - Java",                                "sortSeq": 1,                                "productVariantCode": "2002",                                "attributes": "[{\"key\":\"Test Subvariant\",\"value\":\"Java 8.1\"}]"                            }                        }                    }                ]            }        ],        "responseHandledBy": "MOBILE APP",        "isSuccessRuleValidated": true    }}';
            expect(body.toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });
    });

});