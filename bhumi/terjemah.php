<?php

include 'config.php';
$ps=0; 
if (! $conn){
$ps++;
}
 
$pilihDB=mysqli_select_db($conn,'database_bhumi');
 
$kata=$_GET['kata'];
$bahasa=$_GET['bahasa'];
 
if($ps==0){
 
if($bahasa=="Bminang"){
$cari=mysqli_query($conn,"SELECT * FROM tb_minang WHERE indonesia='$kata'");
} else if($bahasa=="Bjawa"){
$cari=mysqli_query($conn,"SELECT * FROM tb_jawa WHERE indonesia='$kata'");
} else if($bahasa=="Bsunda"){
$cari=mysqli_query($conn,"SELECT * FROM tb_sunda WHERE indonesia='$kata'");
} else if($bahasa=="Bmakassar"){
$cari=mysqli_query($conn,"SELECT * FROM tb_makassar WHERE indonesia='$kata'");
} else if($bahasa=="Bbali"){
$cari=mysqli_query($conn,"SELECT * FROM tb_bali WHERE indonesia='$kata'");
}

 
$jum=mysqli_num_rows($cari);
 
if($jum==0){
print("Maaf, kata belum tersedia dalam database.");
}else{
 
$data=mysqli_fetch_array($cari);
 
if($bahasa=="Bminang"){
print($data['minang']);
} else if($bahasa=="Bjawa"){
print($data['jawa']);
} else if($bahasa=="Bsunda"){
print($data['sunda']);
} else if($bahasa=="Bmakassar"){
print($data['makassar']);
} else if($bahasa=="Bbali"){
print($data['bali']);
}  
}
}
?>