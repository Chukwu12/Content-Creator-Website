

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
    // document.addEventListener("DOMContentLoaded", () => {
    //   gsap.registerPlugin(Flip, ScrollTrigger, CustomEase);
    
    //   // Custom easing functions
    //   CustomEase.create(
    //     "hop",
    //     "M0,0 C0.355,0.022 0.448,0.079 0.5,0.5 0.542,0.846 0.615,1 1,1"
    //   );
    
    //   CustomEase.create(
    //     "hop2",
    //     "M0,0 C0.078,0.617 0.114,0.716 0.255,0.828 0.373,0.922 0.561,1 1,1"
    //   );
    
    //   // Splitting text for animation
    //   const splitH2 = new SplitType(".site-info h2", { types: "lines" });
    
    //   splitH2.lines.forEach((line) => {
    //     const text = line.textContent;
    //     const wrapper = document.createElement("div");
    //     wrapper.className = "line";
    //     const span = document.createElement("span");
    //     span.textContent = text;
    //     wrapper.appendChild(span);
    //     line.parentNode.replaceChild(wrapper, line);
    //   });
    
    //   // Timelines for animations
    //   const mainTl = gsap.timeline();
    //   const revealerTl = gsap.timeline();
    //   const scaleTl = gsap.timeline();
    
    //   revealerTl
    //     .to(".r-1", {
    //       clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    //       duration: 1.5,
    //       ease: "hop",
    //     })
    //     .to(
    //       ".r-2",
    //       {
    //         clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    //         duration: 1.5,
    //         ease: "hop",
    //       },
    //       "<"
    //     );
    
    //   scaleTl.to(".img:first-child", {
    //     scale: 1,
    //     duration: 2,
    //     ease: "power4.inOut",
    //   });
    
    //   // Selecting all images except the first child
    //   const images = document.querySelectorAll(".img:not(:first-child)");
    
    //   images.forEach((img, index) => {
    //     scaleTl.to(
    //       img,
    //       {
    //         opacity: 1,
    //         scale: 1,
    //         duration: 1.25,
    //         ease: "power3.out",
    //       },
    //       ">-0.5"
    //     );
    //   });
    
    //   mainTl.add(revealerTl).add(scaleTl, "-1.25").add(() => {
    //     document.querySelectorAll(".img:not(.main)").forEach((img) => img.remove());
    
    //     // Ensure .main images exist before running Flip
    //     const mainElements = document.querySelectorAll(".main");
    //     if (mainElements.length > 0) {
    //       const state = Flip.getState(".main");
    
    //       const imagesContainer = document.querySelector(".home-images");
    //       if (imagesContainer) {
    //         imagesContainer.classList.add("stacked-container");
    //       }
    
    //       document.querySelectorAll(".main").forEach((img, i) => {
    //         img.classList.add("stacked");
    //         img.style.order = i;
    //         gsap.set(".img.stacked", {
    //           clearProps: "transform, top, left",
    //         });
    //       });
    
    //      return Flip.from(state, {
    //         duration: 2,
    //         ease: "hop",
    //         absolute: true,
    //         stagger: { amount: -0.3 },
    //       });
    //     }
    //   })
    //   .to(".word h1, .nav-item p, .line p, .site-info h2 .line span", {
    //     y: 0,
    //     duration: 3,
    //     ease: "hop2",
    //     stagger: 0.1,
    //     delay: 1.25,
    //   }).to(".cover-img", {
    //     clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    //     duration: 2,
    //     ease: "hop",
    //     delay: -4.75,
    //   })
    // });
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

// =============================swiper js===================//
// document.addEventListener("DOMContentLoaded", function () {
//   const swiper = new Swiper(".swiper-container", {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     loop: true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
// });

