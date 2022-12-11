
document.querySelector("form").addEventListener("submit", myCal);
objArr=[];
function myCal(event) {
    event.preventDefault();
    let obj = {
        Moviename: document.querySelector("#name").value,
        mainActor: document.querySelector("#mainActor").value,
        desc: document.querySelector("#desc").value,
        release: document.querySelector("#release").value,
        category: document.querySelector("#category").value,
        price: document.querySelector("#price").value,
    }
    objArr.push(obj)
    localStorage.setItem("movie-list",JSON.stringify(objArr))
}
