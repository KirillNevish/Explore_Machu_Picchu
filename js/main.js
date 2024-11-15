window.onload = function () {
    const h3Elements = document.querySelectorAll('.changeBG');
    const body = document.getElementById('pageBody');

    h3Elements.forEach(h3 => {
        h3.addEventListener('click', () => {

            h3Elements.forEach(el => el.classList.remove('active'));

            h3.classList.add('active');

            const newBgImage = h3.getAttribute('data-bg');
            body.style.backgroundImage = newBgImage;
        });
    });

    let currentIndex = 0;
    const imageContainer = document.getElementById("imageContainer");
    let images = Array.from(document.querySelectorAll(".cardImage"));

    const updateImagePositions = () => {
        const isSmallScreen = window.innerWidth <= 768;
        const isExtraSmallScreen = window.innerWidth <= 624;

        images.forEach((img, index) => {
            img.classList.remove("visible");
            img.style.transform = '';
            img.style.zIndex = 1;
        });

        images[currentIndex].classList.add("visible");
        images[(currentIndex + 1) % images.length].classList.add("visible");
        images[(currentIndex + 2) % images.length].classList.add("visible");

        if (isExtraSmallScreen) {

            images[currentIndex].style.zIndex = 1;
            images[currentIndex].style.transform = 'translateX(-20%)';

            images[(currentIndex + 1) % images.length].style.zIndex = 2;
            images[(currentIndex + 1) % images.length].style.transform = 'translateX(-50%)';

            images[(currentIndex + 2) % images.length].style.zIndex = 3;
            images[(currentIndex + 2) % images.length].style.transform = 'translateX(-80%)';
        } else if (isSmallScreen) {

            images[currentIndex].style.zIndex = 1;
            images[currentIndex].style.transform = 'translateX(80%)';

            images[(currentIndex + 1) % images.length].style.zIndex = 2;
            images[(currentIndex + 1) % images.length].style.transform = 'translateX(0%)';

            images[(currentIndex + 2) % images.length].style.zIndex = 3;
            images[(currentIndex + 2) % images.length].style.transform = 'translateX(-80%)';
        } else {

            images[currentIndex].style.zIndex = 1;
            images[currentIndex].style.transform = 'translateX(-90%)';

            images[(currentIndex + 1) % images.length].style.zIndex = 2;
            images[(currentIndex + 1) % images.length].style.transform = 'translateX(20%)';

            images[(currentIndex + 2) % images.length].style.zIndex = 3;
            images[(currentIndex + 2) % images.length].style.transform = 'translateX(130%)';
        }
    };

    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImagePositions();
    };

    const previousImage = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImagePositions();
    };

    document.getElementById("arrows-right").addEventListener("click", nextImage);
    document.getElementById("arrows-left").addEventListener("click", previousImage);

    updateImagePositions();
    window.addEventListener("resize", updateImagePositions);

    images.forEach((img) => {
        img.addEventListener("mouseover", () => {
            img.style.transform += ' scale(1.2)';
        });
        img.addEventListener("mouseout", () => {
            img.style.transform = img.style.transform.replace(' scale(1.2)', '');
        });
    });
};