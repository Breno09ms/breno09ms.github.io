var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})

document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.querySelectorAll(".dropdown-toggle");
  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("click", function () {
      var dropdownMenu = dropdown.nextElementSibling;
      dropdownMenu.classList.toggle("show");
    });
  });
});