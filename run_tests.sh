# The script reading file line by line splits each line by ":" and sets them as environment variables, then runs cypress with new params.
# Used in Github Actions and report to TestRail
# Can be run locally
exit_code=0
while IFS= read -r line; do
   testrailId=$(echo $line | awk '{split($0, a, ":"); print a[1]}')
   spec=$(echo $line | awk '{split($0, a, ":"); print a[2]}')

   export CYPRESS_ENV="testRailSuiteId=${testrailId}"
   export CYPRESS_SPEC="${spec}"

   npx cypress run --spec $CYPRESS_SPEC --env $CYPRESS_ENV --config-file cypress-github-actions.json
   exit_code=$((exit_code + $(echo $?)))
done < test_cases.txt
exit $exit_code