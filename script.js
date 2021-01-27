const favoriteIcons = document.getElementsByClassName("restaurant__icon");

for (let i = 0; i < favoriteIcons.length; i++) {
  favoriteIcons[i].addEventListener("click", toggleFavorite);
}

function toggleFavorite(e) {
  let classlist = e.target.classList;
  if (classlist.contains("restaurant__icon--favorite")) {
    classlist.remove("restaurant__icon--favorite", "fas");
    classlist.add("far");
  } else {
    classlist.remove("far");
    classlist.add("fas", "restaurant__icon--favorite");
  }
}
