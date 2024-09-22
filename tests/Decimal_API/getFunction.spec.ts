import { test, expect, } from '@playwright/test';

test('getFunction', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "org-function",
module_2: "get"
},
        data: {
"code": "PhD"
},
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
        apiResponse.body().then(body => {
            let expected = '{    "ADMIN_PORTAL_API": {        "records": [            {                "primary_key": "",                "data": [                    {                        "status": "success",                        "success": {                            "code": "200",                            "message": "User(s) Details Found",                            "details": {                                "effectiveDate": "2024-04-09",                                "ineffectiveDate": "2025-07-24",                                "status": false,                                "createdBy": "sandeep.kumar@decimal.co.in",                                "createdTimestamp": "2024-04-05T09:26:22.349+05:30",                                "modifiedBy": "harshdeep.s@decimal.co.in",                                "modifiedTimestamp": "2024-06-05T18:52:19.561+05:30",                                "approvalRemarks": "IMPORT",                                "approvalBy": "harshdeep.s@decimal.co.in",                                "approvalStatus": "APPROVED",                                "finalApprovalBy": "harshdeep.s@decimal.co.in",                                "approvalTimestamp": "2024-06-05T18:52:19.561+05:30",                                "recordId": "4552d02c-8443-48cd-a20e-22d74a525e13",                                "isDelete": false,                                "attributes": "",                                "udfVal1": "",                                "udfLbl1": "",                                "udfVal2": "",                                "udfLbl2": "",                                "udfVal3": "",                                "udfLbl3": "",                                "udfVal4": "",                                "udfLbl4": "",                                "udfVal5": "",                                "udfLbl5": "",                                "udfVal6": "",                                "udfLbl6": "",                                "udfVal7": "",                                "udfLbl7": "",                                "udfVal8": "",                                "udfLbl8": "",                                "udfVal9": "",                                "udfLbl9": "",                                "udfVal10": "",                                "udfLbl10": "",                                "code": "PhD",                                "name": "Electronics",                                "type": "",                                "headEmpId": "",                                "sortSeq": 0,                                "internalFlag": false,                                "description": "Test check"                            }                        }                    }                ]            }        ],        "responseHandledBy": "MOBILE APP",        "isSuccessRuleValidated": true    }}';
            expect(body.toString().replace(/ +/g, "")).toEqual(expected.replace(/ +/g, ""));
        });
    });

});