document.getElementById("lawyerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("LawyerEmail").value.trim();

    if (firstName === "" || lastName === "" || email === "") {
        alert("Please fill in all required fields.");
        return;
    }

    const lawyer = {
        name: firstName + " " + lastName,
        email: email
    };

    localStorage.setItem("lawyer", JSON.stringify(lawyer));

    window.location.href = "./dashboard.html";
});