document.getElementById("calcular").addEventListener("click", function () {
  const peso = parseFloat(document.getElementById("peso").value);
  
  if (!isNaN(peso)) {
      const quantidadeAgua = peso * 35;
      document.getElementById("resultado").textContent = `Você deve beber ${quantidadeAgua.toFixed(2)} ml de água por dia.`;
  } else {
      document.getElementById("resultado").textContent = "Informe um peso válido.";
  }
});
