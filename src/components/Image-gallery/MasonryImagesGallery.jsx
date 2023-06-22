

import React from 'react';
import galleryImages from './galleryImages';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columsCountBreakPoints={{ 350:1, 750:3, 900:4 }}>
        <Masonry gutter='1rem'>
            {galleryImages.map((item, index) =>(
                    <img
                      className='masonry__img'
                        src={item}
                        key={index}
                        alt=""
                        style={{'width':'100%', 'display':'block', 'borderRadius':'10px'}}
                    />
                ))
            }
        </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;