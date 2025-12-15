import { Trash2 } from 'lucide-react';
import type { CartItem } from '../../src/types/cart';
import { useLanguage } from "../contexts/LanguageContext";

interface CartProps {
    items?: CartItem[];
    onRemoveItem?: (id: string, section: string) => void;
    setOpenCart: (open: boolean) => void;
}

function Cart({ items = [], onRemoveItem, setOpenCart }: CartProps) {

    const { t } = useLanguage();

    const contact = (() => {
        const saved = localStorage.getItem('contactData');
        if (!saved) return null;
        try {
            return JSON.parse(saved);
        } catch {
            return null;
        }
    })();

    // 🔹 დაჯგუფება section-ის მიხედვით
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

    const handleSendToWhatsapp = () => {
        if (!contact) {
            alert(t.cart.fillFormAlert);
            return;
        }

        if (items.length === 0) {
            alert(t.cart.emptyCartAlert);
            return;
        }

        const whatsappNumber = "995579124074";

        let cartText = '';
        Object.entries(groupedItems).forEach(([section, sectionItems]) => {
            cartText += `\n📦 ${section}\n`;
            sectionItems.forEach((item, index) => {
                cartText += `${index + 1}. ${item.name} - ${item.price}₾\n`;
            });
        });

        const message = `
🟢 ახალი შეკვეთა

👤 სახელი: ${contact.name}
📞 ნომერი: ${contact.mobile}

📅 თარიღი: ${contact.date}
⏰ დრო: ${contact.time}
👶 ბავშვების რაოდენობა: ${contact.children}

🛒 შეკვეთა:
${cartText}

💰 ჯამი: ${total}₾

📝 კომენტარი:
${contact.message}
        `;

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div
            className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center p-4 z-50 text-guge"
            onClick={() => setOpenCart(false)}
        >
            <div
                className="w-full max-w-[986px] px-4 py-6"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col max-h-[80vh]">

                    <h1 className="text-[28px] text-center font-bold text-[#1554A4] mb-4">
                        {t.cart.reviewBooking}
                    </h1>

                    <div className="flex-1 overflow-y-auto pr-1">
                        {Object.keys(groupedItems).length === 0 ? (
                            <div className="text-center text-gray-500 py-8">
                                {t.cart.empty}
                            </div>
                        ) : (
                            Object.entries(groupedItems).map(([section, sectionItems]) => (
                                <div key={section} className="mb-6">
                                    <h2 className="text-[#1554A4] font-semibold mb-4">
                                        {section}
                                    </h2>

                                    <div className="space-y-4">
                                        {sectionItems.map((item) => (
                                            <div
                                                key={`${item.section}-${item.id}`}
                                                className="flex items-center gap-3 pb-4 border-b border-gray-200 last:border-b-0"
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-24 h-24 rounded-xl object-cover shrink-0"
                                                />

                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-semibold md:text-[20px] text-[#4a6fa5] mb-1">
                                                        {item.name}
                                                    </h3>

                                                    {item.description && (
                                                        <p className="text-sm md:text-[16px] text-[#5C6983]">
                                                            {item.description}
                                                        </p>
                                                    )}

                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className="text-lg md:text-[25px] font-bold text-[#1554A4]">
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
                                                    onClick={() =>
                                                        onRemoveItem?.(item.id, item.section)
                                                    }
                                                    className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg"
                                                >
                                                    <Trash2 className="w-5 h-5 text-gray-600" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="mt-4 pt-4 border-t-2 border-gray-200">
                        {totalDiscount > 0 && (
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                                <span>{t.cart.savedAmount}:</span>
                                <span className="text-red-500">
                                    -{totalDiscount}₾
                                </span>
                            </div>
                        )}

                        <div className="flex justify-between items-center mb-6">
                            <span className="text-2xl font-bold">{t.cart.total}:</span>
                            <span className="text-3xl font-bold">{total}₾</span>
                        </div>

                        <button
                            onClick={handleSendToWhatsapp}
                            className="w-full text-[20px] bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 rounded-2xl cursor-pointer"
                        >
                            {t.cart.send}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Cart;
