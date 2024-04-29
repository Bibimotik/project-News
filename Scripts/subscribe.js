document.getElementById("send").addEventListener("click", function() {
    let email = document.getElementById("email").value;

    let userData = {
        email: email
    };

    let jsonData1 = JSON.stringify(userData, null, 2);

    let blob = new Blob([jsonData1], { type: "application/json" });
    let url = URL.createObjectURL(blob);

    let link = document.createElement("a");
    link.href = url;

    let timestamp = new Date().getTime();
    link.download = "data_email_" + timestamp + ".json";
    link.click();

    URL.revokeObjectURL(url);
});