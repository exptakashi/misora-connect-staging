/* ----------------------------------------
スクロール
---------------------------------------- */
/* スクロール時の処理 */
const onScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop >= 100) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
};

document.addEventListener("scroll", onScroll);

/** スムーズにスクロール */
const headerHeight = document.querySelector("header").offsetHeight + 20;

function scrollToPos(position) {
  const startPos = window.scrollY;
  const distance = Math.min(position - startPos, document.documentElement.scrollHeight - window.innerHeight - startPos);
  const duration = 800;

  let startTime;

  function easeOutExpo(t, b, c, d) {
    return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;
  }

  function scroll_animation(currentTime) {
    if (startTime === undefined) {
      startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;
    const scrollPos = easeOutExpo(timeElapsed, startPos, distance, duration);
    window.scrollTo(0, scrollPos);
    if (timeElapsed < duration) {
      requestAnimationFrame(scroll_animation);
    } else {
      window.scrollTo(0, position);
    }
  }

  requestAnimationFrame(scroll_animation);
}

/* スクロールトップボタンの処理 */
const button_scroll_top = document.querySelector(".scroll-top");
button_scroll_top.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToPos(0);
});

/* ----------------------------------------
ヘッダーメニュー
---------------------------------------- */
const header_nav_first_level1 = document.querySelector(".hm-fl1");
const header_nav_first_level2 = document.querySelector(".hm-fl2");
const header_nav_first_level3 = document.querySelector(".hm-fl3");
const header_nav_first_level4 = document.querySelector(".hm-fl4");
const header_nav_sub_list1 = document.querySelector(".hm-sl1");
const header_nav_sub_list2 = document.querySelector(".hm-sl2");
const header_nav_sub_list3 = document.querySelector(".hm-sl3");
const header_nav_sub_list4 = document.querySelector(".hm-sl4");

const header_nav_procedures = document.querySelector(".hm-procedures");
const header_nav_contact = document.querySelector(".hm-contact");

let hm1_flag = false;
let hm2_flag = false;
let hm3_flag = false;
let hm4_flag = false;

const toggleSubMenu = (flno, subList) => {
  if (subList.classList.contains("pc-active")) {
    subList.classList.remove("pc-active");
  } else {
    subList.classList.add("pc-active");
  }

  // if (subList.style.visibility === "visible") {
  //   subList.style.visibility = "hidden";
  //   subList.style.opacity = "0";
  // } else {
  //   subList.style.visibility = "visible";
  //   subList.style.opacity = "1";
  // }
  // 他のサブメニューを閉じる
  if (flno == 1) {
    header_nav_sub_list2.classList.remove("pc-active");
    header_nav_sub_list3.classList.remove("pc-active");
    header_nav_sub_list4.classList.remove("pc-active");
    header_nav_first_level2.classList.remove("active");
    header_nav_first_level3.classList.remove("active");
    header_nav_first_level4.classList.remove("active");
  } else if (flno == 2) {
    header_nav_sub_list1.classList.remove("pc-active");
    header_nav_sub_list3.classList.remove("pc-active");
    header_nav_sub_list4.classList.remove("pc-active");
    header_nav_first_level1.classList.remove("active");
    header_nav_first_level3.classList.remove("active");
    header_nav_first_level4.classList.remove("active");
  } else if (flno == 3) {
    header_nav_sub_list1.classList.remove("pc-active");
    header_nav_sub_list2.classList.remove("pc-active");
    header_nav_sub_list4.classList.remove("pc-active");
    header_nav_first_level1.classList.remove("active");
    header_nav_first_level2.classList.remove("active");
    header_nav_first_level4.classList.remove("active");
  } else if (flno == 4) {
    header_nav_sub_list1.classList.remove("pc-active");
    header_nav_sub_list2.classList.remove("pc-active");
    header_nav_sub_list3.classList.remove("pc-active");
    header_nav_first_level1.classList.remove("active");
    header_nav_first_level2.classList.remove("active");
    header_nav_first_level3.classList.remove("active");
  }
};

header_nav_first_level1.addEventListener("mouseover", function () {
  if (window.innerWidth > 768) {
    this.classList.add("active");
    toggleSubMenu(1, header_nav_sub_list1);
    hm1_count = 0;
  }
});
header_nav_first_level2.addEventListener("mouseover", function () {
  if (window.innerWidth > 768) {
    this.classList.add("active");
    toggleSubMenu(2, header_nav_sub_list2);
    hm2_count = 0;
  }
});
header_nav_first_level3.addEventListener("mouseover", function () {
  if (window.innerWidth > 768) {
    this.classList.add("active");
    toggleSubMenu(3, header_nav_sub_list3);
    hm3_count = 0;
  }
});
header_nav_first_level4.addEventListener("mouseover", function () {
  if (window.innerWidth > 768) {
    this.classList.add("active");
    toggleSubMenu(4, header_nav_sub_list4);
    hm4_count = 0;
  }
});

header_nav_sub_list1.addEventListener("mouseover", function (e) {
  if (window.innerWidth > 768) {
    hm1_flag = true;
  }
});
header_nav_sub_list2.addEventListener("mouseover", function (e) {
  if (window.innerWidth > 768) {
    hm2_flag = true;
  }
});
header_nav_sub_list3.addEventListener("mouseover", function (e) {
  if (window.innerWidth > 768) {
    hm3_flag = true;
  }
});
header_nav_sub_list4.addEventListener("mouseover", function (e) {
  if (window.innerWidth > 768) {
    hm4_flag = true;
  }
});

