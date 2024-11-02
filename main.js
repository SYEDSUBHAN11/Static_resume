"use strict";
// Function to download the PDF
const downloadResumeButton = document.getElementById('download-resume');
downloadResumeButton === null || downloadResumeButton === void 0 ? void 0 : downloadResumeButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'static_resume.pdf'; // Path to your PDF file
    link.download = 'static_resume.pdf'; // The file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
// Function to toggle the Qualification section
const toggleEducationButton = document.getElementById('toggle-education');
const qualificationSection = document.querySelector('.qualification-section');
toggleEducationButton === null || toggleEducationButton === void 0 ? void 0 : toggleEducationButton.addEventListener('click', () => {
    if (qualificationSection) {
        qualificationSection.classList.toggle('hidden');
    }
});
