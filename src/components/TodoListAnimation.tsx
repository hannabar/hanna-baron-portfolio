import { useState, useEffect } from "react";

const tasks = [
  "Concevoir l'interface",
  "Écrire le code",
  "Tester l'application",
  "Déployer",
  "Relire le projet",
];

const TICK_DURATION = 400;
const PAUSE_AFTER_ALL = 800;

const TodoListAnimation = () => {
  const [checkedIndices, setCheckedIndices] = useState<number[]>([]);
  const [phase, setPhase] = useState<"checking" | "unchecking">("checking");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (phase === "checking") {
        if (currentIndex < tasks.length) {
          setCheckedIndices((prev) => [...prev, currentIndex]);
          setCurrentIndex((i) => i + 1);
        } else {
          // All checked, pause then start unchecking
          setPhase("unchecking");
          setCurrentIndex(0);
        }
      } else {
        if (currentIndex < tasks.length) {
          setCheckedIndices((prev) => prev.filter((_, i) => i !== 0));
          setCurrentIndex((i) => i + 1);
        } else {
          // All unchecked, restart
          setPhase("checking");
          setCurrentIndex(0);
          setCheckedIndices([]);
        }
      }
    }, currentIndex === 0 && phase === "unchecking" ? PAUSE_AFTER_ALL : TICK_DURATION);

    return () => clearTimeout(timer);
  }, [currentIndex, phase]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-4">
      <div className="w-full max-w-xs bg-[#0f0f1a]/80 rounded-xl shadow-xl border border-white/10 p-4">
        <h3 className="text-xs font-mono font-bold text-emerald-400 mb-3 tracking-wider uppercase">
          📝 To Do List
        </h3>
        <ul className="space-y-2">
          {tasks.map((task, i) => {
            const isChecked = checkedIndices.includes(i);
            return (
              <li
                key={i}
                className="flex items-center gap-2.5 transition-all duration-300 ease-in-out"
                style={{ opacity: isChecked ? 0.5 : 1 }}
              >
                <span
                  className={`w-4 h-4 rounded flex-shrink-0 border-2 flex items-center justify-center transition-all duration-300 ${
                    isChecked
                      ? "bg-emerald-500 border-emerald-500"
                      : "border-white/30 bg-transparent"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className={`w-2.5 h-2.5 text-white transition-all duration-300 ${
                      isChecked ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M4 12l6 6L20 6"
                      className="transition-all duration-300"
                      strokeDasharray="24"
                      strokeDashoffset={isChecked ? 0 : 24}
                    />
                  </svg>
                </span>
                <span
                  className={`text-xs font-mono transition-all duration-300 ${
                    isChecked
                      ? "line-through text-white/40"
                      : "text-white/90"
                  }`}
                >
                  {task}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoListAnimation;
