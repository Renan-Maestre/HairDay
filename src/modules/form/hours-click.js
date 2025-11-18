export function hoursClick(){
    const hours = document.querySelectorAll(".hour-available")

    hours.forEach((available) =>{
        available.addEventListener("click", (selected) =>{
            //remove a classe de todas as li não selecionada
            hours.forEach((hour) =>{
                hour.classList.remove("hour-selected")
            })

            //add class na li clicada
            selected.target.classList.add("hour-selected")
        })
    })

}