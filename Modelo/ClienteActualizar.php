<?php
    $conn=NULL;
    try{
        $conn = new PDO("mysql:host=localhost; dbname=granjaporcino; charset=utf8", 'root', '');
		if(!empty($_POST)){
            $Cedula = $_POST['Cedula'];
            $Nombres = $_POST['Nombres'];
            $Apellidos = $_POST['Apellidos'];
            $Direccion = $_POST['Direccion'];
            $Telefono = $_POST['Telefono'];
		}
			$sql="UPDATE cliente SET  Cedula='$Cedula', Nombres='$Nombres',
            Apellidos='$Apellidos', Direccion='$Direccion', Telefono='$Telefono' WHERE Cedula=$Cedula";
		
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