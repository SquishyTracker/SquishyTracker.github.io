fetch("components/nav.html")
.then(response => response.text())
.then(data => {
    document.getElementById("navigation").innerHTML = data;
});
