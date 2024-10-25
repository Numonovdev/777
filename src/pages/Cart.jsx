import { useDispatch, useSelector } from "react-redux";

function Cart() {
    const cart = useSelector(state => state.cart.cart)
const dispatch = useDispatch()

   const handleDelet = (id)=>{
    dispatch({type: 'REMOVE', payload: id})
   }


    return (
        <div className="w-full flex flex-wrap justify-evenly   ">
                    {
                        cart.length > 0 && cart.map((value, index)=>{
                            return (
                       
        <div className="w-[30%] flex-col border pb-2 flex gap-3">
            <img src={value.img ? URL.createObjectURL(img) : ''} className="w-full" alt={name} /> 
            <div className="w-full px-4 flex flex-col">
                <p className="font-mono text-sm">id: {value.id}</p>
                <p className="font-extrabold text-2xl">Vehicle Type: {value.name}</p>
                <p className="font-bold text-xl">Release Date: {value.date}</p>
                <div className="flex items-center gap-2">
                    <p className="font-bold text-xl">Color: {value.color}</p>
                    <span className="w-5 h-5 rounded-full" style={{ backgroundColor: value.color }}></span> 
                </div>
                <p className="font-bold text-xl">Top Speed: {value.speed}</p>
                <p className="font-bold text-xl">Acceleration: {value.tezlanish}</p>
                <div className="flex w-full max-h-9 h-full">
                    <p className="text-sm font-medium">Further information: {value.description}</p>
                </div>
                <div className="flex w-full justify-between gap-2">
                    <button className="w-1/3 rounded-md px-2 py-1 bg-blue-600 text-white font-bold text-lg hover:bg-blue-700">Edit</button>
                    <button onClick={()=>{handleDelet(value.id)}} className="w-2/3 rounded-md py-1 px-2 bg-red-700 text-lg font-bold text-white hover:bg-red-800">Delete</button>
                </div> 
            </div>
        </div>)
 })
}


</div> 
);
}

export default Cart;
