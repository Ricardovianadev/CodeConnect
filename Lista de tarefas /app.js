let BotaoAdd = document.getElementById ("botao");
let Input = document.getElementById ("input-tarefa");
let Terefas = document.getElementById ("tarefas");
let marcado = false;

BotaoAdd.addEventListener('click', function () {
    if (Input.value != '') {
        var tarefa = document.createElement ('p');
        tarefas.appendChild(tarefa);
        tarefa.innerText='- ' + Input.value;
        Input.value = '';
        tarefa.addEventListener("click", function () {
            if (marcado == false) {
            tarefa.style.textDecoration = "line-through";
            marcado = true;
        }
        else {
            tarefa.style.textDecoration = " ";
             marcado = false;
        }
    })
        tarefa.addEventListener ("dbclick", function () {
            Tarefa.removechild(tarefa);
        })
    }
})     