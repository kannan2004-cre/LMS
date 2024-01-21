document.addEventListener('DOMContentLoaded', function () {
    const editProfileButton = document.getElementById('edit-profile');
    const editForm = document.getElementById('edit-form');
    const cancelEditButton = document.getElementById('cancel-edit');

    editProfileButton.addEventListener('click', function () {
        document.getElementById('user-info').style.display = 'none';
        editForm.style.display = 'block';
    });

    cancelEditButton.addEventListener('click', function () {
        document.getElementById('user-info').style.display = 'block';
        editForm.style.display = 'none';
    });

    const profileForm = document.getElementById('profile-form');

    profileForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Perform any desired actions when the form is submitted
        alert('Profile updated successfully!');
    });
});
