<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

// Gọi tệp kết nối cơ sở dữ liệu
require_once './connectDB.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // The request is using the HTTP OPTIONS method
    exit(0);
}

// Xử lý yêu cầu API
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Lấy danh sách các bản ghi từ cơ sở dữ liệu
    $nameUser = $_GET['nameUser'];
    $username = $_GET['userName'];
    $password = $_GET['password'];
    
    $sql = "INSERT INTO account (username,password, permission, name) VALUES ('$username', '$password', 'user', '$nameUser')";
    if (mysqli_query($conn, $sql)) {
        echo "OK";
      } else {
        echo "Lỗi: " . mysqli_error($conn) . $sql;
      }
} else {
    // Trả về lỗi nếu yêu cầu không được hỗ trợ
    http_response_code(400);
    echo json_encode(array("message" => "Invalid request method."));
}
?>