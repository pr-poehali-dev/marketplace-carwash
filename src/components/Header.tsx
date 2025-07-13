import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Car" size={32} className="text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">CarDeal</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#catalog" className="text-gray-600 hover:text-blue-600 transition-colors">Каталог</a>
          <a href="#wash" className="text-gray-600 hover:text-blue-600 transition-colors">Автомойка</a>
          <a href="#reviews" className="text-gray-600 hover:text-blue-600 transition-colors">Отзывы</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
        </nav>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Icon name="Phone" size={16} className="mr-2" />
          Связаться
        </Button>
      </div>
    </header>
  );
};

export default Header;