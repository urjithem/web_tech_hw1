async function getText() {
  let res = await fetch("data.json");
  res = res.json();
  return res;
}

getText().then((data) => {
  section2data = data["section2"];
  section4data = data["section4"];
  console.log(section2data);
  document.getElementById("griffith-heading").textContent =
    section2data[0]["heading"];
  document.getElementById("griffith-text").textContent =
    section2data[0]["text"];
  document.getElementById("mountains-heading").textContent =
    section2data[1]["heading"];
  document.getElementById("mountains-text").textContent =
    section2data[1]["text"];
  document.getElementById("universal-heading").textContent =
    section2data[2]["heading"];
  document.getElementById("universal-text").textContent =
    section2data[2]["text"];

  griffith_image = document.createElement("img");
  griffith_image.src = section2data[0]["image"];
  console.log("source= ", griffith_image.src);
  griffith_image.alt = "griffith image";
  griffith_image.classList.add("card-img");
  document.getElementById("griffith-card").appendChild(griffith_image);

  griffith_image.src = document.getElementById(
    "hollywood-heading"
  ).textContent = section4data[0]["heading"];
  document.getElementById("hollywood-text").textContent =
    section4data[0]["text"];
  document.getElementById("beaches-heading").textContent =
    section4data[1]["heading"];
  document.getElementById("beaches-text").textContent = section4data[1]["text"];
});
