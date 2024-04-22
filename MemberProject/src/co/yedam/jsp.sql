--사원 테이블 (사원번호, 사원명, 연락처, 이메일, 입사일자, 급여)
drop table emp purge;
create table emp(
    emp_no number primary key, --emp_seq,nextval
    emp_name varchar2(40) not null,
    emp_phone varchar2(13) not null,-- 02-1234-1234
    email varchar2(30) not null,
    hire_date date default sysdate,
    salary number
);
create sequence emp_seq;
insert into emp(emp_no, emp_name, emp_phone, email, salary)
values(emp_seq.NEXTVAL, 'kildongHong','01-1234-5678','kildong@eamil',2000);
insert into emp(emp_no, emp_name, emp_phone, email, salary)
values(emp_seq.NEXTVAL, 'kildongPark','01-1234-1234','pkildong@eamil',2300);
insert into emp(emp_no, emp_name, emp_phone, email, salary)
values(emp_seq.NEXTVAL, 'Park','01-4321-1234','Park@eamil',5300);
insert into emp(emp_no, emp_name, emp_phone, email, salary)
values(emp_seq.NEXTVAL, 'Kim','01-1234-4321','Kim@eamil',4300);

update emp set salary = 1000, email = 'adfadsfa' where emp_no = 25;


select*
from emp
order by emp_no;

commit;

update emp
set salary = salary +500,
emp_phone = '01-1111-1111'
where emp_name = 'kildongPark';

delete from emp
where emp_no = 2;

create table member(
    mem_no number primary key, --emp_seq,nextval
    mem_name varchar2(40) not null,
    mem_phone varchar2(13) not null,-- 02-1234-1234
    birdate date default sysdate,
    gender varchar2(5)
);
create sequence member_seq;

ALTER TABLE member
modify (gender varchar2(5));

ALTER TABLE member
modify (birdate varchar2(15));


insert into member(mem_no, mem_name, mem_phone, birdate, gender)
values(emp_seq.NEXTVAL, '홍길동','010-1234-5678','94-09-12','남') ;

alter table member
add (dept varchar2(10));

select *
from member;

delete member
where mem_no = 33;
commit;