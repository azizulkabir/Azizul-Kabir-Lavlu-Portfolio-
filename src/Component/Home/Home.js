import React from 'react';

const Home = () => {
    return (
        <div className=''>
            <div className='bg-dark d-flex justify-content-around  '>
                <div className='w-40'>
                    <div className='rounded-1 border border-warning'>
                        <img src="https://avatars.githubusercontent.com/u/70339620?v=4" alt="" />
                    </div>
                </div>
                <div className='row w-40'>
                    <div className='row'>
                        <div className='text-warning p-5 border border-warning col'>div-1</div>
                        <div className='text-warning p-5 border border-warning col'>div-2</div>

                    </div>
                    <div className='row'>
                        <div className='text-warning p-5 border border-warning col'>div-3</div>
                        <div className='text-warning p-5 border border-warning col'>div-4</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;