header_nav_sub_list1.addEventListener("mouseleave", function () {
  if (window.innerWidth > 768) {
    this.classList.remove("pc-active");
    header_nav_first_level1.classList.remove("active");
    hm1_flag = false;
  }
});
header_nav_sub_list2.addEventListener("mouseleave", function () {
  if (window.innerWidth > 768) {
    this.classList.remove("pc-active");
    header_nav_first_level2.classList.remove("active");
    hm2_flag = false;
  }
});
header_nav_sub_list3.addEventListener("mouseleave", function () {
  if (window.innerWidth > 768) {
    this.classList.remove("pc-active");
    header_nav_first_level3.classList.remove("active");
    hm3_flag = false;
  }
});
header_nav_sub_list4.addEventListener("mouseleave", function () {
  if (window.innerWidth > 768) {
    this.classList.remove("pc-active");
    header_nav_first_level4.classList.remove("active");
    hm4_flag = false;
  }
});

const hnv1 = document.querySelector(".hnv1");
const hnv2 = document.querySelector(".hnv2");
const hnv3 = document.querySelector(".hnv3");
const hnv4 = document.querySelector(".hnv4");

header_nav_first_level1.addEventListener("click", function (e) {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    if (hnv1.classList.contains("sp-active")) {
      hnv1.classList.remove("sp-active");
    } else {
      hnv1.classList.add("sp-active");
    }
  }
});
header_nav_first_level2.addEventListener("click", function (e) {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    if (hnv2.classList.contains("sp-active")) {
      hnv2.classList.remove("sp-active");
    } else {
      hnv2.classList.add("sp-active");
    }
  }
});
header_nav_first_level3.addEventListener("click", function (e) {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    if (hnv3.classList.contains("sp-active")) {
      hnv3.classList.remove("sp-active");
    } else {
      hnv3.classList.add("sp-active");
    }
  }
});
header_nav_first_level4.addEventListener("click", function (e) {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    if (hnv4.classList.contains("sp-active")) {
      hnv4.classList.remove("sp-active");
    } else {
      hnv4.classList.add("sp-active");
    }
  }
});

let hm1_count = 0;
let hm2_count = 0;
let hm3_count = 0;
let hm4_count = 0;
function tick() {
  if (window.innerWidth > 768) {
    if (!hm1_flag) {
      hm1_count++;
    }
    if (!hm2_flag) {
      hm2_count++;
    }
    if (!hm3_flag) {
      hm3_count++;
    }
    if (!hm4_flag) {
      hm4_count++;
    }
    if (hm1_count > 100) {
      hm1_count = 0;
      header_nav_first_level1.classList.remove("active");
      header_nav_sub_list1.classList.remove("pc-active");
    }
    if (hm2_count > 100) {
      hm2_count = 0;
      header_nav_first_level2.classList.remove("active");
      header_nav_sub_list2.classList.remove("pc-active");
    }
    if (hm3_count > 100) {
      hm3_count = 0;
      header_nav_first_level3.classList.remove("active");
      header_nav_sub_list3.classList.remove("pc-active");
    }
    if (hm4_count > 100) {
      hm4_count = 0;
      header_nav_first_level4.classList.remove("active");
      header_nav_sub_list4.classList.remove("pc-active");
    }
  }
  requestAnimationFrame(tick);
}

const headerNavToggle = document.querySelector(".header-nav-toggle");
headerNavToggle.addEventListener("click", function () {
  // document.body.classList.toggle("header-nav-open");
  if (document.body.classList.contains("header-nav-open")) {
    document.body.classList.remove("header-nav-open");
    hnv1.classList.remove("sp-active");
    hnv2.classList.remove("sp-active");
    hnv3.classList.remove("sp-active");
    hnv4.classList.remove("sp-active");
  } else {
    document.body.classList.add("header-nav-open");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  tick();
});

header_nav_procedures.addEventListener("mouseover", function () {
  if (window.innerWidth > 768) {
    header_nav_sub_all_close();
  }
});

header_nav_contact.addEventListener("mouseover", function () {
  if (window.innerWidth > 768) {
    header_nav_sub_all_close();
  }
});

function header_nav_sub_all_close() {
  header_nav_sub_list1.classList.remove("pc-active");
  header_nav_sub_list2.classList.remove("pc-active");
  header_nav_sub_list3.classList.remove("pc-active");
  header_nav_sub_list4.classList.remove("pc-active");
  header_nav_first_level1.classList.remove("active");
  header_nav_first_level2.classList.remove("active");
  header_nav_first_level3.classList.remove("active");
  header_nav_first_level4.classList.remove("active");
}

const arrow_links = document.getElementsByClassName("arrow-link");
if (arrow_links.length > 0) {
  for (let i = 0; i < arrow_links.length; i++) {
    arrow_links[i].addEventListener("mouseover", function () {
      const icon_img = arrow_links[i].querySelector("img");
      if (icon_img) {
        icon_img.src = icon_img.src.replace("icon-arrow-lightblue.svg", "icon-arrow-red.svg");
      }
    });
    arrow_links[i].addEventListener("mouseout", function () {
      const icon_img = arrow_links[i].querySelector("img");
      if (icon_img) {
        icon_img.src = icon_img.src.replace("icon-arrow-red.svg", "icon-arrow-lightblue.svg");
      }
    });
  }
}
