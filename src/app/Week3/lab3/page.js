import { Counter }from "@/app/Week3/lab3/counter"

const Home = () =>{
  return(
    <div className="bg-red-50 h-screen p-10">
      <h1 className="font-bold text-3xl mx-auto">Lab 3</h1>
      <div className="flex justify-center">
        <Counter/>
      </div>
    </div>
    
  )
}
export default Home;