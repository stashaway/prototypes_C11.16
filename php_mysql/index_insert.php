<!-- index_insert.php -->
<?php
require_once('mysql_connect.php');
print_r($_POST);
$query = "INSERT INTO `todo_items` SET `title`=$_POST[title], `details`=$_POST[details],`timestamp`=$_POST[timestamp],`progress`=$_POST[progress]";
$result = mysqli_query($conn, $query);
$numb = mysqli_affected_rows($conn);
print(''.$numb.' rows affected');


?>