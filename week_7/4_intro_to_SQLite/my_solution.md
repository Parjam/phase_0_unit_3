# U3.W7: Intro to SQLite

## Release 0: Create a dummy database

<!-- paste your terminal output here -->
sqlite3 dummy.db
CREATE TABLE users (
   ...>   id INTEGER PRIMARY KEY AUTOINCREMENT,
   ...>   first_name VARCHAR(64) NOT NULL,
   ...>   last_name  VARCHAR(64) NOT NULL,
   ...>   email VARCHAR(128) UNIQUE NOT NULL,
   ...>   created_at DATETIME NOT NULL,
   ...>   updated_at DATETIME NOT NULL
   ...> );

## Release 1: Insert Data 
<!-- paste your terminal output here -->
id          first_name  last_name   email                  created_at           updated_at         
----------  ----------  ----------  ---------------------  -------------------  -------------------
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-04-29 06:30:56  2014-04-29 06:30:56
2           Parjam      Davoody     parjam@devbootcamp     2014-04-29 06:35:49  2014-04-29 06:35:49

## Release 2: Multi-line commands
<!-- paste your terminal output here -->

Error: column email is not unique

## Release 3: Add a column
<!-- paste your terminal output here -->

id          first_name  last_name   email                  created_at           updated_at           nickname  
----------  ----------  ----------  ---------------------  -------------------  -------------------  ----------
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-04-29 06:30:56  2014-04-29 06:30:56  Kimchee   
2           Parjam      Davoody     parjam@devbootcamp     2014-04-29 06:35:49  2014-04-29 06:35:49  Perry   

## Release 4: Change a value
<!-- paste your terminal output here -->

id          first_name  last_name   email                  created_at           updated_at           nickname   
----------  ----------  ----------  ---------------------  -------------------  -------------------  -----------
1           Kimmy       Lin         kimmy@devbootcamp.com  2014-04-29 06:30:56  2014-04-29 06:30:56  Ninja Coder
2           Parjam      Davoody     parjam@devbootcamp     2014-04-29 06:35:49  2014-04-29 06:35:49  Perry 

## Release 5: Reflect
<!-- Add your reflection here -->

It was really fun. Loved it