import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Smartphone, Clock, Target, Sparkles, ArrowRight, Shield } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  icon: React.ReactNode;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Você já tentou alguma forma de ganhar dinheiro extra?",
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
    options: [
      "✅ Sim, já tentei",
      "❌ Não, nunca tentei"
    ]
  },
  {
    id: 2,
    question: "Quantas horas por semana você conseguiria dedicar a um novo projeto?",
    icon: <Clock className="w-6 h-6 text-primary" />,
    options: [
      "⏰ 2-5 horas por semana",
      "🕐 5-10 horas por semana", 
      "📅 10-15 horas por semana",
      "🚀 Mais de 15 horas por semana"
    ]
  },
  {
    id: 3,
    question: "Você tem acesso a celular ou computador para trabalhar online?",
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    options: [
      "📱 Tenho celular com internet",
      "💻 Tenho computador com internet",
      "📱💻 Tenho ambos",
      "❌ Não tenho acesso regular"
    ]
  },
  {
    id: 4,
    question: "Qual é sua maior motivação hoje?",
    icon: <Target className="w-6 h-6 text-primary" />,
    options: [
      "👶 Ajudar meus filhos",
      "💳 Sair das dívidas",
      "⏰ Ter mais tempo livre",
      "🏠 Melhorar nossa qualidade de vida"
    ]
  },
  {
    id: 5,
    question: "O que você mais precisa para começar?",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    options: [
      "📚 Aprender como fazer",
      "💰 Investimento baixo ou zero",
      "🕐 Horários flexíveis",
      "🤝 Suporte e orientação"
    ]
  }
];

const motivationalMessages = [
  "✨ Você está no caminho certo!",
  "🌸 Cada resposta te aproxima da sua transformação!",
  "💪 Sua dedicação é inspiradora!",
  "🦋 Falta pouco para descobrir sua oportunidade!",
  "💖 Acredite em você, você consegue!"
];

export default function SimplifiedQuestionnaireForm() {
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
      }, 1500);
    } else {
      setIsComplete(true);
    }
  };

  if (isComplete) {
    return (
      <div className="animate-fade-in">
        <Card className="p-8 text-center shadow-card bg-gradient-mother border-primary/30">
          <div className="mb-8">
            <Sparkles className="w-20 h-20 text-primary mx-auto mb-6 animate-pulse-soft" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              🎉 Parabéns! Seu guia personalizado está pronto!
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com base nas suas respostas, preparamos um guia exclusivo com as melhores 
              oportunidades de renda extra que se encaixam perfeitamente no seu perfil e rotina.
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="gradient-primary hover-lift text-white font-bold py-6 px-10 rounded-full text-xl shadow-button mb-6"
            onClick={() => window.open('https://vinnyamz2.github.io/guia.maes.solteiras.renda.extra/', '_blank')}
          >
            <ArrowRight className="w-6 h-6 mr-3" />
            👉 Ver meu guia personalizado agora mesmo
          </Button>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-white/50 rounded-full py-3 px-6">
            <Shield className="w-4 h-4 text-primary" />
            <span>🔒 Suas respostas estão seguras e o guia é 100% confiável. Resultado imediato!</span>
          </div>
        </Card>
      </div>
    );
  }

  if (showMotivation) {
    return (
      <div className="animate-scale-in">
        <Card className="p-8 text-center shadow-card bg-gradient-accent border-primary/20">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
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
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-muted-foreground">
            Pergunta {currentQuestion + 1} de {questions.length}
          </span>
          <span className="text-sm font-bold text-primary">
            {Math.round(progress)}% concluído
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-3">
          <div 
            className="gradient-primary h-3 rounded-full transition-all duration-700 ease-out shadow-soft"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <Card className="p-6 md:p-8 shadow-card bg-gradient-mother border-primary/20">
        <div className="flex items-center mb-8">
          {question.icon}
          <h2 className="text-lg md:text-xl font-bold text-foreground ml-3 leading-tight">
            {question.question}
          </h2>
        </div>

        <div className="space-y-4">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full p-4 md:p-5 text-left justify-start hover-lift bg-white/70 hover:bg-primary-soft hover:border-primary transition-all duration-300 text-base md:text-lg font-medium border-2"
              onClick={() => handleAnswer(question.id, option)}
            >
              <span>{option}</span>
            </Button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            💝 Suas respostas nos ajudam a criar o guia perfeito para você
          </p>
        </div>
      </Card>
    </div>
  );
}