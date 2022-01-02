import React from 'react';
import one from '../../../../src/images/banner/banner2.jpg'
import three from '../../../../src/images/banner/3.jpg'


const Banner = () => {
    return (
        <div style={{ width: '100%', backgroundColor: 'rgb(6, 5, 26)', }}>
            <div className='row'>
                <div
                    style={{
                        color: 'white', width: '40%', display: 'flex',
                        flexDirection: 'column', margin: '250px auto'
                    }} className='col-lg-7 col-md-6 col-12'>
                    <h4 style={{ fontSize: '38px' }}>Random Bike Showroom</h4>
                    <p>Rem laudantium vitae provident voluptas repudiandae molestiae recusandae facilis nisi illum, ipsam iusto impedit, est tenetur itaque modi, mollitia cumque aspernatur? Et.</p>
                    <button style={{ width: '150px', fontSize: '17px', marginTop: '20px', padding: '3px 0px', borderRadius: '3px', backgroundImage: 'linear-gradient( to right, tomato, orange)' }}>See More</button>
                </div>
                <div className='col-lg-5 col-md-6 col-12'>
                    <img width='100%' class="img-fluid" height='650' src={one} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;