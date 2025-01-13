import { readFileSync } from 'fs';
import { load } from 'js-yaml';
const noPathErrorMsg = "Please provide path to yaml file to the adapter."
class YamlAdapter {
    private path: string = '';
    private onError: (e: unknown) => void = () => { };
    constructor() {

    }
    fromPath(path: string) {
        this.path = path
        return this;
    }
    toObject<T>() {
        try
        {
            if (!this.path || this.path.length <= 0)
                throw noPathErrorMsg
            return load(
                readFileSync(this.path, "utf8")
            ) as T;
        } catch (e)
        {
            this.onError(e)
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch(callback: (e: any) => void) {
        this.onError = callback
        return this;
    }
}

export default YamlAdapter