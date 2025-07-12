
document.getElementById("search").addEventListener("change", (e) => {
    alert("추후 서비스 제공 예정");
    document.getElementById("search").value = "";
});
document.getElementById("nav").addEventListener("click", (e) => {
    alert("추후 서비스 제공 예정");
});

document.getElementById("like").addEventListener("click", (e) => {
    const icon = document.getElementById("likeIcon");
    let likedSongCount = Number(document.getElementById("likeNumber").textContent);
    
    if (icon.innerHTML == '🩶') {
        icon.innerHTML = '❤️';
        likedSongCount++;
    } else {
        icon.innerHTML = '🩶'
        likedSongCount--;
    }

    document.getElementById("likeNumber").textContent = likedSongCount;
});

let goodComment = false;
document.getElementById("good").addEventListener("click", (e) => {
    let goodCount = Number(document.getElementById("goodCount").textContent);

    
    goodCount = (goodComment == true) ? goodCount-1 : goodCount+1;
    goodComment = !goodComment;

    document.getElementById("goodCount").textContent = goodCount;
});

let badComment = false;
document.getElementById("bad").addEventListener("click", (e) => {
    let badCount = Number(document.getElementById("badCount").textContent);

    
    badCount = (badComment == true) ? badCount-1 : badCount+1;
    badComment = !badComment;

    document.getElementById("badCount").textContent = badCount;
});