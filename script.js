function advinhar() {
    var fotoprincesa = document.createElement('img')
    fotoprincesa.setAttribute('id','princesa')
    var princesa = ''

   
    //Cor de cabelo
    let hair = document.getElementsByName('rdhair')
    let cabelo = ``

        if (hair[0].checked) {
            cabelo = 'Loiros'
        }
        else if (hair[1].checked) {
            cabelo = 'Ruivos'
        }
        else if (hair[2].checked) {
            cabelo = 'Pretos'
        }
        else if (hair[3].checked) {
            cabelo = 'Castanhos'
    }


    //Tipo de cabelo

    let tipo = document.getElementsByName('rdtipo')
    let cacholiso = ``

        if (tipo[0].checked) {
            cacholiso = 'liso'
        }
        else if (tipo[1].checked) {
            cacholiso = 'cacheado'
    }

    //Tipo de penteado

    let style = document.getElementsByName('rdpenteado')
    let penteado = ``

        if (style[0].checked) {
            penteado = 'Preso'
        }
        else if (style[1].checked) {
            penteado = 'Trançado'
        }
        else if (style[2].checked) {
            penteado = 'Solto'
        }

    
    //tamanho do cabelo

    let size = document.getElementsByName('rdtamanho')
    let tamanho = ``

        if (size[0].checked) {
            tamanho = 'Curto'
        }
        else if (size[1].checked) {
            tamanho = 'Longo'
    }

    //Cor de pele

    let skin = document.getElementsByName('rdpele')
    let pele = ``

        if (skin[0].checked) {
            pele = 'Branca'
        }
        else if (skin[1].checked) {
            pele = 'Morena'
    }
    
    //Variaveis para imagem
    if (hair[0].checked && tipo[0].checked && style[0].checked && size[0].checked && skin[0].checked ) {
        fotoprincesa.setAttribute('src', './ft/cinderela.jpg')
        princesa = 'Cinderela'
    
    } else if (hair[0].checked && tipo[0].checked && style[2].checked && size[1].checked && skin[0].checked) {
        fotoprincesa.setAttribute('src', './ft/rapunzel.jpg')
        princesa = 'Rapunzel'

    } else if (hair[0].checked && tipo[0].checked && style[1].checked && size[1].checked && skin[0].checked) {
        fotoprincesa.setAttribute('src', './ft/elza.jpg')
        princesa = 'Elza'

    } else if (hair[1].checked && tipo[0].checked && style[2].checked && size[1].checked && skin[0].checked) {
        fotoprincesa.setAttribute('src', './ft/ariel.jpg')
        princesa = 'Ariel'

    } else if (hair[1].checked && tipo[0].checked && style[1].checked && size[1].checked && skin[0].checked) {
        fotoprincesa.setAttribute('src', './ft/ana.jpg')
        princesa = 'Ana'

    } else if (hair[1].checked && tipo[1].checked && style[2].checked && size[1].checked && skin[0].checked) {
        fotoprincesa.setAttribute('src', './ft/merida.jpg')
        princesa = 'Merida'
        
    } else if (hair[2].checked && tipo[0].checked && style[2].checked && size[1].checked && skin[0].checked) {
        fotoprincesa.setAttribute('src', './ft/mulan.jpg')
        princesa = 'Mulan'

    } else if (hair[2].checked && tipo[0].checked && style[2].checked && size[0].checked && skin[0].checked) {
        fotoprincesa.setAttribute('src', './ft/branca.jpg')
        princesa = 'Branca de Neve'
    
    } else if (hair[2].checked && tipo[0].checked && style[0].checked && size[1].checked && skin[1].checked) {
        fotoprincesa.setAttribute('src', './ft/jasmine.jpg')
        princesa = 'Jasmine'
    
    } else if (hair[2].checked && tipo[0].checked && style[2].checked && size[1].checked && skin[1].checked) {
        fotoprincesa.setAttribute('src', './ft/pocahontas.jpg')
        princesa = 'Pocahontas'

    } else if (hair[3].checked && tipo[0].checked && style[0].checked && size[1].checked && skin[0].checked) {
        fotoprincesa.setAttribute('src', './ft/bela.jpg')
        princesa = 'Bela'
        
    } else if (hair[3].checked && tipo[1].checked && style[2].checked && size[1].checked && skin[1].checked) {
        fotoprincesa.setAttribute('src', './ft/moana.jpg')
        princesa = 'Moana'
        
    } else if (hair[3].checked && tipo[1].checked && style[0].checked && size[0].checked && skin[1].checked) {
        fotoprincesa.setAttribute('src', './ft/tiana.jpg')
        princesa = 'Tiana'
    } else if (alert()){

    };
    
    let txt = document.querySelector('div#texto')
        txt.innerHTML = `<p>Você pensou em uma princesa com pele ${pele}, com cabelos ${penteado}, ${tamanho}, ${cacholiso} e ${cabelo}. Seria a ${princesa}?</p>`
        txt.appendChild(fotoprincesa)
    
    function alert(){
        window.alert('Nenhuma princesa foi encontrada com essas caracteristicas. \n Tente uma nova combinação!');
        window.location.reload();        
    }














    
}

