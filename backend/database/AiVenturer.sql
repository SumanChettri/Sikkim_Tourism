-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 19, 2025 at 04:57 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sikkim_tourism`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `tour_id` int(11) NOT NULL,
  `booking_date` date NOT NULL,
  `number_of_people` int(11) NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `status` enum('pending','confirmed','cancelled','completed') DEFAULT 'pending',
  `payment_status` enum('pending','paid','failed','refunded') DEFAULT 'pending',
  `special_requests` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `destinations`
--

CREATE TABLE `destinations` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `location` varchar(200) DEFAULT NULL,
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `category` enum('adventure','culture','nature','spiritual','food','photography','trekking','wildlife') DEFAULT NULL,
  `difficulty_level` enum('easy','moderate','hard','expert') DEFAULT NULL,
  `best_time_to_visit` varchar(100) DEFAULT NULL,
  `duration` varchar(50) DEFAULT NULL,
  `price_range` enum('budget','moderate','luxury') DEFAULT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`images`)),
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `destinations`
--

INSERT INTO `destinations` (`id`, `name`, `description`, `location`, `latitude`, `longitude`, `category`, `difficulty_level`, `best_time_to_visit`, `duration`, `price_range`, `images`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Yumthang Valley', 'Known as the Valley of Flowers, Yumthang is famous for its rhododendron forests and hot springs.', 'North Sikkim', NULL, NULL, 'nature', 'easy', 'March to May', '1-2 days', 'moderate', NULL, 1, '2025-08-18 13:04:50', '2025-08-18 13:04:50'),
(2, 'Gangtok', 'The capital city of Sikkim, known for its monasteries, viewpoints, and vibrant culture.', 'East Sikkim', NULL, NULL, 'culture', 'easy', 'October to June', '2-3 days', 'moderate', NULL, 1, '2025-08-18 13:04:50', '2025-08-18 13:04:50'),
(3, 'Kanchenjunga Base Camp', 'Trek to the base camp of the world\'s third highest peak.', 'North Sikkim', NULL, NULL, 'trekking', 'hard', 'March to May, September to November', '10-12 days', 'luxury', NULL, 1, '2025-08-18 13:04:50', '2025-08-18 13:04:50'),
(4, 'Rumtek Monastery', 'One of the most important monasteries in Sikkim, known for its beautiful architecture.', 'East Sikkim', NULL, NULL, 'spiritual', 'easy', 'Year round', 'Half day', 'budget', NULL, 1, '2025-08-18 13:04:50', '2025-08-18 13:04:50'),
(5, 'Lachung', 'A picturesque village known for its apple orchards and traditional Sikkimese culture.', 'North Sikkim', NULL, NULL, 'culture', 'easy', 'October to June', '2-3 days', 'moderate', NULL, 1, '2025-08-18 13:04:50', '2025-08-18 13:04:50');

-- --------------------------------------------------------

--
-- Stand-in structure for view `destination_stats`
-- (See below for the actual view)
--
CREATE TABLE `destination_stats` (
`id` int(11)
,`name` varchar(100)
,`category` enum('adventure','culture','nature','spiritual','food','photography','trekking','wildlife')
,`total_reviews` bigint(21)
,`average_rating` decimal(14,4)
,`total_bookings` bigint(21)
);

-- --------------------------------------------------------

--
-- Table structure for table `guides`
--

CREATE TABLE `guides` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `bio` text DEFAULT NULL,
  `experience_years` int(11) DEFAULT NULL,
  `languages` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`languages`)),
  `certifications` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`certifications`)),
  `specializations` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`specializations`)),
  `hourly_rate` decimal(8,2) DEFAULT NULL,
  `is_available` tinyint(1) DEFAULT 1,
  `rating` decimal(3,2) DEFAULT 0.00,
  `total_reviews` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `guide_bookings`
--

CREATE TABLE `guide_bookings` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `guide_id` int(11) NOT NULL,
  `booking_date` date NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `number_of_people` int(11) NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `status` enum('pending','confirmed','cancelled','completed') DEFAULT 'pending',
  `payment_status` enum('pending','paid','failed','refunded') DEFAULT 'pending',
  `special_requests` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `destination_id` int(11) DEFAULT NULL,
  `tour_id` int(11) DEFAULT NULL,
  `rating` int(11) NOT NULL CHECK (`rating` >= 1 and `rating` <= 5),
  `comment` text DEFAULT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`images`)),
  `is_verified` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ;

-- --------------------------------------------------------

--
-- Table structure for table `tours`
--

CREATE TABLE `tours` (
  `id` int(11) NOT NULL,
  `destination_id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` text DEFAULT NULL,
  `duration_days` int(11) DEFAULT NULL,
  `max_group_size` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `currency` varchar(3) DEFAULT 'INR',
  `includes` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`includes`)),
  `excludes` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`excludes`)),
  `itinerary` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`itinerary`)),
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`images`)),
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tours`
--

