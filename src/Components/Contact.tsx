import { useState, useRef, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import DateTimePicker from './DateTimePicker';
import { useLanguage } from "../contexts/LanguageContext";


function Contact() {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedChildren, setSelectedChildren] = useState<number | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const [status, setStatus] = useState<{ type: 'error' | 'success'; message: string } | null>(null);

    const { t } = useLanguage();

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        date: '',
        time: '',
        children: null as number | null,
        message: ''
    });

    const [errors, setErrors] = useState({
        name: false,
        mobile: false,
        date: false,
        time: false,
        children: false,
        message: false
    });

    const childrenOptions = Array.from({ length: 20 }, (_, i) => (i + 1) * 5);

    const isFormValid = () =>
        formData.name.trim() &&
        formData.mobile.trim() &&
        formData.date &&
        formData.time &&
        formData.children &&
        formData.message.trim();

    const handleChildrenSelect = (value: number) => {
        setSelectedChildren(value);
        setFormData({ ...formData, children: value });
        setErrors({ ...errors, children: false });
    };

    const handleDateTimeSelect = (date: string, time: string) => {
        setFormData({ ...formData, date, time });
        setErrors({ ...errors, date: false, time: false });
        setShowDatePicker(false);
    };

    const validateForm = () => {
        const newErrors = {
            name: !formData.name.trim(),
            mobile: !formData.mobile.trim(),
            date: !formData.date,
            time: !formData.time,
            children: !formData.children,
            message: !formData.message.trim()
        };

        setErrors(newErrors);

        return !Object.values(newErrors).some(Boolean);
    };

    // 📌 LocalStorage მართვა
    useEffect(() => {
        if (isFormValid()) {
            localStorage.setItem('contactData', JSON.stringify(formData));
        } else {
            localStorage.removeItem('contactData');
        }
    }, [formData]);

    const handleSubmit = () => {
        if (!validateForm()) {
            setStatus({
                type: 'error',
                message: t.contactForm.requiredWarning
            });
            return;
        }

        setStatus({
            type: 'success',
            message: t.contactForm.readyToSend
        });

        const whatsappNumber = '995555925444';

        const whatsappMessage = `
📩 ახალი ჯავშანი

👤 სახელი: ${formData.name}
📞 ნომერი: ${formData.mobile}

📅 თარიღი: ${formData.date}
⏰ დრო: ${formData.time}
👶 ბავშვების რაოდენობა: ${formData.children}

📝 კომენტარი:
${formData.message}
        `;

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
    };

    const scroll = (direction: 'left' | 'right') => {
        scrollContainerRef.current?.scrollBy({
            left: direction === 'left' ? -200 : 200,
            behavior: 'smooth'
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 py-8 mt-[50px] text-guge">
            <div className="w-full max-w-[986px] bg-[#FDF7E9] rounded-4xl border p-8 md:p-12 shadow-sm">

                <h1 className="text-[#1554A4] text-[28px] md:text-4xl font-bold text-center mb-10">
                    {t.contactForm.title}
                </h1>

                {status && (
                    <div className={`mb-6 text-center font-semibold py-3 rounded-xl ${status.type === 'error'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-green-100 text-green-700'
                        }`}>
                        {status.message}
                    </div>
                )}

                <div className="space-y-6">

                    <input
                        type="text"
                        placeholder={t.contactForm.name}
                        value={formData.name}
                        onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            setErrors({ ...errors, name: false });
                        }}
                        className={`w-full px-6 py-4 bg-[#faf9f6] border rounded-xl
                            ${errors.name ? 'border-red-500' : 'border-[#FFD472]'}`}
                    />

                    <input
                        type="tel"
                        placeholder={t.contactForm.phone}
                        value={formData.mobile}
                        onChange={(e) => {
                            setFormData({ ...formData, mobile: e.target.value });
                            setErrors({ ...errors, mobile: false });
                        }}
                        className={`w-full px-6 py-4 bg-[#faf9f6] border rounded-xl
                            ${errors.mobile ? 'border-red-500' : 'border-[#FFD472]'}`}
                    />

                    <div className="relative">
                        <input
                            readOnly
                            onClick={() => setShowDatePicker(true)}
                            value={formData.date && formData.time ? `${formData.date} | ${formData.time}` : ''}
                            placeholder={t.contactForm.dateAndTime}
                            className={`w-full px-6 py-4 bg-[#faf9f6] border rounded-xl cursor-pointer
                                ${(errors.date || errors.time) ? 'border-red-500' : 'border-[#FFD472]'}`}
                        />
                        <Calendar className="absolute right-5 top-1/2 -translate-y-1/2" />
                    </div>

                    <div className="flex items-center gap-4">
                        <button onClick={() => scroll('left')}>
                            <ChevronLeft />
                        </button>

                        <div
                            ref={scrollContainerRef}
                            className={"flex gap-3 overflow-x-auto p-1 rounded-xl"}
                        >
                            {childrenOptions.map(option => (
                                <button
                                    key={option}
                                    onClick={() => handleChildrenSelect(option)}
                                    className={`px-6 py-3 rounded-2xl transition
                                       ${selectedChildren === option ? 'bg-[#ff8c42] text-white' : 'border'}
  ${errors.children ? 'border border-red-500' : ''}`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>

                        <button onClick={() => scroll('right')}>
                            <ChevronRight />
                        </button>
                    </div>

                    <textarea
                        rows={6}
                        placeholder={t.contactForm.details}
                        value={formData.message}
                        onChange={(e) => {
                            setFormData({ ...formData, message: e.target.value });
                            setErrors({ ...errors, message: false });
                        }}
                        className={`w-full px-6 py-4 bg-[#faf9f6] border rounded-xl
                            ${errors.message ? 'border-red-500' : 'border-[#FFD472]'}`}
                    />

                    <button
                        onClick={handleSubmit}
                        className="w-full bg-[#1554A4] text-white py-4 rounded-3xl text-lg hover:opacity-90 transition"
                    >
                        {t.contactForm.send}
                    </button>

                </div>
            </div>

            {
                showDatePicker && (
                    <DateTimePicker
                        onClose={() => setShowDatePicker(false)}
                        onSelect={handleDateTimeSelect}
                    />
                )
            }
        </div >
    );
}

export default Contact;
