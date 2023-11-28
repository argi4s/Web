drop database if exists base;
create database base;
use  base;

create table users(
	Name varchar(40) not null,
	Surname varchar(40) not null,
	Username varchar(40) unique not null,
	PhoneNumber varchar(20) not null, 
	Password varchar(40) not null,
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
    posotita float(7,2) not null,
    onoma varchar(40) unique,
    primary key(id)
)engine=InnoDB;

create table aitimata(
    diaswstis_username varchar(40) not null, 
    aitimata_id int(11) not null auto_increment,
    politis_username varchar(40) not null,
    date_kataxorisis datetime,
    date_analipsis datetime,
    eidos int(11) not null, 
    posotita float(7,2) not null,
    primary key (aitimata_id),
    constraint fk3 foreign key (diaswstis_username) references diaswstis(username)
    on delete cascade on update cascade,
    constraint fk4 foreign key (politis_username) references politis(username)
    on delete cascade on update cascade,
    constraint fk5 foreign key (eidos) references eidh(id)
    on delete cascade on update cascade
)engine=InnoDB;

create table prosfores(
	diaswstis_username varchar(40),
	prosfores_id int(11) not null auto_increment,
	politis_username varchar(40) not null, 
	date_kataxorisis datetime,
	date_analipsis datetime,
	eidos int(11) not null, 
	posotita float(7,2) not null,
	primary key (prosfores_id),
	constraint fk7 foreign key (diaswstis_username) references diaswstis(username)
    on delete cascade on update cascade,
	constraint fk8 foreign key (politis_username) references politis(username) 
    on delete cascade on update cascade,
	constraint fk9 foreign key (eidos) references eidh(id) 
    on delete cascade on update cascade
)engine=InnoDB;

--to trigger den epitrepei na boun pano apo 4 aitimata i prosfores ston diasosti
drop trigger if exists before_insert_aitimata;
DELIMITER $

CREATE TRIGGER before_insert_aitimata
BEFORE INSERT ON aitimata
FOR EACH ROW
BEGIN
    DECLARE total_count INT;

   
    SELECT COUNT(*) INTO total_count
    FROM (
        SELECT diaswstis_username FROM aitimata WHERE diaswstis_username = NEW.diaswstis_username
        UNION ALL
        SELECT diaswstis_username FROM prosfores WHERE diaswstis_username = NEW.diaswstis_username
    ) AS combined;

    
    IF total_count >= 4 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Cannot insert more than 4 entries for the same diaswstis_username in aitimata and prosfores combined.';
    END IF;
END $

DELIMITER ;



--to trigger den epitrepei na boun pano apo 4 aitimata i prosfores ston diasosti
drop trigger if exists before_insert_prosfores;
DELIMITER $

CREATE TRIGGER before_insert_prosfores
BEFORE INSERT ON prosfores
FOR EACH ROW
BEGIN
    DECLARE total_count INT;

    
    SELECT COUNT(*) INTO total_count
    FROM (
        SELECT diaswstis_username FROM aitimata WHERE diaswstis_username = NEW.diaswstis_username
        UNION ALL
        SELECT diaswstis_username FROM prosfores WHERE diaswstis_username = NEW.diaswstis_username
    ) AS combined;

    
    IF total_count >= 4 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Cannot insert more than 4 entries for the same diaswstis_username in aitimata and prosfores combined.';
    END IF;
END $

DELIMITER ;

--prosthiki sta aitimata kai stis prosfores text pou na leei se posa atoma anaferesai