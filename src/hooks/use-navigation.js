import { useContext } from 'react';
import { NavigationContext } from './../context';

export const useNavigation = () => {
  const [currentPage, setCurrentPage] = useContext(NavigationContext);
  const navigate = (newPage) => setCurrentPage(newPage);

  return [currentPage, navigate];
};
