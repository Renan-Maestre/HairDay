import dayjs from "dayjs";

//seleciona as sessões (manhã tarde e noite )

const periodMorning =  document.getElementById("period-morning")
const periodAfternoon =  document.getElementById("period-afternoon")
const periodNight =  document.getElementById("period-night")

export function scheduleShow({dailySchedules}){

    try {
        //limpa a lista
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        //renderizar agendamentos por periodo

        dailySchedules.forEach((schedule) => {

            const item = document.createElement("li")
            const time = document.createElement("strong")
            const name = document.createElement("span")

            //Add id do agendamento 
            item.setAttribute("data-id", schedule.id)

            time.textContent = dayjs(schedule.when).format("HH:mm")

            name.textContent = schedule.name

            //cria icone de cancelar o agendamento 

            const cancelItem = document.createElement("img")
            cancelItem.classList.add("cancel-icon")
            cancelItem.setAttribute("src","./src/assets/cancel.svg")
            cancelItem.setAttribute("alt","cancelar")

            //add o tempo , nome e icone no item
            
            item.append(time, name, cancelItem)

            //obtem somente  hora 

            const hour = dayjs(schedule.when).hour()

            //renderizar o agendamento de forma condicional (Manha , tarde ou noite )

            if(hour <= 12){
                periodMorning.appendChild(item)
            }else if(hour > 12 && hour <= 18 ){
                periodAfternoon.appendChild(item)
            }else{
                periodNight.appendChild(item)
            }
        });
        
    } catch (error) {
        alert("Não foi ppossivel carregar os agendamentos do dia")
        console.log(error);
        
    }
}