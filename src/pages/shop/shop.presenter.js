import React from 'react';

import CollectionPreview from '../../components/collection/collection-preview';

const Shop = ({ data }) => {
  return (
    <div className='shop-page'>
      {data.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;
