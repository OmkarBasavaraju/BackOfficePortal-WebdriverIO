Feature: As a user, I want to login to application and verify the submitted status of the application

  Background: Login to the application with username and password
      Given I am on the backOffice Portal login page
      When I login with username and password

  Scenario: Verify header text and New button is displayed.
    Then I should see a header text as <headerText>
    |headerText|
    |Applications|
    Then I verify that New button is displayed in application tab with text <buttonText>
    |buttonText|
    |New|
    Then I click on the logout button

  Scenario: Verify submitted status of the application
    When I click on the Status button
    And I select submitted option from the status dropdown
    And I click on the apply button
    And I click on the first row of the application
    Then I verify <statusText> text is displayed
    |statusText|
    |Submitted|
    Then I click on the logout button 