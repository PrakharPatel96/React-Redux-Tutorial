import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

const Shop = () => {
  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector(state => state.amount);
  return (
    <div>
        <h1>Buy adibas shoes at 100 Rs</h1>
        <button type="button" class="btn btn-primary mx-2" onClick={() => withdrawMoney(100)}>-</button>
            Add to cart
        <button type="button" class="btn btn-primary mx-2" onClick={() => depositMoney(100)}>+</button>
        <div>Amount: {amount}</div>
    </div>
  )
}

export default Shop