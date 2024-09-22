import { test, expect, } from '@playwright/test';

test('updateLocation', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "org-location",
module_2: "update"
},
        data: {
    "effectiveDate": "2024-03-08",
    "ineffectiveDate": null,
    "status": true,
    "createdBy": "sandeep.kumar@decimal.co.in",
    "createdTimestamp": "2024-03-08T18:17:16.271+05:30",
    "modifiedBy": "sandeep.kumar@decimal.co.in",
    "modifiedTimestamp": "2024-03-08T18:17:16.271+05:30",
    "approvalRemarks": "By Super Admin",
    "approvalBy": "sandeep.kumar@decimal.co.in",
    "approvalStatus": "APPROVED",
    "finalApprovalBy": "sandeep.kumar@decimal.co.in",
    "approvalTimestamp": "2024-03-08T18:17:16.267+05:30",
    "recordId": "1cc2aad9-f861-48b0-b22d-64bbe3f2446a",
    "isDelete": false,
    "attributes": "[{\"key\":\"ddd\",\"value\":\"\"},{\"key\":\"werw\",\"value\":\"\"},{\"key\":\"Zone Name\",\"value\":\"\"},{\"key\":\"Village Name\",\"value\":\"\"}]",
    "udfVal1": "",
    "udfLbl1": "",
    "udfVal2": "",
    "udfLbl2": "",
    "udfVal3": "",
    "udfLbl3": "",
    "udfVal4": "",
    "udfLbl4": "",
    "udfVal5": "",
    "udfLbl5": "",
    "udfVal6": "",
    "udfLbl6": "",
    "udfVal7": "",
    "udfLbl7": "",
    "udfVal8": "",
    "udfLbl8": "",
    "udfVal9": "",
    "udfLbl9": "",
    "udfVal10": "",
    "udfLbl10": "",
    "code": "TRDHHhhS",
    "name": "Property holder",
    "type": "TY",
    "subtype": "YT",
    "parentLocationCode": "",
    "headEmpCode": "",
    "hierarchyId": "TRDHHhhS",
    "sortSeq": 0,
    "internalFlag": false,
    "addressLine1": "village",
    "addressLine2": "street chexk",
    "addressLine3": "collete",
    "city": "NEW",
    "state": "DELHI",
    "pincode": "123232",
    "country": "I",
    "description": "",
    "latitude": "",
    "longitude": "",
    "effectiveDateSaved": "2024-03-08"
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