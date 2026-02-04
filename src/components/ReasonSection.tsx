import { Heart } from 'lucide-react';

export function ReasonSection() {
  const reasons = [
    "Ты умеешь разговаривать с морковкой 🥕",
    "Твои брови собирают радугу по утрам 🌈",
    "Ты умеешь складывать носки в квадратные пирамиды 🧦🔺",
    "Твой смех заставляет чайники танцевать ☕️🕺",
    "Ты кладёшь звезды в карманы ночами ✨",
    "С тобой даже утюг рассказывает анекдоты 🔥",
    "Ты — чемпион мира по собиранию облаков ☁️🏆",
    "Твоя походка напоминает симфонию морковных пирогов 🥕🎼",
    "Ты умеешь шептать пароль луне 🌙🔐",
    "С тобой каждый день — космическая вечеринка 🚀🎉"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-20 px-4">
      <div className="max-w-5xl w-full">
        <h2 className="text-5xl font-bold text-center text-red-600 mb-6">
          10 причин, почему я люблю тебя
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 italic">
          (хотя пошел на хуй...)
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex items-scretch gap-4 bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>
              <p className="text-xl text-gray-700 flex-1">
                {reason}
              </p>
              <Heart className="w-5 h-5 text-red-500 fill-red-500 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
