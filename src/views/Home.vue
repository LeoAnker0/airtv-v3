<template>
    <div class="home">
        <!-- Hero Section -->
        <section class="hero">
            <img class="hero-image" src="../assets/hero-image.jpeg" alt="Hero Image" />
            <div class="hero-text">
                <h1>Welcome to Our Website</h1>
                <p>Your journey starts here. Explore, learn, and grow with us.</p>
                <button @click="learnMore">Learn More</button>
            </div>
        </section>
        <!-- Content Section -->
        <section class="content">
            <h2>About Us</h2>
            <p>
                We are dedicated to providing the best content and resources for our users.
                Whether you're here to learn, explore, or connect, we've got you covered.
            </p>
            <p>
                Our mission is to empower individuals and communities through accessible
                information and engaging experiences.
            </p>
            <h2>Our Services</h2>
            <p>
                From tutorials and guides to interactive tools, we offer a range of services
                designed to meet your needs. Explore our offerings to discover how we can help
                you achieve your goals.
            </p>
        </section>
    </div>
</template>
<script>
export default {
    name: "Home",
    methods: {
        learnMore() {
            // Example action for the button
            alert("Learn more about our services!");
        },
    },
};
</script>
<style scoped>
/* Hero Section */
.hero {
    position: relative;
    text-align: center;
    color: white;
}

.hero-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    filter: brightness(70%);
}

.hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.hero-text h1 {
    font-size: 3rem;
    margin: 0;
}

.hero-text p {
    font-size: 1.25rem;
    margin: 1rem 0;
}

.hero-text button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.hero-text button:hover {
    background-color: #0056b3;
}

/* Content Section */
.content {
    padding: 2rem;
    line-height: 1.6;
}

.content h2 {
    margin-top: 2rem;
    color: #333;
}

.content p {
    margin: 1rem 0;
    color: #555;
}
</style>