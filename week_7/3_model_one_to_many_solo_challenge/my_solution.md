# U3.W7: Modeling a Real-World Database (SOLO CHALLENGE)

## Release 0: Users Fields
<!-- Identify the fields Twitter collects data for -->
name, username, about, location, profile picture, cover photo, website, date joined, tweets
## Release 1: Tweet Fields
<!-- Identify the fields Twitter uses to represent/display a tweet. What are you required or allowed to enter? -->

## Release 2: Explain the relationship
The relationship between `users` and `tweets` is: 
<!-- because... -->
one to many because there are many tweets but all belong to one user
## Release 3: Schema Design
<!-- Include your image (inline) of your schema -->

## Release 4: SQL Statements
<!-- Include your SQL Statements. How can you make markdown files show blocks of code? -->
All tweets for a certain user ID:

select * from tweets
where user_id = 1

All tweets for a user ID before wednesday:

select * from tweets
where user_id = 1 and created_at = '2014-04-23'

All tweets from a given username:

select *
from tweets join user on user_id = id
where username = '@JohnDoe'

Twitter username from a given tweet ID:

select username
from tweets join user on user_id = id
where user_id = 1

## Release 5: Reflection
<!-- Be sure to add your reflection here!!! -->
It was fun to dig into Twitter data base. It wasn't as complicated as I thought it would be. I'm still a little uncomfortable with SQL although I consider myself good at data and data analysis. I think it's an interesting subject. 