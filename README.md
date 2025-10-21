Profile Card — Multi-page Frontend (Stage 1)

A small, accessible, responsive multi-page frontend built from a single profile card. This project demonstrates semantic HTML, accessible forms with client-side validation, and responsive styling across devices.

---

## 🚀 Live Demo

🔗 **GitHub Pages:** [https://github.com/Hasel7/Profile-card](https://hasel7.github.io/Profile-card/)

---

What’s included
A responsive profile card (index.html) with accessible markup and fluid CSS.
About page (about.html) with semantic sections and required test IDs.
Contact page (contact.html) with an accessible form, client-side validation, and success / error messaging.
Client-side validation script: contact.js
Central stylesheet: style.css
Live pages
Home: index.html — profile card (responsive)
About: about.html — reflective content (semantic)
Contact: contact.html — accessible contact form with validation
Key features
Semantic HTML: headings, main, sections, lists where appropriate.
Accessibility:
Form labels are linked with for.
Error messages are connected to inputs via aria-describedby.
Proper focus outlines and keyboard navigable controls.
ARIA live regions for success/error feedback.
Responsiveness: CSS uses fluid sizing and breakpoints to work on mobile, tablet, and desktop.
Client-side validation: prevents invalid form submit and shows friendly messages.
Test IDs (data-testid)
These are placed for automated tests and easier verification:

Profile card
test-profile-card
test-user-avatar
test-user-name
test-user-bio
test-user-time
test-user-social-links
test-user-hobbies
test-user-dislikes
Contact page
test-contact-name
test-contact-email
test-contact-subject
test-contact-message
test-contact-submit
test-contact-error-name
`test

## 💻 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hasel7/Profile-card
