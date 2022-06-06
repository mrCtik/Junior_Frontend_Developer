// for (let i = 0; i < 3; i += 1) {
//     let newStudent = prompt('Введите имя нового студента!');
//     if (newStudent) {
//       newStudent = newStudent.trim();
//       alert(`Добро пожаловать, ${newStudent}!`)
//     }
//   }

//   let StudentCounter = 0;
//   while (StudentCounter < 3) {
//     let newStudent = prompt('Введите имя нового студента!');
//     if (newStudent) {
//       newStudent = newStudent.trim();
//       alert(`Добро пожаловать, ${newStudent}!`)
//     }
//     StudentCounter += 1;
//   }

let StudentCounter = 0;
do {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
      newStudent = newStudent.trim();
      alert(`Добро пожаловать, ${newStudent}!`)
    }
    StudentCounter += 1;
}
while (StudentCounter < 3) 