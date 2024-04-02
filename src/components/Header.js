import React from 'react';

const Header = () => {
    return (
        <div className="menu">
            <div className="row" >
                <div>
                    <img src="./images/map.png" class="img-fluid" alt="temporary map" />
                </div>
            </div>
            <div>
                <div className="section text-center">
                    <p className="tagline">City Lens</p>
                </div>
            </div>
        </div>
        // <div className="menu">
        //     <img src="images/map.png" className="logo rounded" />
        //     <div className="section text-center">
        //         <p className="tagline">City Lens</p>
        //     </div>
        //     <div className="section text-center">
        //         <p className="normal-text">Most authentic in Austin!</p>
        //     </div>
        // </div>
    );
};

export default Header;
