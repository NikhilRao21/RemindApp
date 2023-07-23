Notification.requestPermission().then(perm => {
   console.log(perm);
})
var time = new Date();
setInterval(function() {
    var time = Date()
    return time;
}, 100);
setInterval(function() {
    if (time.getHours() == 9 && time.getMinutes() ==0 && time.getSeconds() == 0) {
        new Notification("From Remind - Good Morning!", {
            body: "Good Morning! What do you need to work on today or in the future? Update your Remind! "

        })
        console.log("Push Given. All is well.");
    }
    else if (time.getHours() == 11 && time.getMinutes() ==49 && time.getSeconds() ==20) {
        new Notification("From Remind - Good Afternoon!", {
            body: "You are halfway through the day! What have you completed? What are you still working on? Update your Remind!"

        })
        console.log("Push Given. All is well.");
    }
    else if (time.getHours() == 19 && time.getMinutes() ==0 && time.getSeconds() == 0) {
        new Notification("From Remind - Good Evening!", {
            body: "You are done with the day! How did it go? What have you done? Update your Remind!"

        })
        console.log("Push Given. All is well.");
    }
    else {
        console.log("No Push Given. Time is " + time);
    }

}, 100);

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