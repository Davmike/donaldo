import { Check } from 'lucide-react';

function SuccessMessage() {
    return (
        <div className="min-h-screen bg-[#f5f3ed] flex items-center justify-center p-4">
            <div className="w-full max-w-[420px] bg-white rounded-[32px] border-2 border-[#2c2c2c] p-8 sm:p-12 shadow-lg text-center">
                <div className="mb-8 flex justify-center">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#d4e8e8] flex items-center justify-center">
                        <Check size={64} className="text-[#6ba5a5]" strokeWidth={3} />
                    </div>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-[#6ba5a5] mb-4">
                    რჩეე მალე
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#6ba5a5] mb-6">
                    დაგიკავშირდებით!
                </h2>

                <p className="text-gray-500 mb-2 text-sm sm:text-base">
                    შეტყობინება გამგზავნილია, გთხოვთ
                </p>
                <p className="text-gray-500 mb-8 text-sm sm:text-base">
                    დაელოდოთ ჩვენს ზარს.
                </p>

                <div className="text-[#2c2c2c] mb-12">
                    <span className="font-semibold">ხანი საზე:</span>{' '}
                    <span className="font-bold">+995 543 21 12 34</span>
                </div>

                <button className="w-full bg-[#4a7ab8] hover:bg-[#3d6399] text-white font-semibold text-lg py-4 rounded-2xl transition-colors cursor-pointer">
                    მოსაპარე ღარიბლა
                </button>
            </div>
        </div>
    );
}

export default SuccessMessage;
