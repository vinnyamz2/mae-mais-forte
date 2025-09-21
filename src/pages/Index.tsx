import React from 'react';
import QuestionnaireForm from '@/components/QuestionnaireForm';
import { Heart, Sparkles, Baby } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center items-center mb-6">
            <Heart className="w-12 h-12 text-primary mr-3" />
            <Sparkles className="w-8 h-8 text-accent" />
            <Baby className="w-10 h-10 text-secondary ml-3" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            💖 Você é uma mãe solo incrível!
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Responda estas perguntas rápidas para que possamos entender sua realidade 
            e mostrar um caminho que pode mudar sua vida financeira e a dos seus filhos.
          </p>
          
          <div className="mt-8 flex justify-center space-x-6 text-2xl">
            <span>🌸</span>
            <span>💪</span>
            <span>✨</span>
            <span>🦋</span>
            <span>💝</span>
          </div>
        </div>

        {/* Questionnaire */}
        <QuestionnaireForm />
        
        {/* Footer */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-sm text-muted-foreground">
            🔒 Suas informações são tratadas com total segurança e confidencialidade
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
