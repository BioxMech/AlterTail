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
 shop_description varchar(2000) not null,
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
service_description varchar(1000) not null,
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
('alt.fit@gmail.com', 'Alt-To-Fit', '432 Clementi Ave 3', 'With 30 years of experience in the bag, you know the pros from Alt-to-fit are the ones to go to for quality tailoring and alteration services. Its team of seamstresses are there to guide you throught', 
'With 30 years of experience in the bag, you know the pros from Alt-to-fit are the ones to go to for quality tailoring and alteration services. Its team of seamstresses are there to guide you through the alteration process, helping you to bring your fashion vision to life by repairing, resizing and refashioning! No doubt, you’ll walk out with the perfect fit.
<br><br>
Other than providing the usual alteration services like any other shops, Alt-To-Fit also provide modification of your clothes to suit your customization.<br><br>
If you have any problems regarding your clothes and dress and you are not sure if they can be altered/modified, feel free to bring it down to Alt-To-Fit and consult our tailors.', 
'535033','01-282', '120432', 'Alteration ', '4.3', '40', 'images/alteration_shop9.jpg'),
('alt.unisex@gmail.com', 'Alteration of Unisex Clothing', '375 Bukit Batok West Ave 5', 'Alteration of Unisex Clothing is the place to go for those who live in the west of the island. Don’t let its humble storefront fool you — west-siders who don’t want to make the trek to town head here ', 'Alteration of Unisex Clothing is the place to go for those who live in the west of the island. Don’t let its humble storefront fool you — west-siders who don’t want to make the trek to town head here when it comes to the alteration for everything from shirts, to pants and skirts.','535034', '01-144', '650375', 'Alteration', '4.9', '12', 'images/alteration_shop4.jpeg'),
('ehkay@gmail.com', 'Ehkay Corner Tailors', '150 Orchard Rd', 'Now through ehkaycornertailor.com, the Singapore tailor tradition of craftsmanship and personalized service is available with online convenience.', 
'A leading custom tailor of bespoke menswear and accessories, Kingsmen Shop traces its heritage back to 1954, when it was then known as Great Central Modern Tailor. The prestigious Kingsmen name was adopted in the early 1970s and we have since become synonymous as the pioneer of leading menswear and top-notch fashion accessories for the well-dressed male.
Now through ehkaycornertailor.com, the Singapore tailor tradition of craftsmanship and personalized service is available with online convenience.
<br><br>

', 

'535035', '01-57', '238841', 'Tailoring', '4.9', '235', 'images/alteration_shop6.jpg'),
('ginz.collection@gmail.com', 'Ginz Collection', '503 Bishan Street 11', 'Loyal customers swear by this heartland tailor for fast alterations and super reliable service. Besides creating custom clothes, Ginz Collection is ace at altering all sorts of materials from denim to', 'Loyal customers swear by this heartland tailor for fast alterations and super reliable service. Besides creating custom clothes, Ginz Collection is ace at altering all sorts of materials from denim to cotton, and will even add a touch of detail such as pom-poms or sequins if you want to!', '535036','01-446', '570503', 'Alteration ', '3.4', '13', 'images/alteration_shop8.jpg'),
('haute@gmail.com', 'Haute Alteration Initiative', 'Tiong Poh Rd', 'If you’re in need of tailors with lots of experience with couture pieces, Haute Alteration Initiative is the place to go. Prices start from S$20 for a basic shortening job, and yes, they may be pricey', 
'If you’re in need of tailors with lots of experience with couture pieces, Haute Alteration Initiative is the place to go. Prices start from S$20 for a basic shortening job, and yes, they may be pricey, but these are the go-to people for garments with tricky embellishment details, or delicate materials like organza.
<br><br>
Our clients include leading professionals, government officials, executives, businessmen, grooms-to-be and individuals who appreciate a well-tailored suit. Some of our past projects include being honoured with the responsibility to tailor the official attire for Asia-Pacific Economic Cooperation (APEC) national leaders in 2009. In 2007, we were also the official tailor for the delegates of the 13th ASEAN Summit.', 

'535037', '01-124', '168898', 'Alteration ', '5.0', '1', 'images/alteration_shop7.jpg'),

