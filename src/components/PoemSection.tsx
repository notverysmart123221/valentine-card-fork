import { Sparkles } from 'lucide-react';

export function PoemSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-100 py-20 px-4">
      <div className="max-w-3xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border-4 border-red-200">
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="w-8 h-8 text-red-500 mr-2" />
            <h2 className="text-4xl font-bold text-red-600">Стихи для тебя</h2>
            <Sparkles className="w-8 h-8 text-red-500 ml-2" />
          </div>
          
          <div className="space-y-8 text-gray-700">
            
            <div className="text-center text-xl leading-relaxed">
              <p className="wiggle" style={{ animationDelay: '0.05s' }}>Я верил, я думал, что бури утихли,</p>
              <p className="wiggle" style={{ animationDelay: '0.15s' }}>Что в сердце моем не осталось следа, </p>
              <p className="wiggle" style={{ animationDelay: '0.25s' }}>Но очи твои в мою душу проникли, </p>
              <p className="wiggle" style={{ animationDelay: '0.35s' }}>Как в темную бездну — ночная звезда.</p>
            </div>
            
            <div className="text-center text-xl leading-relaxed">
              <p className="wiggle" style={{ animationDelay: '0.45s' }}>И снова я чувствую трепет и муку,</p>
              <p className="wiggle" style={{ animationDelay: '0.55s' }}>И снова я жажду безумных речей, </p>
              <p className="wiggle" style={{ animationDelay: '0.65s' }}>И снова ловлю твою нежную руку, </p>
              <p className="wiggle" style={{ animationDelay: '0.75s' }}>И взгляд твоих дивных и светлых очей. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
