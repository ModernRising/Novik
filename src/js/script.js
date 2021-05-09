



let link = document.querySelectorAll(".menu__link");
for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("menu__link_active");
    current[0].className = current[0].className.replace(" menu__link_active", "");
    this.className += " menu__link_active";
  });
}