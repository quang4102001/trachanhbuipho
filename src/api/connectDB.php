<?php
// Thông tin đăng nhập cơ sở dữ liệu
//global
$servername = "localhost";
$username = "id18115096_root";
$password = "Quang4102001@";
$dbname = "id18115096_trachanhbuipho";

//local host
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "id18115096_trachanhbuipho";

// Tạo kết nối đến cơ sở dữ liệu
$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Connection false: " . $conn->connect_error);
}
?>