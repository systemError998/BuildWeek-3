import React, { useEffect , useState } from 'react'

import { Navbar } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export default function NavbarScroll() {

    const [hideNavbar, setHideNavbar] = useState(false);

    //sarà true quando scende lo scrollY, false quando risale
    //console.log(hideNavbar);

        //https://stackoverflow.com/questions/75775786/how-to-properly-add-window-scroll-event-listener-in-react-for-animating-an-eleme
    useEffect(() => {
        const handleScroll = () => {
        setHideNavbar(window.scrollY > 10);
        console.log(window.scrollY);
        };
        //console.log(handleScroll());
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>  
            {/* se hideNavbar è true la nav si vede, altrimente none */}
            <Navbar
                style={{ display: hideNavbar ? 'block' : 'none' }}
                bg="white"
                data-bs-theme="light"
                className='py-0 my-0 border border-bottom-secondary'>
                
                <div className='container my-2'>
                    <div className='d-flex my-auto'>
                        <div>
                        <Image
                            style={{ width: "50px", height: "50px" }} 
                            src="https://static.sky.it/editorialimages/bae3cba5386cff00452fb02dbea26e0e6c5ea61c/static/contentimages/original/sezioni/cinema/serie-tv/2019/10/24/BoJack-Horseman.jpg" roundedCircle />
                        </div>
                        <div className='ms-3 profileNavbarScroll mt-2'>
                            <p id='logo'>Anna</p>
                            <p>BoJack Horseman</p>
                        </div>
                    </div>
                    <div>
                        <button>ciao</button>
                        <button>ciao</button>
                        <button>ciao</button>
                    </div>
                </div>       
            </Navbar>
        </>
    )
}
