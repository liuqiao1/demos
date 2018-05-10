const student = require('./student');
const teacher = require('./teacher');

const add = function(teacherName, students){
    teacher.add(teacherName);
    students.forEach(element => {
        student.add(element);
    });
}

exports.add = add;