<?php
    $conn=NULL;
    try{
        $conn = new PDO("mysql:host=localhost; dbname=granjaporcino; charset=utf8", 'root', '');
		if(!empty($_POST)){
		    $Id = $_POST['Id'];
		}
			$sql="DELETE FROM porcino WHERE Id='$Id'";
		
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