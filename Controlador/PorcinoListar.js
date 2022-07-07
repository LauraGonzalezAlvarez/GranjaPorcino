const boton = document.getElementById("button")
boton.addEventListener('click',()=>{
    const path = "/PrimeroPorcino/Modelo/PorcinoListar.php"
    fetch(path)
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(new Error('Failed to load')))
    /*.then(res = JSON.parse(res))*/
    .then(res => res.json())
    .then(res=>{
        
        const table = document.getElementById("table")
        const fragment = document.createDocumentFragment()
        for(const userInfo of res){
            const row = document.createElement("TR")
            const id = document.createElement("TD")
            const raza = document.createElement("TD")
            const edad = document.createElement("TD")
            const peso = document.createElement("TD")
            const descripcion = document.createElement("TD")
            const usuario_id = document.createElement("TD")
           
            id.textContent = userInfo.Id
            raza.textContent = userInfo.Raza
            edad.textContent = userInfo.Edad
            peso.textContent = userInfo.Peso
            descripcion.textContent = userInfo.Descripcion
            usuario_id.textContent = userInfo.Usuario_id
            row.append(id)
            row.append(raza)
            row.append(edad)
            row.append(peso)
            row.append(descripcion)
            row.append(usuario_id)
            fragment.appendChild(row)
        }
        table.appendChild(fragment)

    }).catch(err=>console.log(err))
})

