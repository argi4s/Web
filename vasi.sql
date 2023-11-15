drop database if exist base;
create database base;
use database base;

create table users(
	name varchar(40) not null,
	surname varchar(40) not null,
	username varchar(40) unique not null,
	phone int(10) unsigned not null, 
	password varchar(40) not null,
	primary key (username)
)engine=InnoDB;

create table admin(
    username varchar(40) not null ,primary key (username) ,
    constraint fk1 foreign key(username) 
    references users(username) on delete cascade on update cascade
)engine=InnoDB;

create table diaswstis(
    username varchar(40) not null, primary key (username),
    constraint fk2 foreign key (username) references users(username) 
    on delete cascade on update cascade
)engine=InnoDB;

create table politis(
	username varchar(40) not null,
	dromos varchar(255) not null, 
	arithmos int(4) not null,
	primary key (username),
	constraint fk6 foreign key (username) references users(username) 
on delete cascade on update cascade
)engine=InnoDB;

create table eidh(
    id int(11) not null auto_increment,
    onoma varchar(40) not null,
    primary key(id)
)engine=InnoDB;

create table apothiki(
	eidosid int(11) not null,
	posotita float(7,2) not null,
	primary key (eidosid)
	constraint fk10 foreign key (eidosid) references eidh(id)
on delete cascade on update cascade
)engine=InnoDB;

create table aitimata(
    diaswstis_username varchar(40) not null, 
    aitimata_id int(11) not null auto_increment,
    politis_username varchar(40) not null,
    date_kataxorisis datetime,
    date_analipsis datetime,
    eidos varchar (20) not null, 
    posotita float(7,2) not null,
    primary key (aitimata_id),
    constraint fk3 foreign key (diaswstis_username) references diaswstis(username)
on delete cascade on update cascade,
    constraint fk4 foreign key (politis_username) references politis(username)
on delete cascade on update cascade,
    constraint fk5 foreign key (eidos) references eidh(onoma)
on delete cascade on update cascade
)engine=InnoDB;

create table prosfores(
	diaswstis_username varchar(40),
	aitimata_id int(11) not null auto_increment,
	politis_username varchar(40) not null, 
	date_kataxorisis datetime,
	date_analipsis datetime,
	eidos varchar (20) not null, 
	posotita float(7,2) not null,
	primary key (aitimata_id),
	constraint fk7 foreign key (diaswstis_username) references diaswstis(username)
on delete cascade on update cascade,
	constraint fk8 foreign key (politis_username) references politis(username) 
on delete cascade on update cascade,
	constraint fk9 foreign key (eidos) references eidh(onoma) 
on delete cascade on update cascade
)engine=InnoDB;

drop trigger if exists apotropi_aitimaton
delimiter$
create trigger apotropi_aitimaton before update on aitimata for each row
begin 
    DECLARE message_text text;
    if diaswstis_username>4 then 
       SIGNAL SQLSTATE VALUE '45000' SET message_text='den ginetai na parei pano apo 4 aitimata' 
    end if;
end$
delimiter;
