class Person {
    getSecretSalaryInfo() {
        function innerGetSalary() {
            let salary = 1000;
            return salary;
        };

        return innerGetSalary();
    }
}

console.log(new Person().getSecretSalaryInfo());
