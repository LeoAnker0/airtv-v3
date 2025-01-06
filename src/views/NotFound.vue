<template>
    <div>
        <h1>Not found</h1>
        <p>Page couldn't be found, returning you to where you came from.</p>
    </div>
</template>
<script>
export default {
    name: "NotFound",
    mounted() {
        // Function to handle redirection
        const redirectToLastPage = () => {
            //const lastPage = document.referrer; // Get the referrer (last visited page)
            const currentDomain = window.location.origin; // Get the current domain

            window.location.href = "/"; // Redirect to the root
        };

        // Delay for 3 seconds before redirecting
        setTimeout(redirectToLastPage, 3000);
    },
};
</script>