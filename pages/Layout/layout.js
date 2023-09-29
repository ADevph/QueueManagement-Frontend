
import Footer from './footer'
import PatientHeader from './patientheader'


export default function Layout (
    {children}
){
    return (
       
        <>
       
<PatientHeader> </PatientHeader>

  {children}
  
<Footer/>

        </>
      

    )
}