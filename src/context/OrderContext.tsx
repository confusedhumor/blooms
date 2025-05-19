import React, { createContext, useContext, useReducer } from 'react';
import { Order, CustomerDetails, CartItem, OrderStatus } from '../types';

interface OrderState {
  orders: Order[];
  currentOrder: Order | null;
}

type OrderAction =
  | { type: 'CREATE_ORDER'; payload: { customer: CustomerDetails; items: CartItem[]; total: number } }
  | { type: 'UPDATE_ORDER_STATUS'; payload: { orderNumber: string; status: OrderStatus } }
  | { type: 'CLEAR_CURRENT_ORDER' };

interface OrderContextType extends OrderState {
  createOrder: (customer: CustomerDetails, items: CartItem[], total: number) => Order;
  updateOrderStatus: (orderNumber: string, status: OrderStatus) => void;
  clearCurrentOrder: () => void;
}

const initialState: OrderState = {
  orders: [],
  currentOrder: null,
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const generateOrderNumber = (): string => {
  const date = new Date();
  const dateStr = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(
    date.getDate()
  ).padStart(2, '0')}`;
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `KB-${dateStr}-${randomNum}`;
};

const orderReducer = (state: OrderState, action: OrderAction): OrderState => {
  switch (action.type) {
    case 'CREATE_ORDER': {
      const { customer, items, total } = action.payload;
      const newOrder: Order = {
        orderNumber: generateOrderNumber(),
        customer,
        items,
        total,
        status: 'pending',
        createdAt: new Date(),
      };
      return {
        ...state,
        orders: [...state.orders, newOrder],
        currentOrder: newOrder,
      };
    }

    case 'UPDATE_ORDER_STATUS': {
      const { orderNumber, status } = action.payload;
      const updatedOrders = state.orders.map((order) =>
        order.orderNumber === orderNumber ? { ...order, status } : order
      );
      const updatedCurrentOrder =
        state.currentOrder && state.currentOrder.orderNumber === orderNumber
          ? { ...state.currentOrder, status }
          : state.currentOrder;
      return {
        ...state,
        orders: updatedOrders,
        currentOrder: updatedCurrentOrder,
      };
    }

    case 'CLEAR_CURRENT_ORDER':
      return {
        ...state,
        currentOrder: null,
      };

    default:
      return state;
  }
};

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  const createOrder = (customer: CustomerDetails, items: CartItem[], total: number): Order => {
    dispatch({ type: 'CREATE_ORDER', payload: { customer, items, total } });
    return state.currentOrder as Order;
  };

  const updateOrderStatus = (orderNumber: string, status: OrderStatus) => {
    dispatch({ type: 'UPDATE_ORDER_STATUS', payload: { orderNumber, status } });
  };

  const clearCurrentOrder = () => {
    dispatch({ type: 'CLEAR_CURRENT_ORDER' });
  };

  const value = {
    ...state,
    createOrder,
    updateOrderStatus,
    clearCurrentOrder,
  };

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
};

export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};