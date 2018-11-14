import React from 'react';
import styles from './Section.css';

export const Section = ({ children, center, white, grows, bleeds }) => (
	<section
		data-grows={grows ? 'grows' : null}
		className={[
			styles.root,
			center ? styles.center : '',
			!bleeds ? styles.withPadding : '',
			white ? styles.white : '',
		].join(' ')}
	>
		{children}
	</section>
);