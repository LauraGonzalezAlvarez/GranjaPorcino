const button = document.getElementById("btnguardar")
const form = document.getElementById("frmajax")
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formData= new FormData(form) 
    /*const path = ('/profesor/create/create.php')*/
    const path = ('/PrimeroPorcino/Modelo/ClienteCreate.php')
    fetch('/PrimeroPorcino/Modelo/ClienteCreate.php', {
        method: 'POST',
        body: formData,
        headers: {
            "Accept": "application/json"
        } 
    }).catch(()=>{
        alert("no esta funcionando")
    })
      
    
})
