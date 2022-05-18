import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';
import { StateContext } from '../../context/stateContext';
import { BrowserRouter } from 'react-router-dom';

let MockHome = () => {
    const [query, setQuery] = useState<string>("");
    const [querySubmitted, setQuerySubmitted] = useState<string>("");
    const [packageInfo, setPackageInfo] = useState<{}>({});
    const bundle = { query, setQuery, querySubmitted, setQuerySubmitted, packageInfo, setPackageInfo }
    return (
        <StateContext.Provider value={bundle}>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </StateContext.Provider>
    )
}

it('should appear on screen', () => {
    render(<MockHome />);
    const searchBarElement = screen.getByRole("textbox");
    expect(searchBarElement).toBeInTheDocument();
});

it('should have header on load', () => {
    render(<MockHome />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeVisible();
})

it('should not have header after query is submitted', () => {
    render(<MockHome />);
    const headerElement = screen.getByRole("banner");
    const searchBarElement = screen.getByRole("textbox");
    const submittedButtonElement = screen.getByRole("button");

    fireEvent.change(searchBarElement, { target: { value: 'jello' } });
    fireEvent.click(submittedButtonElement);
    expect(headerElement).not.toBeVisible();
})

it('should show small logo npf after query is submitted', () => {
    render(<MockHome />);
    const searchBarElement = screen.getByRole("textbox");
    const submittedButtonElement = screen.getByRole("button");

    fireEvent.change(searchBarElement, { target: { value: 'jello' } });
    fireEvent.click(submittedButtonElement);

    const logoElement = screen.getByText(/npf/i);
    expect(logoElement).toBeVisible();
})

it('should shrink into header size (70px) after query is submitted', () => {
    render(<MockHome />);
    const searchBarElement = screen.getByRole("textbox");
    const submittedButtonElement = screen.getByRole("button");

    fireEvent.change(searchBarElement, { target: { value: 'jello' } });
    fireEvent.click(submittedButtonElement);

    const headerElement = screen.getByTestId("home-header");
    expect(getComputedStyle(headerElement).height).toBe("70px");
})