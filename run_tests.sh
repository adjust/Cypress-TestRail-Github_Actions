#!/bin/bash
while IFS= read -r line; do
   testrailId=$(echo $line | awk '{split($0, a, ":"); print a[1]}')
   spec=$(echo $line | awk '{split($0, a, ":"); print a[2]}')

   export CYPRESS_ENV="testRailSuiteId=${testrailId}"
   export CYPRESS_SPEC="${spec}"

   npx cypress run --spec $CYPRESS_SPEC --env $CYPRESS_ENV

done < test_cases.txt
