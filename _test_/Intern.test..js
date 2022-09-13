// My Attempt
const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("John", 2, "johndoe@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("John", 2, "johndoe@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});