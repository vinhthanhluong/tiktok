import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        to,
        href,
        ...passProps,
    };

    // Remove event linstener when button is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    // Change button style
    if (to) {
        Comp = Link;
    } else if (href) {
        Comp = 'a';
    }

    const classCss = clsx(styles.wrapper, {
        [styles.primary]: primary,
        [styles.outline]: outline,
        [styles.text]: text,
        [styles.rounded]: rounded,
        [styles.disabled]: disabled,
        [className]: className,
        [styles.small]: small,
        [styles.large]: large,
    });

    return (
        <Comp className={classCss} {...props}>
            {leftIcon && <span className={clsx(styles.icon)}>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className={clsx(styles.icon)}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
