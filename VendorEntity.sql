create database nexusdb;
create table vendor(vid INT PRIMARY KEY not null auto_increment,router_count int,wire_count int,land_count int);
insert into vendor values(101,50,50,100);
insert into vendor values(102,0,0,75);
insert into vendor values(103,80,90,0);
desc vendor;
select * from vendor;