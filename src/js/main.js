

// ==========================================Home Background Effects=================================//
// const parallax = document.querySelector('.parallax');
// const front = document.querySelector('.layer');
// const back = document.querySelector('.back-layer');

// const sFront = 150;
// const sBack  = 400;

// parallax.addEventListener('mousemove', e => {
  
//   const x = e.clientX;
//   const y = e.clientY;

//   front.style.transform = `translate(${x/ sFront}%,
//     ${y /sFront}%
//     )`;

//     back.style.transform = `translate(${x/ sBack}%,
//     ${y /sBack}%
//     )`;
// })



  // =============================Video Gallery======================================//
  document.addEventListener('DOMContentLoaded', () => {
    // Select all videos inside .video-container
    const videos = document.querySelectorAll('.video-container .videos video');
    const popupVideo = document.querySelector('.popup-videos video');  // Popup video element
    const popupContainer = document.querySelector('.popup-videos');
    const closeButton = document.querySelector('.popup-videos .close-btn');

    // Add click event listener to each video to open it in the popup
    videos.forEach(video => {
        video.addEventListener('click', () => {
            const videoSource = video.getAttribute('src');  // Get the src of clicked video
            popupVideo.src = videoSource;  // Set popup video source
            popupContainer.style.display = 'flex';  // Show popup
            popupVideo.play();  // Play the video automatically
        });
    });

    // Close the popup when the close button is clicked
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            popupContainer.style.display = 'none';  // Hide the popup
            popupVideo.pause();  // Pause the video
            popupVideo.currentTime = 0;  // Reset video playback to the beginning
            popupVideo.src = "";  // Remove the video source to stop buffering
        });
    }
});

  
// =============================disable parallex effect======================================//
// function screenSize() {
//   let galleyContainer = document.querySelector('.gallery-container');
//   if (window.innerWidth < 768) {
//      // Disable parallax effect
//     galleyContainer.style.backgroundAttachment = 'scroll';
//   } else {
//     // Enable parallax effect
//     galleyContainer.style.backgroundAttachment = 'fixed';
//   }
//   }
//  // Run on initial load
//  screenSize();
//   // Add event listener to handle screen resize
//   window.addEventListener('resize', screenSize);


 // =============================JavaScript for Mobile Menu Toggle======================================//

 document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", function () {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.classList.toggle("hidden");
  });
});




    // ============================= Gsap home animation======================================//
    document.addEventListener("DOMContentLoaded", function () {
      gsap.set(".img", {y: 500});
      gsap.set(".loader-imgs", {x: 500});
      gsap.set(".nav-item", {y: 25, opacity: 0});
      gsap.set("h1, .item, footer", {y: 200});

      const tl = gsap.timeline({delay: 1});

      tl.to(".img", {
        y: 0,
        duration: 1.5,
        stagger: 0.05,
        ease: "power3.inOut",
      }).to(".loader-imgs",
        {
          x: 0,
          duration: 3,
          ease: "power3.inOut",
        },
        "-=2.5"
      ).to(".img:not(#loader-logo", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
      }, "-=1"
    )
      .to(
        ".loader", 
        {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power3.inOut",
    },
  "-=0.5"
).to(".nav-item, h1, footer, .item", {
  y: 0,
  opacity: 1,
  duration: 1,
  stagger: 0.1,
  ease: "power3.inOut",
},
"-=0.5"
);
    });

// =============================Iframes Thumbnail===================//
// JavaScript to dynamically load the video when clicked
document.querySelectorAll('.video-wrapper').forEach(wrapper => {
  wrapper.addEventListener('click', function () {
    const videoSrc = wrapper.getAttribute('data-video-src'); // Get video URL
    
    // Replace the thumbnail and play button with an iframe containing the video
    wrapper.innerHTML = `<iframe src="${videoSrc}" width="640" height="480" allow="autoplay" frameborder="0" allowfullscreen></iframe>`;
  });
});


// Play Button Functionality
// document.addEventListener("DOMContentLoaded", function () {
//   const playButtons = document.querySelectorAll('.play-button');
  
//   playButtons.forEach(button => {
//     button.addEventListener('click', function () {
//       const videoWrapper = button.closest('.video-wrapper');
//       const videoSrc = videoWrapper.getAttribute('data-video-src');
//       const iframe = document.createElement('iframe');
//       iframe.src = videoSrc;
//       iframe.width = "640";
//       iframe.height = "480";
//       iframe.allow = "autoplay";
    
      
//       // Replace thumbnail and play button with iframe
//       videoWrapper.innerHTML = ''; // Clear the content
//       videoWrapper.appendChild(iframe); // Add iframe
//     });
//   });
// });


