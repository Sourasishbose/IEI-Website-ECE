// Fake backend database: Members and Notices
const members = [
  "Sourasish Bose (Chairperson)",
  "Ritika Sen (Vice Chairperson)",
  "Rahul Mondal (Secretary)",
  "Priya Agarwal (Treasurer)"
];

const notices = [
  { date: "📢 June 30", text: "Technical Webinar on IoT and VLSI – Register Now!" },
  { date: "📢 July 5", text: "Poster Presentation Contest – Theme: Future of ECE" }
];

function toggleDetails(button) {
  const details = button.parentElement.nextElementSibling;
  details.style.display = details.style.display === 'block' ? 'none' : 'block';
  button.textContent = details.style.display === 'block' ? 'Hide Details' : 'View Details';
}


// Render Notices to the DOM
function renderNotices() {
  const noticeBoard = document.getElementById("notice-board");
  noticeBoard.innerHTML = ""; // Clear existing content
  notices.forEach(notice => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${notice.date}:</strong> ${notice.text}`;
    noticeBoard.appendChild(p);
  });
}

// Initialize dynamic content after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  renderMembers();
  renderNotices();
});
