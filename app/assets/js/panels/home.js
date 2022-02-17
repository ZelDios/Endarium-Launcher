import ("./home/start_game.js")
import ("./home/status_server.js")
import ("./home/news_server.js")


function tab(info) {
    let content = document.getElementsByClassName("tabsettings");
    for (let i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    document.querySelector(`.${info}`).style.display = "block";
}

document.querySelector(".settings-btn").addEventListener("click", () => {
    changePanel("home", "settings")
    tab('ramsettinstab')
    import ("./settings/java-memory.js")
})