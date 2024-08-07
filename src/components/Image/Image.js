import PropTypes from 'prop-types';
import clsx from 'clsx';
import { forwardRef, useState } from 'react';

import images from '~/assets/images';
import styles from './Image.module.scss';
function Image({ className, src, alt, fallback: customFallback = images.noImg, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={clsx(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    fallback: PropTypes.string,
};

export default forwardRef(Image);
