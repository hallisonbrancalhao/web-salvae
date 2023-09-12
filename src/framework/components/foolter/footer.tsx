import Image from 'next/image'
import './styles.scss'
import logo from '/assets/images/logo.svg';

export const Footer = () => {
    return (
        <>
            <div className='nav'>
                <div className="logo">
                <Image src={logo} width={130} height={61} alt=""/>
                </div>

            </div>
        </>
    )


}