import { test, expect, } from '@playwright/test';

test('createEmployee', { tag: ["@regression_apiDecimal"] }, async ({ request }) => {

    
    await request.fetch(`https://sandbox.vahanacloud.com/router/engine/v1/gatewayProcessor`, {
        method: "POST",
        headers: {
clientsecret: "64398bad-6858-42f3-bd72-7441197cb83c",
requestid: "requestId01",
appId: "ADMIN-PORTAL-BGQIQLMILQ",
orgId: "VLIBRARY-LKBBJW41RM",
servicename: "ADMIN_PORTAL_API",
module: "employee",
module_2: "create"
},
        data: {
    "createdBy": "",
    "createdTimestamp": "",
    "modifiedBy": "",
    "modifiedTimestamp": "",
    "approvalBy": "",
    "approvalRemarks": "",
    "approvalStatus": "",
    "approvalTimestamp": "",
    "effectiveDate": "2024-03-12",
    "ineffectiveDate": "2034-03-11",
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
    "addressLine1": "",
    "addressLine2": "",
    "addressLine3": "",
    "category": "",
    "city": "1223",
    "code": "RASHTEST14",
    "company": "NEW",
    "country": "ind",
    "dateOfJoining": "2020-03-11",
    "description": "A while back I needed to count ",
    "designationLabelId": "",
    "designationName": "NEW",
    "division": "",
    "dob": "2026-03-11",
    "domainLoginId": "",
    "employeeVerificationDate": "2020-03-11",
    "fatherHusbandName": " ",
    "finalApprovalBy": "",
    "firstName": "TestRashmi",
    "functionCode": "1011",
    "gender": "MALE",
    "lastName": "",
    "lastWorkingDate": "1000-19-19",
    "latitude": "",
    "lob": "",
    "lobCode": "",
    "locationCode": "",
    "longitude": "",
    "maritalStatus": "SINGLE",
    "middleName": "",
    "mobileNumber": "9898979828",
    "mobileOffice": "",
    "officeEmail": "new1244@decimaltech.co.in",
    "officeLandline": "",
    "payrollId": "",
    "personId": "",
    "personalEmail": "",
    "pincode": "",
    "refSysEmpCode": "",
    "roleCode": "",
    "salutation": "MR",
    "source": "",
    "state": "hr",
    "status": true,
    "subCompany": "",
    "supervisorEmpId": "",
    "attributes": "[{\"key\":\"CA_CODE\",\"value\":\"\"},{\"key\":\"CA-LOCATION\",\"value\":\"\"},{\"key\":\"A\",\"value\":\"\"},{\"key\":\"test\",\"value\":\"\"},{\"key\":\"CLIENT_LOCATION\",\"value\":\"\"}]",
    "effectiveDateSaved": "2024-03-11",
    "functionRole": "OO7"
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