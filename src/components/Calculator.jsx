import { useState } from "react";

export default function Calculator() {
   const ope=['1','2','3','4','5','6','7','8','9','0','00','.','+','-','*','/','Calc','Clear','X'];
   const [value,setValue]=useState('')
     function handleClick(input){
      if(input==='Calc'){
        //  setValue(eval(Number(value)))
        // console.log(typeof(value));
        setValue(eval(value))
        
      }else if(input==='Clear'){
         setValue('')
      }else if(input ==='X'){
        setValue(value.slice(0,-1))
      }
      else{
      // console.log(input);
      setValue(value+input)
      }
      
     }
  return (
    <div className='h-[500px] w-3/12 bg-gray-200 text-black  rounded-xl ' >
       <input type="text"  className='border w-full overflow-hidden  h-16 text-4xl' readOnly value={value} />

      <div className='flex gap-4 flex-wrap mt-2 px-3'>
         {ope.map(bt=><button className="py-4 px-6 bg-gray-800 text-white text-2xl font-semibold cursor-pointer rounded-full hover:bg-gray-700 " onClick={()=>handleClick(bt)} >{bt}</button>)}
      </div>
      
    </div>
  )
}
