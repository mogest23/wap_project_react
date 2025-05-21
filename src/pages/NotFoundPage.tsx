import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import Layout from '../components/layout/Layout';

const NotFoundPage = () => {
    return (
        <Layout>
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
                <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                    <FaHome className="mr-2" />
                    Go back to Home
                </Link>
            </div>
        </Layout>
    );
};

export default NotFoundPage; 