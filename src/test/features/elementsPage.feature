Feature: Test checkbox page

    Scenario Outline: Input textbox form
        Given user go to textbox page
        When user submit with all textbox information
        Then user submit success
        Examples:
            | fullName | email             | currentAddress | permanet Address |
            | user 01  | emial01@gmail.com | Ha Noi         | Viet Name        | 