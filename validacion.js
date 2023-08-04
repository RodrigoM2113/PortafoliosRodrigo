//Haz tú validación en javascript acá

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const area = document.querySelectorAll('#formulario textarea')



const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    mensaje: /^[a-zA-ZÀ-ÿ\s]{1,300}$/,
    
    
}
const campos = {
    nombre: false,
    email: false,
    asunto: false,
    mensaje: false
}


const validarFormulario = (e) => {
    console.log(e.target.name);
    switch(e.target.name){
        
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre")
        break;
        case "email":
            validarCampo(expresiones.correo, e.target, "email")
            
        break;
        case "asunto":
            validarCampo(expresiones.asunto, e.target, "asunto")
            
        break;
        case "mensaje":
            validarCampo(expresiones.mensaje, e.target, "mensaje")
            
        break;
        

    }
}



const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.querySelector(`#grupo__${campo} .form__input__error`).classList.remove('form__input__error-activo')
        campos[campo] = true;
    }else{
        document.querySelector(`#grupo__${campo} .form__input__error`).classList.add('form__input__error-activo')
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
    
});

area.forEach((textarea) =>{
    textarea.addEventListener('keyup', validarFormulario);
    textarea.addEventListener('blur', validarFormulario);
});




formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(campos.nombre && campos.email && campos.asunto && campos.mensaje){
        formulario.reset();
    }
    
});

