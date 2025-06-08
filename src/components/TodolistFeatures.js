import '../styles/TodolistFeatures.css'
import icon1 from './Images/Icon1.png'
import icon2 from './Images/Icon2.png'
import icon3 from './Images/Icon3.png'
import icon4 from './Images/Icon4.png'
function TodolistFeatures(){
return(
    <div>
        <div className="head2">Transform Your Productivity with Our Innovative To-Do List Features</div>
        <div className="blocks">
            <div className='block1'>
                <img className='image' src={icon1}></img>
                <div className='sec2'>User-Friendly Interface</div>
                <div className='sec3'>
                    <div className='sec3-1'></div>
                    <div className='sec3-2'></div>
                </div>
                <div className='sec4'>Our platform offers seamless task management to boost your efficiency.</div>
            </div>
                <div className='block1'>
                <img className='image' src={icon2}></img>
                <div className='sec2'>Collaborate & Share Effortlessly</div>
                <div className='sec3'>
                    <div className='sec3-1'></div>
                    <div className='sec3-2'></div>
                </div>
                <div className='sec4'>Invite team members to work together and achieve your goals faster.</div>
            </div>
                 <div className='block1'>
                <img className='image' src={icon3}></img>
                <div className='sec2'>Effortless Collaboration</div>
                <div className='sec3'>
                    <div className='sec3-1'></div>
                    <div className='sec3-2'></div>
                </div>
                <div className='sec4'>Invite team members to work together and achieve your goals faster.</div>
            </div>
                <div className='block1'>
                <img className='image' src={icon4}></img>
                <div className='sec2'>Seamless Access and Work</div>
                <div className='sec3'>
                    <div className='sec3-1'></div>
                    <div className='sec3-2'></div>
                </div>
                <div className='sec4'>Stay connected and manage your tasks on the go with ease.</div>
            </div>
        </div>
    </div>
)
}
export default TodolistFeatures;