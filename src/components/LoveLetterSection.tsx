import { Mail, Heart } from 'lucide-react';

export function LoveLetterSection() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center py-20 px-4 relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1670786056253-03def3bf8e3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3ZlJTIwbGV0dGVyJTIwdmFsZW50aW5lfGVufDF8fHx8MTc3MDE1MTIwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 max-w-4xl w-full">
        <div className="bg-amber-50 rounded-lg shadow-2xl p-12 border-8 border-amber-200 transform rotate-1">
          <div className="flex items-center justify-center mb-8">
            <Mail className="w-10 h-10 text-red-600 mr-3" />
            <h2 className="text-4xl font-bold text-red-700">Письмо любви</h2>
          </div>
          
          <div className="space-y-6 text-gray-900 text-lg leading-relaxed font-serif">
            <p className="indent-8">Дорогая космическая каша, сегодня я написал тебе письмо на марсианском тосте 🍞👽.</p>

            <p className="indent-8">Если бы у меня был чемодан из леденцов, я бы носил его на голове и думал о твоих носках.</p>

            <p className="indent-8">Иногда я представляю, что мы — пара говорящих кактусов, и каждый наш поцелуй — это фейерверк из пончиков 🍩✨.</p>

            <p className="indent-8">С 14 февраля! Пусть твои носки всегда будут подходить по числу, а чай — по настроению ☕️🧦.</p>

            <div className="flex justify-end items-center mt-8 gap-2">
              <p className="text-2xl text-red-700 font-bold italic">Навсегда твой (и немного пингвин)</p>
              <Heart className="w-6 h-6 text-red-600 fill-red-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
