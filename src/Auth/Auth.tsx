import { SyntheticEvent, useState } from "react";

type AuthFormState = {
    email: string,
    password: string
}

export default function () {
    const [state, setState] = useState<AuthFormState>({ email: '', password: '' });

    const handleChange = (e: SyntheticEvent): void => {
        console.info("CHANGE", e.target);
        setState({
            ...state,
            [(e.target as HTMLInputElement).name]: [(e.target as HTMLInputElement).value]
        });
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        console.info("SUBMIT", e);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="email"
                type='email'
                onChange={handleChange}
                value={state.email}
            />
            <input
                name="password"
                type='password'
                onChange={handleChange}
                value={state.password}
            />
            <button type="submit">Login</button>
        </form>
    )
}