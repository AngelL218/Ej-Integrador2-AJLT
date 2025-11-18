  document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    // Capturamos los valores del formulario
    const nombre = document.querySelector('input[name="nombre"]').value;
    const correo = document.querySelector('input[name="correo"]').value;
    const financiamiento = document.querySelector('input[name="financiamiento"]:checked').value;
    const marca = document.querySelector('select[name="marca"]').value;

    // Capturamos los extras seleccionados
    const extras = [];
    document.querySelectorAll('input[name="extras"]:checked').forEach(function(el) {
      extras.push(el.value);
    });

    // Creamos el contenido que se mostrará en la página
    const resultadoHTML = `
      <h3>Resumen de Cotización</h3>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Correo:</strong> ${correo}</p>
      <p><strong>Financiamiento:</strong> ${financiamiento}</p>
      <p><strong>Marca seleccionada:</strong> ${marca}</p>
      <p><strong>Extras:</strong> ${extras.length > 0 ? extras.join(', ') : 'Ninguno'}</p>
    `;

    // Insertamos el contenido en el div resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = resultadoHTML;
    resultadoDiv.style.display = "block";
  });