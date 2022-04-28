export default function convertUrlToLink(url: string): JSX.Element {
    return (
        <a href={url}> {url} </a>
    )
}
