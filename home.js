Notification.requestPermission().then(perm => {
   console.log(perm);
})

setInterval(function() {
    var time = new Date()
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    if (hours == 9 && minutes ==0 && seconds == 0) {
        new Notification("From Remind - Good Morning!", {
            body: "Good Morning! What do you need to work on today or in the future? Update your Remind! "

        })
        console.log("Push Given. All is well.");
    }
    else if (hours == 15 && minutes ==0 && seconds ==0) {
        new Notification("From Remind - Good Afternoon!", {
            body: "You are halfway through the day! What have you completed? What are you still working on? Update your Remind!"

        })
        console.log("Push Given. All is well.");
    }
    else if (hours == 19 && minutes ==0 && seconds == 0) {
        new Notification("From Remind - Good Evening!", {
            body: "You are done with the day! How did it go? What have you done? Update your Remind!"

        })
        console.log("Push Given. All is well.");
    }
    else {
        console.log("No Push Given. Time is " +hours + ":" + minutes + ":" + seconds);
        new Notification("From Remind - No WOrk!", {
            body: "You are done with the day! How did it go? What have you done? Update your Remind!"

        })

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