@cart
Feature: Shopping cart
  As a logged-in customer
  I want to manage products in my cart
  So that I only buy what I need

  Background:
    Given I am logged in as a "standard" user

  @smoke @regression
  Scenario: Add a product to the cart
    When I add "Sauce Labs Backpack" to the cart
    Then the cart badge should show 1
    And the cart should contain "Sauce Labs Backpack"

  @regression
  Scenario: Add multiple products to the cart
    When I add "Sauce Labs Backpack" to the cart
    And I add "Sauce Labs Bike Light" to the cart
    Then the cart badge should show 2

  @regression
  Scenario: Remove a product from the cart page
    When I add "Sauce Labs Backpack" to the cart
    And I remove "Sauce Labs Backpack" from the cart page
    Then the cart should be empty

  @regression
  Scenario Outline: Sort products
    When I sort products by "<option>"
    Then the first product should be "<first>"

    Examples:
      | option              | first                             |
      | Price (low to high) | Sauce Labs Onesie                 |
      | Price (high to low) | Sauce Labs Fleece Jacket          |
      | Name (Z to A)       | Test.allTheThings() T-Shirt (Red) |
