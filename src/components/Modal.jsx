import {} from 'react';

const Modal = (data) => {
    console.log(data, "data at modal")
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0  z-50 bg-black/80 w-full h-full '>
        <div className="flex w-full min-w-lg mx-auto bg-white rounded p-10 shadow ">
            <div className="flex flex-col items-center justify-center w-full h-full mx-auto">
                <img src={data.image} alt="" className="" />
            </div>
        </div>
    </div>
  )
};

export default Modal