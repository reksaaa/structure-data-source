class Student {
  constructor(firstName, lastName, year, tardies) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = tardies;
    this.scores = [];
  }

  fullname() {
    return `${this.firstName} ${this.lastName}`;
  }

  markStudentLate() {
    if (this.tardies >= 3) {
      return "EXPELLED!!";
    }

    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    // 28/3
    return sum / this.scores.length;
  }

  static EnrollStudent() {
    return "Its time for enrolling students";
  }
}

let firstStudent = new Student("Reksa", "Ariansyah", "2020", 1);
let secondStudent = new Student("Edo", "Kondologit", "2021", 3);

secondStudent.addScore(10);
secondStudent.addScore(8);
secondStudent.addScore(10);

// console.log(Student.EnrollStudent());

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));
