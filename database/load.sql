drop database if exists AlterTail;

create database AlterTail;

use AlterTail;

create table user
(email varchar(40) not null,
 fname varchar(50) not null,
 gender varchar(10) not null,
 username varchar(20) not null,
 pw varchar(100) not null,
 phone varchar(10) not null,
 street_address varchar(50) not null,
 unit varchar(20),
 postal_code varchar(6) not null,
 image_url varchar(100) not null,
 constraint user_pk primary key(email)
 );

create table seller 
(email varchar(40) not null,
 shop_name varchar(30) not null,
 street_address varchar(50) not null,
 shop_summary varchar(200) not null,
 shop_description varchar(1000) not null,
 unit varchar(20),
 postal_code varchar(6) not null,
 shop_category varchar(20) not null,
 rating varchar(10) not null,
 rating_num varchar(10) not null,
 image_url varchar(100) not null,
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
