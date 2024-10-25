import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function Formm() {
    const [data, setData] = useState([]);  
    const cart =useSelector(state => state.cart.cart)
    const dispatch = useDispatch();


    const fileRef = useRef();
    const typeRef = useRef();
    const dateRef = useRef();
    const colorRef = useRef();
    const speedRef = useRef();
    const accelerationRef = useRef();
    const informationRef = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        const formData = {
            id: Date.now(),
            img: fileRef.current.files[0],
            name: typeRef.current.value,
            date: dateRef.current.value,
            color: colorRef.current.value,
            speed: speedRef.current.value,
            tezlanish: accelerationRef.current.value,
            description: informationRef.current.value
        };
        setData(formData);
        dispatch({type: 'ADD', payload: formData})
          
        typeRef.current.value = "",
        dateRef.current.value="",
        colorRef.current.value="",
        speedRef.current.value=="",
        accelerationRef.current.value="",
        informationRef.current.value=""
      
    };
    return (
        <div className="w-400px flex border px-5 py-2 bg-slate-500 rounded-xl shadow-slate-500 shadow flex-col gap-2 items-center">
            <p className="text-white my-6 font-bold text-3xl">Your favorite car</p>
            <input 
                className="file-input file-input-bordered w-full max-w-xs"  
                type="file" 
                name="file" 
                id="file" 
                ref={fileRef}
                accept="image/*" 
            />
            <input 
                className="px-4 py-2 outline-neutral-500 rounded border w-full" 
                type="text" 
                placeholder=" Enter Vehicle Type ..." 
                ref={typeRef}
            />
            <input 
                className="px-4 py-2 outline-neutral-500 rounded border w-full" 
                type="text" 
                placeholder=" Enter Release Date ..." 
                ref={dateRef}
            />
            <input 
                className="px-4 py-2 outline-neutral-500 rounded border w-full" 
                type="text" 
                placeholder=" Enter Color ..." 
                ref={colorRef}
            />
            <input 
                className="px-4 py-2 outline-neutral-500 rounded border w-full" 
                type="text" 
                placeholder="Enter Top Speed..." 
                ref={speedRef}            />
            <input 
                className="px-4 py-2 outline-neutral-500 rounded border w-full" 
                type="text" 
                placeholder="Enter Acceleration..." 
                ref={accelerationRef} 
            />
            <input 
                className="px-4 py-2 outline-neutral-500 rounded border w-full" 
                type="text" 
                placeholder=" Further information ..." 
                ref={informationRef} 
            />
            <button 
                className="py-2 px-4 rounded-lg bg-green-700 hover:bg-green-800 text-xl font-bold w-full text-white"
                onClick={handleClick}
            >
                Add Task
            </button>
        </div>
    );
}

export default Formm;
