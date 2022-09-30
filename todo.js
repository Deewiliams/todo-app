document.querySelector("#add").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
            <div class="task">
            <table>
            <tr id="taskname">
              <td>${document.querySelector("#newtask input").value}</td>
            </tr>
          </table>
                <button class="delete">
                X
                </button>
            </div>
        `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
      document.getElementById("input").value = "";
    }
  }
};
