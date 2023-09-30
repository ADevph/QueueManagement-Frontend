import CustomHead from "./customhead";
import NavigationBar from "./navbar";
import Footer from "./footer";

export default function Layout(props) {

    return (
        <>
            <CustomHead title={props.title} />
            <NavigationBar />
            {props.children}
            <Footer />
        </>
    );
}
