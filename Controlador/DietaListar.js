const boton = document.getElementById("button")
boton.addEventListener('click',()=>{
    const path = "/PrimeroPorcino/Modelo/DietaListar.php"
    fetch(path)
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(new Error('Failed to load')))
    /*.then(res = JSON.parse(res))*/
    .then(res => res.json())
    .then(res=>{
        
        const table = document.getElementById("table")
        const fragment = document.createDocumentFragment()
        for(const userInfo of res){
            const row = document.createElement("TR")
            const codigo = document.createElement("TD")
            const dosis = document.createElement("TD")
            const descripcion = document.createElement("TD")
            const informacionDieta_Porcino = document.createElement("TD")
           
           
            codigo.textContent = userInfo.Codigo
            dosis.textContent = userInfo.Dosis
            descripcion.textContent = userInfo.Descripcion
            informacionDieta_Porcino.textContent = userInfo.InformacionDieta_porcino
            
            row.append(codigo)
            row.append(dosis)
            row.append(descripcion)
            row.append(informacionDieta_Porcino)
          
            fragment.appendChild(row)
        }
        table.appendChild(fragment)

    }).catch(err=>console.log(err))
})

