@checkout
Feature: Checkout
  As a customer with products in my cart
  I want to complete my order
  So that I receive what I bought

  Background:
    Given I am logged in as a "standard" user
    And I add "Sauce Labs Backpack" to the cart
    And I add "Sauce Labs Bike Light" to the cart
    And I go to checkout

  @smoke @regression
  Scenario: Complete a purchase end to end
    When I enter my details "Mohamed" "Dokhana" "12511"
    Then the item total should be the sum of the product prices
    When I finish the order
    Then I should see the order confirmation

  @regression
  Scenario Outline: Checkout form validation
    When I enter my details "<first>" "<last>" "<zip>"
    Then I should see the checkout error "<message>"

    Examples:
      | first   | last    | zip   | message                        |
      |         | Dokhana | 12511 | Error: First Name is required  |
      | Mohamed |         | 12511 | Error: Last Name is required   |
      | Mohamed | Dokhana |       | Error: Postal Code is required |
