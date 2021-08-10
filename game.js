function login() {
    var name1var = document.getElementById("player1_name_input").value;
    var name2var = document.getElementById("player2_name_input").value;
    localStorage.setItem("name1", name1var);
    localStorage.setItem("name2", name2var);
    window.location.replace("page.html");
}
