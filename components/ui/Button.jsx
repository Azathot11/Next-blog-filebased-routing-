import React from 'react';
import Link from "next/link";
import classes from './Button.module.css';

const Button = ({path,children,}) => {
    if (!path){
        return (
            <button className={classes.btn}  type='submit'>{children}</button>
        )
    }
    return (
        <Link href={path} className={classes.btn}>
            {children}
        </Link>
    );
};

export default Button;