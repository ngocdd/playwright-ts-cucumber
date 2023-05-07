Feature: register user

    Scenario Outline: register user with valid information
    Given go to register page
    When register user with valid user information "<FirstName>" "<LastName>" "<Username>"
    Then register success
    Examples:
        | FirstName | LastName | Username       | 
        | John      | Smith    | john_smith     |
        | Emily     | Johnson  | emily_johnson  | 
