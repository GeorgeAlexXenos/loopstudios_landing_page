// add content for main section grid

const creation = [
  {
    id: 1,
    name: "Deep earth",
    img: "images/desktop/image-deep-earth.jpg",
    imgS: "images/mobile/image-deep-earth.jpg",
  },
  {
    id: 2,
    name: "Night Arcade",
    img: "images/desktop/image-night-arcade.jpg",
    imgS: "images/mobile/image-night-arcade.jpg",
  },
  {
    id: 3,
    name: "Soccer Team VR",
    img: "images/desktop/image-soccer-team.jpg",
    imgS: "images/mobile/image-soccer-team.jpg",
  },
  {
    id: 4,
    name: "The grid",
    img: "images/desktop/image-grid.jpg",
    imgS: "images/mobile/image-grid.jpg",
  },
  {
    id: 5,
    name: "From up above VR",
    img: "images/desktop/image-from-above.jpg",
    imgS: "images/mobile/image-from-above.jpg",
  },
  {
    id: 6,
    name: "Pocket Boreals",
    img: "images/desktop/image-pocket-borealis.jpg",
    imgS: "images/mobile/image-pocket-borealis.jpg",
  },
  {
    id: 7,
    name: "The curiosity",
    img: "images/desktop/image-curiosity.jpg",
    imgS: "images/mobile/image-curiosity.jpg",
  },
  {
    id: 8,
    name: "Make it Fisheye",
    img: "images/desktop/image-fisheye.jpg",
    imgS: "images/mobile/image-fisheye.jpg",
  },
];

const addContent = document.getElementById("addContent");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(creation);
});

function displayMenuItems(creationItem) {
  let displayMenu = creationItem.map(function (item) {
    return `<div class="col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="creations d-none d-lg-block d-md-block" style=" background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
              url(${item.img});
               background-repeat: no-repeat;
               background-position: center center;
               background-size: cover;
               height: 400px;
               margin: 10px auto;">
              <div class="span">
                <span class="text-uppercase">${item.name}</span>
              </div>
            </div>

             <div class="creations d-block d-lg-none d-md-none" style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
             url(${item.imgS});
             background-repeat: no-repeat;
             background-position: center center;
             background-size: cover;
             height: 200px;
             margin: 10px auto;">
             <div class="span">
             <span class="text-uppercase">${item.name}</span>
             </div>
            </div>

          </div> `;
  });

  displayMenu = displayMenu.join("");
  console.log(displayMenu);
  addContent.innerHTML = displayMenu;
}

$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 150);
});