INSERT INTO `tours` (`id`, `destination_id`, `name`, `description`, `duration_days`, `max_group_size`, `price`, `currency`, `includes`, `excludes`, `itinerary`, `images`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 1, 'Yumthang Valley Adventure', 'Explore the beautiful Valley of Flowers with local guides and comfortable accommodation.', 2, 15, 8500.00, 'INR', '[\"Accommodation\", \"Meals\", \"Transport\", \"Guide\"]', '[\"Personal expenses\", \"Insurance\"]', NULL, NULL, 1, '2025-08-18 13:04:50', '2025-08-18 13:04:50'),
(2, 2, 'Gangtok Cultural Tour', 'Discover the rich culture and heritage of Sikkim\'s capital city.', 3, 20, 12000.00, 'INR', '[\"Accommodation\", \"Meals\", \"Transport\", \"Guide\", \"Monastery visits\"]', '[\"Personal expenses\", \"Insurance\"]', NULL, NULL, 1, '2025-08-18 13:04:50', '2025-08-18 13:04:50'),
(3, 3, 'Kanchenjunga Base Camp Trek', 'Challenging trek to the base camp of the majestic Kanchenjunga peak.', 12, 10, 45000.00, 'INR', '[\"Accommodation\", \"Meals\", \"Transport\", \"Expert guide\", \"Equipment\", \"Permits\"]', '[\"Personal expenses\", \"Insurance\", \"Personal gear\"]', NULL, NULL, 1, '2025-08-18 13:04:50', '2025-08-18 13:04:50');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` enum('male','female','other','prefer-not-to-say') DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  `is_email_verified` tinyint(1) DEFAULT 0,
  `email_verification_token` varchar(255) DEFAULT NULL,
  `email_verification_expires` datetime DEFAULT NULL,
  `password_reset_token` varchar(255) DEFAULT NULL,
  `password_reset_expires` datetime DEFAULT NULL,
  `role` enum('user','admin','guide') DEFAULT 'user',
  `is_active` tinyint(1) DEFAULT 1,
  `last_login` datetime DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `phone`, `date_of_birth`, `gender`, `profile_picture`, `is_email_verified`, `email_verification_token`, `email_verification_expires`, `password_reset_token`, `password_reset_expires`, `role`, `is_active`, `last_login`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'User', 'admin@sikkim-tourism.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj4J/HS.iK8O', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 'admin', 1, NULL, '2025-08-18 13:04:50', '2025-08-18 13:04:50'),
(2, 'John', 'Doe', 'john@example.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj4J/HS.iK8O', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 'user', 1, NULL, '2025-08-18 13:04:50', '2025-08-18 13:04:50'),
(3, 'Suman', 'Tewari', 'davidchettri758@gmail.com', '$2a$12$vy.2pLWU2hPGrhsUJmUg/exIdPZEojqo5vhw14bamvTpMp75sVfBq', '9641025910', '2025-08-20', 'prefer-not-to-say', '/users/user-1755589467044-969758064.PNG', 0, NULL, NULL, NULL, NULL, 'user', 1, NULL, '2025-08-19 07:44:28', '2025-08-19 07:44:28'),
(6, 'Suman', 'Tewari', 'sumantewari758@gmail.com', '$2a$12$y13XbJ/CXwW.m37B6qHr/u4LUat3AyJWaBixU0Y7MrGxWQRRBvgLq', '8509210152', '2025-08-14', 'other', '/users/user-1755591301770-172208861.png', 0, NULL, NULL, NULL, NULL, 'user', 1, '2025-08-19 05:23:38', '2025-08-19 08:15:02', '2025-08-19 12:23:38'),
(7, 'Suman', 'Chettr', 'sumantewari7588@gmail.com', '$2a$12$sM.iMyrsxURJ1wnhfbcAbexLejj79eCJlXZFemXCQwrP05U0bsmra', '8509210152', '2025-08-20', 'male', '/users/user-1755594083515-558239701.png', 0, NULL, NULL, NULL, NULL, 'user', 1, NULL, '2025-08-19 09:01:25', '2025-08-19 09:01:25');

-- --------------------------------------------------------

--
-- Table structure for table `user_preferences`
--

CREATE TABLE `user_preferences` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `interests` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`interests`)),
  `travel_style` enum('budget','comfort','luxury','backpacker') DEFAULT NULL,
  `preferred_destinations` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`preferred_destinations`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_preferences`
--

INSERT INTO `user_preferences` (`id`, `user_id`, `interests`, `travel_style`, `preferred_destinations`, `created_at`, `updated_at`) VALUES
(1, 2, '[\"adventure\", \"nature\", \"photography\"]', 'comfort', '[\"Yumthang Valley\", \"Gangtok\"]', '2025-08-18 13:04:50', '2025-08-18 13:04:50');

-- --------------------------------------------------------

--
-- Stand-in structure for view `user_profiles`
-- (See below for the actual view)
--
CREATE TABLE `user_profiles` (
`id` int(11)
,`first_name` varchar(50)
,`last_name` varchar(50)
,`email` varchar(100)
,`phone` varchar(20)
,`date_of_birth` date
,`gender` enum('male','female','other','prefer-not-to-say')
,`profile_picture` varchar(255)
,`role` enum('user','admin','guide')
,`is_active` tinyint(1)
,`last_login` datetime
,`created_at` timestamp
,`interests` longtext
,`travel_style` enum('budget','comfort','luxury','backpacker')
,`preferred_destinations` longtext
);

