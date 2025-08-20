const jsonPath = "/assets/data/news.json";

const categorySelect_all = document.getElementById("btn-all");
const categorySelect_press = document.getElementById("btn-press");
const categorySelect_seminar = document.getElementById("btn-seminar");

let currentPage = 1;
const itemsPerPage = 10;
let currentCategory = "すべて"; // Default category
let currentPageGroup = 0; // ページグループ（0: 1〜5, 1:6〜10…）

document.addEventListener("DOMContentLoaded", function () {
  let url = new URL(window.location.href);
  const url_category = url.searchParams.get("category");
  if (url_category === "1") {
    currentCategory = "プレスリリース";
  } else if (url_category === "2") {
    currentCategory = "セミナー・イベント";
  } else {
    currentCategory = "すべて";
  }
  const url_page = url.searchParams.get("page");
  if (url_page) {
    currentPage = parseInt(url_page);
  } else {
    currentPage = 1;
  }
  load_json();
});

let newsData = [];
function load_json() {
  axios
    .get(jsonPath)
    .then(function (response) {
      newsData = response.data.contents;
      currentFilteredData = [...newsData];
      if (currentCategory === "すべて") {
        displayNews(currentFilteredData, currentPage);
      } else {
        updateCategoryButtons();
        filterNewsByCategory();
      }
    })
    .catch(function (error) {
      console.error("Error loading JSON:", error);
    });
}

function displayNews(outData, page = 1) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedData = outData.slice(start, end);

  let newsHtml = "";
  paginatedData.forEach((newsItem) => {
    const { date, category, content, link, window: windowOption } = newsItem;
    newsHtml += `
      <div class="news-list-item">
        <a href="${link}" target="${windowOption === "1" ? "_blank" : "_self"}">
          <div class="news-list-date">${date}</div>
          <div class="news-list-category"><span>${category}</span></div>
          <div class="news-list-title">${content}</div>
        </a>
      </div>
    `;
  });

  document.querySelector(".news-list").innerHTML = newsHtml;

  generatePagination(outData.length, page);
}

categorySelect_all.addEventListener("click", function (e) {
  e.preventDefault();
  let url = new URL(window.location.href);
  url.searchParams.delete("category");
  window.history.pushState({}, "", url.toString());
  currentCategory = "すべて";
  updateCategoryButtons();
  filterNewsByCategory(true);
});

categorySelect_press.addEventListener("click", function (e) {
  e.preventDefault();
  let url = new URL(window.location.href);
  url.searchParams.set("category", "1");
  window.history.pushState({}, "", url.toString());
  currentCategory = "プレスリリース";
  updateCategoryButtons();
  filterNewsByCategory(true);
});

categorySelect_seminar.addEventListener("click", function (e) {
  e.preventDefault();
  let url = new URL(window.location.href);
  url.searchParams.set("category", "2");
  window.history.pushState({}, "", url.toString());
  currentCategory = "セミナー・イベント";
  updateCategoryButtons();
  filterNewsByCategory(true);
});

function updateCategoryButtons() {
  categorySelect_all.classList.remove("active");
  categorySelect_press.classList.remove("active");
  categorySelect_seminar.classList.remove("active");
  if (currentCategory === "すべて") {
    categorySelect_all.classList.add("active");
  } else if (currentCategory === "プレスリリース") {
    categorySelect_press.classList.add("active");
  } else if (currentCategory === "セミナー・イベント") {
    categorySelect_seminar.classList.add("active");
  }
}

let currentFilteredData = [];
function filterNewsByCategory(dataReset = false) {
  if (dataReset) {
    currentPage = 1; // Reset to page 1 on filter
    currentPageGroup = 0; // Reset page group
    let url = new URL(window.location.href);
    url.searchParams.delete("page");
    window.history.pushState({}, "", url.toString());
  }
  if (currentCategory === "すべて") {
    currentFilteredData = [...newsData];
  } else if (currentCategory === "プレスリリース") {
    currentFilteredData = newsData.filter((item) => item.category === currentCategory);
  } else {
    currentFilteredData = newsData.filter((item) => item.category !== "プレスリリース");
  }
  displayNews(currentFilteredData, currentPage);
}

function generatePagination(totalItems, current) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  let pagerHtml = "";

  const maxButtons = 5;
  const totalGroups = Math.ceil(totalPages / maxButtons);

  const groupStart = currentPageGroup * maxButtons + 1;
  const groupEnd = Math.min(groupStart + maxButtons - 1, totalPages);

  // 前へ（グループ前進）
  if (currentPageGroup > 0) {
    pagerHtml += `<button class="no prev prev-group">Prev</button>`;
  }

  // 数字ボタン
  for (let i = groupStart; i <= groupEnd; i++) {
    pagerHtml += `<button class="pager-btn no${i === current ? " active" : ""}" data-page="${i}">${i}</button>`;
  }

  // 次へ（グループ後退）
  if (currentPageGroup < totalGroups - 1) {
    pagerHtml += `<button class="no next next-group">Next</button>`;
  }

  const pagerContainer = document.querySelector(".pager-inner");
  pagerContainer.innerHTML = pagerHtml;

  // 数字クリックイベント
  document.querySelectorAll(".pager-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      currentPage = parseInt(e.target.getAttribute("data-page"));
      let url = new URL(window.location.href);
      url.searchParams.set("page", currentPage);
      window.history.pushState({}, "", url.toString());
      displayNews(currentFilteredData, currentPage);
    });
  });

  // 前へ（ページグループ）
  const prevBtn = document.querySelector(".prev-group");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentPageGroup--;
      currentPage = currentPageGroup * maxButtons + 1;
      let url = new URL(window.location.href);
      url.searchParams.set("page", currentPage);
      window.history.pushState({}, "", url.toString());
      displayNews(currentFilteredData, currentPage);
    });
  }

  // 次へ（ページグループ）
  const nextBtn = document.querySelector(".next-group");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentPageGroup++;
      currentPage = currentPageGroup * maxButtons + 1;
      let url = new URL(window.location.href);
      url.searchParams.set("page", currentPage);
      window.history.pushState({}, "", url.toString());
      displayNews(currentFilteredData, currentPage);
    });
  }
}
