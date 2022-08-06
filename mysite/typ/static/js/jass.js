let time = document.querySelector('#time');
let counter2 = document.querySelector('#counter2');
let result = document.querySelector('#result');
let container = document.querySelector("#container");
let word = document.querySelector('#word');
let character = document.querySelector('#characters');
let error = document.querySelector('#error');
let typingText = document.querySelector("#qouteDisplay");
let userInput = document.querySelector("#qouteInput");
let start = document.querySelector("#start");
let skor = document.querySelector("#skor");
let refresh = document.querySelector("#divbutt");
let sure=document.getElementById("counter2");
let timer=60;
let interval =null;
let usr=document.querySelector("#bass");
let errorCounter = 0;
let wordsCounter = "";
let index = 0;
let namme = document.querySelector("#name");
var admin="";
time.addEventListener("click", () => {
    if (sure.style.display != "none") {
        sure.style.display = "none";
    }
    else {
        sure.style.display = "grid";
    }
})

// Kelimeleri dizi halıinde tanımlama 
let words = [
    "üzerinde", "bunu", "arkadaş", "bir", "ses", "an", "yüz", "yine", "söz", "bunun",
    "kullanmak", "onun", "yıl", "fazla", "yaş", "adam", "girmek", "bilgi", "demek", "bazı", "göre",
    "bakmak", "sistem", "zaman", "kalmak", "bulmak", "yüzde", "dönem", "ancak", "küçük", "yapmak",
    "ev", "sormak", "zor", "duymak", "yapılmak", "son", "devlet", "bırakmak", "anlatmak", "ben",
    "şimdi", "karşı", "göz", "dünya", "ara", "iki", "getirmek", "yaşamak", "şu", "siz", "üzerine",
    "anne", "ay", "onlar", "orta", "su", "dönmek", "bütün", "genç", "çok", "almak", "var", "kadar",
    "başlamak", "atmak", "sıra", "kişi", "içinde", "yan", "oturmak", "başka", "böyle", "süre",
    "yani", "hiçbir", "aynı", "her", "hal", "kadın", "hem", "biz", "çocuk", "iş", "ile", "doğru",
    "olay", "birbiri", "konuşmak", "çünkü", "diye", "uzun", "bu", "değil", "gece", "nasıl", "dış",
    "etmek", "biri", "en", "tüm", "görmek", "ad", "kullanılmak", "ve", "bulunmak", "kız", "yeni",
    "sorun", "iç", "sonra", "ya", "hep", "insan", "neden", "bile", "veya", "kendi", "ülke", "güzel",
    "koymak", "düşmek", "hemen", "saat", "sevmek", "ürün", "yok", "verilmek", "el", "artık", "alan",
    "ön", "ne", "biraz", "büyük", "iyi", "az", "kapı", "burada", "sadece", "birlikte", "diğer", "alınmak",
    "bugün", "olmak", "durmak", "yer", "yemek", "istemek", "yazmak", "para", "gelmek", "konu", "taraf",
    "çıkmak", "baba", "düşünmek", "önce", "baş", "anlamak", "gerekmek", "sen", "yol", "söylemek", "için",
    "tutmak", "sonuç", "sahip", "önemli", "açmak", "çekmek", "çalışmak", "bilmek", "çıkarmak", "öyle",
    "şekil", "daha", "vermek", "beklemek", "göstermek", "bunlar", "sağlamak", "kim", "ise", "ki", "gitmek",
    "durum", "şey", "kitap", "hayat", "geçmek", "tek", "ama", "gibi", "hiç", "ilk", "alt", "işte", "gün"
];

//sonuç ekranını başta gizleme
document.getElementById("bass").style.display="none";
result.style.visibility = "hidden";
// kelimeleri rastgele yapma, harfleri ayırma ve sayfa yüklenme fonksiyonu:

document.addEventListener("DOMContentLoaded", () => {
    userInput.disabled = false;
    var admin = prompt("Adınınız giriniz:");
    

    const myInput = document.getElementById('qouteInput');
    myInput.onpaste = e => e.preventDefault();

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    shuffle(words);
    function typ() {
        let wordss = words.join(" ");
        wordss.split('').forEach(element => {

            let spantxt = document.createElement("span");
            spantxt.innerText = element;
            document.getElementById("qouteDisplay").appendChild(spantxt);
        })
    }
    time.style.animation = "none";

   function kontrol(){
       while(admin!=""){
       time.style.animation="tim 1s infinite alternate";
        typ()
        userInput.focus();
        interval =setInterval(cD,1000);
        time.style.display = "grid";
        result.style.display = "none";
        start.style.pointerEvents = "none";
   }
}
    
});
refresh.addEventListener("click", () => {
    window.location.reload();
})

// süre ayarlaması
let cD=() =>{
    if(timer>0){
        timer--;
        if (timer>=10) {
            sure.innerText="0:"+timer;
        }
        else{
            sure.innerText="0:0"+timer;
        }
    }


    else {
        admin=admin.toString();
        usr.innerText = admin;
       usr.style.display="grid";
        var message =admin.toString();
        usr.innerText=message;
        start.innerText = "Süre doldu ⏰"
        userInput.disabled = true;
        time.style.display = "none";
        result.style.display = "flex";
        result.style.visibility = ""
        userInput.style.visibility = "hidden";
        container.style.visibility = "hidden";
        refresh.style.display = "flex";

        wordsCounter = userInput.value;
        character.innerText = index;
        word.innerText = wordsCounter.split(' ').length - 1;
        error.innerText = errorCounter;

        clearInterval(interval);
        timer = 0;


    }
}
userInput.addEventListener("input", e => {
    let userValue = userInput.value.split("");



    //console.log(userValue);


    let randomText = typingText.querySelectorAll("span");

    // silme tuşuna basıldığında sınıfları silecek 

    if (e.inputType == "deleteContentBackward") {
        index--;
        randomText[index].classList.remove("correct");
        randomText[index].classList.remove("incorrect");

    }

    // girilen değer eşit ise olacaklar
    else if (userValue[index] == randomText[index].innerText) {
        randomText[index].classList.add("correct");
        index++;


    }
    else {
        randomText[index].classList.add("incorrect");
        index++;
        errorCounter++;
    }
    while (userInput.value.endsWith(" ")) {
        userInput.clear();
    }


    // Yazılan kelime sayısına göre kelime hizasını kaydırma
    switch (index) {
        case 50:
            container.scrollTo(0, 45);
            break;
        case 105:
            container.scrollTo(40, 68);
            break;
        case 150:
            container.scrollTo(70, 108);
            break;
        case 200:
            container.scrollTo(110, 150);
            break;
        case 250:
            container.scrollTo(150, 180);
            break;
        default:
            break;
    }
})

//     {
//     for(var i=1;i<words.length;i++){
//     html="<span> "+words[Math.floor(Math.random() * words.length)]+" </span>"
//     document.getElementById('qouteDisplay').innerHTML+=html;

