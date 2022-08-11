/* ======= Typing Animation ======*/
var typed = new Typed(".typing",{
    strings:["Web Designer", "Web Developer", "Backend Developer", "Programmer", "Database Designer"],
    typeSpeed: 100,
    Backaspeed:60,
    loop:true
})

/* ========  Aside ================ */
const nav = document.querySelector(".nav"),
      navList = document.querySelectorAll(".nav-link"),
      totalNavList = navList.length;
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
for(let i = 0; i < totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        removeBackSection();
        for(let j=0; j<totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth < 1200){
            asideSelectionTogglerBtn();
        }
    })
    
}
function addBackSection(num){
    allSection[num].classList.add("back-section");
}
function removeBackSection(){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("back-section");
    }
}
function showSection(element){
    const traget = element.getAttribute("href").split("#")[1];
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    document.querySelector('#' + traget).classList.add("active");

}
function updateNav(element){
    for(let i=0; i<totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index");
    // console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removeBackSection()
    addBackSection(sectionIndex);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside =document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSelectionTogglerBtn();
});
function asideSelectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}

document.querySelector("#backHome").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index");
    // console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removeBackSection()
    addBackSection(sectionIndex);
});
// Email send
var sendBtn = document.getElementById("sendMail");
sendBtn.addEventListener("click", function(e){
    e.preventDefault();
    alert("Not working Now");
    // var name = document.getElementById("name");
    // var email = document.getElementById("email");
    // var subject = document.getElementById("subject");
    // var message = document.getElementById("message");
    // var body = "Name: " + name + "<br> Email: " + email + "<br> Subject " + subject + "<br> Message " + message;
    // Email.send({
    //     Host : "smtp.gmail.com",
    //     Username : "worldinfinityloop@gmail.com",
    //     Password : "acxgfzgefayetyux",
    //     To : 'worldinfinityloop@gmail.com',
    //     From : email,
    //     Subject : subject,
    //     Body : body
    // }).then(
    //   message => alert(message)
    // );

});