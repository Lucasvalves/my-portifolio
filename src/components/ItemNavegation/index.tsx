import { ReactNode } from 'react';
import { itemsVariantsEixoX} from '../../utils/constsAnimates';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import useAppContext from '../../hook/useAppContext';
type Props = {
  children?: string | string[] | JSX.Element | JSX.Element[] | ReactNode;
  to: string;
  onClick?: (newState: boolean) => void;
};
export const ItemNavegation = ({ children, to }: Props) => {
  const {setMenuIsVisible } = useAppContext();
  return (
    <motion.li variants={itemsVariantsEixoX}
    transition= {{

      duration: 1,
    }}
    >
      <Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => setMenuIsVisible(false)}
      >
        {children}
      </Link>
    </motion.li>
  );
};
