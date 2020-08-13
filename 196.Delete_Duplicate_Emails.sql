# Write your MySQL query statement below
-- https://www.mysqltutorial.org/mysql-delete-duplicate-rows/
delete t1 from Person t1
inner join Person t2
where 
    t1.id>t2.id and 
    t1.email = t2.email