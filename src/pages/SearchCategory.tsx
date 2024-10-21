
import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';

const SearchCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  return (
    <div>
      <h1>Search Results for: {category}</h1>
      <Categories />
    </div>
  );
};

export default SearchCategory;
