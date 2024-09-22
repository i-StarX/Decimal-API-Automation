import { test, expect, } from '@playwright/test';

test('updateLov', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "lov-mst",
module_2: "update"
},
        data: {
    "lovGroupCode": "OCCUPATION",
    "lovType": "",
    "parentLovCode": "STUDENT",
    "code": "RASHTEST14",
    "name": "updateAPIpankaj kumar",
    "status": true,
    "description": "",
    "isAvailableOnHomepage": true,
    "createdBy": "",
    "createdTimestamp": "2024-03-18T04:35:49.620Z",
    "modifiedBy": "",
    "modifiedTimestamp": null,
    "approvalBy": "",
    "approvalRemarks": "",
    "approvalStatus": "",
    "approvalTimestamp": null,
    "effectiveDate": "2024-03-18",
    "ineffectiveDate": "2034-03-18",
    "recordId": "",
    "attributes": "[{\"key\":\"123\",\"value\":\"\"}]",
    "sortSeq": "1",
    "effectiveDateSaved": "2024-03-18"
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