-- --------------------------------------------------------

--
-- Structure for view `destination_stats`
--
DROP TABLE IF EXISTS `destination_stats`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `destination_stats`  AS SELECT `d`.`id` AS `id`, `d`.`name` AS `name`, `d`.`category` AS `category`, count(`r`.`id`) AS `total_reviews`, avg(`r`.`rating`) AS `average_rating`, count(distinct `b`.`id`) AS `total_bookings` FROM (((`destinations` `d` left join `reviews` `r` on(`d`.`id` = `r`.`destination_id`)) left join `tours` `t` on(`d`.`id` = `t`.`destination_id`)) left join `bookings` `b` on(`t`.`id` = `b`.`tour_id`)) GROUP BY `d`.`id`, `d`.`name`, `d`.`category` ;

-- --------------------------------------------------------

--
-- Structure for view `user_profiles`
--
DROP TABLE IF EXISTS `user_profiles`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `user_profiles`  AS SELECT `u`.`id` AS `id`, `u`.`first_name` AS `first_name`, `u`.`last_name` AS `last_name`, `u`.`email` AS `email`, `u`.`phone` AS `phone`, `u`.`date_of_birth` AS `date_of_birth`, `u`.`gender` AS `gender`, `u`.`profile_picture` AS `profile_picture`, `u`.`role` AS `role`, `u`.`is_active` AS `is_active`, `u`.`last_login` AS `last_login`, `u`.`created_at` AS `created_at`, `up`.`interests` AS `interests`, `up`.`travel_style` AS `travel_style`, `up`.`preferred_destinations` AS `preferred_destinations` FROM (`users` `u` left join `user_preferences` `up` on(`u`.`id` = `up`.`user_id`)) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_user_id` (`user_id`),
  ADD KEY `idx_tour_id` (`tour_id`),
  ADD KEY `idx_status` (`status`),
  ADD KEY `idx_booking_date` (`booking_date`),
  ADD KEY `idx_bookings_user_status` (`user_id`,`status`);

--
-- Indexes for table `destinations`
--
ALTER TABLE `destinations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_category` (`category`),
  ADD KEY `idx_difficulty` (`difficulty_level`),
  ADD KEY `idx_price_range` (`price_range`),
  ADD KEY `idx_is_active` (`is_active`),
  ADD KEY `idx_destinations_category_active` (`category`,`is_active`);

--
-- Indexes for table `guides`
--
ALTER TABLE `guides`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_user_id` (`user_id`),
  ADD KEY `idx_is_available` (`is_available`),
  ADD KEY `idx_rating` (`rating`);

--
-- Indexes for table `guide_bookings`
--
ALTER TABLE `guide_bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_user_id` (`user_id`),
  ADD KEY `idx_guide_id` (`guide_id`),
  ADD KEY `idx_status` (`status`),
  ADD KEY `idx_booking_date` (`booking_date`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_user_id` (`user_id`),
  ADD KEY `idx_destination_id` (`destination_id`),
  ADD KEY `idx_tour_id` (`tour_id`),
  ADD KEY `idx_rating` (`rating`),
  ADD KEY `idx_reviews_rating` (`rating`);

--
-- Indexes for table `tours`
--
ALTER TABLE `tours`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_destination_id` (`destination_id`),
  ADD KEY `idx_is_active` (`is_active`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `idx_email` (`email`),
  ADD KEY `idx_role` (`role`),
  ADD KEY `idx_is_active` (`is_active`),
  ADD KEY `idx_users_email_verified` (`email`,`is_email_verified`);

--
-- Indexes for table `user_preferences`
--
ALTER TABLE `user_preferences`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `destinations`
--
ALTER TABLE `destinations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `guides`
--
ALTER TABLE `guides`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `guide_bookings`
--
ALTER TABLE `guide_bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tours`
--
ALTER TABLE `tours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user_preferences`
--
ALTER TABLE `user_preferences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `bookings_ibfk_2` FOREIGN KEY (`tour_id`) REFERENCES `tours` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `guides`
--
ALTER TABLE `guides`
  ADD CONSTRAINT `guides_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `guide_bookings`
--
ALTER TABLE `guide_bookings`
  ADD CONSTRAINT `guide_bookings_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `guide_bookings_ibfk_2` FOREIGN KEY (`guide_id`) REFERENCES `guides` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`destination_id`) REFERENCES `destinations` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `reviews_ibfk_3` FOREIGN KEY (`tour_id`) REFERENCES `tours` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `tours`
--
ALTER TABLE `tours`
  ADD CONSTRAINT `tours_ibfk_1` FOREIGN KEY (`destination_id`) REFERENCES `destinations` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_preferences`
--
ALTER TABLE `user_preferences`
  ADD CONSTRAINT `user_preferences_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
