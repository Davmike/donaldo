import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from "../contexts/LanguageContext";

interface DateTimePickerProps {
    onClose: () => void;
    onSelect: (date: string, time: string) => void;
}

function DateTimePicker({ onClose, onSelect }: DateTimePickerProps) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string>('14:00');

    const timeOptions = ['12:00', '14:00', '16:00', '18:00', '20:00', '22:00',];

    const { t } = useLanguage();

    const monthNames = t.dateTimePicker.months

    const weekDays = t.dateTimePicker.weekDays

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const isDateInPast = (date: Date) => {
        const checkDate = new Date(date);
        checkDate.setHours(0, 0, 0, 0);
        return checkDate < today;
    };

    const getDaysArray = useMemo(() => {
        const days: (number | null)[] = [];
        const startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

        for (let i = 0; i < startDay; i++) {
            days.push(null);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }

        return days;
    }, [daysInMonth, firstDayOfMonth]);

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
        setSelectedDay(null);
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
        setSelectedDay(null);
    };

    const handleDateSelect = (day: number) => {
        const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        if (!isDateInPast(selectedDate)) {
            setSelectedDay(day);
        }
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
    };

    const handleConfirm = () => {
        if (selectedDay) {
            // const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDay);
            const dateString = `${selectedDay} ${monthNames[currentDate.getMonth()]}, ${currentDate.getFullYear()}`;
            onSelect(dateString, selectedTime);
        }
    };

    const isToday = (day: number) => {
        const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        return checkDate.toDateString() === today.toDateString();
    };

    return (
        <div
            className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex items-center justify-center p-4 z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-6">
                    {/* <p className="text-[#6b6b6b] text-sm font-medium mb-4">ბიჭებო თარ:</p> */}

                    <div className="flex items-center justify-between mb-6">
                        <button
                            onClick={handlePrevMonth}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                        >
                            <ChevronLeft className="w-5 h-5 text-[#6b6b6b]" />
                        </button>
                        <div className="flex items-center gap-2">
                            <span className="text-[#2d2d2d] font-medium">{monthNames[currentDate.getMonth()]}</span>
                            <span className="text-[#b8b8b8] font-medium">{currentDate.getFullYear()}</span>
                        </div>
                        <button
                            onClick={handleNextMonth}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                        >
                            <ChevronRight className="w-5 h-5 text-[#6b6b6b]" />
                        </button>
                    </div>

                    <div className="grid grid-cols-7 gap-2 mb-4">
                        {weekDays.map((day, index) => (
                            <div
                                key={day}
                                className={`text-center text-sm font-medium py-2 ${index === 2 ? 'text-[#b8b8b8]' : 'text-[#b8b8b8]'
                                    }`}
                            >
                                {day}
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 gap-2">
                        {getDaysArray.map((day, index) => (
                            <div key={`${index}-${day}`} className="aspect-square">
                                {day === null ? (
                                    <div />
                                ) : (
                                    <button
                                        onClick={() => handleDateSelect(day)}
                                        disabled={isDateInPast(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
                                        className={`w-full h-full flex items-center justify-center rounded-2xl font-medium transition-all cursor-pointer ${selectedDay === day
                                            ? 'bg-[#ff8c42] text-white shadow-md'
                                            : isDateInPast(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))
                                                ? 'bg-gray-100 text-[#d0d0d0] cursor-not-allowed'
                                                : isToday(day)
                                                    ? 'bg-[red] text-white'
                                                    : 'bg-white text-[#2d2d2d] hover:bg-gray-50 border border-[#e8e3d6]'
                                            }`}
                                    >
                                        {day}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="text-[#6b6b6b] text-sm font-medium mb-4">{t.dateTimePicker.selectTime}:</p>

                    <div className="grid grid-cols-4 gap-3 mb-6">
                        {timeOptions.map((time) => (
                            <button
                                key={time}
                                onClick={() => handleTimeSelect(time)}
                                className={`py-3 rounded-2xl font-medium transition-all cursor-pointer ${selectedTime === time
                                    ? 'bg-[#ff8c42] text-white shadow-md'
                                    : 'bg-[#faf9f6] text-[#2d2d2d] border border-[#e8e3d6] hover:border-[#ff8c42]'
                                    }`}
                            >
                                {time}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={handleConfirm}
                        disabled={!selectedDay}
                        className="w-full bg-[#3d5cb8] text-white font-semibold py-4 rounded-2xl hover:bg-[#2d4a9e] transition-colors cursor-pointer shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        {t.dateTimePicker.confirm}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DateTimePicker;
