import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  const benefits = [
    {
      icon: "Award",
      title: "Премиум качество",
      description: "Только сертифицированные мячи от ведущих производителей с гарантией качества"
    },
    {
      icon: "Package",
      title: "Огромный выбор",
      description: "Более 500 моделей для любого вида спорта: футбол, баскетбол, волейбол и многое другое"
    },
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: "Доставка по всей России от 1 дня. Бесплатно при заказе от 3000 ₽"
    }
  ];

  const reviews = [
    {
      name: "Алексей М.",
      rating: 5,
      text: "Заказал футбольный мяч для сына — качество супер! Доставили на следующий день. Ребёнок в восторге!",
      initials: "АМ"
    },
    {
      name: "Мария К.",
      rating: 5,
      text: "Отличный магазин! Купила волейбольный мяч для тренировок. Цена-качество идеальны, рекомендую всем!",
      initials: "МК"
    },
    {
      name: "Дмитрий П.",
      rating: 5,
      text: "Большой выбор баскетбольных мячей. Консультанты помогли выбрать лучший вариант. Очень доволен покупкой!",
      initials: "ДП"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTIwIDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Icon name="Zap" size={20} className="text-white" />
              <span className="text-white font-semibold">№1 в России</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Мячи для настоящих <span className="text-yellow-300">чемпионов</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
              Качественные спортивные мячи с доставкой по всей России. Гарантия качества и лучшие цены!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 font-bold shadow-2xl hover:scale-105 transition-transform">
                <Icon name="ShoppingCart" size={24} className="mr-2" />
                Выбрать мяч
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 font-bold">
                <Icon name="Phone" size={24} className="mr-2" />
                Связаться
              </Button>
            </div>

            <div className="mt-16 flex justify-center gap-8 flex-wrap text-white">
              <div className="text-center">
                <div className="text-4xl font-black mb-2">500+</div>
                <div className="text-white/80">моделей</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-2">15000+</div>
                <div className="text-white/80">довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-2">24/7</div>
                <div className="text-white/80">поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Почему выбирают нас?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы создали идеальные условия для покупки спортивных мячей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon name={benefit.icon} size={36} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Узнайте, что говорят о нас покупатели
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="w-14 h-14 bg-gradient-to-br from-primary to-secondary">
                      <AvatarFallback className="text-white font-bold text-lg">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{review.name}</div>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Готовы начать тренировки?
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Выберите идеальный мяч и получите скидку 15% на первый заказ!
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-7 font-bold shadow-2xl hover:scale-105 transition-transform">
              <Icon name="Gift" size={28} className="mr-3" />
              Получить скидку
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                BallStore
              </h3>
              <p className="text-gray-400">
                Лучшие спортивные мячи для профессионалов и любителей
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Футбольные мячи</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Баскетбольные мячи</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Волейбольные мячи</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гарантия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (800) 555-35-35</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@ballstore.ru</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BallStore. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
