fetch('https://cdn.jsdelivr.net/gh/avalidusername007/pkgs/test.txt')
    .then(response => response.text())
    .then(text => {
        // Set the value of the input field to the fetched text
        document.getElementById('myInput').value = text;

        // Add an event listener to handle form submission
        document.getElementById('myForm').addEventListener('submit', function(event) {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Display the message in the div
            document.getElementById('messageDisplay').textContent = text;
        });
    })
    .catch(error => {
        console.error('Error fetching text file:', error);
    });
