Feature: Specify Number of events

Scenario: If user has not specified number, 32 is the default
  Given user did not specify a number of events being shown
  When app loads
  Then the default number of shown events is 32

Scenario: User can change number of events they want to view
  Given list of elements has been loaded and user did not specify a number of events
  When user specifies number of events
  Then the maximum of events listed should be the specified number