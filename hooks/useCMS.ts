import content from '@/.fake/content.json'
export const useCMS = () => {
    const getObj = <T>(path: string): T => {
        const keys = path.split('.');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let result: any = content

        for (const key of keys)
        {
            result = result[key];
            if (result === undefined)
            {
                console.warn(`Object not found for content: ${path}`)
                return {} as T;
            }
        }

        return result;
    }
    const getString = (path: string): string => {
        const keys = path.split('.');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let result: any = content

        for (const key of keys)
        {
            result = result[key];
            if (result === undefined)
            {
                console.warn(`String not found for content: ${path}`)
                return '';
            }
        }

        return result;
    };

    return { getString, getObj };
};
