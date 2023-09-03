let vetor = []

function adicionar(){
let fmorango = document.getElementById('txtmor')
let morango = Number(fmorango.value)
let ftropical = document.getElementById('txttro')
let tropical = Number(ftropical.value)
let fabacaxi = document.getElementById('txtaba')
let abacaxi = Number(fabacaxi.value)
let fame = document.getElementById('txtame')
let ame = Number(fame.value)
let fmaracuja = document.getElementById('txtmar')
let maracuja = Number(fmaracuja.value)
let fchoc = document.getElementById('txtchoc')
let chocolate = Number(fchoc.value)
let fchocb = document.getElementById('txtchocb')
let chocolate_branco = Number(fchocb.value)
let ftamarindo = document.getElementById('txttam')
let tamarindo = Number(ftamarindo.value)
let fovomaltine = document.getElementById('txtovo')
let ovomaltine = Number(fovomaltine.value)
let fbiscoito = document.getElementById('txtbis')
let biscoito = Number(fbiscoito.value)
let fcoco = document.getElementById('txtcoco')
let coco = Number(fcoco.value)
let fbew = document.getElementById('txtbew')
let bew = Number(fbew.value)
let fjaca = document.getElementById('txtjaca')
let jaca = Number(fjaca.value)
let fdocel = document.getElementById('txtdocel')
let docel = Number(fdocel.value)


let pre_morango = morango * 3.5
let pre_tropical = tropical * 3.5
let pre_abacaxi = abacaxi * 3.5
let pre_ame = ame * 3
let pre_maracuja = maracuja * 3.5
let pre_choc = chocolate * 3
let pre_chocb = chocolate_branco * 3
let pre_tam = tamarindo * 3.5
let pre_ovo = ovomaltine * 4
let pre_biscoito = biscoito * 3
let pre_coco = coco * 3.5
let pre_bew = bew * 3.5
let pre_jaca = jaca * 3.5
let pre_docel = docel * 4


let list = document.getElementById('sellist') 
let item = document.createElement('option')

if(fmorango.value.length != 0){
    item.text = `Morango ${morango} x R$ 3,50 = R$ ${pre_morango}`
    item.value = `list ${morango}`
    list.appendChild(item)
    vetor.push(pre_morango)
}
let item1 = document.createElement('option')   
if(ftropical.value.length != 0){
    item1.text = `Tropical ${tropical} x R$ 3,50 = R$ ${pre_tropical}`
    item1.value = `list ${tropical}`
    list.appendChild(item1)
    vetor.push(pre_tropical)
}
    
let item2 = document.createElement('option')  
if(fabacaxi.value.length != 0){
    item2.text = `Abacaxi ${abacaxi} x R$ 3,50 = R$ ${pre_abacaxi}`
    item2.value = `list ${abacaxi}`
    list.appendChild(item2)
    vetor.push(pre_abacaxi)
}
    
let item3 = document.createElement('option')  
if(fame.value.length != 0){
    item3.text = `Amendoin ${ame} x R$ 3,00 = R$ ${pre_ame}`
    item3.value = `list ${ame}`
    list.appendChild(item3)
    vetor.push(pre_ame)
}
let item4 = document.createElement('option')  
if(fmaracuja.value.length != 0){
    item4.text = `Maracujá ${maracuja} x R$ 3,50 = R$ ${pre_maracuja}`
    item4.value = `list ${maracuja}`
    list.appendChild(item4)
    vetor.push(pre_maracuja)
}

let item5 = document.createElement('option')  
if(fchoc.value.length != 0){
    item5.text = `Chocolate ${chocolate} x R$ 3,00 = R$ ${pre_choc}`
    item5.value = `list ${chocolate}`
    list.appendChild(item5)
    vetor.push(pre_choc)
}

let item6 = document.createElement('option')  
if(fchocb.value.length != 0){
    item6.text = `Chocolate Branco ${chocolate_branco} x R$ 3,00 = R$ ${pre_chocb}`
    item6.value = `list ${chocolate_branco}`
    list.appendChild(item6)
    vetor.push(pre_chocb)
}

let item7 = document.createElement('option')  
if(ftamarindo.value.length != 0){
    item7.text = `Tamarindo ${tamarindo} x R$ 3,50 = R$ ${pre_tam}`
    item7.value = `list ${tamarindo}`
    list.appendChild(item7)
    vetor.push(pre_tam)
}

let item8 = document.createElement('option')  
if(fovomaltine.value.length != 0){
    item8.text = `Ovomaltine ${ovomaltine} x R$ 4,00 = R$ ${pre_ovo}`
    item8.value = `list ${ovomaltine}`
    list.appendChild(item8)
    vetor.push(pre_ovo)
}

let item9 = document.createElement('option')  
if(fbiscoito.value.length != 0){
    item9.text = `Biscoito ${biscoito} x R$ 3,00 = R$ ${pre_biscoito}`
    item9.value = `list ${biscoito}`
    list.appendChild(item9)
    vetor.push(pre_biscoito)
}

let item10 = document.createElement('option')  
if(fcoco.value.length != 0){
    item10.text = `Coco ${coco} x R$ 3,50 = R$ ${pre_coco}`
    item10.value = `list ${coco}`
    list.appendChild(item10)
    vetor.push(pre_coco)
}

let item11 = document.createElement('option')  
if(fbew.value.length != 0){
    item11.text = `Black e White ${bew} x R$ 3,50 = R$ ${pre_bew}`
    item11.value = `list ${bew}`
    list.appendChild(item11)
    vetor.push(pre_bew)
}

let item12 = document.createElement('option')  
if(fjaca.value.length != 0){
    item12.text = `Jaca ${jaca} x R$ 3,50 = R$ ${pre_jaca}`
    item12.value = `list ${jaca}`
    list.appendChild(item12)
    vetor.push(pre_jaca)
}

let item13 = document.createElement('option')  
if(fdocel.value.length != 0){
    item13.text = `Doce de Leite ${docel} x R$ 4,00 = R$ ${pre_docel}`
    item13.value = `list ${docel}`
    list.appendChild(item13)
    vetor.push(pre_docel)
}
   
window.alert(vetor)
fmorango.value = ''
ftropical.value = ''
fabacaxi.value = ''
fame.value = ''
fmaracuja.value = ''
fchoc.value = ''
fchocb.value =''
ftamarindo.value = ''
fovomaltine.value = ''
fbiscoito.value = ''
fcoco.value = ''
fbew.value = ''
fjaca.value = ''
fdocel.value = ''
}

function finalizar(){
    let soma = 0
    for(let pos in vetor){
        soma = soma + vetor[pos]
    }
    let resultado = soma 

    let restxt = document.getElementById('txtarea')
    restxt.innerHTML = `Total de R$ ${soma.toFixed(2)}`

    //var res = document.querySelector('div#res')
    //res.innerHTML = `O seu pedido deu um total de R$ ${resultado}`
}