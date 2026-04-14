// (function() {
//     // DOM Elements
//     const mainDiv = document.querySelector(".gallery-container");
//     const lightBoxOverLayElement = document.querySelector(".lightBoxOverLay");
//     const modelDivElement = document.querySelector(".modelDiv");
//     const imgElement = document.querySelector(".modelDiv img");
//     const closeBtn = document.querySelector(".close");
//     const prevBtn = document.querySelector(".prev");
//     const nextBtn = document.querySelector(".next");

//     // Array of all images in the gallery
//     const images = Array.from(document.querySelectorAll(".gallery-item img"));
//     let currentIndex = 0;

//     // Function to display the image in the modal
//     function showImage(index) {
//         imgElement.src = images[index].src;
//         imgElement.onerror = () => {
//             imgElement.src = 'fallback-image.jpg'; // Fallback image in case of error
//         };
//         lightBoxOverLayElement.classList.add('lightBoxOverLayShow');
//         modelDivElement.classList.add('showModel');
//     }

//     // Function to close the modal
//     function closeModel() {
//         lightBoxOverLayElement.classList.remove('lightBoxOverLayShow');
//         modelDivElement.classList.remove('showModel');
//         imgElement.src = ''; // Clear the image src in the modal
//     }

//     // Event listener for image click to open modal
//     mainDiv.addEventListener("click", (event) => {
//         const element = event.target;
//         if (element.tagName === "IMG") {
//             currentIndex = images.indexOf(element); // Get the index of the clicked image
//             showImage(currentIndex); // Display the clicked image in the modal
//         }
//     });

//     // Event listener for the close button and overlay click to close modal
//     closeBtn.addEventListener("click", closeModel);
//     lightBoxOverLayElement.addEventListener("click", closeModel);

//     // Event listener for the Previous button
//     prevBtn.addEventListener("click", (event) => {
//         event.stopPropagation(); // Prevent closing the modal on button click
//         currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; // Move to the previous image
//         showImage(currentIndex); // Show the previous image
//     });

//     // Event listener for the Next button
//     nextBtn.addEventListener("click", (event) => {
//         event.stopPropagation(); // Prevent closing the modal on button click
//         currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; // Move to the next image
//         showImage(currentIndex); // Show the next image
//     });

//     // Add keyboard navigation support (optional)
//     document.addEventListener('keydown', (event) => {
//         if (modelDivElement.classList.contains('showModel')) {
//             if (event.key === 'ArrowRight') {
//                 nextBtn.click();
//             } else if (event.key === 'ArrowLeft') {
//                 prevBtn.click();
//             } else if (event.key === 'Escape') {
//                 closeModel();
//             }
//         }
//     });
// })();


(function() {
    // DOM Elements
    const mainDiv = document.querySelector(".gallery-container");
    const lightBoxOverLayElement = document.querySelector(".lightBoxOverLay");
    const modelDivElement = document.querySelector(".modelDiv");
    const imgElement = document.querySelector(".modelDiv img");
    const closeBtn = document.querySelector(".close");

    const lightboxPrevButton = document.querySelector(".prev"); // Renamed
    const lightboxNextButton = document.querySelector(".next"); // Renamed

    const images = Array.from(document.querySelectorAll(".gallery-item img"));
    let lightboxIndex = 0; // Renamed

    function showImage(index) {
        imgElement.src = images[index].src;
        imgElement.onerror = () => {
            imgElement.src = 'fallback-image.jpg';
        };
        lightBoxOverLayElement.classList.add('lightBoxOverLayShow');
        modelDivElement.classList.add('showModel');
    }

    function closeModel() {
        lightBoxOverLayElement.classList.remove('lightBoxOverLayShow');
        modelDivElement.classList.remove('showModel');
        imgElement.src = '';
    }

    mainDiv.addEventListener("click", (event) => {
        const element = event.target;
        if (element.tagName === "IMG") {
            lightboxIndex = images.indexOf(element); // Renamed
            showImage(lightboxIndex);
        }
    });

    closeBtn.addEventListener("click", closeModel);
    lightBoxOverLayElement.addEventListener("click", closeModel);

    // Event listener for the Previous button
    lightboxPrevButton.addEventListener("click", (event) => {
        event.stopPropagation();
        lightboxIndex = (lightboxIndex > 0) ? lightboxIndex - 1 : images.length - 1;
        showImage(lightboxIndex);
    });

    // Event listener for the Next button
    lightboxNextButton.addEventListener("click", (event) => {
        event.stopPropagation();
        lightboxIndex = (lightboxIndex < images.length - 1) ? lightboxIndex + 1 : 0;
        showImage(lightboxIndex);
    });

    // Add keyboard navigation support (optional)
    document.addEventListener('keydown', (event) => {
        if (modelDivElement.classList.contains('showModel')) {
            if (event.key === 'ArrowRight') {
                lightboxNextButton.click();
            } else if (event.key === 'ArrowLeft') {
                lightboxPrevButton.click();
            } else if (event.key === 'Escape') {
                closeModel();
            }
        }
    });
})();
