const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".desktop-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("mobile-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("mobile-open"));
});

const enquiryForm = document.querySelector("#enquiry-form");

enquiryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(enquiryForm);
  const subject = `Aarvix enquiry from ${formData.get("name")}`;
  const body = [
    `Name: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    `Phone: ${formData.get("phone") || "Not provided"}`,
    "",
    `Enquiry: ${formData.get("message")}`,
  ].join("\n");
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=aarvixglobalsolutions@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(gmailUrl, "_blank", "noopener,noreferrer");
});
