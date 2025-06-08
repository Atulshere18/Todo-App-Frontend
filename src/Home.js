import HeroSection from'./components/HeroSection'
import Header from'./components/Header'
import Footer from './components/Footer'
import TodolistFeatures from './components/TodolistFeatures'
import Testimonials from './components/Testimonials'
import CalltoAction from './components/CalltoAction'
function home(){
    return(
        <div>
            <Header/>
            <HeroSection/>      
            <TodolistFeatures/>
            <Testimonials/>
            <CalltoAction/>
            <Footer/>
        </div>
    )
}
export default home;