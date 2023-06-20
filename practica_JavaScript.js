$(document).ready(function() {
    $('ul.submenu').on('click', 'li a', function() {
      let index = $(this).parent().index();
      $('.Ejercicios > div').hide().eq(index).show();
      if (index === 0) {
        ejecutarEjercicio17();
      } else if (index === 1) {
        ejecutarEjercicio18();
      } else if (index === 2) {
        ejecutarEjercicio19();
      }
      else if (index === 5) {
        ejecutarEjercicio3();
      }
      else if (index === 6) {
        ejecutarEjercicio6();
      }
      else if (index === 7) {
        ejecutarEjercicio8();
      }
        
    else if (index === 9) {
        ejecutarEjercicio2();
        }
     
    });
      
    //Ejercicios
    function ejecutarEjercicio17() 
    {
        let numero=prompt("Dame un numero: "); 
        let matriz = new Array(1,2,3,4,5,6,7,8,9,10);
        let documento = "";
        for (let i = 0; i<10; i++) 
        {
            documento += "<br>" + numero + "x" + matriz[i] + "=" + numero * matriz[i];  
        }
        document.querySelector('.Ejercicios-17').innerHTML = documento;
    }

    function ejecutarEjercicio18()
    {
        let primerNumero=prompt("Dame el primer número: "); 
        let SegundoNumero=prompt("Dame el segundo número: ");
        let documento = "";
        if (primerNumero==SegundoNumero) {
            documento +="<p>Son iguales</p>";
        } else {
            documento +="<p>Son distintos</p>";
        }
        document.querySelector('.Ejercicios-18').innerHTML = documento;
    }

    function ejecutarEjercicio19()
     {
        let fecha=prompt("Dame tu fecha de nacimiento:(DD/MM/AAAA)");
    let fechaDividida=fecha.split("/");
    let dia=parseInt(fechaDividida[0]);
    let mes=parseInt(fechaDividida[1]);
    let anio=parseInt(fechaDividida[2]);
    let documento = "";
    let anioActual= new Date();
    let soloAnio=anioActual.getFullYear();
    documento +=("<p>Tu edad es de: "+(soloAnio-anio)+" años</p>");
    document.querySelector('.Ejercicios-19').innerHTML = documento;
    }

    function ejecutarEjercicio3() 
    {
        //un prompt que pida el dni(cadena), almacenar en variable.
        let dni=prompt("Ingrese tu dni: ");
        //tomar el caracter 9 y almacenar en otra variable.
        let letra=dni.charAt(8);
        //Del dni tomar los primeros 8 carácteres y parsearlos a int.
        let ochoCaracteres=parseInt(dni.substring(0,8));
        //Si dni es menor que 0 o mayor que 99999999, mensaje de error.
        if(dni<0 || dni>99999999)
        {
            alert("El dni no es válido, comprueba si faltan, sobran caracteres o hay más de una letra.");
        }
        //Calcular letra, hacer calculo con ochoCaracteres
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C','K', 'E', 'T'];
        resto=ochoCaracteres%23;
        letraCorrecta=letras[resto];
        //Si la letra es similar a la introducida mostramos texto de que son correctos
        if(letraCorrecta==letra)
        {
            alert("El número y la letra del DNI son correctos.");
        }
        else
        {
            alert("La letra introducida no es la correcta");
        }
        //si no, decimos que la letra no es la correcta.
        
    }
    function ejecutarEjercicio6() 
    {
       //hacer tabla de 12 datos con 0 como valor inicial
        let apariciones = new Array(11).fill(0);
        //obtener 3600 veces las sumas de dos numeros aleatorios
        for (let i = 0; i < 36000; i++) 
        {
            let dado1=Math.floor(Math.random()*6)+1;
            let dado2=Math.floor(Math.random()*6)+1;
            suma=dado1+dado2;
            //coger la suma e incrementarla en la tabla. Resto 2 para que coincida con la posición de la tabla.
            apariciones[suma-2]++;   
        }
        
        for (let i = 2; i <=12; i++)
        { 
            let resultado;
            alert("La suma "+i+" ha aparecido "+apariciones[i-2]+" veces");
        }
        
       
    }
    function ejecutarEjercicio8() 
    {
        //Leer cadena de texto con prompt
        palabra=prompt("Escribe una palabra: ");
        //crear la funcion
        function palindromo(param)
        {
        //quitar espacio y ponerlo todo en minúsculas.
        param=param.replace(/[\W_]/g, "").toLowerCase();
        let revertido=param.split("").reverse().join("");
        return param==revertido;
        }
        if(palindromo(palabra))
        {
            alert("Es un palíndromo")
        }
        else
        {
            alert("No es un palíndromo")
        }
        palindromo(palabra);
    }

    function ejecutarEjercicio2()
     {
        let nombre = prompt("Escribe tu nombre");
        let saludo = document.createElement("p");
        saludo.className = "saludo";
        let hora = new Date().getHours();
        let mensaje = "";
            if (hora >= 7 && hora < 12) 
            {
                mensaje = "Buenos días";
            } 
            else if (hora >= 12 && hora < 21) 
            {
                mensaje = "Buenas tardes";
            } 
            else
            {
                mensaje = "Buenas noches";
            }
        saludo.textContent = "¡"+ mensaje +" "+ nombre + "! :)";
        document.body.appendChild(saludo);

        setTimeout(function () 
        {
            saludo.style.display = "none"; 
        }, 5000);
    }
});
