# Course Management Project

Your team have been tasked with building an application which will track internal training for a company. The administrator using the tool will need to be able to maintain learner records while also seeing summaries of their previous learning. They will also want to see summaries of each course including the number of people taking it and how well they did.

The tech stack you use is up to you, however you will need to include:

- A front-end for the administrator to interact with
- A server to handle requests from the front-end
- A database to store the records

An SQL file has been provided with some initial data.


## User Requirements

There are several tasks which the course administrator needs to be able to carry out while using this app. They must be able to:

- Add a new course to the catalog
- Update the details of a course
- See a summary of a course including a list of the students taking it
- Add a new student's details
- Update a student's record
- See a summary of a student's details including a list of the courses they have taken
- Record the year in which a student took a course and their mark
- Only record marks for active courses

Additionally, when viewing a course they want to be able to:

- See the total number of students who have taken the course
- See the average grade of all students who have taken the course
- See a histogram showing the number of students per year
- See a line graph showing the change in yearly average score
- Only display one summary at once

When viewing a student:

- See the student's average score across all courses
- See how the student's average score for a particular course compares to the course average for that year
- See how the student's average score for a particular course compares to the course average for all years
- See a histogram showing how many courses the student has taken each year

The administrator **should not** be able to delete courses or students - the company wants to retain all historical records.

## Seeding the Database

The `data.sql` file contains some mocked data which can be used to seed your database. If you wish to use Spring Boot to build you back end you will need to configure it to load the data from the file. 

- Place `data.sql` in the `resources` folder
- Annotate your models in such a way that Hibernate will build the correct database schema for you
- Add the following to your `application.properties` file:

```sh
# forces Hibernate to scan for SQL files when building the database
spring.sql.init.mode=always

# tells Hibernate where to load data from
spring.sql.init.data-locations=classpath:/data.sql

# defers the loading of the data until after the database has built
spring.jpa.defer-datasource-initialization=true
``` 
Editing to test pull request