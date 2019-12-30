// console.log('connected');

$("#exampleModal").on("show.bs.modal", function(event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var type = button.data("type"); // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var image = button.data("image")
  var modal = $(this);
  if(type==="photo"){
      modal.find(".modal-title").text("View the " + type);
      modal.find(".modal-body input").val(type);
      modal.find(".modal-body img").image(image)
  } else if(type==="video"){
    modal.find(".modal-title").text("Play the " + type);
    modal.find(".modal-body input").val(type);
  } else if(type==="design"){
    modal.find(".modal-title").text("Check out the " + type);
    modal.find(".modal-body input").val(type);
  }
});

function toggleShow(a, b, c, d) {
  let x = document.querySelectorAll(`#${a}`);
  let y = document.querySelectorAll(`#${b}`);
  let z = document.querySelectorAll(`#${c}`);

  if (d == "all") {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("hide");
    }
    for (let j = 0; j < y.length; j++) {
      y[j].classList.remove("hide");
      // console.log(y[j])
    }
    for (let k = 0; k < z.length; k++) {
      z[k].classList.remove("hide");
      // console.log(z[k])
    }
  } else if (a == "photo") {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("hide");
    }
    for (let j = 0; j < y.length; j++) {
      y[j].classList.add("hide");
      // console.log(y[j])
    }
    for (let k = 0; k < z.length; k++) {
      z[k].classList.add("hide");
      // console.log(z[k])
    }
  } else if (a == "video") {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("hide");
    }
    for (let j = 0; j < y.length; j++) {
      y[j].classList.add("hide");
      // console.log(y[j])
    }
    for (let k = 0; k < z.length; k++) {
      z[k].classList.add("hide");
      // console.log(z[k])
    }
  } else if (a == "design") {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("hide");
    }
    for (let j = 0; j < y.length; j++) {
      y[j].classList.add("hide");
      // console.log(y[j])
    }
    for (let k = 0; k < z.length; k++) {
      z[k].classList.add("hide");
      // console.log(z[k])
    }
  }
}
