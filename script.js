function calculateResult() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    let marks = [
        Number(document.getElementById("sub1").value),
        Number(document.getElementById("sub2").value),
        Number(document.getElementById("sub3").value),
        Number(document.getElementById("sub4").value),
        Number(document.getElementById("sub5").value)
    ];

    if (name === "" || roll === "") {
        alert("Please enter student name and roll number.");
        return;
    }

    let total = marks.reduce((sum, mark) => sum + mark, 0);
    let percentage = total / 5;

    let status = percentage >= 40 ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML = `
        <h2>Student Result</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Roll Number:</strong> ${roll}</p>
        <p><strong>Total Marks:</strong> ${total}/500</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Result:</strong> ${status}</p>
    `;
}
