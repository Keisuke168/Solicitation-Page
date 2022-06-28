import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Map from '../images/access.jpg';
import Pdf from '../images/access.pdf';

function Accessmap() {
    // if toggler is updated when lightbox is closed it will open it
    // if toggler is updated when lightbox is opened it will close it
    const [toggler, setToggler] = useState(false);

    return (
        <div className="map-cont">
            <img className="map" src={Map} onClick={ () => setToggler(!toggler) }>
            </img><br/>
            <a href={Pdf} target="_blank"><h2>PDFファイルはこちら</h2></a>
            <FsLightbox
                toggler={ toggler }
                sources={ [
                    'https://i.imgur.com/iYNpOLo.jpg',
                ] }
            />
        </div>
    );
}

export default Accessmap;