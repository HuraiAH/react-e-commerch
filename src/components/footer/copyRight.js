import React from 'react';
import './footer';

function copyRight(props) {
    return (
        <div className="copyright">
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex justfy ">
                   <span className="copyright_para d-flex justify-content-center align-items-center">
                    <p>Copyright ©<span id="date"></span> All rights reserved | This template is made <i>By</i></p>
                    <p className="makeer_name">huraiAH</p>
                   </span>
    
                </div>
    
            </div>
        </div>
    </div>
    );
}

export default copyRight;