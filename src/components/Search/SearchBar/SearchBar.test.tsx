import { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import { StateContext } from '../../../context/stateContext';
import { BrowserRouter } from 'react-router-dom';

let MockSearchBar = () => {
    const [query, setQuery] = useState<string>("");
    const [querySubmitted, setQuerySubmitted] = useState<string>("");
    const [packageInfo, setPackageInfo] = useState<{}>({});
    const bundle = { query, setQuery, querySubmitted, setQuerySubmitted, packageInfo, setPackageInfo }
    return (
        <StateContext.Provider value={bundle}>
            <BrowserRouter>
                <SearchBar />
            </BrowserRouter>
        </StateContext.Provider>
    )
}

it('should appear on screen', () => {
    render(<MockSearchBar />);
    const searchBarElement = screen.getByRole("textbox");
    expect(searchBarElement).toBeInTheDocument();
});

it('should contain placeholder text on first initialize', () => {
    render(<MockSearchBar />);
    const searchBarElement = screen.getByPlaceholderText(/find the package you need/i);
    expect(searchBarElement).toBeInTheDocument();
});

it('should be able to type into input, and value changes accordingly', () => {
    render(<MockSearchBar />);
    const searchBarElement = screen.getByPlaceholderText(/find the package you need/i) as HTMLInputElement;
    fireEvent.change(searchBarElement, { target: { value: "jello" } })
    expect(searchBarElement.value).toBe("jello");
});

it('should not be able to click submit if input is empty', () => {
    render(<MockSearchBar />);
    const searchBarElement = screen.getByPlaceholderText(/find the package you need/i) as HTMLInputElement;
    const searchBarButton = screen.getByRole("button");
    fireEvent.change(searchBarElement, { target: { value: "" } })
    fireEvent.click(searchBarButton)
    expect(searchBarButton).toBeDisabled();
});

it('should not be able to click submit if input is spaces', () => {
    render(<MockSearchBar />);
    const searchBarElement = screen.getByPlaceholderText(/find the package you need/i) as HTMLInputElement;
    const searchBarButton = screen.getByRole("button");
    fireEvent.change(searchBarElement, { target: { value: "      " } })
    fireEvent.click(searchBarButton)
    expect(searchBarButton).toBeDisabled();
});

it('should be able to submit if input is words', () => {
    render(<MockSearchBar />);
    const searchBarElement = screen.getByPlaceholderText(/find the package you need/i) as HTMLInputElement;
    const searchBarButton = screen.getByRole("button");
    fireEvent.change(searchBarElement, { target: { value: "jello" } })
    fireEvent.click(searchBarButton)
    expect(searchBarButton).not.toBeDisabled();
})