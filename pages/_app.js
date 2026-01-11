import useError from '@/../hooks/useError'
import { AnimatePresence, motion } from 'framer-motion';
import ErrorSnack from '../app/components/ErrorSnack';
// ...existing code...

function MyApp({ Component, pageProps, router }) {
    const [errorMessage, setErrorMessage] = useError();

    const handleError = (message) => {
        setErrorMessage(message);
    };

    return (
        <>
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    key={router.route}
                    initial="initialState"
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
                    <Component {...pageProps} onError={handleError} />
                </motion.div>
            </AnimatePresence>
            <ErrorSnack message={errorMessage} />
        </>
    );
}

export default MyApp;
