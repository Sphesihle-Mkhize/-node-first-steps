import {green} from './green.js';
import {yo} from './green.js';


// console.log(yo('Milani'));
// console.log(green('Sphe'));


let name = "Sphe";

name ="Milani"

console.log(green(name));

import figlet from 'figlet';
import chalk from 'chalk'
import cowsay from 'cowsay';

figlet('helllo. Sphe', function(err, data){
    if (err){
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});


const styleMessage = chalk.bgRed.black(green('Sphe'));
console.log(chalk.bgRed.black(green('Sphe')));


console.log(chalk.bgBlue.white(cowsay.say({
    text: green('Sphe')
})));