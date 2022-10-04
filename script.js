// document.body.style.background = "rgba(0,0,0,0.5)"
// №1 Аргумент как обьект
const data = {
    name: 'alex',
    age: 24
}

function about (obj){
    console.log('your name = ' + obj.name);
    console.log('your age = ' + obj.age);
}
 
about(data)


// №2 функция генератор 
function* idGenerator(){
    let id = 1;
    while(true){
        yield id++;
    }
}
const myIdGenerator = idGenerator();
console.log(myIdGenerator.next().value);
console.log(myIdGenerator.next().value);
console.log(myIdGenerator.next().value);
console.log(myIdGenerator.next().value);
console.log(myIdGenerator.next().value);

// #3 форматируемвывод json

const arg = {
    name: 'alex',
    age: 24,
    data: ['166104', '123456789', '32df321fgf12']
}
console.log(JSON.stringify(arg));
console.log(JSON.stringify(arg,null,2));
// после запятой разделитель , и потом количество пробелов 

// #4 оператор опциональной последовательности 
const subway = {
    red: ['station 1','station 2', 'station 3'],
    green: ['station 4',['station 5'],['station 6'] ]

}
console.log(subway.green.join(' '));
// если поставить ? после элемента которого возможно нет то ошибки не произойдет ,
// а будет undefind
console.log(subway.blue?.join(" "))

// #5 деструктурирующее присваивание 
const {name, age} = arg;
console.log(name,age);

const {0: pass, 1: uac} = arg.data;
console.log(pass, uac);

// №6 создание копии массива
let arr =[44,55]
console.log([...arr,33,66]);

// #7 удаление дубликатов из массива 
const myArr=[3,5,6,4,3,78,9,0,8,6,4,2,3,4,543,4,56,7,87];
console.log(myArr);
// удалим дубликаты  создав SET 
console.log(new Set(myArr));
//  если нужен именно массив на основе базового без дубликатов
console.log([...new Set(myArr)]);

// №8 приводим к number через mapl
//  если во вложении двумерный массив  с неск элементами , то нужно примениь flat
const ar8Num = ar8.map(Number);
console.log(ar8);
console.log(ar8Num);
// #9
// время выполнение кода 
console.time('ex 1');
let a=77;
let b=99;
[a,b]=[b,a];
console.time("ex 1")

   