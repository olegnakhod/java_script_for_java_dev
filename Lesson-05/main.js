'use strict'

function makeBuffer(){
    let bufferValue = [];

    return{
        add: function(value){
            bufferValue.push(value + '');
        },
        clear: function(){
            bufferValue = [];
        },
        print: function(){
            let str = bufferValue.join(' ');
            return str;
        }
    }
}

let buffer = makeBuffer();

buffer.add('JavaScript');
buffer.add( 'Вчити');
buffer.add( 'Потрібно!');
console.log(buffer.print());

buffer.clear();
console.log('------------------');

buffer.add(0);
buffer.add(1);
buffer.add(0);
console.log (buffer.print());

buffer.clear();
console.log('------------------');

buffer.add("Тест");
buffer.add("тебе не з'їсть");
console.log(buffer.print());

buffer.clear ();
console.log('------------------');

console.log(buffer.print());