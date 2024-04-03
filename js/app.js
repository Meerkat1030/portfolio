// 이미지 갯수에 따라 점을 생성하는 함수
function addDots() {
    // 각 슬라이드 클래스마다 점을 추가합니다.
    for (var i = 0; i < 5; i++) {
        var slides = document.getElementsByClassName("mySlides" + (i + 1));
        var dotsContainer = document.querySelector(".slideshow-container .dot-container" + (i + 1));

        for (var j = 0; j < slides.length; j++) {
            var dot = document.createElement("span");
            dot.classList.add("dot");
            // 클릭 이벤트를 수정하여 올바른 slideClassName과 이미지 인덱스 값을 전달합니다.
            dot.setAttribute("onclick", "showSlides(" + (j + 1) + ", 'mySlides" + (i + 1) + "', 'slide-text" + (i + 1) + "')");

            dotsContainer.appendChild(dot);
        }

        // 처음 진입 시 첫 번째 점에 하이라이트 표시
        var firstDot = dotsContainer.querySelector(".dot");
        if (firstDot) {
            firstDot.classList.add("active");
        }
    }
}



// 슬라이드 초기화 시에 점을 생성
window.onload = function() {
    addDots();
};
const toTopEl = document.querySelector('#to_top');
const aboutMeEl = document.querySelector('#aboutMe');
const skillsEl = document.querySelector('#skills');
const archiveEl = document.querySelector("#archive")
const projectsEl = document.querySelector("#projects");
const historyEl = document.querySelector("#history");
const seemoreEl = document.querySelector("#see_more");
const headerEl = document.querySelector('#header');
const headerFontEls = document.querySelectorAll('header .sub-menu ul.menu a')
const mainTitleEl = document.querySelector('header .maintitle');
//gsap을 활용하여 부드러운 이동 및 더보기 버튼 구현

toTopEl.addEventListener('click', function () {
    gsap.to(window, .8, {
        scrollTo: 0
    });
});
// 최상단으로 이동

seemoreEl.addEventListener('click', () => {
    gsap.to(window, .8, {
        // scrollTo:"#aboutMe_section"
        scrollTo: 830
    });
});
// 더알아보기 버튼 작동

aboutMeEl.addEventListener('click', () => {
    gsap.to(window, .8, {
        scrollTo: 830
        // scrollTo:"#aboutMe_section"
    });
});
// 메뉴바를 통해 aboutme로 이동

skillsEl.addEventListener('click', () => {
    gsap.to(window, .8, {
        scrollTo: 1255
        // scrollTo:"#skills_section"
    });
});
//메뉴바를 통해 skillinventory로 이동


archiveEl.addEventListener('click', () => {
    gsap.to(window, .8, {
        scrollTo: 3006
        // scrollTo:"#archive_section"
    });
});
//메뉴바를 통해 archive로 이동

projectsEl.addEventListener('click', () => {
    gsap.to(window, .8, {
        // scrollTo:"#projects_section"
        scrollTo: 3700
    });
    console.log('클릭');
});
//메뉴바를 통해 project로 이동

historyEl.addEventListener('click', () => {
    gsap.to(window, .8, {
        scrollTo: 7320
        // scrollTo:"#history_section"
    });
});
//메뉴바를 통해 history로 이동

window.addEventListener('scroll', _.throttle(
    () => {
        if (window.scrollY > 800) {
            headerEl.classList.add('moved');
            mainTitleEl.classList.add('moved');
            headerFontEls.forEach(headerFont =>
                headerFont.classList.add("moved")
            )
        } else {
            headerEl.classList.remove('moved');
            mainTitleEl.classList.remove('moved');
            headerFontEls.forEach(headerFont =>
                headerFont.classList.remove("moved"))
        }
    }
), 300)
//스크롤이 800이하로 내려가면 메뉴바 색상 변경 및 최상단 고정

