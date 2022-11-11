searchEl = document.getElementById("search-btn")
searchInput = document.querySelector(".search-form")

searchEl.addEventListener("click", () => {
    searchInput.classList.toggle("active")
    
})