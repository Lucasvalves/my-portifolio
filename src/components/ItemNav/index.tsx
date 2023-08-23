import { ReactNode } from 'react';
import { itemsVariantsEixoX} from '../../utils/constsAnimates';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
type Props = {
  children?: string | string[] | JSX.Element | JSX.Element[] | ReactNode;
  to: string;
  setOpenMenu?: (newState: boolean) => void;
};
export const ItemNav = ({ children, to }: Props) => {
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
      >
        {children}
      </Link>
    </motion.li>
  );
};
