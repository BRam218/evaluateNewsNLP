// Import the js file to test
import { checkURL } from "../src/client/js/urlChecker";

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the submit functionality", () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.
  test("Testing the checkForName() function", () => {
    // Define the input for the function, if any, in the form of variables/array
    // Define the expected output, if any, in the form of variables/array
    // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
    // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
    expect(checkURL).toBeDefined();
  });
});

//Test if checkURL is a valid function. describe() function takes two arguments - the string description and a callback function
describe('Testing if "checkURL()" is a valid function', () => {
  //Test function
  test('"checkURL() has to be a function', async () => {
    //Definition of the expected output. expect() function
    expect(typeof checkURL).toBe("function");
  });
});
