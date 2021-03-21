create database nexusdb;
use nexusdb;

create table internet_plan(iid bigint auto_increment primary key,speed varchar(100) not null,cost float not null,duration int not null);
alter table internet_plan auto_increment = 9999000001;
insert into internet_plan(speed,cost,duration) values("10Mbps",3000,4);
insert into internet_plan(speed,cost,duration) values("20Mbps",5500,2);
insert into internet_plan(speed,cost,duration) values("15Mbps",2000,1);

create table landline_plan( lid bigint auto_increment primary key , duration int not null, cost float not null);
alter table landline_plan auto_increment=8888000001;
insert into landline_plan(duration,cost) values(1,200);
insert into landline_plan(duration,cost) values(2,400);
insert into landline_plan(duration,cost) values(3,500);
insert into landline_plan(duration,cost) values(6,800);
insert into landline_plan(duration,cost) values(12,1500);

create table customer(cid bigint primary key AUTO_INCREMENT,fname varchar(20) not null , lname varchar(20) , addres varchar(20),pincode int , phone bigint , username varchar(20) unique ,password varchar(20) not null);
alter table customer auto_increment=3333000001; 
insert into customer(fname,lname,addres,pincode,phone,username,password)values('Manthan','Pelne','south11',440011,9623309448,'map','map@1234'); 
insert into customer(fname,lname,addres,pincode,phone,username,password)values('Rohit','Narkhade','south12',440011,9623309448,'raw','raw@1234'); 
insert into customer(fname,lname,addres,pincode,phone,username,password)values('Jaya','Sai','north11',440012,9623309448,'sai','sai@1234'); 
insert into customer(fname,lname,addres,pincode,phone,username,password)values('Yogita','Shirsale','north12',440012,9623309448,'yog','yog@1234'); 

create table employee(eid bigint primary key,username varchar(30) unique, password varchar(30) not null, desg enum ('vendor','technical','retailer','admin'));
insert into employee values(1,'admin','admin','admin');

create table retailer_table(rid bigint primary key auto_increment, pincode int,internet_kit int, landline_kit int , vid bigint);
alter table retailer_table auto_increment = 2222000001;

create table vendor(vid bigint primary key auto_increment,internet_kit int, landline_kit int);
alter table vendor auto_increment=1111000001;


create table retailer_mapping(rid bigint primary key, pincode int);

create table technical(oid bigint primary key,rid bigint,status enum('true','false'));

create table order_table(oid bigint primary key auto_increment, rid bigint,cid bigint, requested_plan bigint , status enum('false','true','pass','reject'),constraint fk_rid foreign key(rid) references retailer_table(rid),constraint fk_cid foreign key(cid) references customer(cid));
alter table order_table auto_increment = 5555000001;

create table order_stock(oid bigint primary key auto_increment, rid bigint not null, vid bigint not null,requested_item enum ('ik','lk'), requested_stock int not null);
alter table order_stock add column status enum('true','false');
alter table order_stock auto_increment=5555000001;

create table connection(cnid bigint primary key auto_increment , cid bigint , reqplan bigint , startdate date ,enddate date,status varchar(20), bill int);
alter table connection add column billstatus enum('paid','unpaid');
alter table connection auto_increment=7777000001;