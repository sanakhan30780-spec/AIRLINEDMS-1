document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;
  const passengers = parseInt(document.getElementById("passengers").value);

  const prices = {
    "Paris": 500,
    "New York": 700,
    "Tokyo": 650
  };

  const total = prices[destination] * passengers;

  const ticketHTML = `
    <h3>🎫 Your Ticket</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Destination:</strong> ${destination}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Passengers:</strong> ${passengers}</p>
    <p><strong>Total Bill:</strong> $${total}</p>
    <p>Thank you for flying with FlyAway Airlines!</p>
  `;

  const ticketDiv = document.getElementById("ticket");
  ticketDiv.innerHTML = ticketHTML;
  ticketDiv.classList.remove("hidden");
});
