let data = [
  {
    name: "Zee",
    age: "28",
  },
  {
    name: "Barbora",
    age: "20",
  },
  {
    name: "Zee2",
    age: "28",
  },
  {
    name: "Barbora2",
    age: "20",
  },
  {
    name: "Zee3",
    age: "28",
  },
  {
    name: "Barbora3",
    age: "20",
  },
];

const info = document.querySelector("#info");

let details = data.map(function (item) {
  return "<div>" + item.name + " " + "is " + item.age + "</div>";
});

info.innerHTML = details.join("\n");
