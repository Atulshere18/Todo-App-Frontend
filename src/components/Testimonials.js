import '../styles/Testimonials.css'
import Test from './Images/Testimonial.jpg'
function Testimonials(){
return(
    <div>
        <div className='head3'>Customer Testimonials</div>
        <div className='subhead'>This tool has transformed my productivity and organization!</div>
        <div className='content'>
            <div ><p className='p1'>Using this website has made my tasks so much easier! I can't imagine my day without it."</p>
            <p className='p2'>---Sherri Cronin--- </p>
            <p className='p3'>Project Manager, TechCorp</p>
            </div>
            <img src={Test}></img>
        </div>
    </div>
)
}
export default Testimonials;