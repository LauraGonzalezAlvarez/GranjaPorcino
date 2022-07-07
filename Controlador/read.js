const boton = document.getElementById("button")
boton.addEventListener('click',()=>{
    const path = "read.php"
    fetch(path)
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(new Error('Failed to load')))
    /*.then(res = JSON.parse(res))*/
    .then(res => res.json())
    .then(res=>{
        
        const table = document.getElementById("table")
        const fragment = document.createDocumentFragment()
        for(const userInfo of res){
            const row = document.createElement("TR")
            const dataId = document.createElement("TD")
            const dataOfi = document.createElement("TD")
            const dataAr = document.createElement("TD")
            const dataCon = document.createElement("TD")
            /*listItem.textContent = `${userInfo.documento} - ${userInfo.oficina_id} - ${userInfo.oficina_area_id}
            ${userInfo.contrato_idcontrato}`*/
            dataId.textContent = userInfo.documento
            dataOfi.textContent = userInfo.oficina_id
            dataAr.textContent = userInfo.oficina_area_id
            dataCon.textContent = userInfo.contrato_idcontrato
            row.append(dataId)
            row.append(dataOfi)
            row.append(dataAr)
            row.append(dataCon)
            fragment.appendChild(row)
        }
        table.appendChild(fragment)

    }).catch(err=>console.log(err))
})


