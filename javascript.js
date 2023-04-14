function encriptar() {
    let texto = document.getElementById("texto").value;
    let h3 = document.getElementById("h3");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
     document.getElementById('copiar').style.display='block';
    
   

    let textoCifrado = texto
      .replace(/e/gi, "ff")
      .replace(/i/gi, "hii")
      .replace(/a/gi, "hey")
      .replace(/o/gi, "jojo")
      .replace(/u/gi, "siuu");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      h3.textContent =textoCifrado;
      parrafo.textContent = "Texto encriptado con éxito";
      muñeco.remove();
      
    } else {
    
      h3.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
 
   
  }

  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let h3 = document.getElementById("h3");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    document.getElementById('copiar').style.display='none';
    let textoCifrado = texto
      .replace(/ff/gi, "e")
      .replace(/hii/gi, "i")
      .replace(/hey/gi, "a")
      .replace(/jojo/gi, "o")
      .replace(/siuu/gi, "u");
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        h3.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.remove();
      } else {
        h3.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
      }
  }
  console.log("hola soy emanuel vargas y este es mi challenge one ")