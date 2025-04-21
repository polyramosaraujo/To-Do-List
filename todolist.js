//funcao 1: apertar no botão tema e trocar as cores da pagina
function tema(){
    let backgroundColor = window.getComputedStyle(document.body).backgroundColor

    if(backgroundColor==="rgb(228, 228, 228)"){
        document.body.style.background = "rgb(28, 28, 28)";
        document.body.style.color = "rgb(219, 219, 219)";
        document.getElementById("main").style.background = "rgb(87, 87, 87)"
        document.getElementById("main").style.border = "rgb(121, 121, 121) solid 1px"
        document.getElementById("tema").style.background = "rgb(28, 28, 28)"
        document.getElementById("tema").style.border = "rgb(107, 107, 107) solid 1px"
        document.getElementById("tema").style.color = "rgb(219, 219, 219)"
        document.getElementById("imagem").src = "/midia/sol.png"
        document.getElementById("campo").style.background = "rgb(28, 28, 28)"
        document.getElementById("campo").style.border = "rgb(107, 107, 107) solid 1px"
        document.getElementById("campo").style.color = "rgb(241, 241, 241)"
        document.querySelectorAll(".lixeira").forEach(elem => {
            elem.src = "/midia/lixeira-branca.png"
        })    

        document.querySelectorAll(".paragrafo").forEach(elem => {
            let id = elem.id
            let item = document.getElementById(id)
            let decoracao = window.getComputedStyle(item).textDecoration
            if(decoracao.includes("none")){
                item.style.color = "rgb(241, 241, 241)"
            }
        })    
    }

    if(backgroundColor=="rgb(28, 28, 28)"){
        document.body.style.background = "rgb(228, 228, 228)";
        document.body.style.color = "rgb(0, 0, 0)";
        document.getElementById("main").style.background = "rgb(255, 255, 255)"
        document.getElementById("main").style.border = "rgb(208, 208, 208) solid 1px"
        document.getElementById("tema").style.background = "rgb(240, 240, 240)"
        document.getElementById("tema").style.border = "rgb(223, 223, 223) solid 1px"
        document.getElementById("tema").style.color = "rgb(0, 0, 0)"
        document.getElementById("imagem").src = "/midia/lua.png"
        document.getElementById("campo").style.background = "rgb(255, 255, 255)"
        document.getElementById("campo").style.border = "rgb(185, 185, 185) solid 1px"
        document.getElementById("campo").style.color = "rgb(0, 0, 0)"
        document.querySelectorAll(".lixeira").forEach(elem => {
            elem.src = "/midia/lixeira-preta.png"
        })
        
        document.querySelectorAll(".paragrafo").forEach(elem => {
            let id = elem.id
            let item = document.getElementById(id)
            let decoracao = window.getComputedStyle(item).textDecoration
            if(decoracao.includes("none")){
                item.style.color = "rgb(0, 0, 0)"
            }
        })    
     }
}

//funcao 2: apertar no botao adicionar e pegar o que esta escrito no input e criar um novo paragrafo no campo de tarefas
let contador = 0
function adicionarTarefa(){
    ++contador
    let input = document.getElementById("campo")
    let tarefa = input.value
    let lixeira

    let backgroundColor = window.getComputedStyle(document.body).backgroundColor
    if(backgroundColor==="rgb(228, 228, 228)"){
        lixeira = "midia/lixeira-preta.png"
    }
    if(backgroundColor=="rgb(28, 28, 28)"){
        lixeira = "midia/lixeira-branca.png"
    }

    if(tarefa!="" && tarefa!=null && tarefa!=undefined){
        document.getElementById("tarefas").insertAdjacentHTML("afterbegin", `<div class="tarefa" id="divtarefa${contador}"><p class="paragrafo" id="tarefa${contador}" onclick="concluirTarefa(id)">${tarefa}</p><img class="lixeira" onclick="excluirTarefa('divtarefa${contador}')" src="${lixeira}"></div>`);
        input.value = ""
        input.focus()
    }
}

document.getElementById("campo").addEventListener("keyup", function(event){
    if(event.key==="Enter"){
        event.preventDefault()
        document.getElementById("adicionar").click()
    }
})    

//funcao 3: apertar no nome da tarefa e ela ficar sublinhada e ir para o final da lista ou ficar dessublinhada e voltar para o topo da lista
function concluirTarefa(id){
    let backgroundColor = window.getComputedStyle(document.body).backgroundColor

    let tarefa = document.getElementById(id)
    let divTarefa = document.getElementById(`div${id}`)
    let decoracao = window.getComputedStyle(tarefa).textDecoration
    let lista = document.getElementById("tarefas")

    if(decoracao.includes("none")){
        let restante = decoracao.substring(5)
        tarefa.style.textDecoration = `line-through ${restante}`
        
        if(backgroundColor==="rgb(228, 228, 228)"){
            tarefa.style.color = `rgb(142, 142, 142)`
            tarefa.style.textDecorationColor = `rgb(142, 142, 142)`    
        }

        if(backgroundColor=="rgb(28, 28, 28)"){
            tarefa.style.color = `rgb(142, 142, 142)`
            tarefa.style.textDecorationColor = `rgb(142, 142, 142)`    
        }

        lista.appendChild(divTarefa)
    }

    if(decoracao.includes("line-through")){
        let restante = decoracao.substring(13)
        tarefa.style.textDecoration = `none ${restante}`
        
        if(backgroundColor==="rgb(228, 228, 228)"){
            tarefa.style.color = `rgb(0, 0, 0)`
        }        

        if(backgroundColor=="rgb(28, 28, 28)"){
            tarefa.style.color = `rgb(228, 228, 228)`
        }

        lista.insertBefore(divTarefa, lista.firstChild)
    }
}

//funcao 4: apertar no botao de lixeira e excluir a tarefa (testar uma box de confirmacao tbm)
function excluirTarefa(id){
    document.getElementById(id).remove()
}