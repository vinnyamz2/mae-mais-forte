import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Baby, Clock, Target, DollarSign, Sparkles, ArrowRight } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  icon: React.ReactNode;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qual é a sua maior dificuldade hoje como mãe solo?",
    icon: <Heart className="w-6 h-6 text-primary" />,
    options: [
      "💰 Dificuldade financeira",
      "⏰ Falta de tempo para tudo",
      "😰 Estresse e sobrecarga",
      "🏠 Conciliar trabalho e cuidados dos filhos"
    ]
  },
  {
    id: 2,
    question: "Quantos filhos você tem para cuidar?",
    icon: <Baby className="w-6 h-6 text-primary" />,
    options: [
      "👶 1 filho(a)",
      "👶👶 2 filhos",
      "👶👶👶 3 filhos",
      "👨‍👩‍👧‍👦 4 ou mais filhos"
    ]
  },
  {
    id: 3,
    question: "Quanto tempo por semana você consegue dedicar a uma atividade extra?",
    icon: <Clock className="w-6 h-6 text-primary" />,
    options: [
      "⏱️ 2-5 horas por semana",
      "⏰ 5-10 horas por semana",
      "🕐 10-15 horas por semana",
      "📅 Mais de 15 horas por semana"
    ]
  },
  {
    id: 4,
    question: "O que você mais gostaria de conquistar nos próximos meses?",
    icon: <Target className="w-6 h-6 text-primary" />,
    options: [
      "💳 Quitar minhas dívidas",
      "🏠 Ter mais conforto em casa",
      "🎓 Investir na educação dos meus filhos",
      "✈️ Proporcionar mais experiências para a família"
    ]
  },
  {
    id: 5,
    question: "Se tivesse uma renda extra de até R$3.000 por mês, o que faria primeiro?",
    icon: <DollarSign className="w-6 h-6 text-primary" />,
    options: [
      "💰 Criaria uma reserva de emergência",
      "🏠 Melhoraria as condições de moradia",
      "👨‍👩‍👧‍👦 Investiria no futuro dos meus filhos",
      "💄 Cuidaria mais de mim mesma"
    ]
  },
  {
    id: 6,
    question: "Qual sua maior motivação para buscar uma renda extra?",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    options: [
      "🌟 Independência financeira",
      "👑 Ser exemplo para meus filhos",
      "🔒 Segurança para o futuro",
      "💝 Proporcionar uma vida melhor para a família"
    ]
  }
];

const motivationalMessages = [
  "✨ Continue, você está no caminho certo!",
  "🌸 Lembre-se: você merece uma vida melhor!",
  "💪 Sua força e dedicação são inspiradoras!",
  "🦋 Cada passo te aproxima da transformação!",
  "💖 Você é mais capaz do que imagina!"
];

export default function QuestionnaireForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showMotivation, setShowMotivation] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((Object.keys(answers).length / questions.length) * 100);
  }, [answers]);

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    
    if (currentQuestion < questions.length - 1) {
      setShowMotivation(true);
      setTimeout(() => {
        setShowMotivation(false);
        setCurrentQuestion(prev => prev + 1);
      }, 2000);
    } else {
      setIsComplete(true);
    }
  };

  if (isComplete) {
    return (
      <div className="animate-fade-in">
        <Card className="p-8 text-center shadow-card bg-white/90 backdrop-blur-sm">
          <div className="mb-6">
            <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ✨ Parabéns por chegar até aqui!
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Com base nas suas respostas, acreditamos que existe uma oportunidade 
              capaz de ajudar você a mudar a sua realidade e oferecer mais segurança 
              para seus filhos.
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="gradient-primary hover-lift animate-pulse-soft text-white font-semibold py-4 px-8 rounded-full text-lg shadow-button"
            onClick={() => window.open('#', '_blank')}
          >
            <ArrowRight className="w-5 h-5 mr-2" />
            👉 Quero descobrir essa oportunidade agora!
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            🔒 Informações 100% seguras e confidenciais
          </p>
        </Card>
      </div>
    );
  }

  if (showMotivation) {
    return (
      <div className="animate-scale-in">
        <Card className="p-8 text-center shadow-card bg-white/90 backdrop-blur-sm">
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
          <p className="text-xl font-medium text-primary">
            {motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]}
          </p>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="animate-slide-up">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Pergunta {currentQuestion + 1} de {questions.length}
          </span>
          <span className="text-sm font-medium text-primary">
            {Math.round(progress)}% concluído
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="gradient-primary h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <Card className="p-8 shadow-card bg-white/90 backdrop-blur-sm">
        <div className="flex items-center mb-6">
          {question.icon}
          <h2 className="text-xl font-semibold text-foreground ml-3">
            {question.question}
          </h2>
        </div>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full p-4 text-left justify-start hover-lift bg-white/50 hover:bg-primary-soft hover:border-primary transition-all duration-300"
              onClick={() => handleAnswer(question.id, option)}
            >
              <span className="text-base">{option}</span>
            </Button>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            💝 Suas respostas nos ajudam a entender melhor sua situação
          </p>
        </div>
      </Card>
    </div>
  );
}