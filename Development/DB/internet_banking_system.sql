-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2019 at 08:07 PM
-- Server version: 10.1.39-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `internet_banking_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `account_ID` int(14) NOT NULL,
  `account_type` text NOT NULL,
  `account_balance` int(11) NOT NULL,
  `client_ID` varchar(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`account_ID`, `account_type`, `account_balance`, `client_ID`) VALUES
(1, 'current', 5000, '1234'),
(2, 'saving', 2000, '1234');

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `national_ID` varchar(14) NOT NULL,
  `client_name` varchar(50) NOT NULL,
  `client_email` varchar(27) NOT NULL,
  `password` varchar(10) NOT NULL,
  `client_mobile_no` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`national_ID`, `client_name`, `client_email`, `password`, `client_mobile_no`) VALUES
('', '', '', '', ''),
('0', '', '', '', ''),
('1', 'IBSdddd', 'jnbjkhjbj', '1235', '+201127855088'),
('111111', 'IBS111', 'salsabeelsay@gmail.com', '1235', ''),
('12', 'IBS111', 'salsabeelsay@gmail.com', '1235', '01234'),
('123123', 'ali', 'ali@yahoo.com', '1235', '1234'),
('1234', 'Salsabeel', 'Salsabeel@gmail.com', '1234', '01094468330'),
('123456', 'IBS', 'salsabeelsay@gmail.com', '452', '01234'),
('1234564555', 'IBS111', 'salsabeelsay@gmail.com', '1235', '01234'),
('12345648111978', 'ahmed', 'salsabeelsay@gmail.com', '1235', '01234'),
('12345648978115', 'IBS111', 'salsabeelsay@gmail.com', '1235', '01234'),
('12345648978222', 'IBS111', 'salsabeelsay@gmail.com', '1235', '01234'),
('12345648978555', 'IBSdddd', 'salsabeelsaygmail.com', '1235', '+201127855088'),
('123458978555', 'IBS111', 'salsabeelsay@gmail.com', '1235', '01234'),
('1235', '55', '4', '1235', '7'),
('125', 'IBS111', 'salsabeelsay@gmail.com', '1235', '01234'),
('2', 'IBSdddd', 'salsabeelsaygmail.com', '1235', '+201127855088'),
('2147483647', 'Salsabeel', 'salsabeel@gmail.com', '1234', '1094468330'),
('22', 'IBSdddd', 'salsabeelsay@gmail.com', '1235', '01234'),
('2452', 'IBS111', 'salsabeelsay@gmail.com', '1235', '01234'),
('3232323232', 'IBSdddd', 'salsabeelsay@gmail.com', '1235', '+201127855088'),
('44', 'IBS111', 'salsabeelsay@gmail.com', '1235', '01234'),
('444', 'IBS111', 'salsabeelsay@gmail.com', '1235', '01234'),
('4444444', 'IBS111', 'salsabeelsay@gmail.com', '1235', '01234'),
('454', 'IBS111', 'salsabeelsay@gmail.com', '1235', '01234'),
('45477', 'IBS111', 'salsabeelsay@gmail.com', '1235', '01234'),
('51541485', 'IBS111', 'salsabeelsay@gmail.com', '1235', '01234'),
('54674684154', 'IBSdddd', 'salsabeelsaygmail.com', '1235', '+201127855088'),
('5468787', 'IBS111', 'salsabeelsay@gmail.com', '1235', '+201127855088'),
('5544', 'IBS111', 'salsabeelsay@gmail.com', '1235', '01234'),
('5555', 'IBS111', 'salsabeelsay@gmail.com', '1235', '+201127855088'),
('584524', 'IBSdddd', 'salsabeelsay@gmail.com', '1235', '01234'),
('64897855512345', 'ahmed', 'fggv@d.com', '1235', '01234'),
('65974', 'ahmed', 'fggv@d.com', '1235', '01234'),
('787878', 'IBSdddd', 'salsabeelsay@gmail.com', '1235', '01234'),
('941484515', 'IBS111', 'salsabeelsay@gmail.com', '1235', '01234'),
('9843465', 'IBS111', 'salsabeelsay@gmail.com', '1235', '01234');

-- --------------------------------------------------------

--
-- Table structure for table `client_perform_tr`
--

CREATE TABLE `client_perform_tr` (
  `client_ID` varchar(14) NOT NULL,
  `account_ID` int(11) NOT NULL,
  `transaction_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `transaction_ID` int(11) NOT NULL,
  `source_ID` int(14) NOT NULL,
  `destination_ID` int(14) NOT NULL,
  `source_bankname` text NOT NULL,
  `destination_bankname` text NOT NULL,
  `date` date NOT NULL,
  `amount` int(11) NOT NULL,
  `account_ID` int(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`account_ID`),
  ADD KEY `ref_client_ID` (`client_ID`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`national_ID`);

--
-- Indexes for table `client_perform_tr`
--
ALTER TABLE `client_perform_tr`
  ADD PRIMARY KEY (`client_ID`,`account_ID`,`transaction_ID`),
  ADD KEY `ref_account_ID` (`account_ID`),
  ADD KEY `ref_trans_ID` (`transaction_ID`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`transaction_ID`),
  ADD KEY `ref_account_tr` (`account_ID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `account`
--
ALTER TABLE `account`
  ADD CONSTRAINT `ref_client_ID` FOREIGN KEY (`client_ID`) REFERENCES `client` (`national_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `client_perform_tr`
--
ALTER TABLE `client_perform_tr`
  ADD CONSTRAINT `ref_account_ID` FOREIGN KEY (`account_ID`) REFERENCES `account` (`account_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ref_client` FOREIGN KEY (`client_ID`) REFERENCES `client` (`national_ID`),
  ADD CONSTRAINT `ref_trans_ID` FOREIGN KEY (`transaction_ID`) REFERENCES `transaction` (`transaction_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `ref_account_tr` FOREIGN KEY (`account_ID`) REFERENCES `account` (`account_ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
