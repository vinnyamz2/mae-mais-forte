import React from 'react';
import SimplifiedQuestionnaireForm from '@/components/SimplifiedQuestionnaireForm';
import Testimonials from '@/components/Testimonials';
import { Heart, Sparkles, Baby } from 'lucide-react';
import heroImage from '@/assets/hero-mother.jpg';
import motherWorkingImage from '@/assets/mother-working.jpg';

const Index = () => {
  return (
    <div className="min-h-screen py-4 md:py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <div className="relative mb-6">
            <img 
              src={heroImage} 
              alt="Mãe solo confiante com seu filho olhando para um futuro próspero"
              className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full shadow-card object-cover border-4 border-primary/20"
            />
            <div className="absolute -top-2 -right-2 bg-gradient-primary rounded-full p-2">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
            💝 Descubra em poucos minutos qual é a <span className="text-primary">melhor oportunidade de renda extra</span> para transformar a sua vida de mãe solo
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
            Responda apenas 5 perguntas rápidas e receba um guia personalizado gratuito com oportunidades reais de renda extra que se encaixam na sua rotina.
          </p>

          <div className="bg-accent/30 rounded-lg p-4 mb-8 border border-accent/40">
            <p className="text-sm md:text-base text-accent-foreground font-medium">
              ✨ <strong>Mais de 1.500 mães</strong> já transformaram suas vidas com nosso guia!
            </p>
          </div>

          <div className="relative mb-8">
            <img 
              src={motherWorkingImage} 
              alt="Mãe trabalhando em casa com seu filho brincando ao lado"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-card"
            />
          </div>
        </div>

        {/* Testimonials */}
        <Testimonials />

        {/* Questionnaire */}
        <SimplifiedQuestionnaireForm />
        
        {/* Footer */}
        <div className="text-center mt-8 md:mt-12 animate-fade-in">
          <p className="text-xs md:text-sm text-muted-foreground">
            🔒 Suas informações são tratadas com total segurança e confidencialidade
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
