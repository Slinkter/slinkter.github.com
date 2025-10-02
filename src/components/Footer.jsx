import ContactLinks from "./ContactLinks";

const Footer = () => {
    return (
        <footer className="bg-gray-800 dark:bg-gray-900 py-8 text-white">
            <div className="container mx-auto text-center">
                <ContactLinks />
                <p className="mt-4">© 2024 Luis Jhonata Cueva R. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
