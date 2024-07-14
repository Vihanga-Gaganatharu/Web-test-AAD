document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('studentForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            // Gather form data
            const formData = new FormData(form);
            const studentData = {
                name: formData.get('name'),
                email: formData.get('email'),
                city: formData.get('city'),
                level: formData.get('level')
            };
            console.log('Student Saved Succesfully:', studentData);
            // Here you can add an AJAX request to submit the data to your server
            alert('Student Saved Succesfully!');
        }
    });

    form.addEventListener('reset', function (event) {
        if (!confirm('Do you really want to reset the Details?')) {
            event.preventDefault();
        }
    });

    function validateForm() {
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name) {
            alert('Name is required.');
            return false;
        }

        if (!email || !emailPattern.test(email)) {
            alert('A valid email is required.');
            return false;
        }

        return true;
    }
});