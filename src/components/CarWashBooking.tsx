import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const CarWashBooking = () => {
  return (
    <section id="wash" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Запись на автомойку</h3>
            <p className="text-lg text-gray-600">Выберите удобное время и тип мойки</p>
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
                <CardDescription>Заполните форму для записи на мойку</CardDescription>
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
                      <SelectItem value="basic">Базовая мойка - 500₽</SelectItem>
                      <SelectItem value="premium">Премиум мойка - 800₽</SelectItem>
                      <SelectItem value="full">Полная мойка + воск - 1200₽</SelectItem>
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
  );
};

export default CarWashBooking;