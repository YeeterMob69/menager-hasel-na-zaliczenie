function addTask() {
    let pass = document.getElementById('pass').value;
    let pass2 = document.getElementById('pass2').value;
    let passList = JSON.parse(window.localStorage.getItem('passList'));
    try {
        passList.push(pass);

    } catch {
        passList = Array();
        passList.push(pass);
    }
    let newTask = pass.concat(pass2);
    

    window.localStorage.setItem('passList', JSON.stringify(passList));
    document.getElementById('pass').value = "";

    showTaskList();
}
function showTaskList() {
    let taskArray = JSON.parse(window.localStorage.getItem('passList'));
    if(taskArray === null) return;
    let passList = document.getElementById('passList');
    let htmlBuffer = "";
    htmlBuffer += "<ul>";
    for (let i = 0; i < taskArray.length; i++) {
        htmlBuffer += "<li><button id=\"buttonadd\" onclick=\"removeTask("+i+")\">Usuń</button>"
                        + taskArray[i] + "</li>";
    }
    htmlBuffer += "</ul>";
    passList.innerHTML = htmlBuffer;
}
function removeTask(i) {
    let taskArray = JSON.parse(window.localStorage.getItem('passList'));
    console.log(taskArray);
    taskArray.splice(i, 1);
    console.log(taskArray);

    window.localStorage.setItem('passList', JSON.stringify(taskArray));
    showTaskList();
}