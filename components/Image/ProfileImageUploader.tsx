"use client"

import { useRef } from "react";
import Image from "next/image";
import ICMSFormInput from "@/lib/interfaces/CMSFormInput";
import useSelectedFile from "@/hooks/useSelectedImage";

class ComponentStyles {
    static layout = `flex flex-col justify-center`
    static color =
        `border-foreground/25 bg-secondary/25
        hover:border-foreground/75 hover:bg-secondary/5`
    static image = {
        styles: {
        },
        alt: "Preview",
    }
}
const ProfileImageUpload = ({ input }:
    { input: ICMSFormInput }) => {
    const ref = useRef<HTMLInputElement>(null)
    const [preview, handleImageSelection] = useSelectedFile()
    return (
        <div
            onClick={() => ref?.current?.click!()}
            className={`
                    ${ComponentStyles.layout} ${ComponentStyles.color}
                    ${ComponentStyles.image} 
                    border-2 relative
                    h-32 w-32 text-center p-4 
                    rounded-full *:rounded-full cursor-pointer`}>
            {preview && <Image
                src={preview}
                fill
                alt={ComponentStyles.image.alt}
                aria-label={ComponentStyles.image.alt}
                style={ComponentStyles.image.styles} />}
            <input
                hidden
                ref={ref}
                id={input?.name}
                name={input?.name}
                type="file"
                className="text-xs w-full p-2 bg-secondary text-foreground rounded shadow-md shadow-background"
                accept="image/*"
                onChange={handleImageSelection} />
        </div>
    );
};

export default ProfileImageUpload;