<!-- index_select.php -->
<?php
require_once('mysql_connect.php');
$query = "SELECT * FROM `users` WHERE `username`='sloan'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)){
     print_r($row);
    }
}
