<?php
    $conn=NULL;
    try{
        $conn = new PDO("mysql:host=localhost; dbname=granjaporcino; charset=utf8", 'root', '');
		$sql="SELECT * FROM cliente";
		
        $stm = $conn->prepare($sql);
        $stm->execute();
        $resultSet = $stm->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($resultSet);
    }catch(PDOException $e){
        echo "error".$e->getMessage();
    }
?>