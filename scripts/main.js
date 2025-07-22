// Load navbar from external file
fetch('assets/template/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;

    // Navbar scroll effect (after it's in DOM)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Tooltip initialization (after navbar inserted)
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(el => new bootstrap.Tooltip(el));
  });

// Load Footer
fetch('assets/template/footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer-template').innerHTML = data;
    });



document.querySelectorAll('[data-box]').forEach(box => {
    let resetTimeout;
    let lastMove = 0;

    box.addEventListener('mousemove', () => {
        const now = Date.now();
        if (now - lastMove < 200) return;
        lastMove = now;

        const moveX = (Math.random() - 0.5) * 150;
        const moveY = (Math.random() - 0.5) * 150;
        const rotate = (Math.random() - 0.5) * 20; // Random rotation between -10° and 10°

        gsap.to(box, {
            x: moveX,
            y: moveY,
            rotation: rotate,
            duration: 0.6,
            ease: "expo.out"
        });

        clearTimeout(resetTimeout);
        resetTimeout = setTimeout(() => {
            gsap.to(box, {
                x: 0,
                y: 0,
                rotation: 0,
                duration: 1.2,
                ease: "elastic.out(1, 0.4)"
            });
        }, 1000);
    });

    box.addEventListener('mouseleave', () => {
        clearTimeout(resetTimeout);
        gsap.to(box, {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 1,
            ease: "power2.out"
        });
    });
});

// GSAP Fade Up Animation
document.querySelectorAll('.fade-up').forEach(el => {
    gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.4,
        ease: "power2.in",
        scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
            once:false,
        }
    });
});

// GSAP skewed zoom Animation with staggered buttons
gsap.utils.toArray('.skew-zoom').forEach((el, i) => {
    gsap.from(el, {
        opacity: 0,
        y: -40,
        scale: 0.8,
        skewY: 5,
        duration: 0.8,
        ease: "power3.out",
        delay: i * 0.1, // Delay increases with index
        scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
            once: false,
        }
    });
});


// GSAP skewed zoom Animation
document.querySelectorAll('.fade-scale').forEach(el => {
    gsap.from(el, {
        opacity: 0,
        scale: 0.8,
        duration: 0.7,
        ease: "power3.in", 
        scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
            once:false,
        }
    });
});