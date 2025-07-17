create database db_livraria_cogna; 
use db_livraria_cogna; 

create table tbl_livro( 

    id int not null primary key auto_increment, 

    title varchar(100) not null, 

    subtitle varchar(500) not null, 

    isbn varchar(20) not null, 

    price float not null, 

    image varchar(200) not null 

); 

select * from tbl_livro;
delete from tbl_livro where id > 0;

