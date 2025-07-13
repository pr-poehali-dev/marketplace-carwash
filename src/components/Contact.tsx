import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const contactInfo = [
    {
      icon: "MapPin",
      text: "г. Москва, ул. Примерная, д. 123"
    },
    {
      icon: "Phone",
      text: "+7 (999) 123-45-67"
    },
    {
      icon: "Mail",
      text: "info@cardeal.ru"
    },
    {
      icon: "Clock",
      text: "Пн-Вс: 9:00 - 21:00"
    }
  ];

  const paymentMethods = [
    { icon: "Banknote" },
    { icon: "CreditCard" },
    { icon: "Smartphone" }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">Контакты</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name={item.icon as any} size={20} className="text-blue-400" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Способы оплаты</h4>
              <div className="flex items-center space-x-4">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="bg-white p-2 rounded">
                    <Icon name={method.icon as any} size={24} className="text-gray-800" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Напишите нам</h4>
            <div className="space-y-4">
              <Input placeholder="Ваше имя" className="bg-gray-800 border-gray-700 text-white" />
              <Input placeholder="Email" className="bg-gray-800 border-gray-700 text-white" />
              <Textarea placeholder="Сообщение" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Icon name="Send" size={16} className="mr-2" />
                Отправить сообщение
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;