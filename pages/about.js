import Header from '../app/_components/Header';
import './globals.css';

const AboutPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <div className="container mx-auto py-8">
                <div className="bg-gradient-to-r from-blue-200 to-blue-500 text-white px-8 py-12 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-6 text-center">About FileSharing</h1>
                    <p className="text-lg mb-4 text-white">
                        Welcome to FileSharing, your trusted platform for secure and efficient file sharing.
                    </p>
                    <p className="text-lg mb-4 text-white">
                        At FileSharing, we understand the importance of easily and securely sharing files with your team, clients, or friends. Whether you're sending important documents, sharing large media files, or collaborating on projects, we've got you covered.
                    </p>
                    <p className="text-lg mb-4 text-white">
                        Our platform is designed with simplicity and security in mind. With our user-friendly interface, you can quickly upload and share files with just a few clicks. We utilize state-of-the-art encryption and security protocols to ensure that your data remains private and protected during transit.
                    </p>
                    <p className="text-lg mb-4 text-white">
                        FileSharing is suitable for individuals, businesses, and organizations of all sizes. Whether you're a freelancer, a small startup, or a large enterprise, our platform offers the scalability and flexibility you need to meet your file sharing requirements.
                    </p>
                    <p className="text-lg text-white">
                        Get started today and experience the convenience and reliability of FileSharing for all your file sharing needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
