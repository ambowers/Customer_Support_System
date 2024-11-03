// Task 2 fetch tickets using async/await and handle errors

//async function that retrievs data from unresolved tickets api
async function fetchTickets (){
    const ticketContainer = document.getElementById('ticketContainer');
    const errorMessage = document.getElementById('errorMessage');

    //try/catch to handle any errors that occur during fetch
    try{
        ticketContainer.innerHTML = '<p> Loading tickets...</p>';
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')

        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const tickets = await response.json();

        if (tickets.length === 0){
            throw new Error('No unresolved tickets found');
        }
        errorMessage.textContent='';
    }

// Task 3 display tickets dynamically on the page
    tickets.forEach(ticket => {
        const ticketDiv = document.createElement('div');
        ticketDiv.className = 'ticket';

        // display ticket id, customer name, issue description, and details
        const ticketId = document.createElement('h3');
        ticketId.textContent = `Ticket ID: ${ticket.id}`;
        ticketId.appendChild(ticketId);

        // use userId field as placeholder
        const customerName = document.createElement('p');
        customerName.textContent = `Customer Name: User ${ticket.userId}`;
        ticketDiv.appendChild(customerName);

        //use title field as placeholder
        const issueDescription = document.createElement('p');
        issueDescription.textContent = `Issue Description: ${ticket.title}`;

        //use body field as placeholder
        const details = document.createElement('p');
        details.textContent = `Details: ${ticket.body}`;
        ticketDiv.appendChild(details);

        ticketContainer.appendChild(ticketDiv);
    });
} 