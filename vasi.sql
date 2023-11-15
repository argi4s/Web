drop database if exist base;
create database base;
use database base;

create table admin(
    username varchar(40) not null ,primary key (username) ,
    constraint fk1 foreign key(username) 
    references admin(username) on delete cascascade on update cascade
)engine=InnoDB;


create table diaswstis(
    username varchar(40) not null, primary key (username),
    constraint fk2 foreign key (username) references admin(username) 
    on delete cascade on update cascade
)engine=InnoDB;


create table aitimata(
    diaswstis_username varchar(40) not null, aitimata_id int(11) not null auto_increment,
    politis_username varchar(40) not null, date_kataxorisis datetime,
    date_analipsis datetime,eidos varchar (20) not null, posotita float(7,2) not null,
    primary key (aitimata_id),constraint fk3 foreign key (diaswstis_username) references
    diaswstis(username) on delete cascade on update cascade,constraint fk4 foreign key
    (politis_username) references politis(username) on delete cascade on update cascade,
    constraint fk5 foreign key (eidos) references eidh(onoma) on delete cascade on update cascade
)engine=InnoDB;

create table eidh(
    id int(11) not null auto_increment,onoma varchar(40) not null,primary key(id)
)engine=InnoDB;