document.addEventListener("DOMContentLoaded", function () {
  load_json();
  init_animation();
});

/* ----------------------------------------
NEWS
---------------------------------------- */

const jsonPath = "/assets/data/news.json";

function load_json() {
  axios
    .get(jsonPath)
    .then(function (response) {
      const newsData = response.data.contents;
      displayNews(newsData);
    })
    .catch(function (error) {
      console.error("Error loading JSON:", error);
    });
}

function displayNews(newsData) {
  let count = 0;
  for (let key in newsData) {
    const newsItem = newsData[key];
    const date = newsItem.date;
    const category = newsItem.category;
    const content = newsItem.content;
    const link = newsItem.link;
    const windowOption = newsItem.window;

    let newsHtml = `
      <div class="top-news-item">
        <a href="${link}" target="${windowOption === "1" ? "_blank" : "_self"}" class="top-news-link">
          <div class="top-news-date">${date}</div>
          <div class="top-news-category"><span>${category}</span></div>
          <div class="top-news-title">${content}</div>
        </a>
      </div>
    `;
    document.querySelector(".top-news-content").insertAdjacentHTML("beforeend", newsHtml);
    count++;
    if (count >= 5) {
      break; // Limit to 5 news items
    }
  }
}

/* ----------------------------------------
ANIMATION
---------------------------------------- */

function init_animation() {
  if (window.innerWidth < 767.98) {
    gsap.set(".top-hero-mask", { opacity: 1 });
    gsap.set(".top-hero-copy-t1", { opacity: 0, y: 15 });
    gsap.set(".top-hero-copy-t2", { opacity: 0, y: 15 });
    gsap.set(".top-hero-dec.dec1", { opacity: 0, x: 40 });
    gsap.set(".top-hero-dec.dec2", { opacity: 0, x: 40 });
    gsap.set(".top-hero-dec.dec3", { opacity: 0, x: 40 });
  } else {
    gsap.set(".top-hero-mask", { opacity: 1 });
    gsap.set(".top-hero-copy-t1", { opacity: 0, y: 15 });
    gsap.set(".top-hero-copy-t2", { opacity: 0, y: 15 });
    gsap.set(".top-hero-dec.dec1", { opacity: 0, x: 100 });
    gsap.set(".top-hero-dec.dec2", { opacity: 0, x: 100 });
    gsap.set(".top-hero-dec.dec3", { opacity: 0, x: 100 });
  }

  gsap.set(".top-service-dec.dec1", { opacity: 0, x: 50 });
  gsap.set(".top-service-dec.dec2", { opacity: 0, x: 100 });
  gsap.set(".top-service-dec.dec3", { opacity: 0, x: 100 });

  ScrollTrigger.create({
    trigger: ".top-service",
    onEnter: service_enter,
    // onLeave: service_leave,
    // onEnterBack: service_back_enter,
    start: "top center",
    end: "bottom 80%",
    // markers: true,
  });

  gsap.set(".vision-mission-dec.dec1", { opacity: 0, x: 100 });
  gsap.set(".vision-mission-dec.dec2", { opacity: 0, x: 100 });
  gsap.set(".vision-mission-dec.sp-dec1", { opacity: 0, x: 50 });
  gsap.set(".vision-mission-dec.sp-dec2", { opacity: 0, x: 50 });

  ScrollTrigger.create({
    trigger: ".vision-mission",
    onEnter: vision_enter,
    onLeave: vision_leave,
    start: "top center",
    end: "bottom 100%",
  });

  if (window.innerWidth < 767.98) {
    gsap.set(".top-news-dec.dec1", { opacity: 0, x: 50 });
  } else {
    gsap.set(".top-news-dec.dec1", { opacity: 0, x: 100 });
  }

  ScrollTrigger.create({
    trigger: ".top-news",
    onEnter: news_enter,
    start: "top center",
    end: "bottom 100%",
  });

  if (window.innerWidth < 767.98) {
    gsap.set(".top-contact-dec.dec1", { opacity: 0, x: 50 });
    gsap.set(".top-contact-dec.dec2", { opacity: 0, x: 50 });
  } else {
    gsap.set(".top-contact-dec.dec1", { opacity: 0, x: 100 });
    gsap.set(".top-contact-dec.dec2", { opacity: 0, x: 100 });
  }

  ScrollTrigger.create({
    trigger: ".top-contact",
    onEnter: contact_enter,
    start: "top center",
    end: "bottom 100%",
  });

  setTimeout(start_hero_animation, 600);
}

function start_hero_animation() {
  let start_tl = gsap.timeline({ onComplete: end_hero_animation });
  if (window.innerWidth < 767.98) {
    start_tl.to(".top-hero-mask", { opacity: 0, duration: 2, ease: "slow(0.7, 0.7, false)" });
    start_tl.to(".top-hero-copy-t1", { opacity: 1, y: 0, duration: 0.6, ease: "power1.in" }, "-=1.2");
    start_tl.to(".top-hero-copy-t2", { opacity: 1, y: 0, duration: 0.6, ease: "power1.in" }, "-=0.5");
    start_tl.to(".top-hero-dec.dec1", { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, "-=0.1");
    start_tl.to(".top-hero-dec.dec2", { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, "-=0.9");
    start_tl.to(".top-hero-dec.dec3", { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, "-=0.9");
  } else {
    start_tl.to(".top-hero-mask", { opacity: 0, duration: 2, ease: "slow(0.7, 0.7, false)" });
    start_tl.to(".top-hero-copy-t1", { opacity: 1, y: 0, duration: 0.6, ease: "power1.in" }, "-=1.2");
    start_tl.to(".top-hero-copy-t2", { opacity: 1, y: 0, duration: 0.6, ease: "power1.in" }, "-=0.5");
    start_tl.to(".top-hero-dec.dec1", { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, "-=0.1");
    start_tl.to(".top-hero-dec.dec2", { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, "-=0.9");
    start_tl.to(".top-hero-dec.dec3", { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, "-=0.9");
  }
}

function end_hero_animation() {
  document.querySelector(".top-hero-mask").style.display = "none";
}

function service_enter() {
  let tl = gsap.timeline();
  tl.to(".top-service-dec.dec3", { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" });
  tl.to(".top-service-dec.dec2", { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.4");
  tl.to(".top-service-dec.dec1", { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.4");
}

function vision_enter() {
  if (window.innerWidth < 767.98) {
    gsap.to(".vision-mission-dec.sp-dec1", { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" });
  } else {
    gsap.to(".vision-mission-dec.dec1", { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" });
  }
}

function vision_leave() {
  let tl = gsap.timeline();
  if (window.innerWidth < 767.98) {
    gsap.to(".vision-mission-dec.sp-dec2", { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" });
  } else {
    gsap.to(".vision-mission-dec.dec2", { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" });
  }
}

function news_enter() {
  gsap.to(".top-news-dec.dec1", { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" });
}

function contact_enter() {
  gsap.to(".top-contact-dec.dec1", { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" });
  gsap.to(".top-contact-dec.dec2", { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, "+=0.4");
}