function agree_click(item) {
    var text = $(item).text();
    console.log(text);
    if (text === 'NOPE') {
        Swal.fire('페이지가 없습니다!');
    } else if (text === 'Coming soon') {
        Swal.fire('아직 개발 혹은 유지보수중인 페이지 입니다!');
    } else {
        return item
    }
}
//project에서 완성도 상태에 따른 alert창을 Swal로 구현

// 이미지 클릭시 확대
function showModal(imgElement) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var imageUrl = imgElement.src;

    modal.style.display = "block";
    modalImg.src = imageUrl;

    // 이미지 요소의 크기를 지정
    modalImg.style.width = "900px";
    modalImg.style.height = "600px";
}


function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function showModalOTT(imgElement) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var imageUrl = imgElement.src;

    modal.style.display = "block";
    modalImg.src = imageUrl;

    // 이미지 요소의 크기를 지정
    modalImg.style.width = "400px";
    modalImg.style.height = "700px";
}


// ESC 키를 눌렀을 때 모달 닫기
document.addEventListener("keydown", function(event) {
    var modal = document.getElementById("myModal");
    if (event.key === "Escape" && modal.style.display === "block") {
        closeModal();
    }
});

// 각 슬라이드 쇼의 인덱스 변수 선언 및 maxSlides 배열 초기화
var slideIndexes = [1, 1, 1, 1, 1];
var maxSlides = [];

// 이미지 수를 기준으로 maxSlides 배열 초기화
for (var i = 1; i <= 5; i++) {
    var slides = document.getElementsByClassName('mySlides' + i);
    maxSlides.push(slides.length);
}

// 각 슬라이드 쇼의 초기화 함수 호출
for (var i = 0; i < slideIndexes.length; i++) {
    showSlides(slideIndexes[i], 'mySlides' + (i + 1), 'slide-text' + (i + 1));
}

// plusSlides 함수와 currentSlide 함수에서 점의 활성화 상태를 변경하는 부분을 추가합니다.
function plusSlides(n, slideClassName, slideTextName) {
    var slideIndex = slideIndexes[parseInt(slideClassName.charAt(slideClassName.length - 1)) - 1];
    var maxIndex = maxSlides[parseInt(slideClassName.charAt(slideClassName.length - 1)) - 1];
    slideIndex += n;
    if (slideIndex > maxIndex) slideIndex = 1;
    if (slideIndex < 1) slideIndex = maxIndex;
    slideIndexes[parseInt(slideClassName.charAt(slideClassName.length - 1)) - 1] = slideIndex;
    showSlides(slideIndex, slideClassName, slideTextName);
    // 현재 선택된 점 표시를 변경
    var dots = document.querySelectorAll(".dot-container" + (parseInt(slideClassName.charAt(slideClassName.length - 1))) + " .dot");
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[slideIndex - 1].classList.add("active");
}

function currentSlide(n, slideClassName, slideTextName) {
    var slideIndex = slideIndexes[parseInt(slideClassName.charAt(slideClassName.length - 1)) - 1];
    var maxIndex = maxSlides[parseInt(slideClassName.charAt(slideClassName.length - 1)) - 1];
    slideIndex -= n;
    if (slideIndex > maxIndex) slideIndex = maxIndex;
    if (slideIndex < 1) slideIndex = maxIndex;
    slideIndexes[parseInt(slideClassName.charAt(slideClassName.length - 1)) - 1] = slideIndex;
    showSlides(slideIndex, slideClassName, slideTextName);

}


function showSlides(n, slideClassName, slideTextName) {
    var slides = document.getElementsByClassName(slideClassName);
    var slideTexts = document.getElementsByClassName(slideTextName);
    if (n > slides.length) { n = 1; }
    if (n < 1) { n = slides.length; }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slideTexts[i].style.display = "none";
    }
    slides[n - 1].style.display = "block";
    slideTexts[n - 1].style.display = "block";
    var dots = document.querySelectorAll(".dot-container" + (parseInt(slideClassName.charAt(slideClassName.length - 1))) + " .dot");
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[n-1].classList.add("active");
}
