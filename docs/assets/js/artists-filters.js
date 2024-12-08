document.addEventListener("DOMContentLoaded", function () {
  function filterArtists(event) {
    const selectedTags = Array.from(
      document.querySelectorAll("input[data-filter='tag']:checked")
    ).map((checkbox) => checkbox.value);
    const selectedLocations = Array.from(
      document.querySelectorAll("input[data-filter='location']:checked")
    ).map((checkbox) => checkbox.value);
    const hasSoundSystemChecked =
      document.querySelector("input[data-filter='sound-system']:checked") !==
      null;

    const artistItems = document.querySelectorAll(".artists-flex-item");

    artistItems.forEach((item) => {
      const artistTags = item.getAttribute("data-tags").split(",");
      const artistSoundSystem = item.getAttribute("data-sound-system").trim();
      const artistLocations = item.getAttribute("data-locations").split(",");

      const matchesTag =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => artistTags.includes(tag));
      const matchesLocation =
        selectedLocations.length === 0 ||
        selectedLocations.some((location) =>
          artistLocations.includes(location)
        );
      const matchesSoundSystem =
        !hasSoundSystemChecked || (hasSoundSystemChecked && artistSoundSystem);

      item.style.display =
        matchesTag && matchesLocation && matchesSoundSystem ? "block" : "none";
    });
  }

  const filterCheckboxes = document.querySelectorAll(
    "#filters input[data-filter]"
  );
  const showFilters = document.getElementById("show-filters");

  filterCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", filterArtists);
  });

  showFilters.addEventListener("change", function (event) {
    event.preventDefault();
    const filters = document.getElementById("filters");
    if (this.checked) {
      filters.classList.remove("d-none");
    } else {
      filters.classList.add("d-none");
      filterCheckboxes.forEach((checkbox) => (checkbox.checked = false));
      filterArtists();
    }
  });

  window.scrollTo(0, window.scrollY);
});