('jeansfix@gmail.com', 'JeansFix', '1 Raffles Link', 'Not all jeans fit your body perfectly but denim connoisseur, Jeansfix, will come to the rescue. Whether be amending a waistband or fixing rips that have happened over time, they’re the experts in this', 'Not all jeans fit your body perfectly but denim connoisseur, Jeansfix, will come to the rescue. Whether be amending a waistband or fixing rips that have happened over time, they’re the experts in this area.', '535038','B1-06', '039393', 'Alteration', '4.7', '7', 'images/alteration_shop5.jpg'),
('jenny.dress@gmail.com', 'Jenny & Me Dressmaking', '211 Holland Ave ', 'With over three decades of experience under her belt, Jenny is a force to be reckoned with. Aside from her well-honed expertise at crafting dresses and shirts from scratch, she does meticulous alterat', 'With over three decades of experience under her belt, Jenny is a force to be reckoned with. Aside from her well-honed expertise at crafting dresses and shirts from scratch, she does meticulous alterations for all sorts of clothing, and won’t hesitate to dish our her professional advice on how best to get the right fit.', '535039','03-45','278967', 'Tailoring ', '4.8', '105', 'images/alteration_shop10.jpg'),
('may.tailor@gmail.com', 'May Tailor & Laundry', '304 Orchard Road ', 'Our mission is to provide excellent laundry & tailoring service, coupled with our competitive prices, to deliver the clothes that suits you as well as to put a smile on your face. Your satisfaction is', 'Our mission is to provide excellent laundry & tailoring service, coupled with our competitive prices, to deliver the clothes that suits you as well as to put a smile on your face. Your satisfaction is our responsibility!', '535040','04-56', '238863', 'Tailoring', '3.7', '6', 'images/alteration_shop3.jpg'),
('qmen@gmail.com', 'Q MENSWEAR', '116A Telok Ayer St', 'Every house has their own signature cut, technical expertise or style which sets it apart from other houses or menswear brand. At Q MENSWEAR, we also have our own set of standards when it comes to our', 'Every house has their own signature cut, technical expertise or style which sets it apart from other houses or menswear brand. At Q MENSWEAR, we also have our own set of standards when it comes to our garments.', '535041','01-123', '068585', 'Alteration', '4.4', '17', 'images/alteration_shop1 .jpg'),
('suityourse@gmail.com', 'SuitYourse', '14 Scotts Rd', 'We specialise in creating high quality suits and shirts for your everyday and once-in-a-lifetime moments at affordable prices.', 
'We specialise in creating high quality suits and shirts for your everyday and once-in-a-lifetime moments at affordable prices. We have extensive knowledge of modern fashion trends and provide excellent cut and workmanship, accompanied by reasonable prices. Our friendly and personalised services include: tuxedos, evening suits, casual suits, formal suits and wedding suits. A wide selection of high quality imported textiles & accessories will also be provided to compliment your suit. <br><br>
 Our clients include leading professionals, government officials, executives, businessmen, grooms-to-be and individuals who appreciate a well-tailored suit. Some of our past projects include being honoured with the responsibility to tailor the official attire for Asia-Pacific Economic Cooperation (APEC) national leaders in 2009. In 2007, we were also the official tailor for the delegates of the 13th ASEAN Summit.', 
'535042','02-54', '228213', 'Tailoring', '4.6', '255', 'images/alteration_shop2.jpg'),
('tang.cottage@gmail.com', 'Tang Cottage', '270 Queen St ', 'Owner of Tang Cottage, May Tang has more than twenty years of experience. While she was trained in clothing making, she has built a strong reputation for providing quality alteration services to her c', 'Owner of Tang Cottage, May Tang has more than twenty years of experience. While she was trained in clothing making, she has built a strong reputation for providing quality alteration services to her clients. Her formal training in workmanship ensures excellent results.', '535043','03-35', '180270', 'Alteration ', '5', '1', 'images/alteration_shop11.jpg'),
('gentlementale@gmail.com', 'A Gentleman\'s Tale', '27 Toa Payoh E', 'A Gentleman’s Tale was founded in 2015 Kenneth and Lyn with the aim of combining their passion and skills in fashion and tailoring. ', 
'A Gentleman’s Tale was founded in 2015 Kenneth and Lyn with the aim of combining their passion and skills in fashion and tailoring.
<br><br>
As a premium bespoke tailor, the final result is constructed with precise measurements, and made to customers’ specifications. Without the use of base templates, our professional tailors create a new pattern for each individual customer so that we do not miss out on hints of differences on the wearer’s body.
<br><br>
We cherish cultivating long-lasting relationships with our customers as we believe that people are always on the search to find the perfect tailor to serve them as they reach different milestones in their lives – we want A Gentleman\'s Tale to be there for them every step of the way. We are meticulous, have a keen eye for detail and are dedicated to going above and beyond to provide first-class customer service for our customers. ', 
'535052','01-184', '310027', 'Tailoring', '5.0', '16', 'images/kingsman.jpg'),
('AB.dry.clean@gmail.com', 'A&B Professional Dry Clean & L', '8 Kaki Bukit Ave 4', 'A&B Professional Dry Clean & Laundry ensures that their team handles each of your items with care. Trust that they will follow each item’s washing methods meticulously.', 'A&B Professional Dry Clean & Laundry ensures that their team handles each of your items with care. Trust that they will follow each item’s washing methods meticulously.', '535044','03-07', '415875', 'Laundry', '3.7', '3', 'images/alteration_shop20.jpg'),
('assemble@gmail.com', 'Assemble', '181 Orchard Rd', 'Assemble Singapore was founded in 2014 by a local duo, Ken and Lyn. Their love for dressing up fashionably led them to pursue a business in tailoring. Touted as the first tailor in Singapore to provid', 
'Assemble Singapore was founded in 2014 by a local duo, Ken and Lyn. Their love for dressing up fashionably led them to pursue a business in tailoring. Touted as the first tailor in Singapore to provide in-house and customisable lining, Assemble Singapore recently opened their flagship store at Orchard Central.
<br><br>
As a premium bespoke tailor, the final result is constructed with precise measurements, and made to customers’ specifications. Without the use of base templates, our professional tailors create a new pattern for each individual customer so that we do not miss out on hints of differences on the wearer’s body.
<br><br>
We cherish cultivating long-lasting relationships with our customers as we believe that people are always on the search to find the perfect tailor to serve them as they reach different milestones in their lives – we want Assemble to be there for them every step of the way. We are meticulous, have a keen eye for detail and are dedicated to going above and beyond to provide first-class customer service for our customers.
',
 '535045','04-04', '238896', 'Tailoring', '4.4', '56', 'images/alteration_shop12.jpg'),
