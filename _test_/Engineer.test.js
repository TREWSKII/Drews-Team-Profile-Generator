// My Attempt
const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "johnDoe";
    const employeeInstance = new Engineer("John Doe", 2, "johnDoe@gmail.com", testGithub);
});
