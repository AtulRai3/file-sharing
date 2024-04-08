import Header from '../app/_components/Header'; // Correct path to the Header component
import './globals.css';

const AboutPage = () => {
    return (
        <div>
            <Header /> {/* Include the Header component */}
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p className="text-lg">
                    Welcome to our Next.js project! We are passionate about creating awesome web applications.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
