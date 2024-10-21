// src/pages/Services.tsx
import CategoryCard from '../components/CategoryCard';
import { useNavigate } from 'react-router-dom';
import { FaBroom, FaTools } from 'react-icons/fa';

const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (category: string) => {
    navigate(`/search/${category}`);
  };

  return (
    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
      <CategoryCard
        icon={FaBroom}
        title="Cleaning"
        description="Professional cleaning services."
        onClick={() => handleCardClick('cleaning')}
      />
      <CategoryCard
        icon={FaTools}
        title="Repair"
        description="Expert repair services."
        onClick={() => handleCardClick('repair')}
      />
    </div>
  );
};

export default Services;
