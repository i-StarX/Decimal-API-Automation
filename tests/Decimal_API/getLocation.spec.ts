import { test, expect, } from '@playwright/test';

test('getLocation', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "org-location",
module_2: "get"
},
        data: {
    "code": "ALM01"
},
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
        apiResponse.body().then(body => {
            let expected = '{    "ADMIN_PORTAL_API": {        "records": [            {                "primary_key": "",                "data": [                    {                        "status": "success",                        "success": {                            "code": "200",                            "message": "User(s) Details Found",                            "details": {                                "effectiveDate": "2024-03-12",                                "ineffectiveDate": "2025-03-11",                                "status": false,                                "createdBy": "sandeep.kumar@decimal.co.in",                                "createdTimestamp": "2024-03-11T17:20:57.199+05:30",                                "modifiedBy": "harshdeep.s@decimal.co.in",                                "modifiedTimestamp": "2024-06-05T18:52:57.068+05:30",                                "approvalRemarks": "IMPORT",                                "approvalBy": "harshdeep.s@decimal.co.in",                                "approvalStatus": "APPROVED",                                "finalApprovalBy": "harshdeep.s@decimal.co.in",                                "approvalTimestamp": "2024-06-05T18:52:57.068+05:30",                                "recordId": "a0c1f863-e2af-440d-b25e-c5eceb022cba",                                "isDelete": false,                                "attributes": "[{\"key\":\"ddd\",\"value\":\"\"},{\"key\":\"werw\",\"value\":\"\"},{\"key\":\"Zone Name\",\"value\":\"\"},{\"key\":\"Village Name\",\"value\":\"\"}]",                                "udfVal1": "",                                "udfLbl1": "",                                "udfVal2": "",                                "udfLbl2": "",                                "udfVal3": "",                                "udfLbl3": "",                                "udfVal4": "",                                "udfLbl4": "",                                "udfVal5": "",                                "udfLbl5": "",                                "udfVal6": "",                                "udfLbl6": "",                                "udfVal7": "",                                "udfLbl7": "",                                "udfVal8": "",                                "udfLbl8": "",                                "udfVal9": "",                                "udfLbl9": "",                                "udfVal10": "",                                "udfLbl10": "",                                "code": "ALM01",                                "name": "Property holder",                                "type": "uyg",                                "subtype": "te",                                "parentLocationCode": "",                                "headEmpCode": "",                                "hierarchyId": "ALM01",                                "sortSeq": 0,                                "internalFlag": false,                                "addressLine1": "bvb",                                "addressLine2": "street chexk",                                "addressLine3": "collete",                                "city": "NEW",                                "state": "DELHI",                                "pincode": "123263",                                "country": "I",                                "description": "A while back I needed to count",                                "latitude": "",                                "longitude": ""                            }                        }                    }                ]            }        ],        "responseHandledBy": "MOBILE APP",        "isSuccessRuleValidated": true    }}';
            expect(body.toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });
    });

});