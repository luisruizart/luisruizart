// ayudame con el codigo de un formulario
// que me permita ingresar datos de un cliente
// y que le permita enviarme comentarios

// 1. Crear un formulario
// 2. Crear un boton
// 3. Crear un input
// 4. Crear un textarea
// 5. Crear un label
// 6. Crear un div
// 7. Crear un h1
// 8. Crear un h2


// 1. Crear un formulario
var formulario = document.createElement("form");
formulario.setAttribute("method", "post");
formulario.setAttribute("action", "http://www.google.com");
formulario.setAttribute("id", "formulario");
formulario.setAttribute("name", "formulario");
formulario.setAttribute("class", "formulario");
formulario.setAttribute("style", "background-color: #f1f1f1; padding: 20px;");
document.body.appendChild(formulario);

// 2. Crear un boton
var boton = document.createElement("button");
boton.setAttribute("type", "submit");
boton.setAttribute("id", "boton");
boton.setAttribute("name", "boton");
boton.setAttribute("class", "boton");

var textoBoton = document.createTextNode("Enviar");
boton.appendChild(textoBoton);
formulario.appendChild(boton);

// 3. Crear un input
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "input");
input.setAttribute("name", "input");
input.setAttribute("class", "input");
input.setAttribute("placeholder", "Ingrese su nombre");
input.setAttribute("style", "width: 100%; padding: 12px 20px; margin: 8px 0; box-sizing: border-box; border: 2px solid #ccc; border-radius: 4px; -webkit-transition: 0.5s; transition: 0.5s; outline: none;");
formulario.appendChild(input);

// 4. Crear un textarea
var textarea = document.createElement("textarea");
textarea.setAttribute("id", "textarea");
textarea.setAttribute("name", "textarea");
textarea.setAttribute("class", "textarea");
textarea.setAttribute("placeholder", "Ingrese su comentario");
textarea.setAttribute("style", "width: 100%; height: 150px; padding: 12px 20px; box-sizing: border-box; border: 2px solid #ccc; border-radius: 4px; background-color: #f8f8f8; font-size: 16px; resize: none;");
formulario.appendChild(textarea);

// 5. Crear un label
var label = document.createElement("label");
label.setAttribute("for", "input");
label.setAttribute("style", "font-size: 20px;");
var textoLabel = document.createTextNode("Nombre");
label.appendChild(textoLabel);
formulario.appendChild(label);

// 6. Crear un div
var div = document.createElement("div");
div.setAttribute("id", "div");
div.setAttribute("name", "div");
div.setAttribute("class", "div");
div.setAttribute("style", "text-align: center;");
formulario.appendChild(div);

// 7. Crear un h1
var h1 = document.createElement("h1");
h1.setAttribute("id", "h1");
h1.setAttribute("name", "h1");
h1.setAttribute("class", "h1");
h1.setAttribute("style", "font-size: 40px;");
var textoH1 = document.createTextNode("Formulario");
h1.appendChild(textoH1);
div.appendChild(h1);

// 8. Crear un h2

var h2 = document.createElement("h2");
h2.setAttribute("id", "h2");
h2.setAttribute("name", "h2");
h2.setAttribute("class", "h2");
h2.setAttribute("style", "font-size: 20px;");
var textoH2 = document.createTextNode("Ingrese sus datos");
h2.appendChild(textoH2);
div.appendChild(h2);

// 9. Crear un select
var select = document.createElement("select");
select.setAttribute("id", "select");

var option1 = document.createElement("option");
option1.setAttribute("value", "opcion1");
var textoOption1 = document.createTextNode("Opcion 1");
option1.appendChild(textoOption1);
select.appendChild(option1);

var option2 = document.createElement("option");
option2.setAttribute("value", "opcion2");
var textoOption2 = document.createTextNode("Opcion 2");

option2.appendChild(textoOption2);
select.appendChild(option2);

var option3 = document.createElement("option");
option3.setAttribute("value", "opcion3");
var textoOption3 = document.createTextNode("Opcion 3");
option3.appendChild(textoOption3);
select.appendChild(option3);

formulario.appendChild(select);

// 10. Crear un checkbox


var checkbox = document.createElement("input");
checkbox.setAttribute("type", "checkbox");
checkbox.setAttribute("id", "checkbox");
checkbox.setAttribute("name", "checkbox");
checkbox.setAttribute("class", "checkbox");
checkbox.setAttribute("value", "checkbox");
formulario.appendChild(checkbox);

var labelCheckbox = document.createElement("label");
labelCheckbox.setAttribute("for", "checkbox");
var textoLabelCheckbox = document.createTextNode("Checkbox");
labelCheckbox.appendChild(textoLabelCheckbox);
formulario.appendChild(labelCheckbox);


// 11. Crear un radio button

var radio = document.createElement("input");

radio.setAttribute("type", "radio");
radio.setAttribute("id", "radio");
radio.setAttribute("name", "radio");
radio.setAttribute("class", "radio");
radio.setAttribute("value", "radio");
formulario.appendChild(radio);


var labelRadio = document.createElement("label");

