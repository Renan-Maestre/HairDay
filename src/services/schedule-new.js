import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {

    try {
        //faz a requisição para enviar os dados para a api
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, name, when })
        })

        //Fala que deu certo 

        alert("agendamento realizado com sucesso ")



    } catch (error) {
        console.log(error);

        //fala que deu ruim
        alert("Não foi possivel agendar tente novamente mais tarde")

    }

}