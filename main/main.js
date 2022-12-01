// Zmiana zakladki strony //

const list = document.querySelectorAll('.list');
function activeLink()
{
list.forEach((item) =>
item.classList.remove('active'));
this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));



// Nr telefonu//

const pageChange = document.querySelector('.ico1');

const page = (body) => {
    return `<div class="phoneContainer">
    <div class="phone">
        <p class="phoneName">Zapraszamy do kontaktu pod nr telefonu:</p>
        <p class="phoneNumber">788123123</p>
        <button class="phoneOk">Zamknij okno</button>
    </div>
    </div>`;
};

function newPage() {

const pageContainer = document.createElement('div');
pageContainer.innerHTML = page();
document.body.appendChild(pageContainer);

const closePage = document.querySelector(".phoneOk");

closePage.addEventListener("click", () => {
    const page = document.querySelector(".phoneContainer");
    page.remove();
});

}

pageChange.addEventListener('click', newPage);

// Zmiana Zakladki //

$('.icon1').click(function() {
    $('#infos').html(`
    <p class="title">What is Lorem Ipsum?</p>
    
    <p class="infoDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
`);
  });
  
  $('.icon2').click(function() {
    $('#infos').html(`<div class="usluga">
        <p class="NrUslugi">Usługa 1</p>
        <i class="opisUslugi">Lorem ipsum dolor sit amet,</i>
        <button class="umow1">Umów</button>
    </div>
    <div class="brr1"></div>
    <div class="usluga">
        <p class="NrUslugi">Usługa 2</p>
        <i class="opisUslugi">consectetur adipiscing elit</i>
        <button class="umow2">Umów</button>
    </div>
    <div class="brr1"></div>
    <div class="usluga">
        <p class="NrUslugi">Usługa 3</p>
        <i class="opisUslugi"> Aenean leo diam, cursus non orci vitae</i>
        <button class="umow3">Umów</button>
    </div>
    <div class="brr1"></div>
    <div class="usluga">
        <p class="NrUslugi">Usługa 4</p>
        <i class="opisUslugi">Nullam nisl elit, convallis ac ipsum sed</i>
        <a href="rezerwacja1.html"><button class="umow4">Umów</button></a>
    </div> `
    );

  });
  
  $('.icon3').click(function() {
    $('#infos').html(`
    <p class="title">Why we use it?</p>
    
    <p class="infoDescription">Lorem Ipsum isfdsfsf simply dumm sgdsg text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
`);
  });
  

  
  




