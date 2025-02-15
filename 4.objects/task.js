function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    this.marks?.push(...marks)
}

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) {
        return 0;
    }

    const sum = this.marks.reduce((acc, el) => acc += el);
    return sum / this.marks.length;

}

Student.prototype.exclude = function (reason) {
    this.excluded = reason;
    delete this.marks;
    delete this.subject;
}

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
student2.addMarks(5, 4, 3)
console.log(student2);
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}