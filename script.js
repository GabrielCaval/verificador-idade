function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //variável contendo o ano atual
    var fano = document.querySelector('#txtn')// variável do formulário
    var res = document.querySelector('#res')//resultado

                /*condição de erro*/
    if(fano.value.length == 0 || fano.value > ano){
        alert('Algo deu errado:/ Verifique os dados e tente mais uma vez;)')
    } 
             /*condição de erro FIM*/
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var sexo = ''
        var pic = document.createElement('img')//imagem
        pic.setAttribute('id', 'img')
        
         /*TODAS AS CONDIÇÕES PARA HOMEM*/
        if (fsex[0].checked){ 
            sexo = 'homem'
            if(idade >= 0 && idade <= 10){//homem criança 
                pic.src = 'baby-boy.png'
            } else if(idade <= 18){//homem adolescente 
                pic.src = 'teen-boy.png'
            } else if(idade <= 50){//homem adulto 
                pic.src = 'adult-man.png'
            } else{//homem velho
                pic.src = 'elderly-man.png'
            }
        }
        /*TODAS AS CONDIÇÕES PARA HOMEM FIM*/

        /*TODAS AS CONDIÇÕES PARA MULHERES*/
        else if (fsex[1].checked){
            sexo = 'mulher'
            if (idade >= 0 && idade <= 10){//mulher criança
                pic.src = 'baby-woman.png'
            } else if (idade <= 18){//mulher adolescente
                pic.src = 'teen-woman.png'
            } else if (idade <= 50){// mulher adulta
                pic.src = 'adult-woman.png'
            } else {//mulher velha
                pic.src = 'elderly-woman.png'
            }
        }
          /*TODAS AS CONDIÇÕES PARA MULHERES FIM*/


        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sexo} de ${idade} anos de idade.`
        res.appendChild(pic) //imagem
        }
    }
