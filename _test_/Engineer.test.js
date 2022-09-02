// My Attempt
const Manager = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "johnDoe";
    const employeeInstance = new Engineer("John Doe", 2, "johnDoe@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "JohnDoe";
    const employeeInstance = new Engineer("John Doe", 2, "JohnDoe@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});