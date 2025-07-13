import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const reviews = [
    {
      text: "Отличный сервис! Купил телефон в отличном состоянии, а автомойка просто супер!",
      author: "Алексей П.",
      role: "Постоянный клиент"
    },
    {
      text: "Качественная мойка по разумной цене. Записываюсь онлайн - очень удобно!",
      author: "Мария К.",
      role: "Клиент"
    },
    {
      text: "Широкий выбор товаров и честные цены. Рекомендую всем знакомым!",
      author: "Дмитрий С.",
      role: "Клиент"
    }
  ];

  return (
    <section id="reviews" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">Отзывы клиентов</h3>
          <p className="text-lg text-gray-600">Что говорят наши довольные клиенты</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{review.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">{review.author}</p>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;