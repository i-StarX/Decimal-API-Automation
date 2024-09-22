import { test, expect, } from '@playwright/test';

test('getProductVariant', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "variant-mst",
module_2: "get"
},
        data: {
    "code": "2002"
},
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
        apiResponse.body().then(body => {
            let expected = '{    "ADMIN_PORTAL_API": {        "records": [            {                "primary_key": "",                "data": [                    {                        "status": "success",                        "success": {                            "code": "200",                            "message": "User(s) Details Found",                            "details": {                                "effectiveDate": "2024-04-29",                                "ineffectiveDate": "2034-04-29",                                "status": true,                                "createdBy": "aman.aggarwal@decimal.co.in",                                "createdTimestamp": "2024-04-29T16:12:47.502",                                "modifiedBy": "aman.aggarwal@decimal.co.in",                                "modifiedTimestamp": "2024-04-29T16:12:47.502",                                "approvalRemarks": "By Super Admin",                                "approvalBy": "aman.aggarwal@decimal.co.in",                                "approvalStatus": "APPROVED",                                "finalApprovalBy": "aman.aggarwal@decimal.co.in",                                "approvalTimestamp": "2024-04-29T16:12:47.486",                                "recordId": "31ca414f-fa8b-4f25-845f-27fcf4d31281",                                "executionAttribute": null,                                "code": "2002",                                "name": "Java",                                "description": "Java Back end tech stack",                                "sortSeq": 1,                                "productCode": "2001",                                "productGroupCode": "0001",                                "shortName": null,                                "attributes": "[{\"key\":\"MARKET\",\"value\":\"High Demand\"},{\"key\":\"TEST\",\"value\":\"\"},{\"key\":\"only for test\",\"value\":\"\"}]"                            }                        }                    }                ]            }        ],        "responseHandledBy": "MOBILE APP",        "isSuccessRuleValidated": true    }}';
            expect(body.toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });
    });

});