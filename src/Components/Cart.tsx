import { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';
import SuccessMessage from './SuccesMessage';

import {
    getCartItems,
    removeCartItem,
    type CartItem
} from "../lib/cartLocal";

function Cart() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [showSuccess, setShowSuccess] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const items = getCartItems();
        setCartItems(items);
        setLoading(false);
    }, []);

    const deleteItem = (id: string) => {
        removeCartItem(id);
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleOrder = () => {
        setShowSuccess(true);

        setTimeout(() => {
            setShowSuccess(false);
        }, 3000);
    };

    const groupedItems = cartItems.reduce((acc, item) => {
        if (!acc[item.section]) acc[item.section] = [];
        acc[item.section].push(item);
        return acc;
    }, {} as Record<string, CartItem[]>);

    const subtotal = cartItems.reduce((sum, item) => sum + Number(item.final_price), 0);
    const originalTotal = cartItems.reduce((sum, item) => sum + Number(item.price), 0);
    const discount = originalTotal - subtotal;

    if (showSuccess) return <SuccessMessage />;
    if (loading) return null;

    return (
        <div className="min-h-screen bg-[#f5f3ed] flex items-center justify-center p-4">
            <div className="w-full max-w-[420px] bg-white rounded-4xl border-2 border-[#2c2c2c] p-6 sm:p-8 shadow-lg">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#2c2c2c] mb-6 text-center">
                    ნაკვეთის ბადახშა
                </h1>

                {Object.keys(groupedItems).length === 0 ? (
                    <p className="text-center text-gray-500 py-8">კალათა ცარიელია</p>
                ) : (
                    <div className="space-y-8">
                        {Object.entries(groupedItems).map(([section, items]) => (
                            <div key={section}>
                                <h2 className="text-lg font-semibold text-[#4a7ab8] mb-4">
                                    {section}
                                </h2>
                                <div className="space-y-4">
                                    {items.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex gap-3 pb-4 border-b border-gray-200 last:border-0"
                                        >
                                            <img
                                                src={item.image_url}
                                                alt={item.name}
                                                className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover shrink-0 cursor-pointer"
                                            />
                                            <div className="flex-1 flex flex-col justify-between min-w-0">
                                                <div>
                                                    <h3 className="font-semibold text-[#2c2c2c] text-base sm:text-lg">
                                                        {item.name}
                                                    </h3>
                                                    <p className="text-sm text-gray-600">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <div className="flex items-end justify-between mt-2">
                                                    <div className="flex items-center gap-2">
                                                        {item.discount_percent && (
                                                            <span className="text-red-500 text-sm font-medium">
                                                                -{item.discount_percent}%
                                                            </span>
                                                        )}
                                                        <span className="text-xl sm:text-2xl font-bold text-[#2c2c2c]">
                                                            {item.final_price}₾
                                                        </span>
                                                        {item.discount_percent && (
                                                            <span className="text-red-400 line-through text-sm">
                                                                {item.price}₾
                                                            </span>
                                                        )}
                                                    </div>
                                                    <button
                                                        onClick={() => deleteItem(item.id)}
                                                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                                    >
                                                        <Trash2 size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {Object.keys(groupedItems).length > 0 && (
                    <>
                        <div className="mt-8 pt-6 border-t-2 border-gray-200 space-y-2">
                            <div className="flex justify-between items-center text-gray-600">
                                <span className="text-sm">ფასიანი თანხა:</span>
                                <span className="text-red-500 font-medium">-{discount}₾</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xl sm:text-2xl font-bold text-[#2c2c2c]">
                                    ჯამი:
                                </span>
                                <div className="flex items-center gap-2">
                                    {discount > 0 && (
                                        <span className="text-gray-400 line-through text-lg">
                                            {originalTotal}₾
                                        </span>
                                    )}
                                    <span className="text-3xl sm:text-4xl font-bold text-[#2c2c2c]">
                                        {subtotal}₾
                                    </span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleOrder}
                            className="w-full mt-6 bg-[#4a7ab8] hover:bg-[#3d6399] text-white font-semibold text-lg py-4 rounded-2xl transition-colors"
                        >
                            გაგზავნა
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;
