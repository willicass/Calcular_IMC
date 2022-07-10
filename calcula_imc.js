function imc(peso, altura) {
    
    var imc = peso / (altura * altura);
    
    if(imc <= 18.5){
      return "Abaixo do Peso " + imc.toFixed(2)
    }
    
    else if(imc <= 25.0){
      return " Peso Normal " + imc.toFixed(2)
    }
    
    else if(imc <= 30.0){
      return "Sobrepeso " + imc.toFixed(2)
    }
    
    else if(imc <= 34.9){
      return "Obesidade Grau I " + imc.toFixed(2)
    }

    else if(imc <= 39.9){
      return "Obesidade Grau II " + imc.toFixed(2)
    }

    else if(imc > 40){
        return "Obesidade Mórbida " + imc.toFixed(2)
    };
};