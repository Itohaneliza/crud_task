Level 2: CRUD with Advanced Filtering and Relationships

Use Case: Student and Course Management

● Description: Extend your API to manage students and their enrolled courses.

1. Each student should have:

■ name (string)
■ email (string, unique)
■ age (number)
■ enrolledCourses (array of course IDs)

2. Each course should have:

■ courseName (string)
■ courseCode (string, unique)
■ instructor (string)
■ creditHours (number)

● Tasks:

1. Create endpoints for managing students (CRUD)
2. Create endpoints for managing courses (CRUD).
3. Add an endpoint to enroll a student in a course by adding the course's ID to the
student's enrolledCourses array.
4. Add filtering capabilities:
■ List all students enrolled in a specific course.
■ List courses with credit hours greater than a given number.