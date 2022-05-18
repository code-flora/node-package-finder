import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from '../Home/Home';
import Results from './Results';
import { StateContext } from '../../context/stateContext';
import { BrowserRouter } from 'react-router-dom';

let MockResults = () => {
    const [query, setQuery] = useState<string>("");
    const [querySubmitted, setQuerySubmitted] = useState<string>("");
    const [packageInfo, setPackageInfo] = useState<{}>({});
    const bundle = { query, setQuery, querySubmitted, setQuerySubmitted, packageInfo, setPackageInfo }
    return (
        <StateContext.Provider value={bundle}>
            <BrowserRouter>
                <Home />
                <Results />
            </BrowserRouter>
        </StateContext.Provider>
    )
}

it('should show loader on screen on load', () => {
    render(<MockResults />);
    const loaderElement = screen.getByRole("progressbar");
    expect(loaderElement).toBeInTheDocument();
});

it('should not have header after query is submitted', () => {
    render(<MockResults />);
    const headerElement = screen.getByRole("banner");
    const searchBarElement = screen.getByRole("textbox");
    const submittedButtonElement = screen.getByRole("button");

    fireEvent.change(searchBarElement, { target: { value: 'jello' } });
    fireEvent.click(submittedButtonElement);
    expect(headerElement).not.toBeVisible();
})

it('should shrink into header size (70px) after query is submitted', () => {
    render(<MockResults />);
    const searchBarElement = screen.getByRole("textbox");
    const submittedButtonElement = screen.getByRole("button");

    fireEvent.change(searchBarElement, { target: { value: 'jello' } });
    fireEvent.click(submittedButtonElement);

    const headerElement = screen.getByTestId("home-header");
    expect(getComputedStyle(headerElement).height).toBe("70px");
})

it('should show results after query is submitted', async () => {
    render(<MockResults />);
    const searchBarElement = screen.getByRole("textbox");
    const submittedButtonElement = screen.getByRole("button");

    // enter query and submit
    fireEvent.change(searchBarElement, { target: { value: 'jello' } });
    fireEvent.click(submittedButtonElement);

    // wait for page to update with query
    const resultsElement = await screen.findAllByTestId("result-card");
    expect(resultsElement).toHaveLength(20);

});