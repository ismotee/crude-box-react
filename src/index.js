import React, { Component } from "react";

export default (crude, ids) => (ConnectedComponent) => {
  return class Connect extends Component {
    constructor(props) {
      super(props);
      this.handleStateChanged = this.handleStateChanged.bind(this);
      this.state = crude.getState();
    }

    componentDidMount() {
      if (!ids) {
        crude.addStateChangedCallback(this.handleStateChanged);
      } else {
        crude.subscribe(ids, this.handleStateChanged);
      }
    }
    componentWillUnmount() {
      if (!ids) {
        crude.removeStateChangedCallback(this.handleStateChanged);
      } else {
        crude.unsubscribe(ids, this.handleStateChanged);
      }
    }
    handleStateChanged() {
      this.setState(crude.getState());
    }

    render() {
      return <ConnectedComponent {...this.props} state={this.state} />;
    }
  };
};
