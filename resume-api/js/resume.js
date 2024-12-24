

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



/*

<div class="social-icons">
    <a class="social-icon" href="#!"><i class="fab fa-linkedin-in"></i></a>
    <a class="social-icon" href="#!"><i class="fab fa-github"></i></a>
    <a class="social-icon" href="#!"><i class="fab fa-twitter"></i></a>
    <a class="social-icon" href="#!"><i class="fab fa-facebook-f"></i></a>
</div>


*/