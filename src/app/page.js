'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/navBar";

export default function Home() {
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
        <h2 className={styles.sectionTitle}>Nossos Serviços</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3><i className="fas fa-laptop-code"></i> Sites</h3>
            <p>Sites responsivos, modernos e otimizados para todos os dispositivos. Desenvolvimento personalizado para atender às necessidades específicas do seu negócio.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3><i className="fas fa-search"></i> SEO</h3>
            <p>Otimização para mecanismos de busca, garantindo que seu site alcance as primeiras posições no Google e atraia mais clientes organicamente.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3><i className="fas fa-bullhorn"></i> Marketing Digital</h3>
            <p>Gestão de tráfego pago, campanhas personalizadas no Google Ads e redes sociais para maximizar seu retorno sobre investimento.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3><i className="fas fa-bullhorn"></i> Marketing Digital</h3>
            <p>Gestão de tráfego pago, campanhas personalizadas no Google Ads e redes sociais para maximizar seu retorno sobre investimento.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3><i className="fas fa-bullhorn"></i> Marketing Digital</h3>
            <p>Gestão de tráfego pago, campanhas personalizadas no Google Ads e redes sociais para maximizar seu retorno sobre investimento.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3><i className="fas fa-bullhorn"></i> Marketing Digital</h3>
            <p>Gestão de tráfego pago, campanhas personalizadas no Google Ads e redes sociais para maximizar seu retorno sobre investimento.</p>
          </div>
        </div>
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
