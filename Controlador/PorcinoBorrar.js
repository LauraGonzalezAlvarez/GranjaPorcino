const button = document.getElementById("btnguardar")
const form = document.getElementById("frmajax")
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formData= new FormData(form) 
    const path = ('/PrimeroPorcino/Modelo/PorcinoBorrar.php')
    fetch('/PrimeroPorcino/Modelo/PorcinoBorrar.php', {
        method: 'POST',
        body: formData,
        headers: {
            "Accept": "application/json"
        } 
    }).catch(()=>{
        alert("no esta funcionando")
    })
    
})