import React from 'react';
import '../css/home.css';
import FotoVic from '../assets/Victoria-image.jpg'
import Apodimometro from '../assets/Apodimometro.jpg'
import con1 from '../assets/con1.jpg'
import con2 from '../assets/con2.jpg'

export default function Home() {
    return (
        <div>
            {/* Header/Navigation */}
            <header className="header">
                <div className="logo-section">
                    <div className="logo">VC</div>
                    <div className="brand-text">
                        <div className="brand-name">VICTORIA CORREA</div>
                        <div className="brand-title">NUTRICIONISTA</div>
                    </div>
                </div>
                <nav className="nav-links">
                    <a href="#home" className="nav-link">HOME</a>
                    <a href="#contato" className="nav-link">CONTATO</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">NUTRIR É UM ATO DE AMOR COM VOCÊ!</h1>
                        <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#5D4037', marginBottom: '2rem' }}>
                            Sou Victoria Correa, nutricionista formada pela Universidade de São Paulo (USP) 
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
                </div>
            </section>



            {/* Consultório Section */}
            <section className="section">
            <h2 className="section-title">CONSULTÓRIO</h2>
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
                            <strong>Agende seu atendimento presencial e viva essa experiência.</strong>
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.2rem', flexWrap: 'wrap', justifyContent: 'center'
                     }}>
                        <img className="section-image img2" src={con1}/>
                            {/* Placeholder para foto do consultório 1 */}
                        <img className="section-image" src={con2}/>
                    </div>
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
                            <div className="logo-item">LiveClin</div>
                            <div className="logo-item">WebDiet</div>
                            <div className="logo-item">AVANUTRI</div>
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
                            <div className="focus-image">
                                {/* Placeholder para emagrecimento */}
                                <span>Emagrecimento</span>
                            </div>
                            <h3 className="focus-title">Emagrecimento saudável</h3>
                        </div>
                        <div className="focus-item">
                            <div className="focus-image">
                                {/* Placeholder para reeducação */}
                                <span>Reeducação</span>
                            </div>
                            <h3 className="focus-title">Reeducação alimentar</h3>
                        </div>
                        <div className="focus-item">
                            <div className="focus-image">
                                {/* Placeholder para obesidade */}
                                <span>Obesidade</span>
                            </div>
                            <h3 className="focus-title">Obesidade e sobrepeso</h3>
                        </div>
                        <div className="focus-item">
                            <div className="focus-image">
                                {/* Placeholder para hipertrofia */}
                                <span>Hipertrofia</span>
                            </div>
                            <h3 className="focus-title">Hipertrofia muscular</h3>
                        </div>
                        <div className="focus-item">
                            <div className="focus-image">
                                {/* Placeholder para recomposição */}
                                <span>Recomposição</span>
                            </div>
                            <h3 className="focus-title">Recomposição corporal</h3>
                        </div>
                        <div className="focus-item">
                            <div className="focus-image">
                                {/* Placeholder para controle */}
                                <span>Controle</span>
                            </div>
                            <h3 className="focus-title">Controle de doenças e sintomas</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Depoimentos Section */}
            <section className="testimonials-section">
                <h2 className="section-title">DEPOIMENTOS</h2>
                <div className="testimonials-grid">
                    <div className="testimonial">
                        <p className="testimonial-text">
                            "Consegui resultados incríveis! Perdi peso e me sinto muito mais feliz 
                            comigo mesma. A Victoria é uma profissional excepcional!"
                        </p>
                        <div className="testimonial-author">- Emily S.</div>
                    </div>
                    <div className="testimonial">
                        <p className="testimonial-text">
                            "As roupas estão caindo melhor no corpo e me sinto muito mais confiante. 
                            Obrigada por toda ajuda!"
                        </p>
                        <div className="testimonial-author">- Arlane S.</div>
                    </div>
                    <div className="testimonial">
                        <p className="testimonial-text">
                            "Adorei o plano! Estou me sentindo muito bem e conseguindo seguir 
                            perfeitamente. Super recomendo!"
                        </p>
                        <div className="testimonial-author">- Fernanda D.</div>
                    </div>
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
                        <div className="footer-logo">VC</div>
                        <div className="footer-info">
                            <div className="footer-title">VICTORIA CORREA</div>
                            <div className="footer-text">NUTRICIONISTA</div>
                        </div>
                    </div>
                    
                    <div className="footer-info">
                        <div className="footer-title">Entre em contato</div>
                        <div className="footer-text">Rua Floriano Peixoto, 495 - Santa Paula</div>
                        <div className="footer-text">São Caetano do Sul - SP</div>
                        <div className="footer-text">Contato: (11) 94066-4806</div>
                    </div>
                    
                    <div className="footer-social">
                        <button className="social-button">
                            📱 WHATSAPP
                        </button>
                        <button className="social-button">
                            📷 INSTAGRAM
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