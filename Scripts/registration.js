document.getElementById("registration").addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    let userData = {
        email: email,
        name: name,
        password: password
    };

    let jsonData = JSON.stringify(userData, null, 2);

    let blob = new Blob([jsonData], { type: "application/json" });
    let url = URL.createObjectURL(blob);

    let link = document.createElement("a");
    link.href = url;
    //ПОМЕНЯЙ ССЫЛКУ ДЛЯ СОХРАНЕНИЯ
    link.download = "D:/Учеба/project-News/Data/registration.json";
    link.click();

    URL.revokeObjectURL(url);
});