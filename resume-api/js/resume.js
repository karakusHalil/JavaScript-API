

const apiUrl = "http://localhost:3000/";  // fetch ederken kolaylık olması için apiUrl'e attık
const personalInfoElement = document.getElementById("personal-info");  //html dosyamızdaki personal-info isimli id'yi yakaladık

fetch(apiUrl+"personal-info")
.then(response => response.json())
.then(data => {
    personalInfoElement.innerHTML = `
        <h1 class="mb-0">
            ${data.firstname}
            <span class="text-primary">${data.lastname}</span>
        </h1>
        <div class="subheading mb-5">
            ${data.address.district} · ${data.address.street}, ${data.address.town} · ${data.address.city} CO ${data.address.postalCode} · ${data.contact.phone} ·
            <a href="${data.contact.email}">${data.contact.email}</a>
        </div>
        <p class="lead mb-5">${data.description}</p>
    `;
})
.catch(err => console.log(err));


const socialAccounts = document.createElement("div"); // html dosyamızda silinen div'i js'de oluşturuyoruz
socialAccounts.classList = "social-icons";            // oluşturduğumuz div'e nasıl class ekliyoruz  


fetch(apiUrl+"social-accounts")
.then(response => response.json())
.then(data => {
//  console.log(data);
    data.forEach((account) => {
        socialAccounts.innerHTML += `
            <a id="social-${account.id}" class="social-icon" href="${account.platform}/${account.username}"><i class="${account.icon}"></i></a>
        `;
    })
    personalInfoElement.append(socialAccounts); // personalInfoElement adlı DOM elementine oluşturduğumuz socialAccounts'ı ekledik
})
.catch(err => console.log(err));


const experiencesElement = document.querySelector("#experience");
//console.log(experiencesElement);

fetch(apiUrl+"experiences")
.then(response => response.json())
.then(data => {
    const experincesList = document.querySelector("#experiences-list");
    experincesList.innerHTML = `<h2 class="mb-5">Experience</h2>`;
    data.forEach(item => {
        experincesList.innerHTML += `
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="flex-grow-1">
            <h3 class="mb-0">${item.title}</h3>
            <div class="subheading mb-3">${item.company}</div>
            <p>${item.description}</p>
        </div>
        <div class="flex-shrink-0"><span class="text-primary">${item.startDate} - ${item.endDate}</span></div>
            </div>
        `
    })
    experiencesElement.append(experincesList);
})
.catch(err => console.log(err));


const educationList = document.querySelector("#education-list");

fetch(apiUrl+"educations")
.then(response => response.json())
.then(data => {
    educationList.innerHTML = `<h2 class="mb-5">Education</h2>`;
    data.forEach(item => {
        educationList.innerHTML += `
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
    <div class="flex-grow-1">
        <h3 class="mb-0">${item.school}</h3>
        <div class="subheading mb-3">${item.faculty}</div>
        <div>${item.department}</div>
        <p>GNA: ${item.GNO}</p>
    </div>
        <div class="flex-shrink-0"><span class="text-primary">${item.startDate} - ${item.endDate}</span></div>
            </div>
        `;
    })
    
})
.catch(err => console.log(err));

const skillElement = document.querySelector("#skill-list");
const workflowElement = document.querySelector("#workflow-list");

fetch(apiUrl+"skills")
.then(response => response.json())
.then(data => {
    data.programLanguagesAndTools.forEach(item => {
        skillElement.innerHTML += `
            <li class="list-inline-item"><i class="${item.icon}"></i></li>
        `;
    });
    data.workflow.forEach(item =>{
        workflowElement.innerHTML += `
            <li>
                <span class="fa-li"><i class="fas fa-check"></i></span>
                ${item}
            </li>
        `;
    })
    
})
.catch(err => console.log(err));

const interestElement = document.querySelector("#interest-list");

fetch(apiUrl+"interest")
.then(response => response.json())
.then(data => {
    interestElement.innerHTML = `
    <h2 class="mb-5">Interests</h2>`;
    data.forEach(item => {
        interestElement.innerHTML += `
             <p>${item}</p>
        `
    })
})
.catch(err => console.log(err));

const awardElement = document.getElementById("award-header");
const awardList = document.querySelector("#award-list");
console.log(awardElement);

fetch(apiUrl+"award")
.then(response => response.json())
.then(data => {
    awardElement.innerHTML = `<h2 class="mb-5">Awards & Certifications</h2>`;
    data.forEach(item => {
        awardList.innerHTML += `
            <li>
                <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                ${item}
            </li>
        `
    })
    awardElement.append(awardList);
})
.catch(err => console.log(err));

