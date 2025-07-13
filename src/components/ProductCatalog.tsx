import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ProductCatalog = () => {
  const products = [
    {
      title: "Смартфон iPhone 12",
      description: "Отличное состояние, все функции работают",
      price: "25,000 ₽",
      badge: "Б/У",
      badgeStyle: "bg-green-100 text-green-800",
      icon: "Smartphone"
    },
    {
      title: "Ноутбук MacBook",
      description: "Запечатанный, гарантия 1 год",
      price: "85,000 ₽",
      badge: "Новый",
      badgeStyle: "bg-blue-100 text-blue-800",
      icon: "Laptop"
    },
    {
      title: "Телевизор Samsung",
      description: "55 дюймов, Smart TV, идеальная картинка",
      price: "18,000 ₽",
      badge: "Б/У",
      badgeStyle: "bg-green-100 text-green-800",
      icon: "Tv"
    }
  ];

  return (
    <section id="catalog" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">Каталог товаров</h3>
          <p className="text-lg text-gray-600">Выбирайте из широкого ассортимента качественных товаров</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                  <Badge className={product.badgeStyle}>{product.badge}</Badge>
                </div>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name={product.icon as any} size={48} className="text-gray-400" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <Button size="sm">
                    <Icon name="ShoppingCart" size={16} className="mr-1" />
                    Купить
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Показать все товары
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;