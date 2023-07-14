document.querySelector(".navbar-toggle").addEventListener("click", () => {
      document.querySelector(".nav-menu").style.cssText = `display: block; right: 0;`;
});

document.querySelector(".fa-close").addEventListener("click", () => {
     document.querySelector(".nav-menu").style.cssText = `display: none;right: -100%;`;
});

let colors = ["rgba(177, 154, 23, 0.781)", "rgb(187, 190, 211)", "gray", "rgb(226, 184, 184)", "red"];
let items = document.querySelectorAll("ul li img");
items.forEach((ele,index) => {
    ele.addEventListener('click', function () {
        document.querySelector(".image img").src=`Assets/imgs/${index}.png`;
        document.body.style.cssText= `background-color:${colors[index]};`;
    });
})