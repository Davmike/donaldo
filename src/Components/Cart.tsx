import { Trash2 } from 'lucide-react';
import type { CartItem } from '../../src/types/cart';

interface CartProps {
    items?: CartItem[];
    onRemoveItem?: (id: string) => void;
    setOpenCart: any;
}

function Cart({ items = [], onRemoveItem, setOpenCart }: CartProps) {
    const groupedItems = items.reduce((acc, item) => {
        if (!acc[item.section]) {
            acc[item.section] = [];
        }
        acc[item.section].push(item);
        return acc;
    }, {} as Record<string, CartItem[]>);

    const subtotal = items.reduce((sum, item) => sum + item.price, 0);
    const totalDiscount = items.reduce((sum, item) => {
        if (item.originalPrice) {
            return sum + (item.originalPrice - item.price);
        }
        return sum;
    }, 0);
    const total = subtotal;

    return (
        <div
            className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center p-4 z-50"
            onClick={() => setOpenCart(false)}
        >
            <div
                className="w-full max-w-md px-4 py-6"
                onClick={(e) => e.stopPropagation()} // prevents closing on inner click
            >
                {/* Main container with flex + max height */}
                <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col max-h-[80vh]">

                    <h1 className="text-2xl font-bold text-blue-900 mb-4">
                        ნაჯვნის ბადისებუვა
                    </h1>

                    {/* Scrollable item list */}
                    <div className="flex-1 overflow-y-auto pr-1">
                        {Object.keys(groupedItems).length === 0 ? (
                            <div className="text-center text-gray-500 py-8">
                                კალათა ცარიელია
                            </div>
                        ) : (
                            <>
                                {Object.entries(groupedItems).map(([section, sectionItems]) => (
                                    <div key={section} className="mb-6">
                                        <h2 className="text-blue-600 font-semibold mb-4">{section}</h2>

                                        <div className="space-y-4">
                                            {sectionItems.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="flex items-center gap-3 pb-4 border-b border-gray-200 last:border-b-0"
                                                >
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                                                    />

                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="font-medium text-gray-900 mb-1">
                                                            {item.name}
                                                        </h3>

                                                        <div className="flex items-center gap-2 mt-1">
                                                            <span className="text-xl font-bold text-gray-900">
                                                                {item.price}₾
                                                            </span>

                                                            {item.originalPrice && (
                                                                <span className="text-red-500 line-through text-sm">
                                                                    {item.originalPrice}₾
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <button
                                                        onClick={() => onRemoveItem?.(item.id)}
                                                        className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg"
                                                    >
                                                        <Trash2 className="w-5 h-5 text-gray-600" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>

                    {/* Footer (always visible) */}
                    <div className="mt-4 pt-4 border-t-2 border-gray-200">
                        {totalDiscount > 0 && (
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                                <span>ღავალიძი თანხა:</span>
                                <span className="text-red-500">-{totalDiscount}₾</span>
                            </div>
                        )}

                        <div className="flex justify-between items-center mb-6">
                            <span className="text-2xl font-bold text-gray-900">ჯამი:</span>
                            <div className="flex items-center gap-2">
                                {totalDiscount > 0 && (
                                    <span className="text-gray-400 line-through text-lg">
                                        {subtotal + totalDiscount}₾
                                    </span>
                                )}
                                <span className="text-3xl font-bold text-gray-900">
                                    {total}₾
                                </span>
                            </div>
                        </div>

                        <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 rounded-2xl cursor-pointer">
                            გადახდენა
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
