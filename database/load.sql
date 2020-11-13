drop database if exists AlterTail;

create database AlterTail;

use AlterTail;

create table user
(email varchar(40) not null,
 fname varchar(50) not null,
 SuperSaaS_user_id varchar(10),
 gender varchar(10) not null,
 username varchar(20) not null,
 pw varchar(100) not null,
 phone varchar(10) not null,
 street_address varchar(50) not null,
 unit varchar(20),
 postal_code varchar(6) not null,
 image_url varchar(100),
 constraint user_pk primary key(email)
 );

create table seller 
(email varchar(40) not null,
 shop_name varchar(30) not null,
 street_address varchar(50) not null,
 shop_summary varchar(200) not null,
 shop_description varchar(1000) not null,
 schedule_id varchar(10) not null,
 unit varchar(20),
 postal_code varchar(6) not null,
 shop_category varchar(20) not null,
 rating varchar(10) not null,
 rating_num varchar(10) not null,
 image_url varchar(100),
 constraint seller_pk primary key(email,shop_name),
 constraint seller_fk1 foreign key(email) references user(email)
);

create table service 
(service_id varchar(50) not null,
service_title varchar(50) not null,
service_price varchar(10) not null,
service_description varchar(100) not null,
service_lead_time varchar(50) not null,
service_image_url varchar(100) not null,
constraint service_pk primary key(service_id)
);

create table seller_service
( email varchar(40) not null,
shop_name varchar(30) not null,
service_id varchar(50) not null,
constraint seller_service_pk primary key(email, shop_name, service_id),
constraint seller_service_fk1 foreign key(email, shop_name) references seller(email, shop_name),
constraint seller_service_fk2 foreign key(service_id) references service(service_id)
);

