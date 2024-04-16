// Exercise III
// "I don't understand this task, that's why there are 2 decisions, the better i understand, the first one (Solution I) is correct."
// Solution I
class EmailMessage {
    constructor(from, to, subject, message) {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.message = message;
    }
    display() {
        const fullMessage = `From: ${this.from}\nTo: ${this.to}\nSubject: ${this.subject}\nMessage: ${this.message}`;
        alert(fullMessage);
    }
}

const email = new EmailMessage(
    prompt("Enter your email address:"),
    prompt("Enter the recipient's email address:"),
    prompt("Enter the email subject:"),
    prompt("Enter the email message:")
);

email.display();

document.getElementById("from").value = email.from;
document.getElementById("to").value = email.to;
document.getElementById("subject").value = email.subject;
document.getElementById("message").value = email.message;

//  Solution II
// class EmailMessage {
//   constructor(from, to, subject, message) {
//     this.from = from;
//     this.to = to;
//     this.subject = subject;
//     this.message = message;
//   }
//   displayMessage() {
//     alert(
//       `From: ${this.from}\nTo: ${this.to}\nSubject: ${this.subject}\nMessage: ${this.message}`
//     );
//   }
// }

// const emailForm = document.getElementById("email-form");

// emailForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const from = document.getElementById("from").value;
//   const to = document.getElementById("to").value;
//   const subject = document.getElementById("subject").value;
//   const message = document.getElementById("message").value;

//   const email = new EmailMessage(from, to, subject, message);
//   email.displayMessage();

//   document.getElementById("from").value = email.from;
//   document.getElementById("to").value = email.to;
//   document.getElementById("subject").value = email.subject;
//   document.getElementById("message").value = email.message;
// });
