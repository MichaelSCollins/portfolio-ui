import { useState } from "react";

class LocalUrlBuilder {
    private static tag: string = "PreviewUrlBuilder: "
    private createdUrl?: string
    private callback?: (url: string) => void
    onUrlCreated(callback: (url: string) => void) {
        this.callback = callback
        return this;
    }
    fromEvent(e: React.ChangeEvent<HTMLInputElement>) {
        this.selectFile(e.currentTarget?.files![0])
        return this
    }
    selectFile(selectedFile?: File) {
        if (selectedFile)
        {
            this.createdUrl = URL.createObjectURL(selectedFile)
        }
        else
        {
            console.warn(LocalUrlBuilder.tag
                + "Selected file not present")
        }
        return this;
    }
    generateUrl() {
        if (!this.createdUrl)
        {
            console.warn(
                LocalUrlBuilder.tag + "No local file selected"
            )
        }
        if (this.createdUrl && this.callback)
        {
            return this.callback(this.createdUrl)
        }
        return this.createdUrl
    }
}
const previewBuilder = new LocalUrlBuilder()
const useSelectedImage = () => {
    const [preview, setPreview] = useState<string | null>(null);

    const setEvent = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => previewBuilder
        .fromEvent(event)
        .onUrlCreated((url: string) => {
            setPreview(url)
        })
        .generateUrl()
    return [preview, setEvent] as [
        string,
        (e: React.ChangeEvent<HTMLInputElement>) => void]
}

export default useSelectedImage