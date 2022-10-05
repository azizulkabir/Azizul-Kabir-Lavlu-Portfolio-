import React from 'react';

const About = () => {
    return (
        <div>
            <div className='container d-flex p-5'>
                <div className='row col-6'>
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
                <div className='col-6'>
                    <h4 className='text-white'>Programming Knowledge and skills </h4>
                    <div >

                        <div className='text-white'>
                            Expertise:
                            <div className='border bg-dark p-2 rounded'>
                                JavaScript ES6 React.js REST API React Bootstrap React Bootstrap HTML5 CSS3 Material-Ul
                            </div>

                            Comfortable:
                            <div className='border bg-dark p-2 rounded '>
                                Node.js Express-Node.js MongoDB Json Sass Firebase
                            </div>
                            Familiar:
                            <div className='border bg-dark p-2 rounded '>
                                ReactNative Redux.js TypeScript Tailwind Python C++
                            </div>
                            Tools:
                            <div className='border bg-dark p-2 rounded '>
                                Git Node NPM Webpack VSCode Firebase Netlify Heroku ChromeDevTool
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