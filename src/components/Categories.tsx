import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaBroom, FaTools } from 'react-icons/fa';
import CategoryCard from './CategoryCard';
import useLocalStorage from '../hooks/useLocalStorage';

interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
}

const servicesData: Service[] = [
  { id: 1, title: 'Home Cleaning', description: 'Deep cleaning for your home.', category: 'cleaning' },
  { id: 2, title: 'Office Cleaning', description: 'Cleaning services for your office.', category: 'cleaning' },
  { id: 3, title: 'Plumbing Repair', description: 'Expert plumbing services.', category: 'repair' },
  { id: 4, title: 'Electrical Repair', description: 'Professional electrical services.', category: 'repair' },
];

const Categories: React.FC = () => {
    const [favorites, setFavorites] = useLocalStorage<Service[]>('favorites', []);

const saveToFavorites = (service: Service) => {
  const newFavorites = [...favorites, service];
  setFavorites(newFavorites);
  alert(`${service.title} saved to favorites!`);
};

  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  
  const [selectedCategory, setSelectedCategory] = useState(category || 'cleaning');

  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
    navigate(`/search/${newCategory}`);
  };

  const filteredServices = servicesData.filter(service => service.category === selectedCategory);

  return (
    <div>
      <h2>Select a Category</h2>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <CategoryCard
          icon={FaBroom}
          title="Cleaning"
          description="Professional cleaning services."
          onClick={() => handleCategoryChange('cleaning')}
        />
        <CategoryCard
          icon={FaTools}
          title="Repair"
          description="Expert repair services."
          onClick={() => handleCategoryChange('repair')}
        />
      </div>

      <h2>Services in {selectedCategory}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {filteredServices.map(service => (
          <div key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button onClick={() => saveToFavorites(service)}>❤️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const saveToFavorites = (service: Service) => {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  favorites.push(service);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  alert(`${service.title} saved to favorites!`);
};

export default Categories;
