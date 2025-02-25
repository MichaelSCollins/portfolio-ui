import InputType from "../enums/InputType"

interface ICMSFormInput {
    horizontalAlignment: 'left' | 'center' | 'right'
    verticalAlign?: 'bottom' | 'center' | 'top'
    isPersonalData: boolean
    name: string,
    type: InputType,
    label: string,
    placeholder: string
}

export default ICMSFormInput