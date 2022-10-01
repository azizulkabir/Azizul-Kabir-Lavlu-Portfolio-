import React from 'react';
import './Home.css';
import fbImg from '../../Asset/Image/facebook.png';
import githubImg from '../../Asset/Image/github.png';
import linkedinImg from '../../Asset/Image/linkedin.png';
import googleImg from '../../Asset/Image/email.png';

const Home = () => {
    return (
        <div className='p-lg-5  bg-black'>
            <div className='bg-black d-lg-flex d-md-flex justify-content-around m-5 '>
                <div className='col-lg-6 col-md-6 col-sm-12 '>
                    <div className='rounded-2  w-100 pb-5 '>
                        I    <span className='text-secondary'>Hi I'm</span>
                        <h1 className='text-white'>Azizul Kabir Lavlu</h1>
                        <h4 className='text-secondary '>Web Developer</h4>
                        <span className='text-secondary'>[
                            Html5, Css3, Bootstrap, TailwindCss
                            <br />
                            JavaScripts, ReactJs, ExpressJs
                            <br />
                            MongoDb, Firebase ]
                        </span>
                    </div>
                    <div></div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-xs-4'>
                    <div className='row'>
                        <div className='text-warning p-1 col-lg-5 col-md-4 col-sm-6 col-5'>
                            <div className="flip-card  w-100">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front py-3">
                                        <img className=' w-50 '  src={fbImg} alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back d-flex align-items-center justify-content-center ">
                                        <a  className='text-decoration-none text-white' href="https://www.facebook.com/redowan2"><h5>Facebook </h5></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-warning p-1  col-lg-5 col-md-4 col-sm-6 col-5'>
                            <div className="flip-card w-100">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front  py-3 p-2">
                                        <img className=' w-50' src={githubImg} alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back d-flex align-items-center justify-content-center">
                                        <a className='text-decoration-none text-white' href="https://github.com/azizulkabir"><h5>Github</h5></a>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='row '>
                        <div className='text-warning p-1  col-lg-5 col-md-4 col-sm-6 col-5'>
                            <div className="flip-card w-100">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front  py-3">
                                        <img className=' w-50' src={linkedinImg} alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back d-flex align-items-center justify-content-center">
                                        <a className='text-decoration-none text-white' href="https://www.linkedin.com/in/azizulkabirlavlu/"><h5>LinkedIn</h5></a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-warning p-1  col-lg-5 col-md-4 col-sm-6 col-5'>
                            <div className="flip-card w-100">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front  py-3">
                                        <img className=' w-50 w-md-25' src={googleImg} alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back d-flex align-items-center justify-content-center">
                                        <a className=' text-decoration-none text-white ' href="https://www.youtube.com/channel/UCME9cRUWVVdPstS1nWttbkw"><h5>YouTube</h5></a>

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