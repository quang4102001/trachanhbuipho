    <?php
    header('Access-Control-Allow-Origin: *');

    header('Content-Type: application/json');

    // Gọi tệp kết nối cơ sở dữ liệu
    require_once './connectDB.php';

    // Xử lý yêu cầu API
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // Lấy danh sách các bản ghi từ cơ sở dữ liệu
        $sql = "SELECT * FROM drink WHERE type = 1";
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