('editsuits@gmail.com', 'Edit Suits Co', '35A Duxton Rd', 'Edit Suits offers impeccably fitting made-to-measure suits with a modern cut and high-quality European fabrics (e.g., Dormeuil, Holland & Sherry, Vitale Barberis Canonico, and Ermenegildo Zegna) at re', 
'Edit Suits offers impeccably fitting made-to-measure suits with a modern cut and high-quality European fabrics (e.g., Dormeuil, Holland & Sherry, Vitale Barberis Canonico, and Ermenegildo Zegna) at ready-to-wear prices. As one of Singapore’s biggest made-to-measure tailors, they also offer a fit guarantee to ensure that you’re satisfied and you won’t risk anything when you order from them.
<br><br>
With Edit Suits Co, you are always dressed for the occasion, be it a formal event, in the business environment, or simply to fulfill the desire to look one’s best at all times. As the saying goes, the clothes maketh the man and Edit Suits Co Shop is an undisputed king in this arena. We have earned the trust of many as their go-to tailor and we would love for you to join us too.', 
'535046','02-01', '089499', 'Tailoring', '4.7', '151', 'images/alteration_shop16.jpeg'),
('ethan.men@gmail.com', 'Ethan Men', '10 Anson Road', 'Started in 2014 by Daniel and Victor, ethan men wants to be the best tailor in Singapore. Their mission is to provide quality products at affordable prices by producing everything in-house. They striv', 'Started in 2014 by Daniel and Victor, ethan men wants to be the best tailor in Singapore. Their mission is to provide quality products at affordable prices by producing everything in-house. They strive to provide an efficient and hassle-free tailoring experience for their customers.', '535047','02-96', '079903', 'Tailoring', '4.5', '26', 'images/alteration_shop14.jpg'),
('lai.en@gmail.com', 'Lai En Tailor', '2 Defu Lane 10', 'Lai En Tailor is a small quaint tailor tucked in the east of Singapore. A local men-and-women tailor, Lai En Tailor has a reputation for great workmanship.', 'Lai En Tailor is a small quaint tailor tucked in the east of Singapore. A local men-and-women tailor, Lai En Tailor has a reputation for great workmanship.', '535048','02-533', '539183', 'Tailoring', '4.1', '61', 'images/alteration_shop13.jpg'),
('meiko@gmail.com', 'Meiko Tailor', '7 Raffles Blvd', 'With over 50 years of experience, Meiko Tailor has been continuously providing the locality with their fine craft and premium fabric. Throughout the business, they have developed the style in suit cra', 'With over 50 years of experience, Meiko Tailor has been continuously providing the locality with their fine craft and premium fabric. Throughout the business, they have developed the style in suit crafting pants and shirts, particularly bespoke suit. Their resident styling advisor has been trained in Academy of ImageWorks (AIM) which largely influenced his work. The shop accepts overseas order via mail and door to door visit within a specific area. ', '535049','02-01', '039595', 'Tailoring', '4.8', '23', 'images/2.jpg'),
('perfect.attire@gmail.com', 'Perfect Attire', 'Oxley 138 Robinson Rd', 'Perfect Attire specialises in handcrafted bespoke suits, custom shirts and tailored pants at accessible prices. Founded by Tulsi Kamath and Shriram Iyer, who both share a passion for tailored clothing', 'Perfect Attire specialises in handcrafted bespoke suits, custom shirts and tailored pants at accessible prices. Founded by Tulsi Kamath and Shriram Iyer, who both share a passion for tailored clothing, the store prides itself for giving its customers the full bespoke experience with two fittings: muslin and basted', '535050','03-38', '068906', 'Tailoring', '5.0', '51', 'images/alteration_shop17.jpg'),
('red.dot.bespoke@gmail.com', 'Red Dot Bespoke', '11 New Bridge Rd', 'A new age bespoke tailor, Red Dot Bespoke strives to bring quality, comfort, and style while being friendly to your wallet.', 'A new age bespoke tailor, Red Dot Bespoke strives to bring quality, comfort, and style while being friendly to your wallet.', '535051','02-01', '059383', 'Tailoring', '4.9', '86', 'images/alteration_shop15.jpg');

