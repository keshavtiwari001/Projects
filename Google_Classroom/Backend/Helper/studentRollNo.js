async function generateRollNo() {
    const lastStudent = await Student.findOne().sort({ rollNo: -1 }).exec();
    const lastRollNo = lastStudent ? lastStudent.rollNo : 0;
    return lastRollNo + 1;
}