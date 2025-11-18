import dayJS from "dayjs";


const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")

//data tual para formatar input
const inputToday = dayJS(new Date()).format("YYYY-MM-DD")


//carrega data atual e define data minima 
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
    //previne o comportamento do formulario de recarregar a pagina
    event.preventDefault()

    try {
        const name = clientName.value.trim()

        if(!name){
            return alert("Informe o nome do cliente!")
        }

        //recupera horaio selecioando 
        const  hourSelected = document.querySelector(".hour-selected")

        if(!hourSelected){
            return alert("Selecione um horario!")
        }

        //recupera somente a hora
        const [hour] = hourSelected.innerText.split(":")
        
        //inserir data na hora

        const when = dayJS(selectedDate.value).add(hour, "hour")

        //gerar id

        const id = new Date().getTime()
        console.log({
            id,
            name,
            when,
        });
        
        


        
    } catch (error) {
        alert("não foi possivel realizar o agendamento")
        console.log(error);
        
    }
    
}