import React from 'react';
import { getFunName } from '../helpers';


// ES6 class
class StorePicker extends React.Component {
  // Better for performance since goToStore will live once.
  // Do this for methods that you need to use more than once.
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event) {
    event.preventDefault();
    // first grab the text from the box
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);
    // second we're going to transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    // These are anymous functions
    // So `this` equals the StorePicker component
    // (e) => this.goToStore(e)
    // this.goToStore().bind(this)
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
