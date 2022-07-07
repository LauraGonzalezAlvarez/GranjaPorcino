<?php
    $conn=NULL;
    try{
        $conn = new PDO("mysql:host=localhost; dbname=granjaporcino; charset=utf8", 'root', '');
		if(!empty($_POST)){
            $Id = $_POST['Id'];
            $Raza = $_POST['Raza'];
            $Edad = $_POST['Edad'];
            $Peso = $_POST['Peso'];
            $Descripcion = $_POST['Descripcion'];
            
		}
        $sql="UPDATE porcino SET  Id='$Id', Raza='$Raza',Edad='$Edad', Peso='$Peso',
        Descripcion='$Descripcion' WHERE Id=$Id";
		
        $stm = $conn->prepare($sql);
        $stm->execute();
        $resultSet = $stm->fetchAll(PDO::FETCH_ASSOC);
        if($stm->rowCount()==1){
            echo "ok";
        }else{
            echo "error";
        }
    }catch(PDOException $e){
        echo "error".$e->getMessage();
    }
?>