INSERT INTO `user` (`email`, `fname`, `SuperSaaS_user_id`, `gender`, `username`, `pw`, `phone`, `street_address`, `unit`, `postal_code`, `image_url`) VALUES
('AB.dry.clean@gmail.com', 'AB Professional ', '105fk', 'Male', 'ABProfessional', '$2y$10$7BPoPWhtRrbjkEfUQVDgXusLBeDqV/dEqnVlUvLnJ4vfK89ZPuyiy', '61001616', '8 Kaki Bukit Ave 4', '03-07', '415875', NULL),
('alt.fit@gmail.com', 'Alt To Fit', '911fk', 'Male', 'AltToFit', '$2y$10$T2US9t8QklzKjdiMe25NlOimYE.OFuwp6j5vGV8tuN7zQPci0dP0G', '87982566', '432 Clementi Ave 3', '01-282', '120432', NULL),
('alt.unisex@gmail.com', 'Alteration of Unidex Clothing', '211fk', 'Female', 'UnisexAlteration', '$2y$10$JD4Wzf6kRR1Jh.WDx6XvweC4/r7OHaUteRXFyTOngYX3wjiJKR5rK', '90371195', '375 Bukit Batok West Ave 5', '01-144', '650375', NULL),
('assemble@gmail.com', 'Assemble', '011fk', 'Female', 'Assemble', '$2y$10$1oOZvSzr9xRLnZf5kdQ/9./SOCADoMKQEEEBq709ccZ5F1cq.Ga42', '87426863', '181 Orchard Rd', '04-04', '238896', NULL),
('editsuits@gmail.com', 'Edit Suits Co', '522fk', 'Male', 'EditSuitsCo', '$2y$10$nXEUq1d9C5I7QB/ilcoBE.3icFwI310ltpKzxX6umHrFaJFODCZKC', '31583926', '35A Duxton Rd', '02-01', '089499', NULL),
('ehkay@gmail.com', 'Ehkay Corner Tailors', '047fk', 'Male', 'Ehkay', '$2y$10$PEmfFxOmaYb8jh7Hru58MeCKc7aYydAQwkeAtRhH63h5sO4FupH0.', '96974297', '150 Orchard Rd', '01-57', '238841', NULL),
('ethan.men@gmail.com', 'Ethan Men', '227fk', 'Male', 'EthanMen', '$2y$10$KQBBCPgdCXcfBY1NqmbTwefEzdkR61TF4V27WtkKIlzn92w9QQzSO', '87780079', '10 Anson Road', '02-96', '079903', NULL),
('gentlementale@gmail.com', 'Gentleman Tale', '974fk', 'Male', 'AGentlemanTale', '$2y$10$jLJwsDg7/RiFXkRENQxlo.owNbh9vIqVPCvzaEQB1QYcG2Q7p5cLK', '87421282', '27 Toa Payoh E', '01-184', '310027', NULL),
('ginz.collection@gmail.com', 'Ginz Collection', '909fk', 'Female', 'Ginz', '$2y$10$rgO8YkQfmGiftiF/1C81pOUPFvgc7YkKeMxzJ.g47AQlR98MN8/pG', '63537131', '503 Bishan Street 11', '01-446', '570503', NULL),
('haute@gmail.com', 'Haute Alteration Initiative', '645fk', 'Male', 'HauteAlterationIniti', '$2y$10$s3yZsuH10bTZSlh1rGzWp.7BcwD8Uc6DaYGzkbjUJ7qr0EibXib06', '82280020', 'Tiong Poh Rd', '00-00', '000000', NULL),
('jeansfix@gmail.com', 'JeansFix', '642fk', 'Female', 'JeansFix', '$2y$10$mirchefas1Zex6TJ1av61uXuAPVAP19p/FWnBhU5mf6S5MlzVdROO', '65344843', '1 Raffles Link', '01-06', '039393', NULL),
('jenny.dress@gmail.com', 'Jenny Dressmaking', '698fk', 'Female', 'JennyDressmaking', '$2y$10$WIUI27oMFlg6gS5titJXSO/FNKAED2BCrDOrPLSvupFOyVVJdy842', '92388870', '211 Holland Ave', '03-45', '278967', NULL),
('lai.en@gmail.com', 'Lai En Tailor', '926fk', 'Female', 'LaiEnTailor', '$2y$10$omz8zr68sZSWIyFnFqAkFug3daQ5wDLT5S915vLO2lEbAhwR7xKmW', '91895296', '2 Defu Lane 10', '02-533', '539183', NULL),
('may.tailor@gmail.com', 'May Tailor', '942fk', 'Female', 'MayTailor', '$2y$10$4Ry5Hvm4EsZA8c8OiaT5DO63LE5IW5xokp6k36ygoJUP9RlUhIq6C', '92703273', '304 Orchard Road', '04-56', '238863', NULL),
('meiko@gmail.com', 'Meiko Tailor', '901fk', 'Female', 'MeikoTailor', '$2y$10$6yWYZ..jDU3dhvVmPysG8OCBV5F7PtpHuO/mgk.4F5uZdizYx7GH6', '63346911', '7 Raffles Blvd', '02-01', '039595', NULL),
('perfect.attire@gmail.com', 'Perfect Attire', '900fk', 'Male', 'PerfectAttire', '$2y$10$sN.PA7OIrycf7KZuhCBTmuevZAj21in4xds5O6LJr1fWJhnJo9kOO', '98187062', '138 Robinson Rd', '03-38', '068906', NULL),
('qmen@gmail.com', 'Q MENSWEAR', '469fk', 'Male', 'QMenswear', '$2y$10$Q4cz9vb.WOrS7h1Anfc7zOyJVVqIkhbudQRHWZqgNVALWln1sS6mi', '66366939', '116A Telok Ayer St', '', '068585', NULL),
('red.dot.bespoke@gmail.com', 'Red Dot Bespoke', '013fk', 'Male', 'RedDotBespoke', '$2y$10$M0Fl/kahrmJf1uOeqwNi9eM5wo0u.qxdGIrrRCvpdBP1y.gMO0hCq', '66124935', '11 New Bridge Rd', '02-01', '059383', NULL),
('suityourse@gmail.com', 'SuitYourse', '552fk', 'Female', 'SuitYourse', '$2y$10$llKZq52MZnzHWpy3T9W0BOjZ6c3W1Rqfbc7ca7xJbu8BC0EUBdhFm', '91552679', '14 Scotts Rd', '02-54', '228213', NULL),
('tang.cottage@gmail.com', 'Tang Cottage', '008fk', 'Female', 'TangCottage', '$2y$10$97.zjUbE0NAmr5oZuNs1xecivQZjpD7WV18/OhLiAk1Q6cnVJm9Tm', '91234567', '270 Queen St', '03-35', '180270', NULL);

