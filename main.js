/* Page Content*/
const homePageContent = `
    <h1>Welcome</h1>
    <p id="my-id">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quibusdam esse placeat temporibus atque cumque quod delectus repellat officia exercitationem at distinctio corrupti neque, id et assumenda, rerum molestias dignissimos!</p>
    <p class="my-class">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit fugit reprehenderit placeat et, quae quis. Accusamus, recusandae minima! Corporis earum esse modi aspernatur beatae necessitatibus, incidunt odit ratione fugit nemo.</p>
    <p class="second class">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo aperiam inventore expedita sunt illum necessitatibus, tenetur, non amet ex neque placeat voluptates fugit voluptatibus repellendus aspernatur ipsum, voluptate mollitia? Ipsum!</p>
    `;

const aboutPageContent = `
     <h1>About Myself</h1>
     <p>Here you can write something  about  yourself</p>
     <p>I am Awesome!</p>
     `;

const hobbiesPageContent = `
<h1>My Hobbies</h1>
<p>Here you can write about your hobbies</p>
`;

const contactPageContent = `
<h1>Contacts</h1>
<p>Contact Me</p>
`;

/* Functions*/
// Grab Elements
const mainContent = document.querySelector("#main-content");
const navLinks = document.querySelectorAll("nav a");

// Add event listeners to all elements in navlinks

navLinks.forEach(link => {
    link.addEventListener("click", event => {
         event.preventDefault();//Prevent page reload
         const page = link.dataset.page;//Get the string from each data se-page attribute
         setActiveNavLink(link);//More active class
         updatePageContent(page);//Render new page
    });
});
// way1 for of
// Set all the "active" class on the page we are currently on
function setActiveNavLink(link) {
      for(nav of navLinks){
           nav.classList.remove("active");
      }
           link.classList.add("active");

}
//way 2
/*function setActiveNavLink(link){

    navLinks.forEach(link => link.classList.remove("active"));
    link.classList.add("active");

}*/
//update page content
function updatePageContent(page) {
    switch(page){
        case "home" :
            mainContent.innerHTML = homePageContent;
            break;
        case "about":
            mainContent.innerHTML = aboutPageContent;
            break;
        case "hobbies" :
            mainContent.innerHTML = hobbiesPageContent;
            break;
        case "contact" :
            mainContent.innerHTML = contactPageContent;
            break;
        default:
            mainContent.innerHTML =homePageContent;
            break;
    }
}
//Since we have a empty div ,we need some default content
//We run this fun once without property to get the default case of the switch
updatePageContent();