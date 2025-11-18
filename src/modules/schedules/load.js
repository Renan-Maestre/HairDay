import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursload } from "../form/hours-load.js";

const selectedDate = document.getElementById("date")

export async function schedulesDay(){
    //Obtém a data do input
    const date = selectedDate.value

    //buscar na api os agendamentos 
    const dailySchedules = await scheduleFetchByDay({date})
    console.log(dailySchedules);
    


    //Renderiza as horas disponiveis 
    hoursload({date})
}