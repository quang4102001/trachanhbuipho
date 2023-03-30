-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 05, 2023 at 02:43 PM
-- Server version: 10.5.16-MariaDB
-- PHP Version: 7.3.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id18115096_trachanhbuipho`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `username` text COLLATE utf8_unicode_ci NOT NULL,
  `password` text COLLATE utf8_unicode_ci NOT NULL,
  `permission` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`username`, `password`, `permission`) VALUES
('admin', 'admin', 'admin'),
('user', 'user', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `drink`
--

CREATE TABLE `drink` (
  `id` int(2) NOT NULL,
  `name` varchar(225) COLLATE utf8_unicode_ci NOT NULL,
  `image` text COLLATE utf8_unicode_ci NOT NULL,
  `price` text COLLATE utf8_unicode_ci NOT NULL,
  `type` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `drink`
--

INSERT INTO `drink` (`id`, `name`, `image`, `price`, `type`) VALUES
(1, 'Heo cháy tỏi', './img/heo-chay-toi.webp', '20000', '1'),
(2, 'Hướng dương thường', './img/huong-duong.webp', '10000', '1'),
(3, 'Hướng dương vị dừa', './img/huong-duong-dac-biet.webp', '15000', '1'),
(4, 'Khô gà lá chanh', './img/kho-ga-la-chanh.webp', '20000', '1'),
(5, 'Nước chanh tươi', './img/nuoc-chanh-tuoi.webp', '10000', '2'),
(6, 'Nước me đá', './img/nuoc-me-da.webp', '15000', '2'),
(7, 'Sữa dừa nhiệt đới', './img/sua-dua-nhiet-doi.webp', '25000', '2'),
(8, 'Trà chanh đào nhiệt đới', './img/tra-chanh-dao-nhiet-doi.webp', '15000', '3'),
(9, 'Trà chanh truyền thống', './img/tra-chanh-truyen-thong.webp', '10000', '3'),
(10, 'Trà đào cam sả', './img/tra-dao-cam-sa.webp', '25000', '3'),
(11, 'Trà đào nhài', './img/tra-dao-nhai.webp', '20000', '3'),
(12, 'Trà gạo nha đam', './img/tra-gao-nha-dam.webp', '20000', '2'),
(13, 'Trà kim quất nha đam', './img/tra-kim-quat-nha-dam.webp', '15000', '3'),
(14, 'Trà mận', './img/tra-man.webp', '20000', '2'),
(15, 'Trà quất', './img/tra-quat.webp', '10000', '2'),
(16, 'Trà quất lắc bạc hà', './img/tra-quat-lac-bac-ha.webp', '25000', '2'),
(17, 'Trà quất lắc sữa', './img/tra-quat-lac-sua.webp', '15000', '3'),
(18, 'Trà quất xí muội', './img/tra-tac-xi-muoi.webp', '20000', '3'),
(19, 'Trà vải', './img/tra-vai.webp', '20000', '2');

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `name` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `type`
--

INSERT INTO `type` (`id`, `name`) VALUES
(1, 'Đồ ăn vặt'),
(2, 'Bụi phố love'),
(3, 'Bụi phố hot');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`username`(20));

--
-- Indexes for table `drink`
--
ALTER TABLE `drink`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `drink`
--
ALTER TABLE `drink`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
