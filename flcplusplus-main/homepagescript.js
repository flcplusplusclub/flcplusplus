const ads = [
    "ads/ad1.PNG", 
    "ads/ad2.PNG", 
    "ads/ad3.PNG",
    "ads/ad4.jpg",
    "ads/ad5.PNG"
];

window.onload = function() {
    ad = document.querySelector(".item4");
    let current = 0;

    function displayNewAd() {
        ad.style.backgroundImage =  `url(${ads[current]})`;
        current = (current + 1) % ads.length;
    }
    setInterval(displayNewAd, 3000);
}