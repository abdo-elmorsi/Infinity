import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'


export default function LazyShow(props) {
	return (
		<div ref={props.scrollRef} >
			<motion.div
				initial={props.config.initial}
				whileInView={props.config.animate}
				transition={{ duration: 1 }}
				viewport={{ root: props.scrollRef }}
			>
				{props.children}
			</motion.div>
		</div>
	)
}
