import coursesList from '../mockData/mockCourses'

export default function CoursesList() {
    const courses = coursesList;

    function displayCourses() {
        return (
            <ul>
                {courses.map(course => 
                    <li>{course.title}</li>
                )}
            </ul>
        );
        
    }
    return (
        <>
            {displayCourses()}
        </>
    )
}