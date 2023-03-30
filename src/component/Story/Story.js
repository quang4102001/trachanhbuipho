import clsx from "clsx";

import styles from "./Story.module.scss";
import HeaderPage from './../HeaderPage/HeaderPage';

function Story() {
  return (
    <><HeaderPage headerText="Về chúng tôi"/>
<div className={clsx(styles["story"], "row pt-3 px-3")}>
  <div className="col-1"></div>
  <div className="col-10">
    <h2 className={clsx(styles["story__header-text"], "fw-bold px-3")}>
      Thương hiệu Trà chanh bụi phố
    </h2>
    <p className={clsx(styles["story__title"], "fw-bold fs-2")}>
      Mỗi tuần{" "}
      <b className={clsx(styles["story__text-primary"])}>Bụi phố</b> trên
      khắp thế giới phục vụ hàng triệu thức uống đến tay khách hàng. Và{" "}
      <b className={clsx(styles["story__text-primary"])}>Bụi phố</b> cam kết
      rằng sẽ phục vụ từng khách hàng duy nhất tại một thời điểm.
    </p>
    <div
      className={clsx(
        styles["story__img-box"],
        "d-flex justify-content-center py-3"
      )}
    >
      <img
        className={clsx(styles["story__img"], "")}
        src="https://kinhdoanhvabienmau.vn/images/companies/mailinh/122019/Tr%C3%A0%20Chanh.png"
        alt="story"
      />
    </div>
    <p className={clsx(styles["story__text"], "")}>
      Vài tháng trở lại đây, trà chanh, từ một thức uống truyền thống, dân
      dã bỗng trở thành hiện tượng bùng nổ, là cơ hội kinh doanh "một vốn
      bốn lời" với doanh thu lên tới vài chục triệu một ngày. Nhưng bên cạnh
      đó, nhiều chuyên gia cho đây chỉ là một "trend" và giống như "cơn sốt"
      kinh doanh trà sữa trước đây.
    </p>
    <p className={clsx(styles["story__text"], "")}>
      Hiện <b className={clsx(styles["story__text-primary"])}>Bụi Phố</b>{" "}
      cung cấp khoảng 100 đồ uống và món ăn kèm, đáp ứng cả 2 mùa nhưng mỗi
      cơ sở nhượng quyền thường chỉ chọn 20 - 40 món trong đó. Chúng tôi tự
      tin rằng chất lượng đồ uống mới chính là điểm giữ chân khách trở lại{" "}
      <b className={clsx(styles["story__text-primary"])}>Bụi Phố</b>.
    </p>
    <p className={clsx(styles["story__text"], "")}>
      Mục tiêu của{" "}
      <b className={clsx(styles["story__text-primary"])}>Bụi Phố</b> là ra
      mắt thành công ở Sài Gòn và khu vực miền Nam, ít nhất có thể bùng nổ
      như Hà Nội. Mục tiêu xa và lớn hơn là mang thương hiệu ra nước ngoài
      để quảng bá về văn hóa trà chanh của Việt Nam, tương tự như Cộng Cà
      phê vậy. Chúng ta có quyền mơ và tại sao lại không mơ lớn?
    </p>
  </div>
</div></>
  );
}

export default Story;
