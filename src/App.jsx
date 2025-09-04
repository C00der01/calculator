import Calculator from './components/Calculator';
export default function App() {
  return (
    <div className='h-screen w-screen bg-black text-white'>
    
       <div className='w-full h-full flex flex-col justify-center items-center'>
          <div><h1 className='text-5xl text-center mb-2'>Calculator</h1></div>
          <Calculator/>
       </div>
    </div>
  )
}
