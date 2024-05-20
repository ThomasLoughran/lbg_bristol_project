import studentsList from '../mockData/mockStudents';

export default function StudentsList() {
    const students = studentsList;

    function displayStudents() {
        return (
            <ul>
                {students.map(student => 
                    <li>{student.firstName}</li>
                )}
            </ul>
        );
        
    }
    return (
        <>
            {displayStudents()}
        </>
    )
}