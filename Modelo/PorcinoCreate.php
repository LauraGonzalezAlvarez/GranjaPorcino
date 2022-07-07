<?php
    $conn=NULL;
    try{
        $conn = new PDO("mysql:host=localhost; dbname=granjaporcino; charset=utf8", 'root', '');

		print_r($_POST);
        if(!empty($_POST)){
            $Id = $_POST['Id'];
            $Raza = $_POST['Raza'];
            $Edad = $_POST['Edad'];
            $Peso = $_POST['Peso'];
            $Descripcion = $_POST['Descripcion'];
            $Usuario_id = $_POST['Usuario_id'];
         }    
            
		
			$sql="INSERT INTO porcino VALUES('$Id','$Raza',
			'$Edad', '$Peso','$Descripcion', '$Usuario_id')";
		
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
