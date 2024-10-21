import { IconType } from 'react-icons/lib';
import styles from '../styles/CategoryCard.module.scss';

interface CategoryCardProps {
  icon: IconType;
  title: string;
  description: string;
  onClick: () => void; // Add onClick prop
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon: Icon, title, description, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}> {/* Add onClick event */}
      <Icon className={styles.icon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CategoryCard;
