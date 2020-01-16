Feature: Show or hide an events details

Scenario: Element is collapsed by default
  Given list of events has been loaded
  And app has loaded
  When the user did not click the Show Details yet
  Then the event elements are collapsed

Scenario: User can expand an event to see its details
  Given app loaded
  And the list of events has been loaded
  When the user clicks the button Show Details
  Then the event element should expand and show more info

Scenario: User can collapse an event to hide its details
  Given app loaded
  And user expands and shows details
  When the user clicks the Hide Details button
  Then the event description collapses