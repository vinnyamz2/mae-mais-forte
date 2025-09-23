import React from 'react';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Comecei mesmo sem experiência e já tive minha primeira venda.",
    author: "Juliana, 27 anos",
    location: "São Paulo - SP"
  },
  {
    text: "Em 2 meses consegui quitar minhas dívidas e ainda sobrou para os meus filhos.",
    author: "Carla, 34 anos", 
    location: "Rio de Janeiro - RJ"
  },
  {
    text: "Trabalho no meu tempo livre e já ganho mais de R$ 2.000 por mês.",
    author: "Fernanda, 29 anos",
    location: "Belo Horizonte - MG"
  }
];

export default function Testimonials() {
  return (
    <div className="space-y-4 mb-8">
      <h3 className="text-center text-lg font-semibold text-primary mb-6">
        ✨ Veja o que outras mães como você já conseguiram:
      </h3>
      
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-4 bg-gradient-mother border-primary/20 shadow-soft">
            <div className="flex items-start gap-2">
              <Quote className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-foreground mb-2 italic">
                  "{testimonial.text}"
                </p>
                <div className="text-xs text-primary font-medium">
                  {testimonial.author}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.location}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}