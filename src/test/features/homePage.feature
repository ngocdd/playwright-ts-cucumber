Feature: User login to CMS

    @htn
    Scenario Outline: user login with valid information
        Given user go to login page
        When user login with valid information "<OrgID>" "<Username>" "<Password>"
        Then user login success
        Examples:
            | OrgID   | Username                        | Password |
            |  | |  |