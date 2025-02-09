import { useState, useEffect } from 'react';

interface ErrorSnackProps {
    message: string;
}

const ErrorSnack: React.FC<ErrorSnackProps> = ({ message }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (message)
        {
            setVisible(true);
            const timer = setTimeout(() => setVisible(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded shadow-lg">
            {message}
        </div>
    );
};

export default ErrorSnack;