INSERT INTO `service`(`service_id`, `service_title`, `service_price`, `service_description`, `service_lead_time`, `service_image_url`) VALUES 
('01','Tailored Shirt','109','100% customisable, made to measure shirts. Choose your fabric, collar, cuffs and buttons, and personalise your shirt with your very own monogram.','2 weeks','kingsmen3.jpg'),
('02','2-Piece Suit','910',"The jewel of a man's wardrobe. We challenge you to find us a man that looks bad in a well tailored suit.​ Our in-store advisors will take your measurements, find out more about your lifestyle and budget, and suggest the most suitable fabrics and fit necessary to craft you a suit that is sure to make you feel like a billion bucks.",'4-5 weeks','16.jpg'),
('03','3-Piece Suit','1020',"The 3pc suit is the most flattering garment that a man can own. The vest cinches in the waist, giving a natural V-shape to the upper body. You may also wear the vest, shirt and trousers without a jacket - a way to upkeep formality without compromising on style.",'4-5 weeks','kingsman8.jpg'),
('04','Tuxedo Suit','990',"Tuxedos are versatile formal wear for black tie occasions. The main difference between a tuxedo and a 2 piece suit is in the suit lapel - a tuxedo has a satin lapel and a shawl collar. You may choose to wear the tuxedo with a tuxedo bib front shirt, or a regular white shirt.",'4-5 weeks','kingsman7.jpg'),

