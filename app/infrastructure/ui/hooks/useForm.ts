import { ChangeEvent, useState } from "react";

// de esta manera se le pude poner tipado generico a las arrow functions
export const useForm = <T extends Object>(values: T) => {
    const [formValues, setFormValues] = useState(values);

    const handlerChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        });
    };
    const resetForm = () => {
        setFormValues(values);
    }
    return { formValues, handlerChange, resetForm };


}