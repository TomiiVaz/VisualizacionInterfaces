let inputUsuario = $("#validarUsuario");
let inputClave = $("#validarClave");
let formLogin = $("#formLogin");
let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/; // Expresión reg de email

$("#validarUsuario").keyup(function (e) {
  if ($("#validarUsuario").val().length < 5) {
    $("#validarUsuario").removeClass("is-valid");
    $("#validarUsuario").addClass("is-invalid");
  } else {
    $("#validarUsuario").removeClass("is-invalid");
    $("#validarUsuario").addClass("is-valid");
  }
});

$("#validarClave").keyup(function (e) {
  if ($("#validarClave").val().length < 8) {
    $("#validarClave").removeClass("is-valid");
    $("#validarClave").addClass("is-invalid");
  } else {
    $("#validarClave").removeClass("is-invalid");
    $("#validarClave").addClass("is-valid");
  }
});

/////////////////// Registrar ////////////////////////

$("#validarNombre").keyup(function (e) {
  if ($("#validarNombre").val().length < 5) {
    $("#validarNombre").removeClass("is-valid");
    $("#validarNombre").addClass("is-invalid");
  } else {
    $("#validarNombre").removeClass("is-invalid");
    $("#validarNombre").addClass("is-valid");
  }
});

$("#validarCorreo").keyup(function (e) {
  if (!$("#validarCorreo").val().match(regexEmail)) {
    $("#validarCorreo").removeClass("is-valid");
    $("#validarCorreo").addClass("is-invalid");
  } else {
    $("#validarCorreo").removeClass("is-invalid");
    $("#validarCorreo").addClass("is-valid");
  }
});

$("#validarCorreo2").keyup(function (e) {
  if ($("#validarCorreo2").val() != $("#validarCorreo").val()) {
    $("#validarCorreo2").removeClass("is-valid");
    $("#validarCorreo2").addClass("is-invalid");
  } else {
    $("#validarCorreo2").removeClass("is-invalid");
    $("#validarCorreo2").addClass("is-valid");
  }
});

$("#validarContraseña").keyup(function (e) {
  if ($("#validarContraseña").val().length < 8) {
    $("#validarContraseña").removeClass("is-valid");
    $("#validarContraseña").addClass("is-invalid");
  } else {
    $("#validarContraseña").removeClass("is-invalid");
    $("#validarContraseña").addClass("is-valid");
  }
});

$("#validarContraseña2").keyup(function (e) {
  if ($("#validarContraseña").val() != $("#validarContraseña2").val()) {
    $("#validarContraseña2").removeClass("is-valid");
    $("#validarContraseña2").addClass("is-invalid");
  } else {
    $("#validarContraseña2").removeClass("is-invalid");
    $("#validarContraseña2").addClass("is-valid");
  }
});
