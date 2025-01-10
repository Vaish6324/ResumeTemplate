window.onload = function() {
    const resumeData = JSON.parse(localStorage.getItem("resumeData"));

    if (resumeData) {
        document.getElementById("resumeName").innerText = resumeData.name || "Your Name";
        document.getElementById("resumeRole").innerText = resumeData.role || "Your Role";
        document.getElementById("resumeEmail").innerText = resumeData.email || "Your Email";
        document.getElementById("resumePhone").innerText = resumeData.phone || "Your Phone";

        document.getElementById("resumeSkills").innerHTML = resumeData.skills.map(skill => `<li>${skill}</li>`).join('');
        document.getElementById("resumeEducation").innerHTML = resumeData.education.map(edu => `<li>${edu}</li>`).join('');
        document.getElementById("resumeExperience").innerHTML = resumeData.experience.map(exp => `<li>${exp}</li>`).join('');
        document.getElementById("resumeCertificates").innerHTML = resumeData.certificates.map(cert => `<li>${cert}</li>`).join('');

        document.getElementById("resumeCareerObjective").innerText = resumeData.careerObjective || "Your Career Objective";

        const profilePicElement = document.getElementById("resumeProfilePicture");
        profilePicElement.src = resumeData.profilePicture || "default-profile.png";

        if (resumeData.github) {
            document.getElementById("resumeGithub").innerText = resumeData.github;
        } else {
            document.getElementById("resumeGithub").innerText = "Not provided";
        }

        if (resumeData.linkedin) {
            document.getElementById("resumeLinkedin").innerText = resumeData.linkedin;
        } else {
            document.getElementById("resumeLinkedin").innerText = "Not provided";
        }
    }
};

// Function to print the resume
function printResume() {
    window.print();
}
