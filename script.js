function addTask() {
    const pass = document.getElementById('pass').value;
    const pass2 = document.getElementById('pass2').value;
    const passList = JSON.parse(window.localStorage.getItem('passList'));
    const newPass = pass + pass2
    console.log(newPass);
    try {
        passList.push(newPass);

    } catch {
        passList = Array();
        passList.push(newPass);
    }
   

    window.localStorage.setItem('passList', JSON.stringify(passList));
    document.getElementById('pass').value = "";
    document.getElementById('pass2').value = "";
    
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