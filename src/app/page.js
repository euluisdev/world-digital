'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/navBar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { analytics } from "./firebaseConfig";

import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';


import Analytics from "../../components/analytics";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalContent, setCurrentModalContent] = useState(null);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const text = "Site vai aumentar minhas vendas?";

  const modalContents = {
    sites: {
      title: "Desenvolvimento de Sites",
      description: "Utilizamos conjunto de estratégias para aumentar as chances de conversão de vendas para sua empresa.",
      details: [
        { title: "Landing Pages", text: "Páginas de alta conversão, otimizadas para capturar leads qualificados e aumentar suas vendas com design atraente e responsivo." },
        { title: "Sites Responsivos", text: "Atualmente é primordial seu Site possuir Design adaptável que funcione perfeitamente em qualquer dispositivo móvel, garantindo uma experiência consistente." },
        { title: "SEO Integrado", text: "Estrutura técnica preparada para ranqueamento nos motores de busca, aumentando sua visibilidade orgânica e atraindo mais clientes." },
        { title: "Performance Otimizada", text: "Códigos limpos e técnicas de otimização que garantem carregamento rápido e excelente desempenho em todas as plataformas." },
        { title: "Pixel", text: "Configuração desta Ferramenta essencial para monitorar conversões, otimizar campanhas e alcançar seu público-alvo com precisão. Aumentando a eficiência das estratégias de marketing." },
        { title: "Agilidade", text: "Solicite seu orçamento grátis, e em poucos dias a sua marca estará Online para o Mundo." },
      ],
    },
    seo: {
      title: "SEO",
      description: "Impulsione a visibilidade do seu site nos mecanismos de busca, atraindo mais tráfego orgânico e qualificando sua audiência com estratégias eficazes.",
      details: [
        { title: "SEO Local", text: "Conquiste clientes em sua região com táticas focadas no mercado local, aumentando sua relevância e presença nos mapas e buscas locais." },
        { title: "Análise de Palavras-Chave", text: "Descubra palavras-chave estratégicas e alinhadas ao seu público-alvo para maximizar o alcance e engajamento do seu conteúdo." },
        { title: "Otimização On-Page", text: "Aprimore os aspectos técnicos e de conteúdo do seu site, garantindo uma experiência de usuário superior e melhor performance nos resultados de busca." },
        { title: "Links Building", text: "Criamos estratégias personalizadas para construir links de qualidade, fortalecendo a autoridade do seu site e atraindo visitantes qualificados." },
        { title: "Alta Performance", text: "Produzimos conteúdos otimizados para conectar seu público, gerar engajamento e melhorar o posicionamento do seu site nos mecanismos de busca." },
        { title: "Análise de Concorrência", text: "Analisamos detalhadamente seus concorrentes para desenvolver estratégias que colocam seu site à frente no mercado, dominando os resultados de busca." },
      ],
    },
    marketing: {
      title: "Marketing Estratégico",
      description: "Criamos campanhas personalizadas e estratégicas para maximizar seus resultados, conectar sua marca ao público certo e aumentar sua presença online.",
      details: [
        { title: "Tráfego Pago", text: "Desenvolvemos estratégias otimizadas para campanhas no Google Ads e redes sociais, garantindo mais cliques qualificados e resultados expressivos para o seu negócio." },
        { title: "Análise de Resultados", text: "Fornecemos relatórios detalhados para monitorar e ajustar suas campanhas, maximizando o retorno sobre o investimento e alcançando seus objetivos." },
        { title: "Criação de Conteúdo", text: "Produzimos conteúdo de alta qualidade e alinhado à sua estratégia, atraindo, engajando e convertendo seu público de forma eficaz." },
        { title: "Redes Sociais", text: "Administramos suas redes sociais com estratégias inteligentes e conteúdos impactantes para fortalecer sua marca e engajar seu público." },
        { title: "E-mail Marketing", text: "Criamos campanhas de e-mail personalizadas que fidelizam clientes, aumentam as conversões e mantêm sua marca na mente do público." },
        { title: "Mídia Digital", text: "Desenvolvemos planos estratégicos para investir nos canais certos, alcançando o público ideal e otimizando seus resultados." },
      ],
    },
    landingPages: {
      title: "Landing Pages",
      description: "Landing pages são páginas projetadas para transformar visitantes em leads ou clientes. Confira estratégias práticas que equilibram clareza e eficiência:.",
      details: [
        { title: "Headline Impactante", text: "Invista em uma headline clara e objetiva que desperte curiosidade e interesse imediato, destacando o principal benefício da sua oferta." },
        { title: "Design Responsivo", text: "Um layout limpo, organizado e que se adapte a diferentes dispositivos é fundamental. O design deve direcionar o foco para o conteúdo principal e CTAs, além de carregar rapidamente." },
        { title: "Elementos Visuais", text: "Imagens e vídeos bem escolhidos aumentam o engajamento. Priorize conteúdos visuais relacionados à oferta e otimizados para não comprometer o tempo de carregamento." },
        { title: "Testes A/B", text: "Experimente variações controladas, como cores de botões ou textos de CTA, para identificar o que melhor converte. Analise os resultados antes de implementar mudanças." },
        { title: "Formulários Diretos", text: "Peça apenas informações essenciais para não desestimular os visitantes. Nome e e-mail geralmente são suficientes para começar, com campos adicionais apenas quando necessários." },
        { title: "CTAs Persuasivos", text: "A Call to Action deve ser clara, convincente e estrategicamente posicionada. Utilize verbos de ação e garanta contraste visual para destaque." },
        { title: "Automação", text: "Ferramentas como HubSpot ou Google Analytics ajudam a monitorar leads e otimizar a performance da página. Respostas automáticas mantêm os leads engajados de forma eficiente." },
        { title: "Tipos de LP's", text: "Página de pré-lançamento - Página de vendas - Página de captura de leads - Página de agradecimento - Página de inscrição em evento - Página de download - Página de Upsell ou Cross-sell" },
        { title: "Características", text: "Objetivo claro, Layout atrativo e profissional, conteúdo relevante e persuasivo, formulário de conversão, chamada para ação" },
      ],
    },
    local: {
      title: "Comércio Local",
      description: "Você quer ver sua marca se destacar, crescer e conquistar mais clientes? A World Digital te oferece as estratégias e soluções digitais que vão transformar seu negócio em referência no seu seguimento. Vamos juntos alcançar resultados extraordinários!",
      details: [
        { title: "Cardápio QRcode", text: "Transforme a experiência dos seus clientes com um cardápio digital acessível via QR Code, facilitando a consulta e aumentando a interação, sem a necessidade de contato físico." },
        { title: "Marketing de Localização", text: "Utilizamos ferramentas de geolocalização para promover seu comércio local de forma estratégica, garantindo que você chegue até o público que está ao seu redor e interessado no que você oferece." },
        { title: "Promoções Exclusivas", text: "Desenvolvemos campanhas de promoções e ofertas personalizadas, aumentando a atração de novos clientes e incentivando a fidelização dos que já conhecem sua marca." },
        { title: "Google Negócio", text: "Otimização do seu perfil no Google Meu Negócio, garantindo que seu comércio local seja facilmente encontrado nas buscas e mapas, além de fornecer informações atualizadas e relevantes aos seus clientes." },
        { title: "Delivery Integradas", text: "Conectamos seu comércio local às melhores plataformas de delivery, facilitando as vendas e ampliando seu alcance, permitindo que mais clientes comprem de forma prática e eficiente." },
        { title: "Publicidade Segmentada", text: "Criamos campanhas de tráfego pago e anúncios segmentados para alcançar clientes potenciais na sua região, aumentando a visibilidade do seu comércio e atraindo mais consumidores." },
      ],
    },
    app: {
      title: "Aplicativos e E-Commerce",
      description: "Criamos campanhas personalizadas e estratégicas para maximizar seus resultados, conectar sua marca ao público certo e aumentar sua presença online.",
      details: [
        { title: "App Agendamento", text: "Um Aplicativo de agendamento integrado permite que os clientes marquem horários de forma prática, sem precisar ligar ou esperar na fila. Você pode gerenciar a agenda em tempo real, evitando sobrecarga de horários e garantindo melhor fluxo de atendimento." },
        { title: "Sistema de Fidelização", text: "O aplicativo oferece um programa de pontos ou recompensas para os clientes. Cada visita ou compra pode gerar pontos que podem ser trocados por descontos ou serviços grátis, incentivando a fidelização e o retorno frequente dos clientes." },
        { title: "Treinos Personalizados", text: "O aplicativo é uma solução completa para personal trainers e academias, permitindo criar, gerenciar e personalizar treinos de forma eficiente, proporcionando uma experiência de acompanhamento detalhada para os alunos. Com funcionalidades intuitivas e práticas, o app oferece recursos para otimizar o treinamento e a gestão dos alunos." },
        { title: "Carrinho de Compras", text: " O aplicativo permite que os clientes realizem compras diretamente pelo celular, com um carrinho de compras integrado e fácil de usar. O e-commerce pode gerenciar o estoque e os pedidos em tempo real, evitando problemas de logística e garantindo entregas mais rápidas e eficientes." },
        { title: "Cardápio Digital", text: "O aplicativo pode apresentar um cardápio digital, permitindo que os clientes visualizem os pratos e façam pedidos diretamente pelo celular. Além disso, o app pode enviar promoções personalizadas com base no histórico de pedidos de cada cliente, aumentando a taxa de conversão e fidelizando o público." },
        { title: "Crie seu App", text: "Como funciona? Primeira reunião vamos entender o seu Negócio, analisar seus desafios e diagnosticar os problemas, vamos definir as funcionalidades e o Design. Após isso vamos desenvolver o App, fazer testes e ajustes. E por fim, o lançamento e acompanhamento do sucesso da sua Aplicação!  " },
      ],
    },
    selling: {
      title: "Social Selling",
      description: "O funil de social selling é dividido em várias etapas que visam educar, engajar e nutrir leads até que estejam prontos para comprar. Essa uma visão geral das pricipais etapas de um funil de social selling.",
      details: [
        { title: "Conexões Genuínas", text: "Ao iniciar sua jornada de social selling, o primeiro passo é construir uma rede de conexões autênticas nas redes sociais. Focar em interações genuínas e estabelecer relacionamentos de confiança é essencial. Ao identificar seu público-alvo, você pode conectar-se de forma estratégica, engajando com conteúdo relevante e mostrando interesse nas postagens dos outros. Essas interações criam um ambiente de reconhecimento mútuo, e um perfil otimizado pode ser o diferencial para aumentar sua credibilidade e atrair os leads certos." },
        { title: "Conteúdo Relevante", text: "Com a base de conexões formada, é hora de criar um fluxo constante de conteúdo que agregue valor ao seu público. Ao educar e engajar por meio de postagens e vídeos, você se posiciona como uma autoridade no assunto e conquista a confiança dos seus seguidores. Responder a perguntas e compartilhar insights ajuda a construir um relacionamento mais profundo, fazendo com que seus leads se identifiquem com o que você oferece e sintam que estão recebendo informações úteis e relevantes." },
        { title: "Engajamento Personalizado", text: "À medida que seu relacionamento com os leads se desenvolve, a interação deve se tornar mais personalizada. Comentar nas postagens, responder diretamente às perguntas e iniciar conversas mais íntimas via mensagens diretas são formas de aprofundar a conexão. O objetivo aqui é ouvir ativamente e compreender as necessidades específicas de cada prospect, fornecendo respostas adaptadas à situação deles. Isso cria um ambiente onde o prospect se sente verdadeiramente compreendido e mais propenso a confiar em você." },
        { title: "Leads Qualificados", text: "Quando os sinais de interesse começam a surgir, é hora de qualificar seus leads. Avaliar o nível de prontidão para a compra é crucial para garantir que seu tempo e esforço sejam investidos em prospects com alto potencial. Use perguntas abertas para entender suas necessidades e dores, e determine se eles estão prontos para avançar. A qualificação eficiente ajuda a concentrar suas ações nas pessoas certas, aumentando as chances de conversões bem-sucedidas." },
        { title: "Apresente Soluções", text: "Chegado o momento de apresentar uma proposta, a chave é mostrar como seu produto ou serviço resolve diretamente os problemas do prospect. A comunicação nesse estágio deve ser clara e focada na solução personalizada, que atende às necessidades específicas do cliente. Ao reforçar a proposta de valor e demonstrar como sua solução pode ser aplicada de forma eficaz, você cria confiança e avança o prospect para a próxima fase do funil." },
        { title: "Após a Venda", text: "O processo de social selling não termina com a venda. Após converter um lead, é essencial manter um relacionamento contínuo com o cliente. Isso pode ser feito por meio de suporte pós-venda, feedbacks regulares e incentivando novas interações nas redes sociais. Manter o cliente engajado, seja com ofertas exclusivas ou grupos especializados, ajuda a fidelizá-lo, gerando novas oportunidades de vendas e recomendação para outros leads." },
      ],
    },
  };

  useEffect(() => {
    if (analytics) {
      console.log("Firebase Analytics initialized!");
    }
  }, []);

  const openModal = (key) => {
    setCurrentModalContent(modalContents[key]);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);


  useEffect(() => {
    let typingTimeout;

    const typeText = () => {
      const currentText = text.substring(0, displayText.length + (isDeleting ? -1 : 1));
      setDisplayText(currentText);

      if (!isDeleting && currentText === text) {
        typingTimeout = setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoop((prev) => prev + 1);
      } else {
        typingTimeout = setTimeout(typeText, isDeleting ? 50 : 100);
      }
    };

    typingTimeout = setTimeout(typeText, 100);

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, text]);

  useEffect(() => {
    const cursorBlink = setInterval(() => setCursorVisible((visible) => !visible), 500);
    return () => clearInterval(cursorBlink);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    try {
      const docRef = await addDoc(collection(db, 'contacts'), {
        name,
        email,
        phone,
        createdAt: new Date(),
      });
      setShowModalConfirm(true);

      event.target.reset();

      setTimeout(() => {
        setShowModalConfirm(false);
      }, 3000);

    } catch (e) {
      console.error('Erro ao adicionar documento: ', e);
    }
  };
  

  return (
    <>
      <Analytics />
      <Navbar />

      <section className={styles.hero} id="home">
        <div className={styles.heroContent}>
          <video muted autoPlay loop playsInline>
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
          <h2 className={styles.sectionTitle}>Acelere seus resultados...</h2>
          <p className={styles.sectionSubTitle}>Não somos uma agência de marketing! Usamos nossa expertise em tecnologias para ampliar seu negócio e gerar mais resultados. Isso é a World Digital.</p>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            modules={[Autoplay, Navigation, Pagination]}
          >
            <SwiperSlide>
              <div className={styles.serviceCard}>
                <h3><i className="fas fa-laptop-code"></i> Sites</h3>
                <p>Desenvolvimento de Landing Pages, sites responsivos, modernos e otimizados para todos os dispositivos. Seu Site de forma definitiva e permanente em pouco tempo.</p>
                <button
                  onClick={() => openModal('sites')}
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
                  onClick={() => openModal('seo')}
                  className={styles.saibaMaisBtn}
                >
                  Saiba Mais
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.serviceCard}>
                <h3><i className="fas fa-bullhorn"></i> Marketing Estratégico</h3>
                <p>Gestão de tráfego orgânico e pago. Campanhas personalizadas no Google Ads, Meta e redes sociais para maximizar seu retorno sobre investimento.</p>
                <button
                  onClick={() => openModal('marketing')}
                  className={styles.saibaMaisBtn}
                >
                  Saiba Mais
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.serviceCard}>
                <h3><i className="fas fa-bullhorn"></i> Landing Pages</h3>
                <p>7 Dicas essenciais para criar Landing Pages de alta conversão. Com essas práticas, você cria landing pages mais eficientes, otimizando conversões sem complicar o processo!</p>
                <button
                  onClick={() => openModal('landingPages')}
                  className={styles.saibaMaisBtn}
                >
                  Saiba Mais
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.serviceCard}>
                <h3><i className="fas fa-bullhorn"></i> Comércio Local</h3>
                <p>Você quer atrair mais clientes e vender mais? Fique por dentro de algumas das melhores estratégias de marketing digital, personalizadas para o seu comércio local, e veja sua Marca crescer de forma exponencial.</p>
                <button
                  onClick={() => openModal('local')}
                  className={styles.saibaMaisBtn}
                >
                  Saiba Mais
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.serviceCard}>
                <h3><i className="fas fa-bullhorn"></i> Aplicativos e E-Commerce</h3>
                <p>Gestão de tráfego orgânico e pago. Campanhas personalizadas no Google Ads, Meta e redes sociais para maximizar seu retorno sobre investimento.</p>
                <button
                  onClick={() => openModal('app')}
                  className={styles.saibaMaisBtn}
                >
                  Saiba Mais
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.serviceCard}>
                <h3><i className="fas fa-bullhorn"></i> Social Selling</h3>
                <p>O funil de social selling é um conceito que se refere ao processo de utilizar plataformas de redes sociais para construir relacionamentos e gerar vendas.</p>
                <button
                  onClick={() => openModal('selling')}
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

                <h2 className={styles.modalTitle}>{currentModalContent?.title}</h2>

                <div className={styles.modalDescription}>
                  <p>{currentModalContent?.description}</p>

                  <div className={styles.modalDetails}>
                    {currentModalContent?.details.map((detail, index) => (
                      <div key={index} className={styles.modalDetailCard}>
                        <h3>{detail.title}</h3>
                        <p>{detail.text}</p>
                      </div>
                    ))}
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
          <h2 className={styles.sectionTitle}>
            Por que criar um {displayText}
            <span style={{ visibility: cursorVisible ? "visible" : "hidden" }}>|</span>
          </h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <i className={`fas fa-rocket ${styles.featureIcon}`}></i>
              <img
                src="./img/tablet01.png"
                alt="iconImg"
                className={styles.IconImg}
              />
              <h3>Visibilidade Online</h3>
              <p>Ao criar um site, sua empresa ganha visibilidade global. Com uma presença digital forte, você pode ser encontrado facilmente pelos clientes em potencial, aumentando as chances de conversão.</p>
            </div>
            <div className={styles.featureCard}>
              <i className={`fas fa-mobile-alt ${styles.featureIcon}`}></i>
              <img
                src="./img/iconPc01.png"
                alt="iconImg"
                className={styles.IconImg}
              />
              <h3>Credibilidade</h3>
              <p>Clientes confiam mais em empresas com sites profissionais. Ao investir em um site bem estruturado, você transmite confiança e seriedade, conquistando a confiança dos seus consumidores.</p>
            </div>
            <div className={styles.featureCard}>
              <i className={`fas fa-chart-line ${styles.featureIcon}`}></i>
              <img
                src="./img/iconWorld01.png"
                alt="iconImg"
                className={styles.IconImg}
              />
              <h3>Acesso 24/7</h3>
              <p>Seu site estará disponível o tempo todo, permitindo que clientes realizem compras ou conheçam seus serviços a qualquer hora. Isso significa mais oportunidades de vendas, mesmo fora do horário comercial.</p>
            </div>
            <div className={styles.featureCard}>
              <i className={`fas fa-chart-line ${styles.featureIcon}`}></i>
              <img
                src="./img/iconNot01.png"
                alt="iconImg"
                className={styles.IconImg}
              />
              <h3>Engajamento Direto</h3>
              <p>Com um site, você pode integrar formulários de contato, chat ao vivo e outros recursos para se comunicar diretamente com seus clientes, criando uma conexão mais próxima e estimulando a lealdade à sua marca.</p>
            </div>
            <div className={styles.featureCard}>
              <i className={`fas fa-chart-line ${styles.featureIcon}`}></i>
              <img
                src="./img/iconCredit01.png"
                alt="iconImg"
                className={styles.IconImg}
              />
              <h3>Marketing Personalizado</h3>
              <p>Ter um site permite que você implemente estratégias de marketing digital, como SEO e e-mail marketing, para atrair visitantes qualificados e convertê-los em clientes fiéis.</p>
            </div>
            <div className={styles.featureCard}>
              <i className={`fas fa-chart-line ${styles.featureIcon}`}></i>
              <img
                src="./img/iconSeta01.png"
                alt="iconImg"
                className={styles.IconImg}
              />
              <h3>Concorrência Menor</h3>
              <p>Ao criar um site, você se posiciona como líder em seu mercado. A falta de presença digital de muitos concorrentes oferece uma vantagem competitiva para quem tem um site profissional e bem otimizado.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerText}>
            Transformamos ideias em estratégias que vendem.  Fale conosco !

          </div>
        </div>
      </section>

      <section className={styles.plans} id="plans">
        <h2 className={styles.plansTitle}>
          Planos
        </h2>
        <div className={styles.plansCard}>
          <img
            src="./img/retenc.png"
            alt="iconImg"
            className={styles.plansImg}
          />
          <h3>Retenção - Premium </h3>
          <p>Imagine que você já tenha uma base consolidada de clientes e uma estrutura digital bem estruturada. Com essas alicerces estabelecidos, vamos criar programas de fidelidade, oferecer benefícios exclusivos, implementar pesquisas de satisfação, Remarketing para reengajar leads, canais de comunicação proativos, como e-mails personalizados. Além disso, a criação de uma comunidade exclusiva e a oferta de conteúdo antecipado e exclusivo ajudam a manter os clientes satisfeitos e engajados, maximizando o índice de retenção de cada cliente.</p>
        </div>
        <div className={styles.plansCard}>
          <img
            src="./img/convert.png"
            alt="iconImg"
            className={styles.plansImg}
          />
          <h3>Conversão - Intermediary </h3>
          <p>A implementação deste Plano garante o desenvolvimento de landing pages otimizadas, estratégias de lead magnets e automatizações de e-mail marketing personalizadas, garantindo uma jornada eficaz que aumenta a taxa de conversão dos seus clientes. É essencial para você que já tem uma base sólida de leads e uma estrutura digital bem estabelecida e consistente, com um site otimizado, canais de comunicação eficientes e dados organizados.</p>
        </div>
        <div className={styles.plansCard}>
          <img
            src="./img/atraction.png"
            alt="iconImg"
            className={styles.plansImg}
          />
          <h3>Atração - Plan Basic </h3>
          <p>Ao iniciarmos o plano de atração, é essencial estruturarmos toda a base digital da sua marca. Isso inclui otimização do site, criação de uma identidade visual consistente, definição de público-alvo, a implementação de ferramentas para coleta de dados e análise de resultados. Apenas com essa estruturação prévia é possível garantir que as próximas estratégias como: SEO, marketing de conteúdo, redes sociais, anúncios pagos e parcerias estratégicas do Plano de Atração sejam eficazes.</p>
        </div>
        <div className={styles.plansCard}>
          <img
            src="./img/added.png"
            alt="iconImg"
            className={styles.plansImg}
          />
          <h3>Adicionais </h3>
          <p>Branding, Logo, Social Media Estratágico, Aplicativo Próprio, Campanhas Sazonais, Promoções e Lançamentos, Cardápio Digital, Scripts de Vendas e estratégias que realmente funcionam.</p>
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <h2 className={styles.sectionTitleForm}>Se isso fizer sentindo para você, a gente vai a partir de agora começar juntos a estruturar ainda mais seu negócio. Faça seu cadastro que te retornaremos em seguida!</h2>
        <form className={styles.contactForm} id="contactForm"  onSubmit={handleSubmit} >
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
          <button type="submit" className={styles.btnForm}>Consultoria Gratuita</button>
        </form>

        {showModalConfirm && (
        <div className={styles.modalConfirm}>
          <div className={styles.modalConfirmContent}>
            <h2>Cadastro Realizado!</h2>
            <p>Seus dados foram enviados com sucesso.</p>
          </div>
        </div>
      )}
      </section>
      <Footer />
    </>
  );
}
