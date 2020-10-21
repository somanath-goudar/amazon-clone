import React from 'react';
import Product from './Product';
import "./Home.css";


function Home() {
    return (

        <div className="home">
            
                <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""/>


        <div className="home__row">

        <Product
                id ="12312346"
                title = "Apple i Watch Series 3 Health Tracker,Steps Tracker,ios"
                price = {2549}
                rating = {5}
                image = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/42-alu-space-nike-anth-black-s3-grid_GEO_US?wid=540&hei=550&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567051298471"
            />

            <Product
                id ="12312346"
                title = "MI Smart Band 4 Steps Tracker, Health Tracker , Bluetooth"
                price = {1890}
                rating = {5}
                image = "https://i01.appmifile.com/webfile/globalimg/Cambridge/mi-band-4-black.png"
            />


        </div>

        <div className="home__row">
            <Product
                id ="12312347"
                title = "iPhone 11 Pro Max 256GB Matte Black"
                price = {97999}
                rating = {5}
                image = "https://www.ineedamobile.com/wp-content/uploads/2019/11/Untitled-design-4.png"
            />

            <Product
                id ="12312348"
                title = "Rolex Submariner Watch"
                price = {17999}
                rating = {5}
                image = "https://5.imimg.com/data5/YM/SL/MY-29418413/rose-rolex-watch-500x500.jpg"
            />

            <Product
                id ="12312349"
                title = "Splush Panda Toy , Cute Panda"
                price = {1500}
                rating = {5}
                image = "https://ae01.alicdn.com/kf/HTB1DulMIH1YBuNjSszeq6yblFXan/New-Plush-Panda-Toys-Cute-Stuffed-Animal-Doll-Mother-And-Son-Toy-Gift-for-Children-Friends.jpg"
            />


        </div>
        
        <div className="home__row">
            <Product
                id ="12312300"
                title = "MI TV 65 inch "
                price = {57999}
                rating = {5}
                image = "https://images.fonearena.com/blog/wp-content/uploads/2016/09/Xiaomi-Mi-TV-3s-65inch.jpg"
            />

        </div>
            


        </div>

        
        
        
    )
}

export default Home
