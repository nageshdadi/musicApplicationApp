import React from 'react';
import Context from './Context';
interface IProps {
  children: any;
}
interface IState {
  favData: any[];
}
export default class GlobalContext extends React.Component<IProps, IState> {
  state = {
    favData: [],
  };
  addCartData = (data: any) => {
    let isDataPresent = false;
    const updatedData = this.state.favData.map((each: any) => {
      if (each.id === data.id) {
        isDataPresent = true;
        return data;
      }
      return each;
    });
    if (isDataPresent) {
      isDataPresent = false;
      this.setState({favData: updatedData});
    } else {
      this.setState({favData: [...this.state.favData, data]});
    }
  };
  deleteCartData = (id: string) => {
    console.log(id);
    const filteredCartData = this.state.favData.filter(
      (each: any) => each.id !== id,
    );
    this.setState({favData: filteredCartData});
  };

  render() {
    return (
      <Context.Provider
        value={{
          favData: this.state.favData,
          addCartData: this.addCartData,
          deleteCartData: this.deleteCartData,
        }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
