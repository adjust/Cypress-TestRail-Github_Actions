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
   
1. Modify workflow by copy and paste for each test case
```yaml
      - name: Cypress Tests
        uses: cypress-io/github-action@v2
        env:
          DEBUG: "false"

        with:
          install: false # installed previously
          spec: "cypress/integration/simple_tests/*.js"  # set path to your test case
          env: "testRailSuiteId=48" # set suiteId by replace 48
```

# Reporting
[Reporting Library to TestRail](https://www.npmjs.com/package/cypress-testrail-reporter)
