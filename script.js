
const submitFunction = (event) => {
    if(!validarFormulario()){
        event.preventDefault()
    } else{
        event.preventDefault()
        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n'+ 
            'Apellido: ' + document.getElementById('apellido').value + '\n'+
            'Documento: ' + document.getElementById('documento').value + '\n'+
            'Email: ' + document.getElementById('email').value + '\n'+
            'Edad: ' + document.getElementById('edad').value + '\n'+
            'Actividad: ' + document.getElementById('actividad').value + '\n'+
            'Nivel de Estudios: ' + document.getElementById('nivelEstudio').value + '\n'
        )
    }
}

document.getElementById('formulario').addEventListener('submit', submitFunction);// escucha envío del formulario

function validarFormulario() {
    // Esto valida los campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)); // error + primer letra id en mayusculas
        if (campo.value.length == '') {
            mostrarError(errorCampo, '¡Este campo es requerido!');
            validacionCorrecta = false;
        } else if (campo.value.length > 0 && campo.value.length < 3) {
            mostrarError(errorCampo, '¡Este campo debe tener al menos 3 caracteres!');
            validacionCorrecta = false;
        } else {
            ocultarError(errorCampo);
        }
    })
    //Esto valida el campo email
    const email = document.getElementById('email');
    const errorEmail = document.getElementById('errorEmail');

    if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/.test(email.value)) { //valida formato email
        ocultarError(errorEmail);
    } else {
        mostrarError(errorEmail, '¡Ingrese un correo electrónico válido!');
        validacionCorrecta = false;
    }
    // Validación de edad
    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad');

    if(edad.value < 18) {
        mostrarError(errorEdad, '¡Debes ser mayor de 18 años para registrarte!');
        validacionCorrecta = false;
    }else{
        ocultarError(errorEdad)
    }

    // Validación actividad
    const actividad = document.getElementById('actividad');
    const errorActividad = document.getElementById('errorActividad');
    
    if(actividad.value == '') {
        mostrarError(errorActividad, 'Por favor, seleccione una actividad')
        validacionCorrecta = false;
    } else {
        ocultarError(errorActividad)
    }

    // Validación nivel de estudios
    const nivelEstudio = document.getElementById('nivelEstudio');
    const errorEstudio = document.getElementById('errorEstudio');

    if(nivelEstudio.value == ''){
        mostrarError(errorEstudio, 'Por favor, seleccione un nivel de estudios');
        validacionCorrecta = false;
    } else{
        ocultarError(errorEstudio);
    }

    // Validación términos y condiciones
    const aceptoTerminos = document.getElementById('aceptoTerminos');
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos');

    if(!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos, '¡Debes aceptar los términos y condiciones!');
        validacionCorrecta = false;
    }else{
        ocultarError(errorAceptoTerminos);
    }

    return validacionCorrecta; // Esto dirá si el form completo es válido o no
}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = 'block';
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.visisvility = 'hidden';
}