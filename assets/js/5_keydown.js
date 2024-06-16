document.addEventListener("keydown", function(event) {
    const key = document.getElementById("key");
    if (event.key === "a") {
        key.style.backgroundColor = "pink";
    } else if (event.key === "s") {
        key.style.backgroundColor = "orange";
    } else if (event.key === "d") {
        key.style.backgroundColor = "skyblue";
    }
});

document.addEventListener("keydown", function(event) {
    const key2 = document.getElementById("key2");
    if (event.key === "q") {
        key2.style.backgroundColor = "purple";
    } else if (event.key === "w") {
        key2.style.backgroundColor = "gray";
    } else if (event.key === "e") {
        key2.style.backgroundColor = "brown";
    }
});
