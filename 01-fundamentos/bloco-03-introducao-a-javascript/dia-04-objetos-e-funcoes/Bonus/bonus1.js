let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const nightShift = (object, key, value) => object[key] = value;
nightShift(lesson2, 'turno', 'noite');

const listKeys = (object) => console.log(Object.keys(object));
listKeys(lesson2);


function objectSize(object) {
    let countSize = Object.entries(object);
    console.log(countSize.length);
}
objectSize(lesson3);

const listValues = (object) => console.log(Object.values(object));
listValues(lesson2);


let allLessons = Object.assign({}, { 
    lesson1: lesson1, 
    lesson2: lesson2, 
    lesson3: lesson3, 
});

console.log(allLessons);


function sumStudents() {
  return lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes;
}
console.log(sumStudents());

function getValueByNumber(object, num) {
  return Object.values(object)[num];
}
console.log(getValueByNumber(lesson1, 3));

function checkKeyValue(obj, key, value) {
  let check = Object.entries(obj);
  let tf = false;
  for (let index in check) {
    if (check[index][0] === key && check[index][1] === value) {
      tf = true;
    }
  }
  return tf
}

console.log(checkKeyValue(lesson2,'professor','Carlos'));
