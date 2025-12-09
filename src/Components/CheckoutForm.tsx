import { useState } from 'react';
import type { CartItem, CheckoutFormData } from '../types/cart';

interface CheckoutFormProps {
    items?: CartItem[];
    onClose?: () => void;
    whatsappNumber: string;
}

function CheckoutForm({ items = [], onClose, whatsappNumber }: CheckoutFormProps) {
    const [formData, setFormData] = useState<CheckoutFormData>({
        name: '',
        phone: '',
        datetime: '',
        seats: '',
        comment: '',
    });

    const groupedItems = items.reduce((acc, item) => {
        if (!acc[item.section]) {
            acc[item.section] = [];
        }
        acc[item.section].push(item);
        return acc;
    }, {} as Record<string, CartItem[]>);

    const total = items.reduce((sum, item) => sum + item.price, 0);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const formatWhatsAppMessage = () => {
        let message = '*ფლობისმოთხოვნა*\n\n';
        message += `*სახელი:* ${formData.name}\n`;
        message += `*მობილურის ნომარი:* ${formData.phone}\n`;
        message += `*ღრმ & ნიშანი:* ${formData.datetime}\n`;
        message += `*ხნრთი საჟაველის რაოდენობა:* ${formData.seats}\n`;

        if (formData.comment) {
            message += `*კომენტარი:* ${formData.comment}\n`;
        }

        message += '\n*შეკვეთა:*\n\n';

        Object.entries(groupedItems).forEach(([section, sectionItems]) => {
            message += `*${section}*\n`;
            sectionItems.forEach((item) => {
                message += `• ${item.name} - ${item.price}₾\n`;
            });
            message += '\n';
        });

        message += `*ჯამი:* ${total}₾`;

        return encodeURIComponent(message);
    };

    const handleSend = () => {
        if (!formData.name || !formData.phone || !formData.datetime || !formData.seats) {
            alert('გთხოვთ შეავსოთ ყველა სავალდებულო ველი');
            return;
        }

        const message = formatWhatsAppMessage();
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div
            className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center p-4 z-50"
            onClick={onClose}
        >
            <div
                className="w-full max-w-[420px] bg-white rounded-3xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="max-h-[90vh] overflow-y-auto">
                    <div className="p-6 pb-8">
                        <h1 className="text-[24px] text-center font-bold text-gray-900 mb-2">
                            ფლობისმლუბერი
                        </h1>

                        <p className="text-center text-[#1554A4] text-sm mb-6">
                            ინფორმაცია
                        </p>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">
                                    სახელი:
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-0 py-2 border-b border-gray-300 focus:border-[#1554A4] outline-none text-gray-900"
                                    placeholder="გიორგი"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-1">
                                    მობილურის ნომარი:
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-0 py-2 border-b border-gray-300 focus:border-[#1554A4] outline-none text-gray-900"
                                    placeholder="567 78 89 90"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-1">
                                    ღრმ & ნიშანი:
                                </label>
                                <input
                                    type="text"
                                    name="datetime"
                                    value={formData.datetime}
                                    onChange={handleInputChange}
                                    className="w-full px-0 py-2 border-b border-gray-300 focus:border-[#1554A4] outline-none text-gray-900"
                                    placeholder="10 აგვისტო, 2025 | 1:00 AM"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-1">
                                    ხნრთი საჟაველის რაოდენობა:
                                </label>
                                <input
                                    type="text"
                                    name="seats"
                                    value={formData.seats}
                                    onChange={handleInputChange}
                                    className="w-full px-0 py-2 border-b border-gray-300 focus:border-[#1554A4] outline-none text-gray-900"
                                    placeholder="50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-1">
                                    კომენტარი:
                                </label>
                                <textarea
                                    name="comment"
                                    value={formData.comment}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className="w-full px-0 py-2 border-b border-gray-300 focus:border-[#1554A4] outline-none text-gray-900 resize-none"
                                    placeholder="დააყლების ღლის ჯავშანა. მანინტერესს, ტორტის შემოცა შესალნველია?"
                                />
                            </div>
                        </div>

                        {Object.keys(groupedItems).length > 0 && (
                            <div className="mt-8">
                                {Object.entries(groupedItems).map(([section, sectionItems]) => (
                                    <div key={section} className="mb-6">
                                        <h2 className="text-[#1554A4] font-semibold text-sm mb-3">
                                            {section}
                                        </h2>

                                        <div className="space-y-3">
                                            {sectionItems.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="flex items-center justify-between"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-12 h-12 rounded-lg object-cover"
                                                        />
                                                        <span className="text-gray-900 text-sm">
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                    <span className="text-gray-900 font-semibold">
                                                        {item.price}₾
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="mt-8 pt-6 border-t border-gray-200">
                            {totalDiscount > 0 && (<div className="flex justify-between text-sm text-gray-600 mb-2"> <span>დაზოგილი თანხა:</span> <span className="text-red-500">-{totalDiscount}₾</span> </div>)}
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xl font-bold text-gray-900">ჯამი:</span>
                                <span className="text-2xl font-bold text-gray-900">
                                    {total}₾
                                </span>
                            </div>

                            <button
                                onClick={handleSend}
                                className="w-full bg-[#1554A4] hover:bg-[#0f4083] text-white font-semibold py-3.5 rounded-xl transition-colors"
                            >
                                გაგზავნა
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutForm;
