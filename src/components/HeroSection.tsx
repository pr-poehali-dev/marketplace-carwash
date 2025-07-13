import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">Качественные товары и услуги автомойки</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Покупайте б/у и новые товары с гарантией качества. Профессиональная мойка автомобилей с записью онлайн
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Icon name="ShoppingCart" size={20} className="mr-2" />
            Смотреть товары
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            <Icon name="Calendar" size={20} className="mr-2" />
            Записаться на мойку
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;