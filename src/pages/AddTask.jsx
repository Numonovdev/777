import Cart from "./Cart"
import Formm from "./Formm"

function AddTask(){



    return(
        <div className="w-full py-10">
            <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-7 items-center">
                    <Formm/>
                    <Cart></Cart>
            </div>
        </div>
    )
}

export default AddTask