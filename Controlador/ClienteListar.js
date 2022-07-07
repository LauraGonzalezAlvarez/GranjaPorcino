const boton = document.getElementById("button")
boton.addEventListener('click',()=>{
    const path = "/PrimeroPorcino/Modelo/ClienteListar.php"
    fetch(path)
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(new Error('Failed to load')))
    /*.then(res = JSON.parse(res))*/
    .then(res => res.json())
    .then(res=>{
        
        const table = document.getElementById("table")
        const fragment = document.createDocumentFragment()
        for(const userInfo of res){
            const row = document.createElement("TR")
            const cedula = document.createElement("TD")
            const nombres = document.createElement("TD")
            const apellidos = document.createElement("TD")
            const direccion = document.createElement("TD")
            const telefono = document.createElement("TD")
           
            cedula.textContent = userInfo.Cedula
            nombres.textContent = userInfo.Nombres
            apellidos.textContent = userInfo.Apellidos
            direccion.textContent = userInfo.Direccion
            telefono.textContent = userInfo.Telefono
            row.append(cedula)
            row.append(nombres)
            row.append(apellidos)
            row.append(direccion)
            row.append(telefono)
            fragment.appendChild(row)
        }
        table.appendChild(fragment)

    }).catch(err=>console.log(err))
})


