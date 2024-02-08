import React from 'react';
import Link from "next/link";
import classes from './Button.module.css';

const Button = ({path,children}) => {
    return (
        <Link href={path} className={classes.btn}>
            {children}
        </Link>
    );
};

export default Button;