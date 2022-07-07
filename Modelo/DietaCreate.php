<?php
    $conn=NULL;
    try{
        $conn = new PDO("mysql:host=localhost; dbname=granjaporcino; charset=utf8", 'root', '');

		print_r($_POST);
        if(!empty($_POST)){
            $Codigo = $_POST['Codigo'];
            $Dosis = $_POST['Dosis'];
            $Descripcion = $_POST['Descripcion'];
            $InformacionDieta_porcino = $_POST['InformacionDieta_porcino'];
           
        }    
            
		
			$sql="INSERT INTO informaciondieta VALUES('$Codigo','$Dosis',
			'$Descripcion','$InformacionDieta_porcino')";
		
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
