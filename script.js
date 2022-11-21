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

    let tipo = document.getElementsByName('rdcacho')
    let cacho = ``

        if (tipo[0].checked) {
            cacho = 'com'
        }
        else if (tipo[1].checked) {
            cacho = 'sem'
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
    if (hair[0].checked && tipo[1].checked && skin[0].checked) {
        fotoprincesa.setAttribute('src', './ft/cinderela.jpg')
        princesa = 'Cinderela'
    
    } else if (hair[0].checked && tipo[0].checked && skin[0].checked) {
        fotoprincesa.setAttribute('src', './ft/elza.jpg')
        princesa = 'Elza'

    } else if (hair[1].checked && tipo[1].checked && skin[0].checked) {
        fotoprincesa.setAttribute('src', './ft/ariel.jpg')
        princesa = 'Ariel'

    } else if (hair[1].checked && tipo[0].checked && skin[0].checked) {
        fotoprincesa.setAttribute('src', './ft/merida.jpg')
        princesa = 'Merida'
        
    } else if (hair[2].checked && tipo[1].checked && skin[0].checked) {
        fotoprincesa.setAttribute('src', './ft/mulan.jpg')
        princesa = 'Mulan'

    } else if (hair[2].checked && tipo[0].checked && skin[0].checked) {
        fotoprincesa.setAttribute('src', './ft/branca.jpg')
        princesa = 'Branca de Neve'
    
    } else if (hair[2].checked && tipo[0].checked && skin[1].checked) {
        fotoprincesa.setAttribute('src', './ft/jasmine.jpg')
        princesa = 'Jasmine'
    
    } else if (hair[2].checked && tipo[1].checked && skin[1].checked) {
        fotoprincesa.setAttribute('src', './ft/pocahontas.jpg')
        princesa = 'Pocahontas'

    } else if (hair[3].checked && tipo[0].checked && skin[0].checked) {
        fotoprincesa.setAttribute('src', './ft/bela.jpg')
        princesa = 'Bela'
    
    } else if (hair[3].checked && tipo[1].checked && skin[0].checked) {
        fotoprincesa.setAttribute('src', './ft/ana.jpg')
        princesa = 'Ana'
        
    } else if (hair[3].checked && tipo[1].checked && skin[1].checked) {
        fotoprincesa.setAttribute('src', './ft/moana.jpg')
        princesa = 'Moana'
        
    } else if (hair[3].checked && tipo[0].checked && skin[1].checked) {
        fotoprincesa.setAttribute('src', './ft/tiana.jpg')
        princesa = 'Tiana'
    } else if (alert()){

    }
    
    let txt = document.querySelector('div#texto')
        txt.innerHTML = `<p>Você pensou em uma princesa com pele ${pele}, cabelos ${cabelo} e ${cacho} cachos/tranças. Seria a ${princesa}?</p>`
        txt.appendChild(fotoprincesa)
    
    function alert(){
        window.alert('Nenhuma princesa foi encontrada com essas caracteristicas. \n Tente uma nova combinação!');
        window.location.reload();        
    }














    
}

