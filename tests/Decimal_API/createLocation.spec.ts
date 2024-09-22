import { test, expect, } from '@playwright/test';

test('createLocation', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "org-location",
module_2: "create"
},
        data: {
    "createdBy": "",
    "createdTimestamp": "2024-03-08T12:13:11.802Z",
    "modifiedBy": "",
    "modifiedTimestamp": "",
    "approvalBy": "",
    "approvalRemarks": "",
    "approvalStatus": "",
    "approvalTimestamp": "",
    "effectiveDate": "2024-03-12",
    "ineffectiveDate": "2025-03-11",
    "recordId": "",
    "udfLbl1": "",
    "udfVal1": "",
    "udfLbl2": "",
    "udfVal2": "",
    "udfLbl3": "",
    "udfVal3": "",
    "udfLbl4": "",
    "udfVal4": "",
    "udfLbl5": "",
    "udfVal5": "",
    "udfLbl6": "",
    "udfVal6": "",
    "udfLbl7": "",
    "udfVal7": "",
    "udfLbl8": "",
    "udfVal8": "",
    "udfLbl9": "",
    "udfVal9": "",
    "udfLbl10": "",
    "udfVal10": "",
    "addressLine1": "bvb",
    "addressLine2": "street chexk",
    "addressLine3": "collete",
    "city": "Sydney",
    "code": "SYD",
    "country": "I",
    "description": "A while back I needed to count  there should be a character limit of about 30–50 character",
    "finalApprovalBy": "",
    "pincode": "123263",
    "state": "DELHI",
    "stateDesc": "",
    "districtDesc": "effe",
    "status": true,
    "name": "Property holder",
    "type": "uyg",
    "subtype": "te",
    "parentLocationCode": "",
    "headEmpCode": "",
    "hierarchyId": "",
    "sortSequence": "",
    "internalFlag": "",
    "attributes": "[{\"key\":\"ddd\",\"value\":\"\"},{\"key\":\"werw\",\"value\":\"\"},{\"key\":\"Zone Name\",\"value\":\"\"},{\"key\":\"Village Name\",\"value\":\"\"}]",
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