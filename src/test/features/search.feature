Feature: search htn on google

    Scenario: search on google
    Given go to google.com
    When search with keyword is HTN
    Then result contain HTN keyword
