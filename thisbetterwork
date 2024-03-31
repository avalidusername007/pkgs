document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Fetch the content of test.txt and update the input field value
    fetch('https://cdn.jsdelivr.net/gh/avalidusername007/pkgs/test.txt')
        .then(response => response.text())
        .then(text => {
            document.getElementById('myInput').value = text;
        })
        .catch(error => {
            console.error('Error fetching text file:', error);
        });
});
