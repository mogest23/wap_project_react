import { Link } from 'react-router-dom';
import { FaShoppingBag, FaCog } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-green-800 text-white">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <FaShoppingBag className="text-2xl text-white/90" />
                        <span className="text-2xl font-light tracking-wide">ReviewMe</span>
                    </Link>
                    <Link to="/settings" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <FaCog className="text-xl text-white/90" />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header; 