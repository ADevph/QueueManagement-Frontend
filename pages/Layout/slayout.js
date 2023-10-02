
import Footer from './footer'
import Superadminheader from "./superadminheader";




export default function sLayout (
    {children}
) {
    return (
        <>
            <Superadminheader> </Superadminheader>
            {children}
            <Footer/>
        </>
    )
}
