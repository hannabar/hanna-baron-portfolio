import { useState, useEffect, useRef } from "react";

const SCRIPT_LINES = [
  { text: "🛒 Bienvenue sur Euroforma Shop !", type: "title" as const },
  { text: "", type: "blank" as const },
  { text: "Combien d'articles avez-vous dans votre panier ? ", type: "prompt" as const, answer: "3" },
  { text: "Prix de l'article 1 : ", type: "prompt" as const, answer: "12.50 €" },
  { text: "Prix de l'article 2 : ", type: "prompt" as const, answer: "8.00 €" },
  { text: "Prix de l'article 3 : ", type: "prompt" as const, answer: "24.99 €" },
  { text: "-------------------", type: "separator" as const },
  { text: "Total de votre panier : 45.49 €", type: "total" as const },
];

const CHAR_SPEED = 30;
const ANSWER_PAUSE = 300;
const END_PAUSE = 2000;

const EuroformaShopAnimation = () => {
  const [displayedLines, setDisplayedLines] = useState<
    { text: string; type: string; answerText?: string }[]
  >([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);
  const [typingAnswer, setTypingAnswer] = useState(false);
  const [answerCharIdx, setAnswerCharIdx] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 500);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [displayedLines, currentCharIdx, answerCharIdx]);

  useEffect(() => {
    if (currentLineIdx >= SCRIPT_LINES.length) {
      const timer = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIdx(0);
        setCurrentCharIdx(0);
        setTypingAnswer(false);
        setAnswerCharIdx(0);
      }, END_PAUSE);
      return () => clearTimeout(timer);
    }

    const line = SCRIPT_LINES[currentLineIdx];

    if (line.type === "blank") {
      setDisplayedLines((prev) => [...prev, { text: "", type: "blank" }]);
      setCurrentLineIdx((i) => i + 1);
      return;
    }

    if (!typingAnswer) {
      if (currentCharIdx < line.text.length) {
        const timer = setTimeout(() => {
          setCurrentCharIdx((c) => c + 1);
        }, CHAR_SPEED);
        return () => clearTimeout(timer);
      } else {
        // Line finished typing
        if (line.type === "prompt" && (line as any).answer) {
          const timer = setTimeout(() => {
            setTypingAnswer(true);
            setAnswerCharIdx(0);
          }, ANSWER_PAUSE);
          return () => clearTimeout(timer);
        } else {
          setDisplayedLines((prev) => [
            ...prev,
            { text: line.text, type: line.type },
          ]);
          setCurrentLineIdx((i) => i + 1);
          setCurrentCharIdx(0);
        }
      }
    } else {
      const answer = (line as any).answer as string;
      if (answerCharIdx < answer.length) {
        const timer = setTimeout(() => {
          setAnswerCharIdx((c) => c + 1);
        }, CHAR_SPEED + 20);
        return () => clearTimeout(timer);
      } else {
        setDisplayedLines((prev) => [
          ...prev,
          {
            text: line.text,
            type: line.type,
            answerText: answer,
          },
        ]);
        setTypingAnswer(false);
        setCurrentLineIdx((i) => i + 1);
        setCurrentCharIdx(0);
        setAnswerCharIdx(0);
      }
    }
  }, [currentLineIdx, currentCharIdx, typingAnswer, answerCharIdx]);

  const currentLine = SCRIPT_LINES[currentLineIdx];

  const getLineColor = (type: string) => {
    switch (type) {
      case "title": return "text-emerald-400 font-bold";
      case "separator": return "text-white/30";
      case "total": return "text-yellow-400 font-bold";
      default: return "text-green-300/90";
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#0a0a1a] p-3">
      <div className="w-full max-w-xs rounded-lg overflow-hidden shadow-xl border border-white/10">
        {/* Terminal title bar */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2d2d3f]">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span className="ml-2 text-[10px] text-white/40 font-mono">python euroforma.py</span>
        </div>
        {/* Terminal body */}
        <div
          ref={scrollRef}
          className="bg-[#0d0d1a] p-3 h-40 overflow-hidden font-mono text-[11px] leading-relaxed"
        >
          {displayedLines.map((line, i) => (
            <div key={i} className={getLineColor(line.type)}>
              {line.type === "prompt" ? (
                <>
                  <span className="text-green-300/90">{line.text}</span>
                  <span className="text-cyan-300">{line.answerText}</span>
                </>
              ) : (
                line.text
              )}
            </div>
          ))}
          {/* Currently typing line */}
          {currentLineIdx < SCRIPT_LINES.length && currentLine && currentLine.type !== "blank" && (
            <div className={getLineColor(currentLine.type)}>
              {currentLine.type === "prompt" ? (
                <>
                  <span className="text-green-300/90">
                    {currentLine.text.slice(0, currentCharIdx)}
                  </span>
                  {typingAnswer && (
                    <span className="text-cyan-300">
                      {((currentLine as any).answer as string).slice(0, answerCharIdx)}
                    </span>
                  )}
                </>
              ) : (
                currentLine.text.slice(0, currentCharIdx)
              )}
              <span
                className={`inline-block w-1.5 h-3 bg-green-400 ml-0.5 align-middle ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EuroformaShopAnimation;
