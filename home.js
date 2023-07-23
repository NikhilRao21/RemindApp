var time = new Date()

Notification.requestPermission().then(perm => {
    if (perm === "granted" && time.getHours == 9 && time.getMinutes ==0 && time.getSeconds == 0) {
        new Notification("From Remind - Good Morning!", {
            body: "Enter Notifications For the Day! "

        })
    }

})
function newElement(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please enter the name of the task.")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}