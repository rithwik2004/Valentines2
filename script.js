document.getElementById("valentineButton").addEventListener("click", function() {
    document.getElementById("hiddenMessage").style.display = "block";
});

document.getElementById("yesButton").addEventListener("click", function() {
    alert("Yay! you're awesome ❤️");
});

// Fake moving "No" button
document.getElementById("noButton").addEventListener("mouseover", function() {
    let randomX = Math.random() * 400 - 200; // Random movement range
    let randomY = Math.random() * 400 - 200;
    this.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
