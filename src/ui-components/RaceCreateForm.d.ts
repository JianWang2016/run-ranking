/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RaceCreateFormInputValues = {
    finishHour?: number;
    finishMin?: number;
    finishSec?: number;
    raceDate?: string;
    raceName?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    gender?: string;
    birthdate?: string;
    email?: string;
};
export declare type RaceCreateFormValidationValues = {
    finishHour?: ValidationFunction<number>;
    finishMin?: ValidationFunction<number>;
    finishSec?: ValidationFunction<number>;
    raceDate?: ValidationFunction<string>;
    raceName?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    middleName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    birthdate?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RaceCreateFormOverridesProps = {
    RaceCreateFormGrid?: FormProps<GridProps>;
    RowGrid0?: FormProps<GridProps>;
    finishHour?: FormProps<TextFieldProps>;
    finishMin?: FormProps<TextFieldProps>;
    finishSec?: FormProps<TextFieldProps>;
    raceDate?: FormProps<TextFieldProps>;
    raceName?: FormProps<TextFieldProps>;
    RowGrid2?: FormProps<GridProps>;
    firstName?: FormProps<TextFieldProps>;
    middleName?: FormProps<TextFieldProps>;
    lastName?: FormProps<TextFieldProps>;
    RowGrid3?: FormProps<GridProps>;
    gender?: FormProps<SelectFieldProps>;
    birthdate?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RaceCreateFormProps = React.PropsWithChildren<{
    overrides?: RaceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RaceCreateFormInputValues) => RaceCreateFormInputValues;
    onSuccess?: (fields: RaceCreateFormInputValues) => void;
    onError?: (fields: RaceCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RaceCreateFormInputValues) => RaceCreateFormInputValues;
    onValidate?: RaceCreateFormValidationValues;
} & React.CSSProperties>;
export default function RaceCreateForm(props: RaceCreateFormProps): React.ReactElement;
