import React from "react";
import Title from "../Components/Title";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((store) => store.orders.orders) || [];
  console.log(orders);
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

        <div>
        {orders.map((order, index) => (
          <div key={index} className="py-6 border-t border-b text-gray-700">
            {/* Order info */}
            <div className="mb-4">
              <p className="text-sm text-gray-500">
                Order ID: {order.id} | Status: {order.status} | Total: ${order.total}
              </p>
              <p className="text-xs text-gray-400">
                Date: {new Date(order.date).toLocaleString()}
              </p>
            </div>

            {/* Products inside this order */}
            {order.items.map((product, i) => (
              <div
                key={i}
                className="flex justify-between items-center gap-4 border-b py-3 last:border-b-0"
              >
                <div className="flex items-start gap-6 text-sm">
                  <img className="w-16 sm:w-20" src={product.image} alt={product.name} />
                  <div>
                    <p className="sm:text-base font-medium">{product.name}</p>
                    <div className="flex items-center gap-3 text-base text-gray-700">
                      <p className="text-lg">${product.price}</p>
                      <p>Quantity : {product.quantity}</p>
                    
                    </div>
                  </div>
                </div>

                <div className="md:w-1/3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <p className="min-w-2 h-2 w-2 rounded-full bg-green-500"></p>
                    <p className="text-sm md:text-base">{order.status}</p>
                  </div>
                  <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                    Track Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
