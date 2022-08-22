interface MyProps {
}
const Footer = ({ }: MyProps) => {
    return (
        <footer className="text-center">
            <a href="https://xkcd.com/" target={"_blank"} rel="noopener noreferrer">
                All comics by xkcd.
            </a>
        </footer>
    )
}

export default Footer;