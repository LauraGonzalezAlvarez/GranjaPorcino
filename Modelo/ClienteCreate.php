<?php
    $conn=NULL;
    try{
        $conn = new PDO("mysql:host=localhost; dbname=granjaporcino; charset=utf8", 'root', '');

		print_r($_POST);
        if(!empty($_POST)){
            $Cedula = $_POST['Cedula'];
            $Nombres = $_POST['Nombres'];
            $Apellidos = $_POST['Apellidos'];
            $Direccion = $_POST['Direccion'];
            $Telefono = $_POST['Telefono'];
        }    
            
		
			$sql="INSERT INTO cliente VALUES('$Cedula','$Nombres',
			'$Apellidos','$Direccion','$Telefono')";
		
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
