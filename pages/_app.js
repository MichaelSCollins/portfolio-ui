import { AnimatePresence, motion } from 'framer-motion';
// ...existing code...

function MyApp({ Component, pageProps, router })
{
    return (
        <AnimatePresence>
            <motion.div
                key={router.route}
                initial="initialState"
                mode="wait"
                animate="animateState"
                exit="exitState"
                transition={{
                    duration: 1.75,
                }}
                variants={{
                    initialState: {
                        opacity: 0,
                        clipPath: router.route === '/about' ? 'inset(0 0 100% 0)' : 'inset(100% 0 0 0)',
                    },
                    animateState: {
                        opacity: 1,
                        clipPath: 'inset(0 0 0 0)',
                    },
                    exitState: {
                        opacity: 0,
                        clipPath: router.route === '/about' ? 'inset(100% 0 0 0)' : 'inset(0 0 100% 0)',
                    },
                }}
            >
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    );
}

export default MyApp;
