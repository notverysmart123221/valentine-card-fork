import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-red-50 to-rose-100">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1706514930188-12de07d679a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGhlYXJ0cyUyMHZhbGVudGluZXxlbnwxfHx8fDE3NzAwNDk1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Romantic hearts"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          <Heart className="w-24 h-24 mx-auto text-red-500 fill-red-500" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-8xl font-bold text-red-600 mb-6 goofy"
        >
          <span className="goofy-emoji">💥</span> С 67 Февраля Дырка! <span className="goofy-emoji">🥳</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl text-gray-700 italic"
        >
          С Днём Всех Влюблённых, членососка!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex justify-center gap-4"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 10, 0, -10, 0]
              }}
              transition={{ 
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <Heart className="w-8 h-8 text-red-500 fill-red-500" />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 flex justify-center">
          <button className="emoji-badge wiggle pop" aria-label="goofy-cta">Ого! 🎉</button>
        </div>
      </div>
    </section>
  );
}
