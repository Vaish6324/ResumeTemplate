function addSkill() {
    const container = document.getElementById("skillsContainer");
    const input = document.createElement("input");
    input.type = "text";
    input.className = "skill-input";
    input.placeholder = "Enter a skill";
    container.appendChild(input);
}

function addEducation() {
    const container = document.getElementById("educationContainer");
    const input = document.createElement("input");
    input.type = "text";
    input.className = "education-input";
    input.placeholder = "Enter an education detail";
    container.appendChild(input);
}

function addExperience() {
    const container = document.getElementById("experienceContainer");
    const input = document.createElement("input");
    input.type = "text";
    input.className = "experience-input";
    input.placeholder = "Enter an experience detail";
    container.appendChild(input);
}

function addCertificate() {
    const container = document.getElementById("certificatesContainer");
    const input = document.createElement("input");
    input.type = "text";
    input.className = "certificate-input";
    input.placeholder = "Enter a certificate detail";
    container.appendChild(input);
}

document.getElementById("resumeForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const github = document.getElementById("github").value;
    const linkedin = document.getElementById("linkedin").value;
    const careerObjective = document.getElementById("careerObjective").value;

    const skills = Array.from(document.querySelectorAll(".skill-input")).map(input => input.value);
    const education = Array.from(document.querySelectorAll(".education-input")).map(input => input.value);
    const experience = Array.from(document.querySelectorAll(".experience-input")).map(input => input.value);
    const certificates = Array.from(document.querySelectorAll(".certificate-input")).map(input => input.value);

    const profilePictureFile = document.getElementById("profilePicture").files[0];
    let profilePicture = "";
    if (profilePictureFile) {
        const reader = new FileReader();
        reader.onload = function () {
            profilePicture = reader.result;
            saveData();
        };
        reader.readAsDataURL(profilePictureFile);
    } else {
        saveData();
    }

    function saveData() {
        const resumeData = { name, role, email, phone, github, linkedin, careerObjective, skills, education, experience, certificates, profilePicture };
        localStorage.setItem("resumeData", JSON.stringify(resumeData));
        window.location.href = "resume.html";
    }
});
