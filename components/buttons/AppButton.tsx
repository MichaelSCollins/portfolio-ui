import { CgUser } from "react-icons/cg";
import { ReactElement, ReactNode } from "react"
import { MdSend } from "react-icons/md"
import { twMerge } from "tw-merge"
import Link from "next/link";

const getStyles = (variant: string) => {
    const colors = colorVariants[variant]
    const mobileStyles = `max-md:ml-auto 
        max-sm:w-2/3 max-md:mt-3`
    const textStyles = `text-nowrap text-shadow`
    const spacingStyles = 'px-2 py-1.5'
    const layoutStyles = 'flex justify-center gap-1'
    const shadowStyles = 'shadow-lg shadow-background'
    const otherStyles = 'w-1/2 rounded-2xl'
    const mergedStyles = twMerge(`
        ${colors} ${mobileStyles} ${textStyles}
        ${layoutStyles} ${spacingStyles} 
        ${shadowStyles} ${otherStyles}`)
    return mergedStyles
}
const colorVariants: { [variant: string]: string } = {
    'secondary': 'bg-transparent border-2 border-foreground text-foreground',
    'link': 'bg-transparent text-foreground',
    'primary': 'bg-primary text-foreground'
}
const iconStrategy: { [iconId: string]: ReactElement } = {
    'send': <MdSend className="mt-1" />,
    'user': <CgUser />
}

interface IStylize {
    variant: string,
    icon: string,
}
const AppButton = ({
    variant,
    type,
    icon,
    children
}: IStylize & {
    type?: 'submit' | 'button' | 'reset',
    children: ReactNode | ReactNode[]
}) => {
    const styles = getStyles(variant)
    return <button
        type={type}
        className={styles} >
        {iconStrategy[icon]}
        {children}
    </button>
}
export const GotoButton = ({
    variant,
    icon,
    goto,
    children
}: IStylize & {
    goto: string,
    type?: 'submit' | 'button' | 'reset',
    children: ReactNode | ReactNode[]
}) => {
    const styles = getStyles(variant)
    return <Link
        href={goto}
        className={styles} >
        {iconStrategy[icon]}
        {children}
    </Link>
}


export default AppButton