const link1 = document.createElement("a");
const body1 = document.getElementsByClassName("card-body")[1];

link1.href = "https://www.google.com.tr";
link1.className = "btn btn-primary";
link1.id = "clear-todos";
link1.target = "_blank";

link1.appendChild(document.createTextNode("Tekrar deneyiniz"));
body1.appendChild(link1);