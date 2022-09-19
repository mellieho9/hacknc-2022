function togglepanel1() {
    var panel = document.getElementById('panel1');
    if (window.getComputedStyle(panel).maxHeight === "0px") {
        panel.style.maxHeight = panel.scrollHeight + "px";
    } else {
        panel.style.maxHeight = 0;
    }
}

function togglepanel2() {
    var panel = document.getElementById('panel2');
    if (window.getComputedStyle(panel).maxHeight === "0px") {
        panel.style.maxHeight = panel.scrollHeight + "px";
    } else {
        panel.style.maxHeight = 0;
    }
}