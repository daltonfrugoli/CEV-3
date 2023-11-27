function contar()
{
    let txtini = document.getElementById('txtini')
    let txtfim = document.getElementById('txtfim')
    let txtpas = document.getElementById('txtpas')
    let cont = document.getElementById('contagem')

    //limpeza da última exec
    cont.innerHTML = '<p>Contando: <br></p>'
    
    //validação dos valores
    if (txtini.value.length == 0 || txtfim.value.length == 0 || txtpas.value.length == 0)
    {
        cont.innerHTML = '<p>Impossivel contar. Preencha todos os campos!</p>'
    }
    else
    {
        let inicio = Number(txtini.value)
        let fim = Number(txtfim.value)
        let passo = Number(txtpas.value)

        //correção do passo
        if(passo == 0)
        {
            window.alert('Passo "0" é um valor inválido. considerando passo "1"')
            passo = 1
        }

        //contagem
        if (inicio < fim)
        {
            while (inicio <= fim)
            {
                cont.innerHTML += `${inicio} \u{1F449} `
                inicio += passo
            }

            cont.innerHTML += '\u{1F3C1}'
        }
        else if (inicio > fim)
        {
            while (inicio >= fim)
            {
                cont.innerHTML += `${inicio} \u{1F449} `
                inicio -= passo
            }

            cont.innerHTML += `\u{1F3C1}`
        }
    }
 
}