function search() {
    alert("해당 기능은 추후 업데이트 예정입니다.");
}

document.getElementById("join").addEventListener("click", () => {
    alert("신청 기간이 아닙니다.");
});

//좋아요 눌렀을 때 하트 색깔, 좋아요 갯수 + 1 or 한번 더 누르면 - 1
document.getElementById("like").addEventListener("click", (e) => {
    const icon = document.getElementById("likeIcon");
    let likedSongCount = Number(document.getElementById("likeNumber").textContent);
    
    if (icon.innerHTML == '🤍') {
        icon.innerHTML = '❤️';
        likedSongCount++;
    } else {
        icon.innerHTML = '🤍'
        likedSongCount--;
    }

    document.getElementById("likeNumber").textContent = likedSongCount;
});
