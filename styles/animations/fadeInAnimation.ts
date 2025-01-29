
const fadeInLoadingAnimation = (loaded: boolean = true) => ({
    transition: 'opacity',
    transitionDuration: '1s',
    opacity: loaded ? '100' : '0',
})
export default fadeInLoadingAnimation