import dayjs from "dayjs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TodoDetail = () => {
    const {isLogged} = useSelector((state) => state.isLogged); 
    const detail = useSelector((state) => state.user.taskDetail);
    const dispatch = useDispatch();


    useEffect(() =>{
        if(isLogged){
            
            console.log(detail)
        }
    }, [isLogged, dispatch, detail]);

    return (
        <section className="flex flex-col items-center p-4 my-6 mx-3 gap-4 bg-[#dfdada]">
            <h1 className="font-bold text-3xl text-center uppercase">{detail.taskTitle}</h1>
            {/* <h5 className="font-semibold text-lg"></h5> */}
            <div className="flex flex-col items-center">
                <h6 className="font-bold text-lg">Description: </h6>
                <p className="text- capitalize">{detail.taskDescription}</p>
            </div>
            <div className="flex flex-col gap-2 text-center">
                <span className="font-bold">Priority: 
                    <span className="font-normal"> {detail.isPriority ? 'Yes!' : 'No'}</span>
                </span>
                <p className="font-bold">Task's deadline: 
                    <span className="font-light"> {dayjs(detail.taskDeadline).format('DD/MM/YYYY')}</span>
                </p>
            </div>
            <div className="flex gap-2 mt-4">
                <button className="h-14 w-20 rounded-md bg-[#686060] text-white">
                    <Link to={'/user/todoEdit'}>Edit Task</Link>
                </button>
                <button className="h-14 w-20 rounded-md bg-[#686060] text-white">
                    <Link to={'/user'}>Back</Link>
                </button>
            </div>
        </section>
    )
};

export default TodoDetail;