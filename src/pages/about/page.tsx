import { Grid } from "@mui/material";

export function About() {
    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to our about page! Here you can learn more about our mission and values.</p>
            <p>We are dedicated to providing the best service possible.</p>
            <p>Feel free to reach out if you have any questions or feedback.</p>


            <p>Thank you for visiting our about page!</p>
            <button onClick={() => window.location.href = '/'}>
                Go to Home Page
            </button>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <h2>Our Mission</h2>
                    <p>To deliver high-quality products and services that exceed customer expectations.</p>
                </Grid>
            </Grid>
        </div>
    );
}