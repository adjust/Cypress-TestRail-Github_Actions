# Cypress+TestRail E2E Tests setup template

**Description:** E2E tests template

**Owner:** [Development Efficiency](https://github.com/orgs/adjust/teams/development-efficiency)

**Contacts:** viktor.chaptsev@adjust.com, pavel.prokudin@adjust.com, maksim.kuznetsov@akvelon.com, automate-team@adjust.com

# Settings
1. Configure file **cypress.json** and replace "projectId" with number project with which the tests are associated. 
   Make sure that, the "suiteId" set 1. It's need for multiple test runs.

1. Set GitHub's secrets:
    1.  TESTRAIL_USERNAME
    1.  TESTRAIL_PASSWORD
   
1. Add to file **test_cases.txt** lines with testRailIds and Specs:
```
48:cypress/integration/simple_tests/*.js
```
Where 48 is testRailId and cypress/integration/simple_tests/*.js - spec for cypress.

# Reporting
[Reporting Library to TestRail](https://www.npmjs.com/package/cypress-testrail-reporter)
