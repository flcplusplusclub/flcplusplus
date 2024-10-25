const ads = [
    "ads/ad1.PNG", 
    "ads/ad2.PNG", 
    "ads/ad3.PNG",
    "ads/ad4.jpg",
    "ads/ad5.PNG"
]

window.onload = function() {
    ad = document.getElementById("ads")
    let current = 0;

    function displayNewAd() {
        ad.src = ads[current];
        current = (current + 1) % ads.length
    }

    setInterval(displayNewAd, 3000);
}