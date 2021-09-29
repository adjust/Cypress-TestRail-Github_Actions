Feature: SimpleTest
  
  Scenario: C4949 Simple Test opening main page
    When I navigate to the main page
    And I click Request a Demo button

  Scenario: C4950 Simple Failing Test opening main page
    When I navigate to the main page
    And I click not existing button