('05','Mending & Sewing Service','12',"Tears and holes are common issues that we face in our garments. Our professional tailors will repair your garment by using suitable threads or cloth to ensure that the holes are concealed to our best ability, bringing a new lease of life to them. Depending on the size of the hole and fabric material, mending service is done either by hand stitching or machine sewing.",'3 days','alteration_shop5.jpg'),
('06','Zip Replacements','8',"We sourced our zippers locally in Singapore and we stock more than 50 assortment colors and lengths of zippers made available to choose from. We will try our best to match the closest colour against your garment for any replacement made.",'2 days','zip.jpg'),
('07','Length Adjustments','14',"We offer shortening and lengthening services so your bottoms and dresses will suit the look you desire. Measurements for your garment length adjustments are done in person with our staff or tailor.",'4 days','alteration_shop11.jpg'),
('08','Buttons Replacement','3',"Buttons are often use on garments embellishment or for fastening usage. It may easily crack or chip after a long period of wear. We offer a wide range of buttons to suit your needs. We understand that some buttons are unique to your garment as such, we are able to accommodate the sourcing of unique buttons direct from shops and brands.",'2 days','alteration_shop5.jpg'),
('09','Curtain Cleaning Service','8',"Curtain cleaning is an essential part of house cleaning chores. We tend to overlook the importance of clean and fresh curtains in our homes. Curtains protect us from the sun it should be washed regularly to reduce the accumulation of dusts and allergens. We provide cleaning for different types of curtains - day, night, blackout, organza, roman blinds. Let us know your curtain type and we can advise on the suitable care methods.",'5 days','cleaning1.jpg'),
('10','Carpet Cleaning Service','8',"Carpet cleaning is an integral part of house cleaning work. Carpets are great decorative pieces however, it also attracts dust and allergens. We provide carpet cleaning services for your home. Our carpet cleaning service in Singapore delivers a superior cleaning method for your carpet to ensure that it is clean and hygienic. It is recommended to clean your carpet every 3 to 6 months if you have a pet or regularly use your carpet in your living space. We specialize in cleaning for both fabric and natural exotic animal skins carpet. As our carpet charges are based on per square feet, big or small carpet, you will be charged accordingly.",'7 days','cleaning2.jpg'),
('11','Laundry & Dry Cleaning Services','8',"We specialized in professional caring for various types of delicate fabric. Should your items require delicate care, it will be separated out and handled carefully through every stage of our cleaning process. Our garment care specialist will inspect and ensure that your items will receive the best care and attention during cleaning.",'4 days','cleaning3.jpg'),
('12','Bag Cleaning Services','50-150',"We have years of experience in luxury bag repair and restoration. We provide the best Bag – Wallet Cleaning Service In Singapore. Our goal is to preserve the tip-top conditions of your luxury bags, hence enhancing the value you have invested in them.",'8 days','cleaning3.jpg');


INSERT INTO `seller_service`(`email`, `shop_name`, `service_id`) VALUES 
('suityourse@gmail.com','SuitYourse','01'),
('suityourse@gmail.com','SuitYourse','02'),
('suityourse@gmail.com','SuitYourse','03'),
('suityourse@gmail.com','SuitYourse','04');

INSERT INTO `seller_service`(`email`, `shop_name`, `service_id`) VALUES 
('alt.unisex@gmail.com','Alteration of Unisex Clothing','05'),
('alt.unisex@gmail.com','Alteration of Unisex Clothing','06'),
('alt.unisex@gmail.com','Alteration of Unisex Clothing','07'),
('alt.unisex@gmail.com','Alteration of Unisex Clothing','08');

INSERT INTO `seller_service`(`email`, `shop_name`, `service_id`) VALUES 
('assemble@gmail.com','Assemble','01'),
('assemble@gmail.com','Assemble','02'),
('assemble@gmail.com','Assemble','03'),
('assemble@gmail.com','Assemble','04');

INSERT INTO `seller_service`(`email`, `shop_name`, `service_id`) VALUES 
('editsuits@gmail.com','Edit Suits Co','01'),
('editsuits@gmail.com','Edit Suits Co','02'),
('editsuits@gmail.com','Edit Suits Co','03'),
('editsuits@gmail.com','Edit Suits Co','04');

INSERT INTO `seller_service`(`email`, `shop_name`, `service_id`) VALUES 
('ehkay@gmail.com','Ehkay Corner Tailors','01'),
('ehkay@gmail.com','Ehkay Corner Tailors','02'),
('ehkay@gmail.com','Ehkay Corner Tailors','03'),
('ehkay@gmail.com','Ehkay Corner Tailors','04');

INSERT INTO `seller_service`(`email`, `shop_name`, `service_id`) VALUES 
('ethan.men@gmail.com','Ethan Men','01'),
('ethan.men@gmail.com','Ethan Men','02'),
('ethan.men@gmail.com','Ethan Men','03'),
('ethan.men@gmail.com','Ethan Men','04');

INSERT INTO `seller_service`(`email`, `shop_name`, `service_id`) VALUES 
('gentlementale@gmail.com',"A Gentleman's Tale",'01'),
('gentlementale@gmail.com',"A Gentleman's Tale",'02'),
('gentlementale@gmail.com',"A Gentleman's Tale",'03'),
('gentlementale@gmail.com',"A Gentleman's Tale",'04');

INSERT INTO `seller_service`(`email`, `shop_name`, `service_id`) VALUES 
('ginz.collection@gmail.com','Ginz Collection','05'),
('ginz.collection@gmail.com','Ginz Collection','06'),
('ginz.collection@gmail.com','Ginz Collection','07'),
('ginz.collection@gmail.com','Ginz Collection','08');