INSERT INTO `seller` (`email`, `shop_name`, `street_address`, `shop_summary`, `shop_description`,`schedule_id`, `unit`, `postal_code`, `shop_category`, `rating`, `rating_num`, `image_url`) VALUES
('alt.fit@gmail.com', 'Alt-To-Fit', '432 Clementi Ave 3', 'With 30 years of experience in the bag, you know the pros from Alt-to-fit are the ones to go to for quality tailoring and alteration services. Its team of seamstresses are there to guide you through t', 'With 30 years of experience in the bag, you know the pros from Alt-to-fit are the ones to go to for quality tailoring and alteration services. Its team of seamstresses are there to guide you through the alteration process, helping you to bring your fashion vision to life by repairing, resizing and refashioning! No doubt, you’ll walk out with the perfect fit.', '535033','01-282', '120432', 'Alteration ', '4.3', '40', 'images/alteration_shop9.jpg'),
('alt.unisex@gmail.com', 'Alteration of Unisex Clothing', '375 Bukit Batok West Ave 5', 'Alteration of Unisex Clothing is the place to go for those who live in the west of the island. Don’t let its humble storefront fool you — west-siders who don’t want to make the trek to town head here ', 'Alteration of Unisex Clothing is the place to go for those who live in the west of the island. Don’t let its humble storefront fool you — west-siders who don’t want to make the trek to town head here when it comes to the alteration for everything from shirts, to pants and skirts.','535034', '01-144', '650375', 'Alteration', '4.9', '12', 'images/alteration_shop4.jpeg'),
('ehkay@gmail.com', 'Ehkay Corner Tailors', '150 Orchard Rd', 'Now through ehkaycornertailor.com, the Singapore tailor tradition of craftsmanship and personalized service is available with online convenience.', 'Now through ehkaycornertailor.com, the Singapore tailor tradition of craftsmanship and personalized service is available with online convenience.', '535035', '01-57', '238841', 'Tailoring', '4.9', '235', 'images/alteration_shop6.jpg'),
('ginz.collection@gmail.com', 'Ginz Collection', '503 Bishan Street 11', 'Loyal customers swear by this heartland tailor for fast alterations and super reliable service. Besides creating custom clothes, Ginz Collection is ace at altering all sorts of materials from denim to', 'Loyal customers swear by this heartland tailor for fast alterations and super reliable service. Besides creating custom clothes, Ginz Collection is ace at altering all sorts of materials from denim to cotton, and will even add a touch of detail such as pom-poms or sequins if you want to!', '535036','01-446', '570503', 'Alteration ', '3.4', '13', 'images/alteration_shop8.jpg'),
('haute@gmail.com', 'Haute Alteration Initiative', 'Tiong Poh Rd', 'If you’re in need of tailors with lots of experience with couture pieces, Haute Alteration Initiative is the place to go. Prices start from S$20 for a basic shortening job, and yes, they may be pricey', 'If you’re in need of tailors with lots of experience with couture pieces, Haute Alteration Initiative is the place to go. Prices start from S$20 for a basic shortening job, and yes, they may be pricey, but these are the go-to people for garments with tricky embellishment details, or delicate materials like organza.', '535037', '01-124', '168898', 'Alteration ', '5.0', '1', 'images/alteration_shop7.jpg'),
('jeansfix@gmail.com', 'JeansFix', '1 Raffles Link', 'Not all jeans fit your body perfectly but denim connoisseur, Jeansfix, will come to the rescue. Whether be amending a waistband or fixing rips that have happened over time, they’re the experts in this', 'Not all jeans fit your body perfectly but denim connoisseur, Jeansfix, will come to the rescue. Whether be amending a waistband or fixing rips that have happened over time, they’re the experts in this area.', '535038','B1-06', '039393', 'Alteration', '4.7', '7', 'images/alteration_shop5.jpg'),
('jenny.dress@gmail.com', 'Jenny & Me Dressmaking', '211 Holland Ave ', 'With over three decades of experience under her belt, Jenny is a force to be reckoned with. Aside from her well-honed expertise at crafting dresses and shirts from scratch, she does meticulous alterat', 'With over three decades of experience under her belt, Jenny is a force to be reckoned with. Aside from her well-honed expertise at crafting dresses and shirts from scratch, she does meticulous alterations for all sorts of clothing, and won’t hesitate to dish our her professional advice on how best to get the right fit.', '03-45', '535039','278967', 'Tailoring ', '4.8', '105', 'images/alteration_shop10.jpg'),
('may.tailor@gmail.com', 'May Tailor & Laundry', '304 Orchard Road ', 'Our mission is to provide excellent laundry & tailoring service, coupled with our competitive prices, to deliver the clothes that suits you as well as to put a smile on your face. Your satisfaction is', 'Our mission is to provide excellent laundry & tailoring service, coupled with our competitive prices, to deliver the clothes that suits you as well as to put a smile on your face. Your satisfaction is our responsibility!', '535040','04-56', '238863', 'Tailoring', '3.7', '6', 'images/alteration_shop3.jpg'),
('qmen@gmail.com', 'Q MENSWEAR', '116A Telok Ayer St', 'Every house has their own signature cut, technical expertise or style which sets it apart from other houses or menswear brand. At Q MENSWEAR, we also have our own set of standards when it comes to our', 'Every house has their own signature cut, technical expertise or style which sets it apart from other houses or menswear brand. At Q MENSWEAR, we also have our own set of standards when it comes to our garments.', '535041','01-123', '068585', 'Alteration', '4.4', '17', 'images/alteration_shop1 .jpg'),
('suityourse@gmail.com', 'SuitYourse', '14 Scotts Rd', 'We specialise in creating high quality suits and shirts for your everyday and once-in-a-lifetime moments at affordable prices.', 'We specialise in creating high quality suits and shirts for your everyday and once-in-a-lifetime moments at affordable prices.', '535042','02-54', '228213', 'Tailoring', '4.6', '255', 'images/alteration_shop2.jpg'),
('tang.cottage@gmail.com', 'Tang Cottage', '270 Queen St ', 'Owner of Tang Cottage, May Tang has more than twenty years of experience. While she was trained in clothing making, she has built a strong reputation for providing quality alteration services to her c', 'Owner of Tang Cottage, May Tang has more than twenty years of experience. While she was trained in clothing making, she has built a strong reputation for providing quality alteration services to her clients. Her formal training in workmanship ensures excellent results.', '535043','03-35', '180270', 'Alteration ', '5', '1', 'images/alteration_shop11.jpg'),
('gentlementale@gmail.com', 'A Gentleman\'s Tale', '27 Toa Payoh E', 'A Gentleman’s Tale was founded in 2015 Kenneth and Lyn with the aim of combining their passion and skills in fashion and tailoring. ', 'A Gentleman’s Tale was founded in 2015 Kenneth and Lyn with the aim of combining their passion and skills in fashion and tailoring. ', '535052','01-184', '310027', 'Tailoring', '5.0', '16', 'images/alteration_shop19.jpg'),
('AB.dry.clean@gmail.com', 'A&B Professional Dry Clean & L', '8 Kaki Bukit Ave 4', 'A&B Professional Dry Clean & Laundry ensures that their team handles each of your items with care. Trust that they will follow each item’s washing methods meticulously.', 'A&B Professional Dry Clean & Laundry ensures that their team handles each of your items with care. Trust that they will follow each item’s washing methods meticulously.', '535044','03-07', '415875', 'Laundry', '3.7', '3', 'images/alteration_shop20.jpg'),
('assemble@gmail.com', 'Assemble', '181 Orchard Rd', 'Assemble Singapore was founded in 2014 by a local duo, Ken and Lyn. Their love for dressing up fashionably led them to pursue a business in tailoring. Touted as the first tailor in Singapore to provid', 'Assemble Singapore was founded in 2014 by a local duo, Ken and Lyn. Their love for dressing up fashionably led them to pursue a business in tailoring. Touted as the first tailor in Singapore to provide in-house and customisable lining, Assemble Singapore recently opened their flagship store at Orchard Central.', '535045','04-04', '238896', 'Tailoring', '4.4', '56', 'alteration_shop12.webp'),
('editsuits@gmail.com', 'Edit Suits Co', '35A Duxton Rd', 'Edit Suits offers impeccably fitting made-to-measure suits with a modern cut and high-quality European fabrics (e.g., Dormeuil, Holland & Sherry, Vitale Barberis Canonico, and Ermenegildo Zegna) at re', 'Edit Suits offers impeccably fitting made-to-measure suits with a modern cut and high-quality European fabrics (e.g., Dormeuil, Holland & Sherry, Vitale Barberis Canonico, and Ermenegildo Zegna) at ready-to-wear prices. As one of Singapore’s biggest made-to-measure tailors, they also offer a fit guarantee to ensure that you’re satisfied and you won’t risk anything when you order from them.', '535046','02-01', '089499', 'Tailoring', '4.7', '151', 'images/alteration_shop16.jpeg'),
('ethan.men@gmail.com', 'Ethan Men', '10 Anson Road', 'Started in 2014 by Daniel and Victor, ethan men wants to be the best tailor in Singapore. Their mission is to provide quality products at affordable prices by producing everything in-house. They striv', 'Started in 2014 by Daniel and Victor, ethan men wants to be the best tailor in Singapore. Their mission is to provide quality products at affordable prices by producing everything in-house. They strive to provide an efficient and hassle-free tailoring experience for their customers.', '535047','02-96', '079903', 'Tailoring', '4.5', '26', 'images/alteration_shop14.jpg'),
('lai.en@gmail.com', 'Lai En Tailor', '2 Defu Lane 10', 'Lai En Tailor is a small quaint tailor tucked in the east of Singapore. A local men-and-women tailor, Lai En Tailor has a reputation for great workmanship.', 'Lai En Tailor is a small quaint tailor tucked in the east of Singapore. A local men-and-women tailor, Lai En Tailor has a reputation for great workmanship.', '535048','02-533', '539183', 'Tailoring', '4.1', '61', 'images/alteration_shop13.jpg'),
('meiko@gmail.com', 'Meiko Tailor', '7 Raffles Blvd', 'With over 50 years of experience, Meiko Tailor has been continuously providing the locality with their fine craft and premium fabric. Throughout the business, they have developed the style in suit cra', 'With over 50 years of experience, Meiko Tailor has been continuously providing the locality with their fine craft and premium fabric. Throughout the business, they have developed the style in suit crafting pants and shirts, particularly bespoke suit. Their resident styling advisor has been trained in Academy of ImageWorks (AIM) which largely influenced his work. The shop accepts overseas order via mail and door to door visit within a specific area. ', '535049','02-01', '039595', 'Tailoring', '4.8', '23', 'images/alteration_shop18.jpg'),
('perfect.attire@gmail.com', 'Perfect Attire', 'Oxley 138 Robinson Rd', 'Perfect Attire specialises in handcrafted bespoke suits, custom shirts and tailored pants at accessible prices. Founded by Tulsi Kamath and Shriram Iyer, who both share a passion for tailored clothing', 'Perfect Attire specialises in handcrafted bespoke suits, custom shirts and tailored pants at accessible prices. Founded by Tulsi Kamath and Shriram Iyer, who both share a passion for tailored clothing, the store prides itself for giving its customers the full bespoke experience with two fittings: muslin and basted', '535050','03-38', '068906', 'Tailoring', '5.0', '51', 'images/alteration_shop17.jpg'),
('red.dot.bespoke@gmail.com', 'Red Dot Bespoke', '11 New Bridge Rd', 'A new age bespoke tailor, Red Dot Bespoke strives to bring quality, comfort, and style while being friendly to your wallet.', 'A new age bespoke tailor, Red Dot Bespoke strives to bring quality, comfort, and style while being friendly to your wallet.', '535051','02-01', '059383', 'Tailoring', '4.9', '86', 'images/alteration_shop15jpg');