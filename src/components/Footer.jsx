import imagemInsta from '../assets/instagram.png'
import imagemZap from '../assets/whatsapp.png'
const Footer = ()=>{
    return(
        <footer>
            <div className='bg-gray-700 w-auto'>
                <div className='flex justify-center flex-col items-center'>
                    <p className='p-3'>Todos os direitos reservados &#169; 2025</p>
                    <h3>
                        Redes socias
                    </h3>
                    <div className='flex justify-center gap-2 cursor-pointer w-14'>
                        <a href="https://www.instagram.com/enzocondomitt_/" className='hover:w-3xl'><img src={imagemInsta} alt="Logo do insta" /></a>
                        <a href="#" className='hover:w-3xl'><img src={imagemZap} alt="Imagem zapzap" /></a>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer