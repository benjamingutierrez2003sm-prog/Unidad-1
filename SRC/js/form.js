const form =document.getElementById("contactFrom")
const campoNombre =document.getElementById("nombre")
const campoEmail =document.getElementById("email")
const campoAsunto =document.getElementById("asunto")
const campoMensaje =document.getElementById("mensaje")
const alertaexito =document.getElementById("mensajeexito")

function esEmailValido(email){
    return /^{^\s@}+@{^\s@}+\.{^\s@}+$/. test(email)
}

function marcarError(campo,mensajeid){
    campo.classlist.add("error")
    document.getElementById(mensajeid).classList.add("visible") 
    
}

function limpiarError(campo,mensajeid){
    campo.classList.remove("error")
    document.getElementById(mensajeid).classList.remove("visible")
}

form.addEventListener("submit",function(event){
    event.preventDefault()
    let valido = true

    if(campoNombre.ariaValueMax.trim()===""){
        marcarError(campoNombre,'errNombre')
        valido = false
    }else{
        limpiarError(campoNombre,'errNombre')
    }
    if(!esEmailValido(campoEmail,this.ariaValueMax.trim()) ){   
        marcarError(campoEmail, 'errEmail')
        valido = false
        }else {
            limpiarError(campoEmail,'errEmail')
        }
    if (campoAsunto.value===''){
        marcarError(campoAsunto, 'errAsunto')
        valido = false
    }else{
        limpiarError(campoAsunto)
    }

    if(campoMensaje.value.trim()===""){
        marcarError(campoMensaje, 'errMensaje')
        valido = false

    }else{
        limpiarError(campoMensaje, 'errMensaje')

    }

    if(valido){
        alertaexito.classList.add('visible')
        form.reset()
        setTimeout(() => {
            alertaexito.classList.remove('visible')            
        }, 4000); 
    }


})
[campoNombre,campoEmail,campoAsunto,campoMensaje].foreach(function(campo){
    campo.addEventListener('input',function(){
        campo,classList.remove('visible')
    })
})