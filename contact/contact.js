document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('uniqueCloseButton').addEventListener('click', function() {
        closeContactPage();
    });

    function closeContactPage() {
        document.getElementById('uniqueContactPage').style.right = '-30%';
        document.removeEventListener('click', outsideClickListener);
    }

    function outsideClickListener(event) {
        var contactPage = document.getElementById('uniqueContactPage');
        var button = document.getElementById('uniqueContactButton');
        if (!contactPage.contains(event.target) && !button.contains(event.target)) {
            closeContactPage();
        }
    }
});
