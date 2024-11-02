// Function to download the PDF
const downloadResumeButton = document.getElementById('download-resume') as HTMLButtonElement;
downloadResumeButton?.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'static_resume.pdf'; // Path to your PDF file
    link.download = 'static_resume.pdf'; // The file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Function to toggle the Qualification section
const toggleEducationButton = document.getElementById('toggle-education') as HTMLButtonElement;
const qualificationSection = document.querySelector('.qualification-section') as HTMLElement;

toggleEducationButton?.addEventListener('click', () => {
    if (qualificationSection) {
        qualificationSection.classList.toggle('hidden');
    }
});