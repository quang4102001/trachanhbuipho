import { LocationIcon, PhoneIcon, MailIcon } from './../../../component/Icon/Icon';

export const footerList = [
    {
        id:0,
        headerText: "LIÊN HỆ VỚI CHÚNG TÔI",
        list: [
            {
                icon: <LocationIcon width='2rem' height='2rem' />,
                text: "218 Lĩnh Nam, Hoàng Mai, Hà Nội",
            },
            {
                icon: <PhoneIcon width='2rem' height='2rem' />,
                text: "0975258748",
                href: "tel:0975258748",
            },
            {
                icon: <PhoneIcon width='2rem' height='2rem' />,
                text: "0999999999",
                href: "tel:0999999999",
            },
            {
                icon: <MailIcon width='2rem' height='2rem' />,
                text: "mdc011646069@gmail.com",
                href: "mailto:mdc011646069@gmail.com",
            },
        ]
    },
    {
        id:1,
        headerText: "THÔNG TIN",
        list: [
            {
                text: "Trang chủ",
                to: "/",
            },
            {
                text: "Giới thiệu",
                to: "/about",
            },
            {
                text: "Sản phẩm",
                to: "/anvat",
            },
            {
                text: "Tin tức",
                to: "/",
            },
            {
                text: "Liên hệ",
                to: "/",
            },
        ]
    },
    {
        id:2,
        headerText: "HỖ TRỢ",
        list: [
            {
                text: "Tìm kiếm",
                to: "/",
            },
            {
                text: "Đăng nhập",
                to: "/login",
            },
            {
                text: "Đăng kí",
                to: "/register",
            },
            {
                text: "Giỏ hàng",
                to: "/cart",
            },
        ]
    },
    {
        id:3,
        headerText: "HƯỚNG DẪN",
        list: [
            {
                text: "Hướng dẫn mua hàng",
                to: "/",
            },
            {
                text: "Hướng dẫn thanh toán",
                to: "/",
            },
            {
                text: "Hướng dẫn giao nhận",
                to: "/",
            },
            {
                text: "Hướng dẫn dịch vụ",
                to: "/",
            },
        ]
    },
    {
        id:4,
        headerText: "CHÍNH SÁCH",
        list: [
            {
                text: "Chính sách bảo mật",
                to: "/"
            },
            {
                text: "Chính sách vận chuyển",
                to: "/",
            },
            {
                text: "Chính sách đổi trả",
                to: "/",
            },
            {
                text: "Chính sách sử dụng",
                to: "/",
            },
        ]
    },
]