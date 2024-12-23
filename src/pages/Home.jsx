import bgImage from "../assets/bgImage.jpg"
import Card from '../components/Card'

const Home = () => {
  return (
    <div
    className="relative overflow-hidden bg-cover bg-center bg-no-repeat p-12 text-center"
    style={{
        backgroundImage: `url("${bgImage}")`,
        height: "100vh",
    }}
    >
     <div className='flex justify-center items-center min-h-screen'>
        <Card />
      </div>
    </div>
  )
}

export default Home
