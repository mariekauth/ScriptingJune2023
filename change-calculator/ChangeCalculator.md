# This will be the first project we will work on

## Instructions
Creating the Change Calculator is complete.
This can be used an example.

Acceptance Criteria:
- verify title = "Change Criteria"
- All page content will be nested inside a div#content tag
- Verify the title is included in an Header 1 tag with the text "Change Calculator"
- All inputs will be contained in a section tag.
    - They will have a label, and an input with the initial value empty.
- section-cents will also contain a second input with the value "Calculate". This will be of type button (making it clickable)
- The input in section-cents will be enabled. This is where the user will provide the initial amount
- The input elements in the following sections will be disabled. This is where the output of the calculations will go.
    - section-quarters
    - section-dimes
    - section-nickels
    - section-pennies
- The input elements in the following sections will be empty when the page opens
    - section-quarters
    - section-dimes
    - section-nickels
    - section-pennies
- When the page opens, the errorMessage will not be present.
- When the "Calculate" button is clicked, an error message will appear stating that the feature has not been implemented. Verbiage is not being tested.
    - Note: The error message appears inside the #message tag, and will be placed inside a div.errorMessage tag.

Notes: 
    - A Selenium Test is being checked in with this update.
    - Following TDD, BDD design pattern, the Selenium test should be created before the code.
    - The code should then be written to make the test pass.
    - /SeleniumTests/change-calculator.side

---
QA
- Normally the test is written before the code, or at the same time. However, since this is new, the test will be written after.
- Please write the tests for the above using Playwright for testing.

DEV
- Pull the code into your repo to use as a starting point.

---
Next Feature: Validation when the "Calculate" button is clicked.

QA:
- Please write the tests for the above using Playwright for testing.

DEV:
- The Selenium test must be written before the code implementation.
    - Option 1: Have me write the selenium test
    - Option 2: You write the selenium test
- Once the Selenium test is written, implement the code to make the test pass.
- The selenium file should be placed in the "/"SeleniumTests" folder and named "change-calculator.side".
- Note: If you are writing both the test and the code, you can follow TDD (Test Driven Development). Write just enough of the test, to watch it fail. Then write just enough code to make the test pass. Continue this process until all code is written and passing. Please push both your code, and the updated Selenium file to the repo at the same time.

Acceptance Criteria
- When Cents is not valid
    - The first input in section-cents will retain the value entered
    - The first input in section-quarters will be empty
    - The first input in section-dimes will be empty
    - The first input in section-nickels will be empty
    - The first input in section-pennies will be empty
    - The error message will appear
    - The error message will read: "Cents must be a valid whole number between 0 and 99"
    - *Note: The verbiage of the error message is not being tested under this feature. It is coming from the CoinCalculatorResults and will be tested under that story.
- The following conditions must be tested. If any are true, then the input is considered invalid. The above tests will need applied for each of the failure conditions listed below.
    - The first input in section-cents will retain the value entered
    - The first input in section-quarters will be empty
    - The first input in section-dimes will be empty
    - The first input in section-nickels will be empty
    - The first input in section-pennies will be empty
    - The error message will appear
- When Cents is greater than 99
    - When Cents is not a number.
    - When Cents is greater than 99
    - When Cents is less than 0
    - When Cents is not an integer
- If Cents is valid (We can ignore this condition)
    - The error message should not display.
    - Also remove the not-implemented error


Note: 
 - The selenium test will need updated for the base url.
 - Also, "CoinCalculator.side" which had the additional tests has been left for reference. However, some of the criteria has changed so the tests will not work as is.
 - Please save the new tests as "change-calculator.side", updating the current version.