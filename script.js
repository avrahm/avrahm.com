// console.log('connected');


function toggleHide(a,b,c) {
    let x = document.querySelectorAll(`#${a}`);
    let y = document.querySelectorAll(`#${b}`);
    let z = document.querySelectorAll(`#${c}`);
    for (i = 0; i < x.length; i++){
        if(x[i].style.display==="none"){

            x[i].style.display=('block');
        } else {

            x[i].style.display=('none');
        }
    }
    for (j = 0; j < y.length; j++){
        if(y[j].style.display==="none"){

            y[j].style.display=('block');
        } else {

            y[j].style.display=('none');
        }
    }
}
