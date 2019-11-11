// console.log('connected');


$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })

  

function toggleShow(a,b,c,d) {

    let x = document.querySelectorAll(`#${a}`);
    let y = document.querySelectorAll(`#${b}`);
    let z = document.querySelectorAll(`#${c}`);

    if(d=="all"){
        for (let i = 0; i < x.length; i++){
            x[i].classList.remove("hide");
        }
        for (let j = 0; j < y.length; j++){
            y[j].classList.remove("hide");
            // console.log(y[j])
        }
        for (let k = 0; k < z.length; k++){
            z[k].classList.remove("hide");
            // console.log(z[k])
        }
    } else if(a=="photo"){
        for (let i = 0; i < x.length; i++){
            x[i].classList.remove("hide");
        }
        for (let j = 0; j < y.length; j++){
            y[j].classList.add("hide");
            // console.log(y[j])
        }
        for (let k = 0; k < z.length; k++){
            z[k].classList.add("hide");
            // console.log(z[k])
        }
    } else if(a=="video"){
        for (let i = 0; i < x.length; i++){
            x[i].classList.remove("hide");
        }
        for (let j = 0; j < y.length; j++){
            y[j].classList.add("hide");
            // console.log(y[j])
        }
        for (let k = 0; k < z.length; k++){
            z[k].classList.add("hide");
            // console.log(z[k])
        }
    } else if(a=="design"){
        for (let i = 0; i < x.length; i++){
            x[i].classList.remove("hide");
        }
        for (let j = 0; j < y.length; j++){
            y[j].classList.add("hide");
            // console.log(y[j])
        }
        for (let k = 0; k < z.length; k++){
            z[k].classList.add("hide");
            // console.log(z[k])
        }
    }
}
