import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function FinalSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-600 via-pink-600 to-rose-600 py-20 px-4">
      <div className="confetti" aria-hidden>
        {Array.from({ length: 24 }).map((_, i) => {
          const left = Math.round(Math.random() * 100);
          const delay = (Math.random() * 2).toFixed(2);
          const colors = ['#FF5F6D','#FFC371','#7EE8FA','#B388FF','#FFD166'];
          const bg = colors[i % colors.length];
          return (
            <span
              key={i}
              className="confetti-piece"
              style={{ left: `${left}%`, background: bg, animationDuration: `${3 + Math.random()*3}s`, animationDelay: `${delay}s` }}
            />
          );
        })}
      </div>

      <div className="max-w-4xl text-center text-white">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="mb-8"
        >
          <Heart className="w-32 h-32 mx-auto text-white fill-white" />
        </motion.div>
        
        <h2 className="text-6xl font-bold mb-8 wiggle">
          Я люблю тебя! <span className="goofy-emoji">💗</span>
        </h2>
        
        <p className="text-3xl mb-12 leading-relaxed">
          Благодарю тебя за каждый взгляд, в котором я тону,<br />
          за жар твоих рук и ту нежность, что сводит меня с ума. <br />
          Ты — мой сладкий яд и моё спасение. <br />
          Спасибо, что ты есть, мой идеал, мой восторг и моя вечная страсть!
        </p>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-10 border-4 border-white/30">
          <p className="text-2xl font-medium mb-4">
            С Днём Святого Валентина!
          </p>
          <p className="text-4xl font-bold">
            14 февраля 2026
          </p>
        </div>
        <p className="small-note mt-6">PS: давай станцуем как в тиктоке — но тихо, чтобы соседи не ревновали 😜</p>
      </div>
    </section>
  );
}
