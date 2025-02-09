let error: Error;

const useError = () => {
    return [error, (err: Error) => error = err] as [Error, (err: Error) => void]
}

export default useError