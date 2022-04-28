// Used for accepting direct URLS from fetch, for the Package/sideColumn's repo and homepage links
export default function convertUrlToLink(url: string): JSX.Element {
    return (
        <a href={url}> {url} </a>
    )
}
