import React from 'react';
import '../css/home.css';
import logo from '../assets/logo.png'
import logoNB from '../assets/logo-nolabel.png'
import {motion} from 'motion/react'
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

import FotoVic from '../assets/Victoria-image.jpg'
import Apodimometro from '../assets/Apodimometro.jpg'
import con1 from '../assets/con1.jpg'
import con2 from '../assets/con2.jpg'



import dpArlene from '../assets/depoimentos/Arlene.jpg'
import dpFernanda from '../assets/depoimentos/Fernanda.jpg'
import dpEmily from '../assets/depoimentos/Emily.jpg'

import frutas from '../assets/alimentos/frutas.jpg'
import obesidade from '../assets/alimentos/obesidade.jpg'
import emagrecimento from '../assets/alimentos/emagrecimento.jpg'
import hipertrofia from '../assets/alimentos/hipertrofia.webp'
import recomposicao from '../assets/alimentos/recomposicaoCorporal.webp'
import doencas from '../assets/alimentos/doencas.jpg'

import liveclin from '../assets/logos/liveClin.avif'
import avanutri from '../assets/logos/avanutri.png'
import webdiet from '../assets/logos/webDiet.png'

export default function Home() {
    return (
        <div>
            {/* Header/Navigation */}
            <header className="header">
                <div className="logo-section">
                    <img className="logo" src={logoNB}></img>
                </div>
                <nav className="nav-links">
                    <a href="#home" className="nav-link">HOME</a>
                    <a href="#contato" className="nav-link">CONTATO</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section id="home" className="hero section-space">
                <motion.div  initial={{y: -200, opacity: 0}} whileInView={{y: 0, opacity: 1, transition: { duration: 1.5 }}}className="hero-content">
                    <div className="hero-text">
                        <div className='hero-container-icon'>
                            <img className='logoVic' src={logo}></img>
                        </div>
                        <h1 className="hero-title ">NUTRIR É UM ATO DE AMOR COM VOCÊ!</h1>
                        <p className=''>
                            Sou Victoria Corrêa, nutricionista formada pela Universidade de São Paulo (USP) 
                            e pós-graduanda em Emagrecimento e Metabolismo. Acredito que uma alimentação equilibrada e prazerosa é a chave para conquistar 
                            o corpo dos sonhos e a saúde sem abrir mão do prazer de comer. Apaixonada por nutrição e pelo 
                            mundo fitness, tenho como propósito ajudar pessoas a transformarem suas vidas 
                            através da nutrição, promovendo saúde, bem-estar e autoestima.
                        </p>
                        <button className="cta-button">AGENDE SUA CONSULTA</button>
                    </div>
                    <div className="hero-image-container">
                        <img className="hero-image" src={FotoVic}></img>
                    </div>
                </motion.div>
            </section>



            {/* Consultório Section */}
            <section className="section section-none section-space">
            <h2 className="section-title section-title-consultorio">CONSULTÓRIO</h2>
                <div className="section-content">
                    <div className="section-text">
                    
                        <p>
                            O consultório foi cuidadosamente planejado para oferecer um ambiente tranquilo, 
                            acolhedor e funcional. Cada detalhe foi pensado para o conforto e segurança 
                            durante as consultas.
                        </p>
                        <p>
                            Atmosfera leve, iluminação natural, aromas sutis e um toque da natureza, 
                            convidando você a vivenciar o autocuidado e a conexão com seu corpo.
                        </p>
                        <p>
                            
                            <strong><br></br>Agende seu atendimento presencial e viva essa experiência.</strong>
                        </p>
                    </div>
                    <motion.div  initial={{y: -200, opacity: 0}} whileInView={{y: 0, opacity: 1, transition: { duration: 1.5 }}} className='section-total-image'>
                        <img className="section-image img2" src={con1}/>
                            {/* Placeholder para foto do consultório 1 */}
                        <img className="section-image" src={con2}/>
                    </motion.div>
                </div>
            </section>

            {/* Atendimento Section */}
            <section className="services-section">
                <h2 className="section-title">ATENDIMENTO</h2>
                <div className="services-grid">
                    <div>
                        <ul className="services-list">
                            <li>Avaliação física por Bioimpedância e/ou dobras cutâneas (presencial)</li>
                            <li>Avaliação física por medidas corporais, peso e fotos (online)</li>
                            <li>Anamnese detalhada</li>
                            <li>Plano alimentar personalizado e individualizado</li>
                            <li>Acesso ao plano alimentar via App WebDiet</li>
                            <li>Acompanhamento semanal via plataforma LiveClin</li>
                            <li>Suporte e ajustes no plano alimentar durante todo o período de vigência (via Whatsapp!)</li>
                        </ul>
                    </div>
                    <div className="services-image">
                        <img className="caliper-image" src={Apodimometro} />
                        <div className="logos-container">
                            <img className="logo-item" src={liveclin} />
                            <img className="logo-item" src={webdiet} />
                            <img className="logo-item" src={avanutri}/>
                        </div>
                    </div>
                </div>
            </section>

            {/* O Acompanhamento Nutricional Section */}
            <section className="special-section">
                <h2 className="section-title">O ACOMPANHAMENTO NUTRICIONAL</h2>
                <div className="section-content">
                    <div className="section-text">
                        <p>
                            Foca em resultados reais e sustentáveis, respeitando seu estilo de vida, 
                            preferências e rotina. O cuidado é individualizado, considerando sua 
                            relação com a comida, seus objetivos e sua realidade.
                        </p>
                        <p>
                            Cada consulta é um espaço de escuta, estratégia e acolhimento, onde a 
                            nutrição é aplicada de forma prática. Os atendimentos online oferecem 
                            a mesma qualidade e atenção dos presenciais, com acesso a materiais 
                            personalizados, acompanhamento próximo e suporte contínuo para seu 
                            progresso e segurança, mesmo à distância.
                        </p>
                    </div>
                    <div className="focus-areas">
                        <div className="focus-item">
                        <img className="focus-image" src={emagrecimento}/>
                            <h3 className="focus-title">Emagrecimento saudável</h3>
                        </div>
                        <div className="focus-item">
                            <img className="focus-image" src={frutas}/>
                            <h3 className="focus-title">Reeducação alimentar</h3>
                        </div>
                        <div className="focus-item">
                            <img className="focus-image" src={obesidade}/>
                            <h3 className="focus-title">Obesidade e sobrepeso</h3>
                        </div>
                        <div className="focus-item">
                            <img className="focus-image" src={hipertrofia}/>
                            <h3 className="focus-title">Hipertrofia muscular</h3>
                        </div>
                        <div className="focus-item">
                            <img className="focus-image" src={recomposicao}/>
                            <h3 className="focus-title">Recomposição corporal</h3>
                        </div>
                        <div className="focus-item">
                            <img className="focus-image" src={doencas}/>
                            <h3 className="focus-title">Controle de doenças e sintomas</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Depoimentos Section */}
            <section className="testimonials-section">
                <h2 className="section-title">DEPOIMENTOS</h2>
                <div className="testimonials-grid">
                    <motion.div  initial={{y: -200, opacity: 0}} whileInView={{y: 0, opacity: 1, transition: { duration: 0.8 }}} className="testimonial">
                        <img className="testimonial-avatar" src={dpEmily} alt="Foto do depoimento" />
                        <p className="testimonial-text">
                            "Consegui resultados incríveis! Perdi peso e me sinto muito mais feliz 
                            comigo mesma. A Victoria é uma profissional excepcional!"
                        </p>
                        <div className="testimonial-author">- Emily S.</div>
                    </motion.div>
                    <motion.div  initial={{y: -200, opacity: 0}} whileInView={{y: 0, opacity: 1, transition: { duration: 0.8 }}} className="testimonial">
                        <img className="testimonial-avatar" src={dpArlene} alt="Foto do depoimento" />
                        <p className="testimonial-text">
                            "As roupas estão caindo melhor no corpo e me sinto muito mais confiante. 
                            Obrigada por toda ajuda!"
                        </p>
                        <div className="testimonial-author">- Arlane S.</div>
                    </motion.div>
                    <motion.div  initial={{y: -200, opacity: 0}} whileInView={{y: 0, opacity: 1, transition: { duration: 0.8 }}} className="testimonial">
                        <img className="testimonial-avatar" src={dpFernanda} alt="Foto do depoimento" />
                        <p className="testimonial-text">
                            "Adorei o plano! Estou me sentindo muito bem e conseguindo seguir 
                            perfeitamente. Super recomendo!"
                        </p>
                        <div className="testimonial-author">- Fernanda D.</div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contato" className="contact-section">
                <h2 className="contact-title">Tem alguma dúvida? Mande uma mensagem agora mesmo.</h2>
                <div className="contact-buttons">
                    <button className="contact-button">FALE CONOSCO</button>
                    <button className="contact-button">FORMULÁRIO DE INTERESSE</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <img src={logo} className="footer-logo" />
                    </div>
                    
                    <div className="footer-info">
                        <div className="footer-title">Entre em contato</div>
                        <div className="footer-text">Rua Floriano Peixoto, 495 - Santa Paula</div>
                        <div className="footer-text">São Caetano do Sul - SP</div>
                        <div className="footer-text">Contato: (11) 94066-4806</div>
                    </div>
                    
                    <div className="footer-social">
                        <button className="social-button">
                        <AiOutlineInstagram />
                        </button>
                        <button className="social-button">
                        <AiOutlineWhatsApp />
                        </button>
                    </div>
                </div>
                <div className="footer-copyright">
                    Consultório e assessoria
                </div>
            </footer>
        </div>
    );
}