import React from "react";

import styles from "./index.module.scss";

interface IButtonProps {
  onClick?: React.MouseEventHandler;
  icon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({
  className,
  children,
  icon,
  onClick
}) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      <span className={styles.buttonIcon}>{icon}</span>
      {children}
    </button>
  );
};

export default Button;
