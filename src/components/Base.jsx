import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Container } from '../styles/components/Base'
import { useRouter } from 'next/router'
import IconeX from '../assets/x.svg'
import Image from 'next/image'


const Base = (props) => {
  const router = useRouter()

  const downloadCurriculo = () => {
    const elemento = document.createElement('a')
    elemento.href = '/curriculo-xalo-dev.pdf'
    elemento.setAttribute('download', 'curriculo-xalo-dev.pdf')
    elemento.click()
  }

  return (
    <Container>
      <Head>
        <title>Xalo Dev</title>
      </Head>
      <header>
        <motion.div
          style={{ width: 'min-content' }}
          whileHover={{
            position: 'relative',

            zIndex: 1,
            scale: 1.1,
            transition: {
              duration: 0.3
            }
          }}
        >
          <IconeX onClick={() => router.push('/')} />
        </motion.div>

        <div className="botoes">
          <motion.button
            onClick={downloadCurriculo}
            whileHover={{
              position: 'relative',
              zIndex: 1,
              scale: 1.1,
              transition: {
                duration: 0.2
              }
            }}
          >
            Meu CV
          </motion.button>
          <motion.button
            onClick={() => router.push('/contato')}
            whileHover={{
              position: 'relative',
              zIndex: 1,
              scale: 1.1,
              transition: {
                duration: 0.2
              }
            }}
          >
            Entre em contato!
          </motion.button>
        </div>
      </header>
      <main>{props.children}</main>
      <footer>
        <div className='containerImages'>
          <a className='divImage' rel='noreferrer' href='https://www.linkedin.com/in/%C3%ADcaro-gabriel-67148b1ba/' target="_blank">
            <div style={{width: '3vh', height: '3vh', position: 'relative'}}>
              <Image layout='fill' src='/linkedin.png' alt='linkedin logo'></Image>
            </div>
          </a>
          <a className='divImage' rel='noreferrer' href='https://github.com/XaloDev' target="_blank">
            <div style={{width: '3vh', height: '3vh', position: 'relative'}}>
                <Image layout='fill' src='/github.png' alt='github logo'></Image>
            </div>
          </a>
          <a className='divImage' rel='noreferrer' href='https://wa.me/5585998164001?text=Oi,%20tudo%20bem?' target="_blank">
            <div style={{width: '3vh', height: '3vh', position: 'relative'}}>
              <Image layout='fill' src='/whatsapp.png' alt='whatsapp logo'></Image>
            </div>
          </a>
        </div>
        <span>© 2021 Xalo Dev. Todos os direitos reservados.</span>
      </footer>
    </Container>
  )
}

export default Base