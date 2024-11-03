import { Routes, Route } from 'react-router-dom';
import { Camera, Car, Palette } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarCard from './components/CarCard';
import DemoSection from './components/DemoSection';
import { cars } from './data/cars';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <section id="home">
              <Hero />
            </section>
            
            <section id="models" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Explore Our Collection</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Discover our range of interactive 3D car models featuring real-time color adaptation technology
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cars.map((car) => (
                  <CarCard key={car.id} {...car} />
                ))}
              </div>
            </section>

            <section id="demo">
              <DemoSection />
            </section>

            <section id="about" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Technology</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Powered by cutting-edge technology to deliver an immersive car customization experience
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6 bg-gray-800 rounded-xl transform transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 mx-auto mb-4 bg-indigo-500 rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Camera Integration</h3>
                  <p className="text-gray-400">Real-time color capture using advanced computer vision</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-xl transform transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 mx-auto mb-4 bg-indigo-500 rounded-full flex items-center justify-center">
                    <Palette className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Dynamic Colors</h3>
                  <p className="text-gray-400">Instant color adaptation based on environmental input</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-xl transform transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 mx-auto mb-4 bg-indigo-500 rounded-full flex items-center justify-center">
                    <Car className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">3D Models</h3>
                  <p className="text-gray-400">High-fidelity 3D car models with realistic rendering</p>
                </div>
              </div>
            </section>
          </>
        } />
        <Route path="/index1.html" element={<iframe src="/index1.html" className="w-full h-screen border-0" />} />
        <Route path="/index2.html" element={<iframe src="/index2.html" className="w-full h-screen border-0" />} />
        <Route path="/index3.html" element={<iframe src="/index3.html" className="w-full h-screen border-0" />} />
        <Route path="/index4.html" element={<iframe src="/index4.html" className="w-full h-screen border-0" />} />
        <Route path="/index5.html" element={<iframe src="/index5.html" className="w-full h-screen border-0" />} />
        <Route path="/index6.html" element={<iframe src="/index6.html" className="w-full h-screen border-0" />} />
        <Route path="/index7.html" element={<iframe src="/index7.html" className="w-full h-screen border-0" />} />
        <Route path="/index8.html" element={<iframe src="/index8.html" className="w-full h-screen border-0" />} />
        <Route path="/index9.html" element={<iframe src="/index9.html" className="w-full h-screen border-0" />} />
      </Routes>
    </div>
  );
}

export default App;
