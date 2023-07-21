function skillsMember() {
    var member = document.getElementById("member").value;
    var skill = document.getElementById("skill").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "php/skillsMember.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("member=" + member + "&skill=" + skill);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("skillsMember").innerHTML = xhr.responseText;
        }
    }
}