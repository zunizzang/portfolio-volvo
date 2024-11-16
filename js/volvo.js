$(document).ready(function() {
    $('#popup-banner').fadeIn();     // 페이지 로드 시 팝업 배너 보여주기
    $('.close-btn').on('click', function() {   
        $('#popup-banner').fadeOut();   // 닫기 버튼 클릭 시 팝업 배너 숨기기
    });
});







$(document).ready(function() {
    $('.slide').bxSlider({
        auto: true, // 자동 슬라이드
        pause: 3000, // 슬라이드 간격
        controls: true, // 이전/다음 버튼 표시
        pager: false, // 페이지 표시 비활성화
        nextSelector: '.next', // 다음 버튼 선택자
        prevSelector: '.prev', // 이전 버튼 선택자
        caption:true
    });
});
let currentIndex = 0; // 현재 슬라이드 인덱스
    const slides = document.querySelectorAll('.photo-slide li'); // 슬라이드 요소 선택
    const totalSlides = slides.length; // 총 슬라이드 수

    // 슬라이드 이동 함수
    function updateSlidePosition() {
        const slideWidth = slides[0].clientWidth; // 슬라이드 너비
        const newTransform = -currentIndex * slideWidth; // 이동할 거리 계산
        document.querySelector('.photo-slide ul').style.transform = `translateX(${newTransform}px)`; // 슬라이드 이동
    }

    // 이전 버튼 클릭 이벤트
    document.querySelector('.circleprev').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--; // 인덱스 감소
        } else {
            currentIndex = totalSlides - 1; // 마지막 슬라이드로 돌아감
        }
        updateSlidePosition(); // 슬라이드 위치 업데이트
    });

    // 다음 버튼 클릭 이벤트
    document.querySelector('.circlenext').addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++; // 인덱스 증가
        } else {
            currentIndex = 0; // 첫 번째 슬라이드로 돌아감
        }
        updateSlidePosition(); // 슬라이드 위치 업데이트
    });
    $(".page-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 500); //스크롤 맨위로 올리기
        return false;
    })