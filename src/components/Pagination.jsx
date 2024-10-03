// Icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Pagination = ({ currentPage, setCurrentPage, hasMorePages }) => {
    return (
        <section className="container flex mx-auto py-4 px-4 justify-between border-b border-b-gray-400">
            <button                
                className={`${hasMorePages ? "text-[#686060] cursor-pointer underline" : "text-[#686060] font-bold cursor-pointer underline" }`}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1} 
            >
                <ArrowBackIosIcon />Last Page
            </button>
            <button 
                className={`${!hasMorePages ? "text-[#686060] cursor-pointer underline" : "text-[#686060] font-bold cursor-pointer underline" }`}
                onClick={() => setCurrentPage(prev => prev + 1)}
                disabled={!hasMorePages} 
            >
                Next Page<ArrowForwardIosIcon />
            </button>
        </section>
    );
};

export default Pagination;


{/* <div className="flex justify-between mt-4">
<Button
    variant="contained" 
    style={{ border: '1px solid #afa5a5', boxShadow: 'none', cursor: 'pointer', backgroundColor: '#686060' }}
    disabled={currentPage === 1} 
    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
>
    Last Page
</Button>
<Button 
    variant="contained" 
    style={{ border: '1px solid #afa5a5', boxShadow: 'none', cursor: 'pointer', backgroundColor: '#686060' }}
    disabled={!hasMorePages} 
    onClick={() => setCurrentPage(prev => prev + 1)}
>
    Next Page
</Button>
</div> */}