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

    $username = $_GET['username'];
    $password = $_GET['password'];
    
    $sql = "SELECT * FROM account WHERE username = '$username' and password = '$password'";
    $result = $conn->query($sql);

    // Chuyển đổi kết quả thành mảng JSON và trả về
    $rows = array();
    while($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }
    echo json_encode($rows);
} else {
    // Trả về lỗi nếu yêu cầu không được hỗ trợ
    http_response_code(400);
    echo json_encode(array("message" => "Invalid request method."));
}
?>