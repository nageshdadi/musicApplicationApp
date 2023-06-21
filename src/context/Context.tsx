import React from 'react';

export default React.createContext({
  favData: [],
  addCartData: (_data: any) => {},
  deleteCartData: (_id: string) => {},
});
