import Icon from '@/components/ui/icon';

const ServicesOverview = () => {
  const services = [
    {
      icon: "ShoppingBag",
      title: "Продажа товаров",
      description: "Б/у и новые товары с гарантией качества",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: "Car",
      title: "Автомойка",
      description: "Профессиональная мойка с онлайн записью",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: "CreditCard",
      title: "Удобная оплата",
      description: "Наличные, карта, онлайн платежи",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Наши услуги</h3>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`${service.bgColor} p-3 rounded-full`}>
                    <Icon name={service.icon as any} size={24} className={service.iconColor} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
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
  );
};

export default ServicesOverview;