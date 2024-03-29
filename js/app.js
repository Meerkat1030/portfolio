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
        scrollTo: 6900
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

function showModal(imgElement) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
// 이미지 클릭시 확대

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showModal(imgElement) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// 모달 내 이미지 슬라이드
var modalSlideIndex = 1;
showSlidesModal(modalSlideIndex);

function plusSlidesModal(n) {
    showSlidesModal((modalSlideIndex += n));
}

function currentSlideModal(n) {
    showSlidesModal((modalSlideIndex = n));
}

function showSlidesModal(n) {
    var i;
    var slides = document.getElementsByClassName("modal-content");
    var dots = document.getElementsByClassName("modal-dot");
    if (n > slides.length) {
        modalSlideIndex = 1;
    }
    if (n < 1) {
        modalSlideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[modalSlideIndex - 1].style.display = "block";
    dots[modalSlideIndex - 1].className += " active";
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