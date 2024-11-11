// jQuery to add and remove class on scroll
$(window).on('load', function () {
  gsap.registerPlugin(ScrollTrigger);
  // Hide the preloader when the page finishes loading
  $('.preloader').fadeOut('slow');
});
$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    // Check if the page has been scrolled 50 pixels
    if (scroll > 50) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  });
  // jQuery function to toggle class on click
  $(".mobile-btn").click(function () {
    $(".nav-wrap").toggleClass("mega-menu");
    $(".mobile-btn").toggleClass("cross-menu-icon");
  });
  $(".nav-wrap ul li a").click(function () {
    $(".nav-wrap").removeClass("mega-menu");
    $(".mobile-btn").removeClass("cross-menu-icon");
  });
  $('.project_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });
  $(".scroll1").on('click', function (event) {
    event.preventDefault();
    document.getElementById("experience").scrollIntoView();
  });

  $(".scroll2").on('click', function (event) {
    event.preventDefault();
    document.getElementById("projects").scrollIntoView();
  });

  $(".scroll3").on('click', function (event) {
    event.preventDefault();
    document.getElementById("contact").scrollIntoView();
  });

  // First, target the h1 for a fade-in effect.
  gsap.from(".hero_content h1", {
    duration: 1,
    x: -50,
    // autoAlpha: 0, // From invisible to visible
    ease: "power1.inOut",
  });

  const quotes = document.querySelectorAll(".hero_content h1 span, .hero_content h2, .hero_content p");

  gsap.set(quotes, {
    perspective: 400
  }); // Example setting applied to all elements

  const mySplitText = new SplitText(quotes, {
    type: "words"
  });
  const splitTextTimeline = gsap.timeline();

  // Reset and animate each set of characters
  mySplitText.split({
    type: "chars, words"
  });

  splitTextTimeline.from(mySplitText.chars, {
    delay: 1,
    duration: 0.6,
    scale: 4,
    autoAlpha: 0,
    rotationX: -180,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.02
  });
  gsap.fromTo(".service_img", {
    rotationY: -180,
    transformOrigin: "center", // Adjust according to your layout needs
    opacity: 0
  }, {
    duration: 1.5,
    rotationY: 0,
    opacity: 1,
    delay: 2,
    ease: "power3.out",
    stagger: 0.1 // Stagger start times for each item
  });
  gsap.fromTo(".hero_content p", {
    y: -50,
    opacity: 0
  }, {
    duration: 1.5,
    y: 0,
    opacity: 1,
    delay: 1,
    ease: "power3.out",
    stagger: 0.1 // Stagger start times for each item
  });
  gsap.fromTo(".button_row", {
    x: -50,
    opacity: 0
  }, {
    duration: 1.5,
    x: 0,
    opacity: 1,
    delay: 1,
    ease: "power3.out",
    stagger: 0.1 // Stagger start times for each item
  });
  gsap.fromTo(".glow_path1, .glow_path2, .glow_circle_small ", {
    opacity: 0,
    transformOrigin: "center", // Adjust according to your layout needs

  }, {
    delay: 1,
    duration: 1.5,
    rotation: 0,
    opacity: 1,
    ease: "power3.out",
    stagger: 0.1 // Stagger start times for each item
  });
  gsap.fromTo(".sercice_info, .service_line", {
    opacity: 0,
    transformOrigin: "center", // Adjust according to your layout needs
    opacity: 0
  }, {
    delay: 3,
    duration: 1.5,
    rotationY: 0,
    opacity: 1,
    ease: "power3.out",
    stagger: 0.1 // Stagger start times for each item
  });
  // Function to create a wavy animation on each path
  function animatePath(path, index) {
    const direction = index % 1.2 === 0 ? 1.5 : -1.5; // Alternate direction for the wave effect
    gsap.fromTo(path, {
      y: 0,
      rotationX: 0
    }, {
      y: () => 30 * direction, // Move up or down based on the direction
      rotationX: () => 10 * direction, // Tilt slightly for a 3D effect
      ease: "sine.inOut", // Smooth easing function for a wavy look
      duration: 4, // Duration of one wave cycle
      repeat: -1, // Infinite loop
      yoyo: true, // Go back and forth
      delay: index * 0.1 // Stagger the start time for each path
    });
  }

  // Target each path in the SVG and apply the animation
  const paths = document.querySelectorAll("#your-svg-id path");
  paths.forEach(animatePath);

  // Event listener for mouse movements in the '.about' section
  $('.about').on('mousemove', function (e) {
    // Calculate normalized position of the mouse
    const posX = (e.clientX - window.innerWidth / 3) / window.innerWidth;
    const posY = (e.clientY - window.innerHeight / 3) / window.innerHeight;

    // Animate the laptop person with 3D effects
    gsap.to('.person_with_latop', {
      rotationY: 20 * posX, // Rotate in Y-axis based on mouse X position
      rotationX: 20 * posY, // Rotate in X-axis based on mouse Y position
      transformPerspective: 500,
      duration: 0.5
    });

    // Animate the face with glasses with opposite 3D effects
    gsap.to('.face_glasses', {
      rotationY: -10 * posX, // Opposite rotate in Y-axis
      rotationX: -10 * posY, // Opposite rotate in X-axis
      transformPerspective: 500,
      duration: 0.5
    });

    // Animate the dark rectangle with rotation and vertical movement
    gsap.to('.dark_rectangle', {
      rotation: 5 * posX, // Rotate based on mouse X position
      // y: 10 * posY, // Move vertically based on mouse Y position
      duration: 0.5
    });

    // Animate the orange rectangle with opposite effects
    gsap.to('.orange_rectangle', {
      rotation: -5 * posX, // Opposite rotation
      // y: -10 * posY, // Opposite vertical movement
      duration: 0.5
    });
  });
  // Target the phone icon
  const phoneIcon = document.querySelector("#phoneIcon");

  // Function to create the vibration animation
  function vibrateAnimation() {
    // Clear existing animations on the target
    gsap.killTweensOf(phoneIcon);

    // Vibration effect
    gsap.fromTo(phoneIcon, {
      x: "-1", // starting position offset by -1px
    }, {
      x: "1", // ending position offset by 1px
      duration: 0.05, // short duration for quick shake
      repeat: 5, // number of shakes
      yoyo: true, // go back and forth
      ease: "linear", // maintain a steady pace
      onComplete: () => gsap.set(phoneIcon, {
        x: 0
      }) // reset position after animation
    });
  }

  // Event listeners for the hover state
  phoneIcon.addEventListener("mouseenter", vibrateAnimation);
  phoneIcon.addEventListener("mouseleave", () => gsap.killTweensOf(phoneIcon));

  // $('.read_more').click(function () {
  //   var $paragraph = $(this).siblings('.work_right_col ul'); // Select the paragraph that is a sibling of the button

  //   // Toggle the 'expanded' class on the selected paragraph
  //   $paragraph.toggleClass('expanded');

  //   // Change the text of the button based on the current state of its paragraph
  //   if ($paragraph.hasClass('expanded')) {
  //     $(this).text('Read Less');
  //   } else {
  //     $(this).text('Read More');
  //   }
  // });
});