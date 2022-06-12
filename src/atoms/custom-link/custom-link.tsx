import React from 'react';
import { Link, LinkProps, useMatch } from 'react-router-dom';

// import { Container } from './styles';

interface CustomLinkProps extends LinkProps {
  to: string;
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  ...rest
}) => {
  const match = useMatch({
    path: rest.to
  });

  return (
    <Link className={match ? `match` : ''} {...rest}>
      {children}
    </Link>
  );
};
