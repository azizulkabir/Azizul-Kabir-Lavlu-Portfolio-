import React from 'react';
import './Home.css';
import fbImg from '../../Asset/Image/facebook.png';
import githubImg from '../../Asset/Image/github.png';
import linkedinImg from '../../Asset/Image/linkedin.png';
import googleImg from '../../Asset/Image/email.png';

const Home = () => {
    return (
        <div className='p-5 bg-black'>
            <div className='bg-black d-flex justify-content-around  '>
                <div className='col-lg-6 col-md-6 col-sm-12 mx-auto  mb-5 pb-5 '>
                    <div className='rounded-2 p-5 w-100 '>
                I    <span className='text-secondary'>Hi I'm</span>
                            <h1 className='text-white'>Azizul Kabir Lavlu</h1>
                        <h4 className='text-secondary '>Web Developer</h4><span className='text-secondary'>Html5, Css3, Bootstrap, TailwindCss 
                        <br/> JavaScripts, 
                        ReactJs, ExpressJs,<br/> MongoDb, Firebase </span>
                    </div>
                    <div></div>
                </div>
                <div className='col-lg-4 col-sm-12 '>
                    <div className='row '>
                        <div className='text-warning p-1 border border-secondary border-1 col-lg-4'>
                            <div className="flip-card  w-100">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front py-3">
                                        <img className=' w-50 ' src={fbImg} alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back">
                                        <h1>John Doe</h1>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-warning p-1 border border-secondary border-1 col-lg-4'>
                            <div className="flip-card w-100">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front py-3">
                                        <img className=' w-50' src={githubImg} alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back">
                                        <h1>John Doe</h1>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='row '>
                        <div className='text-warning p-1 border border-secondary border-1 col-lg-4'>
                            <div className="flip-card w-100">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front py-3">
                                        <img className=' w-50' src={linkedinImg} alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back">
                                        <h1>John Doe</h1>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-warning p-1 border border-secondary border-1  col-lg-4'>
                            <div className="flip-card w-100">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front py-3">
                                        <img className=' w-50' src={googleImg} alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back">
                                        <h1>John Doe</h1>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;