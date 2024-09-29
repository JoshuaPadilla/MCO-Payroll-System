const list = [1, 2, 2];
const len = list.length;
let idlen = String(len).length;
let id;
switch(idlen){
    case 1:
        id =  `000${idlen}`;
        break;
    case 2:
        id =  "00";
        break;
    case 3:
        id =  "0";
        break;
    default:
        id =  "0000";
        break;
}

console.log(id);
console.log(idlen);
console.log(list.length)
