// Sample student data (you can replace this with your own data)
const students = [
    { name: "Student 1", id: 1, attendance: { "2023-09-25": "present", "2023-09-26": "absent" } },
    { name: "Student 2", id: 2, attendance: { "2023-09-25": "absent", "2023-09-26": "present" } },
];

function searchAttendance() {
    const studentName = document.getElementById("student-name").value;
    const searchDate = document.getElementById("search-date").value;

    const attendanceList = document.getElementById("attendance-list");
    attendanceList.innerHTML = "";

    const student = students.find(s => s.name === studentName);

    if (student) {
        const attendanceStatus = student.attendance[searchDate];
        if (attendanceStatus) {
            const circleTick = document.createElement("div");
            circleTick.className = `circle-tick ${attendanceStatus}`;
            circleTick.onclick = () => toggleAttendance(student, searchDate);
            attendanceList.appendChild(circleTick);
        } else {
            attendanceList.textContent = "Attendance data not found for this date.";
        }
    } else {
        attendanceList.textContent = "Student not found.";
    }
}

function toggleAttendance(student, date) {
    if (student.attendance[date] === "present") {
        student.attendance[date] = "absent";
    } else {
        student.attendance[date] = "present";
    }
    searchAttendance();
}
