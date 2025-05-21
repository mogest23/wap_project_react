import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useProductsStore } from '../../store/productsStore';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
    const { fetchProducts, category } = useProductsStore();

    const handlePageChange = (page: number) => {
        fetchProducts(page, category || undefined);
        window.scrollTo(0, 0);
    };

    // Create array of page numbers to display
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex justify-center mt-8">
            <nav className="flex items-center gap-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-md text-gray-600 disabled:text-gray-300"
                    aria-label="Previous page"
                >
                    <FaAngleLeft />
                </button>

                {pageNumbers.map((pageNum) => (
                    <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        disabled={pageNum === currentPage}
                        className={`px-3 py-1 rounded-md ${pageNum === currentPage
                            ? 'bg-green-600 text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        {pageNum}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-md text-gray-600 disabled:text-gray-300"
                    aria-label="Next page"
                >
                    <FaAngleRight />
                </button>
            </nav>
        </div>
    );
};

export default Pagination; 