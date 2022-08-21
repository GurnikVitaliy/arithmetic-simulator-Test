let p = '';
let n = '';

for(let i = 0; i < 3; i++) {
    let x = Math.floor(Math.random() * 13) + 3,
      y = Math.floor(Math.random() * 13) + 3,
      result = x + y;

    let task = +prompt(`${x} + ${y} = `);
    if(task === result) {
        p += `${x} + ${y} = ${result}`+'<br>';
    }
    else {
        n += `${x} + ${y} = ${result}`+'<br>';
    }
}

document.querySelector('.main__positive').innerHTML += p;
document.querySelector('.main__negative').innerHTML += n;
   
