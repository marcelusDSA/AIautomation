#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios 
#<> (placeholder)
#""
## (Comments)

#Sample Feature Definition Template

Feature:
  As a user
  I want to be able to add new clients in the system
  So that i can add accounting data for that client

  Background:
    Given the user is on landing page
    When she chooses to sign up

  Scenario: Sign up a new user
    And she provides the first name as Sukesh
    And she provides the last name as Kumar
    And she provides the email as validemaillllll@aq.com
    And she provides the password as password
    And she provides the confirm password again as password
    And she signs-up
    Then she should be logged in to the application


  Scenario Outline: Data driving new user sign-up
    And she provides the first name as <firstName>
    And she provides the last name as <lastName>
    And she provides the email as <email>
    And she provides the password as <password>
    And she provides the confirm password again as <password>
    And she signs-up
    Then she should be logged in to the application
  Examples:
    | firstName | lastName | email             | password |
    | Sukesh    | Kumar    | validemailll@aq.com | password |