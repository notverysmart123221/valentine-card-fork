import { Heart, Sparkles, Smile, Sun, Star, Gift } from 'lucide-react';

export function WishesSection() {
  const wishes = [
    { icon: Heart, text: "пошел на хуй 🧦🎶" },
    { icon: Sparkles, text: "соси мой шмайзер ☕️🕶️" },
    { icon: Smile, text: "булки у тя тооп 🥐😁" },
    { icon: Sun, text: "пососите подрочите 🍨🔮" },
    { icon: Star, text: "линга гули гули 🌟🧊" },
    { icon: Gift, text: "шоб мать сдохла 🏆👟" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 py-20 px-4">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold text-center text-red-600 mb-6">
          Мои пожелания
        </h2>
        <p className="text-2xl text-center text-gray-600 mb-16">
          для самого дорогого человека
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishes.map((wish, index) => {
            const Icon = wish.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-red-100 p-4 rounded-full">
                    <Icon className="w-10 h-10 text-red-600" />
                  </div>
                </div>
                <p className="text-center text-lg text-gray-700 leading-relaxed">
                  {wish.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
