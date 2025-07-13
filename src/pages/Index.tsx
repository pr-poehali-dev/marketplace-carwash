import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Car" size={32} className="text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">CarDeal</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#catalog"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Каталог
            </a>
            <a
              href="#wash"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Автомойка
            </a>
            <a
              href="#reviews"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Отзывы
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Контакты
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Качественные товары и услуги автомойки
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Покупайте б/у и новые товары с гарантией качества. Профессиональная
            мойка автомобилей с записью онлайн
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Смотреть товары
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на мойку
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Наши услуги
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Icon
                      name="ShoppingBag"
                      size={24}
                      className="text-blue-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Продажа товаров</h4>
                    <p className="text-gray-600">
                      Б/у и новые товары с гарантией качества
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Icon name="Car" size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Автомойка</h4>
                    <p className="text-gray-600">
                      Профессиональная мойка с онлайн записью
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Icon
                      name="CreditCard"
                      size={24}
                      className="text-green-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Удобная оплата</h4>
                    <p className="text-gray-600">
                      Наличные, карта, онлайн платежи
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/6e99bdc3-782d-4127-8d4c-1e3e8b2cce75.jpg"
                alt="Автомойка"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Каталог товаров
            </h3>
            <p className="text-lg text-gray-600">
              Выбирайте из широкого ассортимента качественных товаров
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Смартфон iPhone 12</CardTitle>
                  <Badge className="bg-green-100 text-green-800">Б/У</Badge>
                </div>
                <CardDescription>
                  Отличное состояние, все функции работают
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Smartphone" size={48} className="text-gray-400" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    25,000 ₽
                  </span>
                  <Button size="sm">
                    <Icon name="ShoppingCart" size={16} className="mr-1" />
                    Купить
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Ноутбук MacBook</CardTitle>
                  <Badge className="bg-blue-100 text-blue-800">Новый</Badge>
                </div>
                <CardDescription>Запечатанный, гарантия 1 год</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Laptop" size={48} className="text-gray-400" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    85,000 ₽
                  </span>
                  <Button size="sm">
                    <Icon name="ShoppingCart" size={16} className="mr-1" />
                    Купить
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Телевизор Samsung</CardTitle>
                  <Badge className="bg-green-100 text-green-800">Б/У</Badge>
                </div>
                <CardDescription>
                  55 дюймов, Smart TV, идеальная картинка
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Tv" size={48} className="text-gray-400" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    18,000 ₽
                  </span>
                  <Button size="sm">
                    <Icon name="ShoppingCart" size={16} className="mr-1" />
                    Купить
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Показать все товары
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Car Wash Booking */}
      <section id="wash" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Запись на автомойку
              </h3>
              <p className="text-lg text-gray-600">
                Выберите удобное время и тип мойки
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/img/6e99bdc3-782d-4127-8d4c-1e3e8b2cce75.jpg"
                  alt="Услуги автомойки"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Онлайн запись</CardTitle>
                  <CardDescription>
                    Заполните форму для записи на мойку
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Имя</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Телефон</label>
                      <Input placeholder="+7 (999) 123-45-67" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Тип мойки</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип мойки" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">
                          Базовая мойка - 500₽
                        </SelectItem>
                        <SelectItem value="premium">
                          Премиум мойка - 800₽
                        </SelectItem>
                        <SelectItem value="full">
                          Полная мойка + воск - 1200₽
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Дата</label>
                      <Input type="date" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Время</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Время" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="09:00">09:00</SelectItem>
                          <SelectItem value="11:00">11:00</SelectItem>
                          <SelectItem value="13:00">13:00</SelectItem>
                          <SelectItem value="15:00">15:00</SelectItem>
                          <SelectItem value="17:00">17:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Комментарий</label>
                    <Textarea placeholder="Дополнительные пожелания..." />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Записаться на мойку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Отзывы клиентов
            </h3>
            <p className="text-lg text-gray-600">
              Что говорят наши довольные клиенты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className="fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Отличный сервис! Купил телефон в отличном состоянии, а
                  автомойка просто супер!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Алексей П.</p>
                    <p className="text-sm text-gray-500">Постоянный клиент</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className="fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Качественная мойка по разумной цене. Записываюсь онлайн -
                  очень удобно!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Мария К.</p>
                    <p className="text-sm text-gray-500">Клиент</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className="fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Широкий выбор товаров и честные цены. Рекомендую всем
                  знакомым!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Дмитрий С.</p>
                    <p className="text-sm text-gray-500">Клиент</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-blue-400" />
                  <span>г. Москва, ул. Примерная, д. 123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-blue-400" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-blue-400" />
                  <span>info@cardeal.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-blue-400" />
                  <span>Пн-Вс: 9:00 - 21:00</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Способы оплаты</h4>
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-2 rounded">
                    <Icon name="Banknote" size={24} className="text-gray-800" />
                  </div>
                  <div className="bg-white p-2 rounded">
                    <Icon
                      name="CreditCard"
                      size={24}
                      className="text-gray-800"
                    />
                  </div>
                  <div className="bg-white p-2 rounded">
                    <Icon
                      name="Smartphone"
                      size={24}
                      className="text-gray-800"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Напишите нам</h4>
              <div className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Input
                  placeholder="Email"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Textarea
                  placeholder="Сообщение"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить сообщение
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Car" size={24} className="text-blue-400" />
            <span className="text-xl font-bold">CarDeal</span>
          </div>
          <p className="text-gray-400">© 2024 CarDeal. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
