'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/navBar";
import { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Navbar />

      <section className={styles.hero} id="home">
        <div className={styles.heroContent}>
          <video autoPlay muted loop>
            <source src="/videos/bg-site.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
          <div className={styles.heroTitles}>
            <h1 className={styles.floatingElement}>Impucione sua marca para o próximo nível</h1>
            <p>Transforme sua visão digital: crie experiências online incríveis e alcance resultados surpreendentes com nossa expertise em inovação, tecnologia e marketing.</p>
            <a href="#contact" className={styles.btn}>Transforme</a>
          </div>
        </div>
      </section>

      <section className={styles.servicesContainer} id="services">
        <div className={styles.services}>
          <h2 className={styles.sectionTitle}>Acelere seus resultados em menos tempo, transformando estratégias em ações eficazes, sem que você precise se preocupar com processos ou Softweres complicados. Nossa agência de Marketing Digital cuidará de tudo para você!</h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            /* pagination={{ clickable: true }}
            navigation */
            modules={[Autoplay, Navigation, Pagination]}
          >
            <SwiperSlide>
              <div className={styles.serviceCard}>
                <h3><i className="fas fa-laptop-code"></i> Sites</h3>
                <p>Desenvolvimento de Landing Pages, sites responsivos, modernos e otimizados para todos os dispositivos.</p>
                <button
                  onClick={openModal}
                  className={styles.saibaMaisBtn}
                >
                  Saiba Mais
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.serviceCard}>
                <h3><i className="fas fa-search"></i> SEO</h3>
                <p>Otimização para mecanismos de busca, garantindo que seu site alcance as primeiras posições no Google e atraia mais clientes organicamente.</p>
                <button
                  onClick={openModal}
                  className={styles.saibaMaisBtn}
                >
                  Saiba Mais
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.serviceCard}>
                <h3><i className="fas fa-bullhorn"></i> Marketing Digital</h3>
                <p>Gestão de tráfego pago, campanhas personalizadas no Google Ads e redes sociais para maximizar seu retorno sobre investimento.</p>
                <button
                  onClick={openModal}
                  className={styles.saibaMaisBtn}
                >
                  Saiba Mais
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.serviceCard}>
                <h3><i className="fas fa-search"></i> SEO</h3>
                <p>Otimização para mecanismos de busca, garantindo que seu site alcance as primeiras posições no Google e atraia mais clientes organicamente.</p>
                <button
                  onClick={openModal}
                  className={styles.saibaMaisBtn}
                >
                  Saiba Mais
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.serviceCard}>
                <h3><i className="fas fa-bullhorn"></i> Marketing Digital</h3>
                <p>Gestão de tráfego pago, campanhas personalizadas no Google Ads e redes sociais para maximizar seu retorno sobre investimento.</p>
                <button
                  onClick={openModal}
                  className={styles.saibaMaisBtn}
                >
                  Saiba Mais
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.serviceCard}>
                <h3><i className="fas fa-bullhorn"></i> Análise</h3>
                <p>Procuramos entender seu seguimento de mercado, nicho, e o seu momento atual para criarmos ações específicas.</p>
                <button
                  onClick={openModal}
                  className={styles.saibaMaisBtn}
                >
                  Saiba Mais
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.serviceCard}>
                <h3><i className="fas fa-search"></i> SEO</h3>
                <p>Otimização para mecanismos de busca, garantindo que seu site alcance as primeiras posições no Google e atraia mais clientes organicamente.</p>
                <button
                  onClick={openModal}
                  className={styles.saibaMaisBtn}
                >
                  Saiba Mais
                </button>
              </div>
            </SwiperSlide>
          </Swiper>

          {isModalOpen && (
            <div
              className={`${styles.modalOverlay} ${isModalOpen ? styles.modalActive : ''}`}
              onClick={closeModal}
            >
              <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={closeModal} className={styles.modalClose}>
                  &times;
                </button>

                <h2 className={styles.modalTitle}>
                  Desenvolvimento de Sites Personalizados
                </h2>

                <div className={styles.modalDescription}>
                  <p>Criamos soluções web sob medida que transformam a presença digital do seu negócio. Nosso foco é desenvolver websites que não apenas impressionam visualmente, mas também geram resultados concretos.</p>

                  <div className={styles.modalDetails}>
                    <div className={styles.modalDetailCard}>
                      <h3>Landing Pages</h3>
                      <p>Páginas de alta conversão, otimizadas para capturar leads e aumentar suas vendas com design atraente e chamadas de ação estratégicas.</p>
                    </div>

                    <div className={styles.modalDetailCard}>
                      <h3>Sites Responsivos</h3>
                      <p>Design adaptável que funciona perfeitamente em dispositivos móveis, tablets e desktops, garantindo uma experiência consistente.</p>
                    </div>

                    <div className={styles.modalDetailCard}>
                      <h3>SEO Integrado</h3>
                      <p>Estrutura técnica preparada para ranqueamento nos motores de busca, aumentando sua visibilidade orgânica e atraindo mais clientes.</p>
                    </div>

                    <div className={styles.modalDetailCard}>
                      <h3>Performance Otimizada</h3>
                      <p>Códigos limpos e técnicas de otimização que garantem carregamento rápido e excelente desempenho em todas as plataformas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}



        </div>
      </section>

      <section className={styles.bgSection}>
        <div className={styles.bgContent}>
          <img
            src="./img/think.jpg"
            alt="PenseDigitalImg"
          />
          <h2 className={styles.bgText}>
            Já imaginou transformar uma simples ideia em um negócio de sucesso?
          </h2>
          <p className={styles.bgTxt}>Grandes negócios começam com pequenas ações, e o primeiro passo é acreditar que é possível. Com a World Digital, você transforma essa possibilidade em realidade. Somos especialistas em criar estratégias digitais que conectam sua marca ao público certo, no momento certo. Sua ideia ganha vida e se torna um negócio sólido, competitivo e pronto para liderar no mercado. Não espere mais! Conte com a World Digital para construir o futuro do seu sucesso!</p>
        </div>
      </section>


      <section className={styles.featuresContainer} id="features">
        <div className={styles.features}>
          <h2 className={styles.sectionTitle}>Nossos Diferenciais</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <i className={`fas fa-rocket ${styles.featureIcon}`}></i>
              <h3>Alta Performance</h3>
              <p>Sites otimizados para carregamento rápido e melhor experiência do usuário</p>
            </div>
            <div className={styles.featureCard}>
              <i className={`fas fa-mobile-alt ${styles.featureIcon}`}></i>
              <h3>100% Responsivo</h3>
              <p>Design adaptável para todos os dispositivos e tamanhos de tela</p>
            </div>
            <div className={styles.featureCard}>
              <i className={`fas fa-chart-line ${styles.featureIcon}`}></i>
              <h3>Resultados Comprovados</h3>
              <p>Estratégias comprovadas para aumentar suas conversões</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <h2 className={styles.sectionTitle}>Solicite um Orçamento</h2>
        <form className={styles.contactForm} id="contactForm" /* onSubmit={handleSubmit} */>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Melhor E-mail</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Celular</label>
            <input type="tel" id="phone" name="phone" required /* onChange={handlePhoneMask} */ />
          </div>
          <button type="submit" className={styles.btn}>Solicitar Orçamento</button>
        </form>
      </section>
    </>
  );
}
