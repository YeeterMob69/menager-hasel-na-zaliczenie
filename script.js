function addTask() {
    let task = document.getElementById('task').value;
    let task2 = document.getElementById('task2').value;
    let taskList = JSON.parse(window.localStorage.getItem('taskList'));
    try {
        taskList.push(task + task2);

    } catch {
        taskList = Array();
        taskList.push(task + task2);

    }
    

    window.localStorage.setItem('taskList', JSON.stringify(taskList));
    document.getElementById('task' + 'task2').value = "";

    showTaskList();
}
function showTaskList() {
    let taskArray = JSON.parse(window.localStorage.getItem('taskList'));
    if(taskArray === null) return;
    let taskList = document.getElementById('taskList');
    let htmlBuffer = "";
    htmlBuffer += "<ul>";
    for (let i = 0; i < taskArray.length; i++) {
        htmlBuffer += "<li><button id=\"buttonadd\" onclick=\"removeTask("+i+")\">Usuń</button>"
                        + taskArray[i] + "</li>";
    }
    htmlBuffer += "</ul>";
    taskList.innerHTML = htmlBuffer;
}
function removeTask(i) {
    let taskArray = JSON.parse(window.localStorage.getItem('taskList'));
    console.log(taskArray);
    taskArray.splice(i, 1);
    console.log(taskArray);

    window.localStorage.setItem('taskList', JSON.stringify(taskArray));
    showTaskList();
}