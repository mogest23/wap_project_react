import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Layout from '../components/layout/Layout';

const SettingsPage = () => {
    return (
        <Layout>
            <div className="mb-6">
                <Link to="/" className="text-green-600 hover:underline flex items-center">
                    <FaArrowLeft className="mr-1" /> Back to Home
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Settings</h1>
                <p className="text-gray-600">Settings page content will go here.</p>
            </div>
        </Layout>
    );
};

export default SettingsPage; 