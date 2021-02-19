
mysql> create database nexus;
Query OK, 1 row affected (0.04 sec)

mysql> use nexus;
Database changed

mysql> create table internetplan(planid bigint auto_increment primary key,speed varchar(100) not null,cost decimal(10,2)not null,duration varchar(100) not null);
Query OK, 0 rows affected (0.17 sec)

mysql> desc internetplan;
+----------+---------------+------+-----+---------+----------------+
| Field    | Type          | Null | Key | Default | Extra          |
+----------+---------------+------+-----+---------+----------------+
| planid   | bigint        | NO   | PRI | NULL    | auto_increment |
| speed    | varchar(100)  | NO   |     | NULL    |                |
| cost     | decimal(10,2) | NO   |     | NULL    |                |
| duration | varchar(100)  | NO   |     | NULL    |                |
+----------+---------------+------+-----+---------+----------------+
4 rows in set (0.02 sec)

mysql>  insert into internetplan values(1,"10Mbps",3000,"4 months");
Query OK, 1 row affected (0.01 sec)

mysql>  insert into internetplan values(2,"20Mbps",5500,"2 months");
Query OK, 1 row affected (0.01 sec)

mysql>  insert into internetplan values(3,"15Mbps",2000,"28 days");
Query OK, 1 row affected (0.01 sec)

mysql> select * from internetplan;
+--------+--------+---------+----------+
| planid | speed  | cost    | duration |
+--------+--------+---------+----------+
|      1 | 10Mbps | 3000.00 | 4 months |
|      2 | 20Mbps | 5500.00 | 2 months |
|      3 | 15Mbps | 2000.00 | 28 days  |
+--------+--------+---------+----------+
3 rows in set (0.00 sec)