INSERT INTO `seller_service`(`email`, `shop_name`, `service_id`) VALUES 

('haute@gmail.com','Haute Alteration Initiative','05'),
('haute@gmail.com','Haute Alteration Initiative','06'),
('haute@gmail.com','Haute Alteration Initiative','07'),
('haute@gmail.com','Haute Alteration Initiative','08');

INSERT INTO `seller_service`(`email`, `shop_name`, `service_id`) VALUES 
('jeansfix@gmail.com','JeansFix','05'),
('jeansfix@gmail.com','JeansFix','06'),
('jeansfix@gmail.com','JeansFix','07'),
('jeansfix@gmail.com','JeansFix','08');

INSERT INTO `seller_service`(`email`, `shop_name`, `service_id`) VALUES 
('jenny.dress@gmail.com','Jenny & Me Dressmaking','01'),
('jenny.dress@gmail.com','Jenny & Me Dressmaking','02'),
('jenny.dress@gmail.com','Jenny & Me Dressmaking','03'),
('jenny.dress@gmail.com','Jenny & Me Dressmaking','04');

INSERT INTO `seller_service`(`email`, `shop_name`, `service_id`) VALUES 
('lai.en@gmail.com','Lai En Tailor','01'),
('lai.en@gmail.com','Lai En Tailor','02'),
('lai.en@gmail.com','Lai En Tailor','03'),
('lai.en@gmail.com','Lai En Tailor','04');

INSERT INTO `seller_service`(`email`, `shop_name`, `service_id`) VALUES 
('may.tailor@gmail.com','May Tailor & Laundry','01'),
('may.tailor@gmail.com','May Tailor & Laundry','02'),
('may.tailor@gmail.com','May Tailor & Laundry','03'),
('may.tailor@gmail.com','May Tailor & Laundry','04');

INSERT INTO `seller_service`(`email`, `shop_name`, `service_id`) VALUES 
('meiko@gmail.com','Meiko Tailor','01'),
('meiko@gmail.com','Meiko Tailor','02'),
('meiko@gmail.com','Meiko Tailor','03'),
('meiko@gmail.com','Meiko Tailor','04');

INSERT INTO `seller_service`(`email`, `shop_name`, `service_id`) VALUES 
('perfect.attire@gmail.com','Perfect Attire','01'),
('perfect.attire@gmail.com','Perfect Attire','02'),
('perfect.attire@gmail.com','Perfect Attire','03'),
('perfect.attire@gmail.com','Perfect Attire','04');

INSERT INTO `seller_service`(`email`, `shop_name`, `service_id`) VALUES 
('qmen@gmail.com','Q MENSWEAR','05'),
('qmen@gmail.com','Q MENSWEAR','06'),
('qmen@gmail.com','Q MENSWEAR','07'),
('qmen@gmail.com','Q MENSWEAR','08');

INSERT INTO `seller_service`(`email`, `shop_name`, `service_id`) VALUES 
('red.dot.bespoke@gmail.com','Red Dot Bespoke','01'),
('red.dot.bespoke@gmail.com','Red Dot Bespoke','02'),
('red.dot.bespoke@gmail.com','Red Dot Bespoke','03'),
('red.dot.bespoke@gmail.com','Red Dot Bespoke','04');

INSERT INTO `seller_service`(`email`, `shop_name`, `service_id`) VALUES 
('tang.cottage@gmail.com','Tang Cottage','05'),
('tang.cottage@gmail.com','Tang Cottage','06'),
('tang.cottage@gmail.com','Tang Cottage','07'),
('tang.cottage@gmail.com','Tang Cottage','08');

INSERT INTO `seller_service`(`email`, `shop_name`, `service_id`) VALUES 
('AB.dry.clean@gmail.com','A&B Professional Dry Clean & L','09'),
('AB.dry.clean@gmail.com','A&B Professional Dry Clean & L','10'),
('AB.dry.clean@gmail.com','A&B Professional Dry Clean & L','11'),
('AB.dry.clean@gmail.com','A&B Professional Dry Clean & L','12');

INSERT INTO `seller_service`(`email`, `shop_name`, `service_id`) VALUES 
('alt.fit@gmail.com','Alt-To-Fit','05'),
('alt.fit@gmail.com','Alt-To-Fit','06'),
('alt.fit@gmail.com','Alt-To-Fit','07'),
('alt.fit@gmail.com','Alt-To-Fit','08');