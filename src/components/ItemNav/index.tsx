import { ReactNode } from 'react';
import { itemVariants } from '../../utils/constants';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
type Props = {
  children?: string | string[] | JSX.Element | JSX.Element[] | ReactNode;
  to: string;
  setOpenMenu?: (newState: boolean) => void;
};
export const ItemNav = ({ children, to }: Props) => {
  return (
    <motion.li variants={itemVariants}>
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
