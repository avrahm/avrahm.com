// console.log('connected');

$("#exampleModal").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var type = button.data("type"); // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var image = button.data("image");
  var title = button.data("title");
  var description = button.data("description");
  var link = button.data("link");
  var modal = $(this);
  modal.find(".modal-title").text(title);
  var modalImage = document.getElementById("modal-image");
  modalImage.innerHTML = "<img src='" + image + "' width='100%' >";
  var modalDescription = document.getElementById("modal-description");
  modalDescription.innerHTML = description;
  var modalLink = document.getElementById("modal-link");
  if (link != undefined) {
    modalLink.innerHTML =
      "<a href='" +
      link +
      "'class='btn btn-info' target='_blank'><i class='fas fa-external-link-alt'></i> Go</a>";
  }

  if (type === "video") {
    // modal.find(".modal-body input").val(type);
    modalImage.innerHTML =
      '<iframe width="100%" height="315" src="' +
      link +
      '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  }
  if (type === "design") {
    // modal.find(".modal-body input").val(type);
    modalImage.innerHTML =
      '<iframe width="100%" height="800px" src="' +
      link +
      '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
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

let skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Bootstrap",
  "node.js",
  "npm",
  "Git",
  "ReactJS",
  "ExpressJS",
  "MongoDB",
  "MySQL",
  "Photoshop",
  "PhpStorm",
  "Visual Studio Code",
  "Github",
];
