//검색 했을 때 알림
document.getElementById("search").addEventListener("change", (e) => {
    alert("추후 서비스 제공 예정");
    document.getElementById("search").value = "";
});
//내비게이션 클릭했을 때 알림
document.getElementById("nav").addEventListener("click", (e) => {
    alert("추후 서비스 제공 예정");
});

//좋아요 눌렀을 때 하트 색깔, 좋아요 갯수 + 1 or 한번 더 누르면 - 1
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

//댓글 좋아요, 싫어요 버튼 클릭 시 + 1 두번 누르면 취소
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

// 댓글 개수 구하는 코드
const totalComments = document.getElementsByClassName('commentN');
const totalComment = document.querySelector('.usersComment h5');
totalComment.textContent = `총 ${totalComments.length}개`;
