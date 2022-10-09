import React from 'react';

const About = () => {
    return (
        <div>
            <div className='container d-lg-flex d-md-flex pt-3'>
                <div className='row col-lg-6 col-md-6 col-sm-12'>
                    <img className='w-50' src="https://avatars.githubusercontent.com/u/70339620?v=4" alt="" srcset="" />
                    <div className='rounded-2  w-100 pb-5 '>
                        I    <span className='text-secondary'>Hi I'm</span>
                        <h1 className='text-white'>Azizul Kabir Lavlu</h1>
                        <h4 className='text-secondary '>Web Developer</h4>
                        <span className='text-secondary'>[
                            Html5, Css3, ReactBootstrap, TailwindCss
                            <br />
                            JavaScripts, ReactJs, ExpressJs, REST API
                            <br />
                            MongoDb, Firebase ]
                        </span>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 '>
                    <h4 className='text-white'>Programming Knowledge and skills </h4>
                    <div >
                        <div className='text-white'>
                            <h5>Expertise:</h5>
                            <div className='border bg-dark p-2 rounded'>
                                JavaScript ES6 React.js REST API React Bootstrap React Bootstrap HTML5 CSS3 Material-Ul
                            </div>

                            <h5>Comfortable:</h5>
                            <div className='border bg-dark p-2 rounded '>
                                Node.js Express-Node.js MongoDB Json Sass Firebase
                            </div>
                            <h5>Familiar:</h5>
                            <div className='border bg-dark p-2 rounded '>
                                ReactNative Redux.js TypeScript Tailwind Python C++
                            </div>
                            <h5>Tools:</h5>
                            <div className='border bg-dark p-2 rounded '>
                                Git Node NPM Webpack VSCode Firebase Netlify Heroku Chrome DevTool
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;