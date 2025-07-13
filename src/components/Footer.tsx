import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Icon name="Car" size={24} className="text-blue-400" />
          <span className="text-xl font-bold">CarDeal</span>
        </div>
        <p className="text-gray-400">© 2024 CarDeal. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;