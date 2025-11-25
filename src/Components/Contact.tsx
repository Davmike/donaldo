import { useState, useRef } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import DateTimePicker from './DateTimePicker';

function Contact() {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedChildren, setSelectedChildren] = useState<number | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        date: '',
        time: '',
        children: null as number | null,
        message: ''
    });

    const childrenOptions = Array.from({ length: 20 }, (_, i) => (i + 1) * 5);

    const handleChildrenSelect = (value: number) => {
        setSelectedChildren(value);
        setFormData({ ...formData, children: value });
    };

    const handleDateTimeSelect = (date: string, time: string) => {
        setFormData({ ...formData, date, time });
        setShowDatePicker(false);
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 200;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 py-8 mt-[50px] text-guge">
            <div className="w-full max-w-[986px] bg-[#FDF7E9] rounded-4xl border p-8 md:p-12 shadow-sm">
                <h1 className="text-[#1554A4] text-[28px] md:text-4xl font-bold text-center mb-10">
                    დაგვიკავშირდი!
                </h1>

                <div className="space-y-6">
                    <div>
                        <label className="block text-[#5C6983] text-[18px] font-medium mb-2">
                            სახელი
                        </label>
                        <input
                            type="text"
                            placeholder="შეიყვანეთ სახელი"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-6 py-4 bg-[#faf9f6] border border-[#FFD472] rounded-xl text-[#2d2d2d] placeholder-[#b8b8b8] focus:outline-none focus:border-[#ff8c42] transition-colors cursor-pointer"
                        />
                    </div>

                    <div>
                        <label className="block text-[#5C6983] text-[18px] font-medium mb-2">
                            მობილურის ნომერი
                        </label>
                        <input
                            type="tel"
                            placeholder="შეიყვანეთ მობილურის ნომერი"
                            value={formData.mobile}
                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                            className="w-full px-6 py-4 bg-[#faf9f6] border border-[#FFD472] rounded-xl text-[#2d2d2d] placeholder-[#b8b8b8] focus:outline-none focus:border-[#ff8c42] transition-colors cursor-pointer"
                        />
                    </div>

                    <div>
                        <label className="block text-[#5C6983] text-[18px] font-medium mb-2">
                            დრო & რიცხვი
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="10 აგვისტო, 2025  |  1:00 AM"
                                value={formData.date && formData.time ? `${formData.date} | ${formData.time}` : ''}
                                readOnly
                                onClick={() => setShowDatePicker(true)}
                                className="w-full px-6 py-4 bg-[#faf9f6] border border-[#FFD472] rounded-xl text-[#2d2d2d] placeholder-[#b8b8b8] focus:outline-none focus:border-[#ff8c42] transition-colors cursor-pointer pr-14"
                            />
                            <Calendar
                                className="absolute right-5 top-1/2 -translate-y-1/2 text-[#6b6b6b] w-5 h-5 cursor-pointer"
                                onClick={() => setShowDatePicker(true)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-[#5C6983] text-[18px] font-medium mb-4">
                            ბავშვების რაოდენობა:
                        </label>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => scroll('left')}
                                className="shrink-0 p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                            >
                                <ChevronLeft className="w-5 h-5 text-[#6b6b6b]" />
                            </button>

                            <div
                                ref={scrollContainerRef}
                                className="flex-1 overflow-x-auto scrollbar-hide"
                            >
                                <div className="flex gap-3 px-1">
                                    {childrenOptions.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleChildrenSelect(option)}
                                            className={`shrink-0 px-6 py-3 rounded-2xl font-medium transition-all cursor-pointer ${selectedChildren === option
                                                ? 'bg-[#ff8c42] text-white shadow-md'
                                                : 'bg-[#faf9f6] text-[#2d2d2d] border border-[#e8e3d6] hover:border-[#ff8c42]'
                                                }`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => scroll('right')}
                                className="shrink-0 p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                            >
                                <ChevronRight className="w-5 h-5 text-[#6b6b6b]" />
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-[#5C6983] text-[18px] font-medium mb-2">
                            შეიყვანეთ ტექსტი
                        </label>
                        <textarea
                            placeholder="დაწერე დეტალები..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={6}
                            className="w-full px-6 py-4 bg-[#faf9f6] border border-[#FFD472] rounded-xl text-[#2d2d2d] placeholder-[#b8b8b8] focus:outline-none focus:border-[#ff8c42] transition-colors resize-none cursor-pointer"
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full bg-[#1554A4] text-white font-semibold py-4 rounded-3xl hover:bg-[#2d4a9e] transition-colors cursor-pointer shadow-md text-lg"
                    >
                        გაგზავნა
                    </button>
                </div>
            </div>

            {showDatePicker && (
                <DateTimePicker
                    onClose={() => setShowDatePicker(false)}
                    onSelect={handleDateTimeSelect}
                />
            )}

            <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    );
}

export default Contact;
