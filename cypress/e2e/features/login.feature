@login
Feature: Login
  As a customer
  I want to log in to the store
  So that I can browse and buy products

  Background:
    Given I am on the login page

  @smoke @regression
  Scenario: Successful login with valid credentials
    When I log in as a "standard" user
    Then I should see the products page

  @regression
  Scenario Outline: Login fails with an error message
    When I log in as a "<user>" user
    Then I should see the login error "<message>"

    Examples:
      | user    | message                                                                   |
      | locked  | Epic sadface: Sorry, this user has been locked out.                       |
      | invalid | Epic sadface: Username and password do not match any user in this service |

  @regression
  Scenario: Login with empty fields
    When I click the login button without entering credentials
    Then I should see the login error "Epic sadface: Username is required"

  @regression
  Scenario: Logout returns the user to the login page
    When I log in as a "standard" user
    And I log out
    Then I should be on the login page
