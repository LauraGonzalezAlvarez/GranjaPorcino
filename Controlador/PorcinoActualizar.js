const form = document.getElementById("frmajax")
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formData= new FormData(form) 
    const path = ('/PrimeroPorcino/Modelo/PorcinoActualizar.php')
    fetch('/PrimeroPorcino/Modelo/PorcinoActualizar.php', {
        method: 'POST',
        body: formData,
        headers: {
            "Accept": "application/json"
        } 
    }).catch(()=>{
        alert("no esta funcionando")
    })
      
      
    
})
