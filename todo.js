document.querySelector("#add").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
            <div class="task">
            <table>
            <tr>
              <th>To do list</th>
            </tr>
            <tr id="taskname">
              <td>${document.querySelector("#newtask input").value}</td>
            </tr>
          </table>
                <button class="delete">
                    <i class="far fa-trash-alt">x</i>
                </button>
            </div>
        `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
