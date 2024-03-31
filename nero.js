alert("deadweight");
fetch('https://cdn.jsdelivr.net/gh/avalidusername007/pkgs/test.txt')
    .then(response => response.text())
    .then(text => {
        // Find the form field by its ID
        const formField = document.getElementById('myFormField');
        
        // Set the value of the form field to the fetched text
        formField.value = text;
    })
    .catch(error => {
        console.error('Error fetching text file:', error);
    });
