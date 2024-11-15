/* eslint-disable react/prop-types */
// Icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Pagination = ({ currentPage, setCurrentPage, hasLastPage, hasNextPage }) => {
    return (
        <section className="container flex mx-auto py-4 px-4 justify-between border-b border-b-gray-400">
            <button                
                className={`${hasLastPage ? "text-[#686060] font-bold cursor-pointer underline" : "text-[#686060]  cursor-pointer underline" }`}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={!hasLastPage} 
            >
                <ArrowBackIosIcon />Previous Page
            </button>
            <div className='flex gap-4'>
                <span className={`${!hasLastPage ? "hidden" :"text-[#686060]"}`}>...</span> {/* falta agregar renderizado condicional */}
                <span className={`${!hasLastPage ? "hidden" :"text-[#686060]"}`}>{currentPage - 1}</span>
                <span className='text-[#686060] font-bold'>{currentPage}</span>
                <span className={`${!hasNextPage ? "hidden" :"text-[#686060]"}`}>{currentPage + 1} </span>
                <span className={`${!hasNextPage ? "hidden" :"text-[#686060]"}`}>...</span> {/* falta agregar renderizado condicional */}
            </div>
            <button 
                className={`${!hasNextPage ? "text-[#686060] cursor-pointer underline" : "text-[#686060] font-bold cursor-pointer underline" }`}
                onClick={() => setCurrentPage(prev => prev + 1)}
                disabled={!hasNextPage} 
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