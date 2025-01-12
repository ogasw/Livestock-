document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const orderDetails = document.getElementById('orderDetails').value;

    fetch('/place-order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            orderDetails: orderDetails
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(`Thank you, ${data.name}! Your order has been placed.`);
        document.getElementById('orderForm').reset();
    })
    .catch(error => console.error('Error:', error));
});
          
