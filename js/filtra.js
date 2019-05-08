var filtro = document.querySelector("#filtrar-tabela");

filtro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");

    pacientes.forEach(function(paciente){
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        var expressao = new RegExp(filtro.value, "i");
        
        if ((expressao.test(nome)) && (filtro.value != "")){
            paciente.classList.remove("invisivel");
        } else if((filtro.value != "")) {
            paciente.classList.add("invisivel");
        } else {
            paciente.classList.remove("invisivel");
        }
    });
});