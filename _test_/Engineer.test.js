// My Attempt
const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "johnDoe";
    const employeeInstance = new Engineer("John Doe", 2, "johnDoe@gmail.com", testGithub);
    expect(employeeInstance.gitHub).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "JohnDoe";
    const employeeInstance = new Engineer("John Doe", 2, "JohnDoe@gmail.com", testGithub);
    expect(employeeInstance.getGitHub()).toBe(testGithub);
});