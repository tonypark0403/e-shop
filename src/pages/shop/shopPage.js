import React, { Component } from 'react';
import Shop from './shop.presenter';
import SHOP_DATA from './shop.data';

class ShopContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    return <Shop data={this.state.collections} />;
  }
}

export default ShopContainer;
