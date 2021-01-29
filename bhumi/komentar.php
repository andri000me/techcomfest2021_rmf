<?php 

include 'config.php';

error_reporting(0); 

if (isset($_POST['submit'])) { 
	$nama = $_POST['nama']; 
	$email = $_POST['email']; 
	$comment = $_POST['comment']; 

	$sql = "INSERT INTO comments (nama, email, comment)
			VALUES ('$nama', '$email', '$comment')";
	$result = mysqli_query($conn, $sql);
	if ($result) {
		echo "<script>alert('Komentar berhasil ditambahkan.')</script>";
	} else {
		echo "<script>alert('Komentar belum ditambahkan.')</script>";
	}
}

?>
