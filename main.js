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
}