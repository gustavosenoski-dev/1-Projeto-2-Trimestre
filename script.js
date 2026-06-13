/* ============================================================
   PARANÁ AGROTECH — script.js
   • Partículas no hero
   • Modo escuro + tamanho de fonte
   • Tradução PT/EN/ES/DE/ZH
   • Mapa SVG interativo com 11 regiões
   • Tabs de tecnologia
   • FAQ accordion
   • Scroll reveal + counter animation
   • Header com classe .scrolled
   • Menu mobile
============================================================ */

'use strict';

/* =============================================
   1. TRADUÇÕES
============================================= */
const translations = {
  pt: {
    'nav.inicio': 'Início',
    'nav.sobre': 'Sobre',
    'nav.desafios': 'Desafios',
    'nav.solucoes': 'Soluções',
    'nav.indicadores': 'Indicadores',
    'nav.tecnologias': 'Tecnologias',
    'nav.mapa': 'Mapa',
    'nav.faq': 'FAQ',

    'hero.eyebrow': 'CIÊNCIA · TECNOLOGIA · INOVAÇÃO · SUSTENTABILIDADE',
    'hero.line2': 'AgroTech',
    'hero.sub': 'O estado que alimenta o Brasil e o mundo — com ciência, tecnologia de ponta e amor à terra.',
    'hero.cta1': 'Descobrir o Projeto',
    'hero.cta2': 'Ver os Números',
    'hero.stat1': 'Frango Brasileiro',
    'hero.stat2': 'Ton. de Soja',
    'hero.stat3': 'Países Parceiros',

    'sobre.eyebrow': 'Sobre o Projeto',
    'sobre.title': 'Ciência e Tecnologia<br>Transformando o Campo',
    'sobre.lead': 'O Paraná AgroTech mostra como ciência, tecnologia e sustentabilidade estão revolucionando o agronegócio paranaense através de soluções inteligentes e inovadoras.',
    'sobre.p1': 'Produtores utilizam sensores, satélites, drones e inteligência artificial para monitorar lavouras, prever problemas climáticos e aumentar a eficiência produtiva.',
    'sobre.p2': 'Essas tecnologias ajudam a produzir mais alimentos, reduzir custos e preservar recursos naturais, contribuindo para um futuro mais sustentável.',
    'sobre.b1': 'Líder em Frango',
    'sobre.b2': 'Top Soja',
    'sobre.b3': 'Porto Exportador',
    'sobre.b4': 'Inovação',
    'sobre.imgbadge': 'Inovação no Campo',

    'brasil.eyebrow': 'O Brasil e o Paraná',
    'brasil.title': 'Um Estado que Move<br>a Economia Nacional',
    'brasil.f1t': 'Brasil no Mundo',
    'brasil.f1p': 'O Brasil é o maior exportador de soja, café, carne bovina e suco de laranja do mundo — e o Paraná é peça central nessa cadeia.',
    'brasil.f2t': 'Paraná no Brasil',
    'brasil.f2p': 'O Paraná responde por mais de 20% da produção agrícola nacional, sendo referência em grãos, aves, suínos e lácteos.',
    'brasil.f3t': 'Tecnologia de Ponta',
    'brasil.f3p': 'Com centros de pesquisa como a EMBRAPA e universidades de excelência, o Paraná lidera a adoção de agrotecnologia no país.',
    'brasil.f4t': 'Impacto Global',
    'brasil.f4p': 'Produtos paranaenses chegam a mais de 100 países, alimentando milhões de pessoas e gerando bilhões em divisas para o país.',

    'desafios.eyebrow': 'Desafios',
    'desafios.title': 'Os Grandes Desafios<br>do Agronegócio',
    'desafios.c1t': 'Mudanças Climáticas',
    'desafios.c1p': 'Secas, geadas e eventos extremos afetam diretamente a produtividade agrícola, exigindo adaptação constante.',
    'desafios.c2t': 'Uso da Água',
    'desafios.c2p': 'O uso inadequado da irrigação gera desperdícios e eleva custos, tornando a gestão hídrica um imperativo.',
    'desafios.c3t': 'Pragas e Doenças',
    'desafios.c3p': 'Insetos, fungos e doenças agrícolas causam prejuízos milionários a cada safra, demandando vigilância constante.',
    'desafios.c4t': 'Crescimento Populacional',
    'desafios.c4p': 'A demanda por alimentos cresce sem parar, exigindo maior eficiência produtiva com menos recursos naturais.',

    'solucoes.eyebrow': 'Soluções Tecnológicas',
    'solucoes.title': 'Como a Tecnologia<br>Resolve Esses Problemas',
    'sol.s1t': 'Drones Agrícolas',
    'sol.s1p': 'Monitoram grandes áreas rapidamente e identificam falhas, pragas e doenças nas plantações com alta precisão.',
    'sol.s1tag': 'Monitoramento',
    'sol.s2t': 'Inteligência Artificial',
    'sol.s2p': 'Analisa milhares de dados para prever problemas e auxiliar produtores nas decisões certas, no momento certo.',
    'sol.s2tag': 'Previsão',
    'sol.s3t': 'Satélites',
    'sol.s3p': 'Acompanham lavouras em tempo real através de imagens de alta resolução e análise espectral do solo.',
    'sol.s3tag': 'Análise',
    'sol.s4t': 'Sensores IoT',
    'sol.s4p': 'Medem temperatura, umidade e nutrientes do solo continuamente, enviando dados em tempo real.',
    'sol.s4tag': 'Dados',
    'sol.s5t': 'Automação',
    'sol.s5p': 'Máquinas modernas executam tarefas agrícolas com muito mais precisão, velocidade e eficiência.',
    'sol.s5tag': 'Eficiência',
    'sol.s6t': 'Energia Renovável',
    'sol.s6p': 'Painéis solares e outras fontes limpas ajudam a reduzir custos operacionais e impactos ambientais.',
    'sol.s6tag': 'Sustentável',

    'indicadores.eyebrow': 'Indicadores',
    'indicadores.title': 'O Paraná em Números',
    'ind.s1': 'Produção Brasileira de Frango',
    'ind.s2': 'Produção Brasileira de Soja',
    'ind.s3': 'Produção Brasileira de Milho',
    'ind.s4': 'Exportações Agrícolas Nacionais',
    'ind.p1t': '🌱 Soja',
    'ind.p1p': 'Entre os maiores produtores do Brasil',
    'ind.p2t': '🌽 Milho',
    'ind.p2p': 'Essencial para alimentação humana e ração',
    'ind.p3t': '🐔 Frango',
    'ind.p3p': 'Líder absoluto na produção nacional',
    'ind.p4t': '🚢 Exportações',
    'ind.p4p': 'Produtos paranaenses no mundo inteiro',

    'tecnologias.eyebrow': 'Tecnologias',
    'tecnologias.title': 'As Ferramentas que<br>Revolucionam o Campo',
    'tech.tab1': 'Drones',
    'tech.tab2': 'Satélites',
    'tech.tab3': 'IA',
    'tech.tab4': 'IoT',
    'tech.tab5': 'Máquinas',
    'tech.tab6': 'Solar',
    'tech.d1t': 'Drones Agrícolas',
    'tech.d1p': 'Voam sobre hectares de lavoura capturando imagens multiespectrais, identificando problemas invisíveis ao olho humano.',
    'tech.d1l1': '📸 Mapeamento aéreo de alta resolução',
    'tech.d1l2': '🦟 Detecção precoce de pragas e doenças',
    'tech.d1l3': '💊 Pulverização inteligente e localizada',
    'tech.d1l4': '📈 Análise do crescimento das culturas',
    'tech.d2t': 'Satélites',
    'tech.d2p': 'Permitem monitoramento agrícola em escala regional, rastreando o desenvolvimento das lavouras em tempo real.',
    'tech.d2l1': '🌤️ Monitoramento climático preciso',
    'tech.d2l2': '🌿 Análise de índice de vegetação (NDVI)',
    'tech.d2l3': '📅 Planejamento de safras',
    'tech.d2l4': '🗺️ Imagens em tempo real de alta resolução',
    'tech.d3t': 'Inteligência Artificial',
    'tech.d3p': 'Algoritmos avançados processam terabytes de dados para fornecer recomendações precisas aos agricultores.',
    'tech.d3l1': '🔮 Previsão de produtividade por talhão',
    'tech.d3l2': '🧪 Diagnóstico automático de doenças',
    'tech.d3l3': '💡 Recomendações de adubação',
    'tech.d3l4': '📊 Análise preditiva de mercado',
    'tech.d4t': 'Sensores IoT',
    'tech.d4p': 'Dispositivos conectados coletam dados do solo e da atmosfera, enviando informações em tempo real para o produtor.',
    'tech.d4l1': '💧 Monitoramento de umidade do solo',
    'tech.d4l2': '🌡️ Temperatura e microclima',
    'tech.d4l3': '🧂 Análise de nutrientes disponíveis',
    'tech.d4l4': '🚿 Irrigação inteligente e automatizada',
    'tech.d5t': 'Tratores Autônomos',
    'tech.d5p': 'Equipados com GPS de alta precisão e sistemas de navegação autônoma, trabalham com mínima intervenção humana.',
    'tech.d5l1': '🎯 Plantio com precisão centimétrica',
    'tech.d5l2': '⏱️ Operação 24 horas por dia',
    'tech.d5l3': '♻️ Menor desperdício de insumos',
    'tech.d5l4': '📱 Controle remoto via smartphone',
    'tech.d6t': 'Energia Solar',
    'tech.d6p': 'Propriedades rurais adotam painéis fotovoltaicos para gerar energia limpa, reduzir custos e ganhar autonomia energética.',
    'tech.d6l1': '⚡ Geração de energia on-grid e off-grid',
    'tech.d6l2': '💰 Retorno do investimento em 5-7 anos',
    'tech.d6l3': '🌿 Zero emissões de carbono',
    'tech.d6l4': '🔋 Armazenamento em baterias',

    'mapa.eyebrow': 'Mapa Interativo',
    'mapa.title': 'Regiões Agrícolas<br>do Paraná',
    'mapa.sub': 'Clique em uma região para explorar suas características agrícolas',
    'mapa.default.title': 'Explore o Paraná',
    'mapa.default.sub': 'Selecione uma região no mapa para ver detalhes sobre sua produção agrícola, tecnologias e destaques.',
    'mapa.back': 'Voltar',

    'cidades.eyebrow': 'Municípios',
    'cidades.title': 'Cidades que Fazem<br>a Diferença',
    'cidades.c1': 'Referência nacional em tecnologia agrícola e agronegócio',
    'cidades.c2': 'Polo universitário e grande centro de pesquisa agrícola',
    'cidades.c3': 'Destaque em inovação, cooperativismo e produção agrícola',
    'cidades.c4': 'Uma das maiores produtoras de trigo do Brasil',
    'cidades.c5': 'Referência nacional em produção de aves e suínos',
    'cidades.c6': 'Um dos maiores portos exportadores da América Latina',

    'pesquisa.eyebrow': 'Pesquisa Científica',
    'pesquisa.title': 'Inovação Nascida<br>nos Laboratórios',
    'pesquisa.s1t': 'Melhoramento Genético',
    'pesquisa.s1p': 'Desenvolvimento de sementes mais resistentes, produtivas e adaptadas às condições do Paraná.',
    'pesquisa.s2t': 'Biotecnologia',
    'pesquisa.s2p': 'Aplicação da ciência para aumentar produtividade, resistência a pragas e sustentabilidade ambiental.',
    'pesquisa.s3t': 'Monitoramento Climático',
    'pesquisa.s3p': 'Previsões meteorológicas de alta precisão auxiliam o planejamento e a gestão de riscos agrícolas.',
    'pesquisa.s4t': 'Pesquisa Aplicada',
    'pesquisa.s4p': 'Universidades e centros como EMBRAPA desenvolvem continuamente novas soluções para o campo paranaense.',

    'futuro.eyebrow': 'Visão de Futuro',
    'futuro.title': 'O Agronegócio<br>em 2050',
    'futuro.lead': 'O futuro do campo será marcado pela automação total, inteligência artificial avançada, robótica e plena sustentabilidade ambiental.',
    'futuro.f1t': 'Robôs Agrícolas',
    'futuro.f1p': 'Plantio, colheita e manutenção totalmente automatizados por robôs inteligentes.',
    'futuro.f2t': 'Fazendas 5G',
    'futuro.f2p': 'Propriedades totalmente conectadas, com sensores em cada centímetro do solo.',
    'futuro.f3t': 'IA Avançada',
    'futuro.f3p': 'Sistemas que tomam decisões autônomas para maximizar produtividade e minimizar impactos.',
    'futuro.f4t': 'Frotas de Drones',
    'futuro.f4p': 'Centenas de drones coordenados monitorando e tratando lavouras automaticamente.',
    'futuro.f5t': 'Energia 100% Limpa',
    'futuro.f5p': 'Propriedades rurais totalmente abastecidas por fontes renováveis, sem dependência de combustíveis.',
    'futuro.f6t': 'Carbono Zero',
    'futuro.f6p': 'Agricultura com saldo neutro ou positivo de carbono, revertendo as mudanças climáticas.',

    'sust.eyebrow': 'Sustentabilidade',
    'sust.title': 'Tecnologia que<br>Cuida do Planeta',
    'sust.s1t': 'Economia de Água',
    'sust.s1p': 'Sensores e irrigação inteligente podem reduzir o consumo de água em até 40%.',
    'sust.s2t': 'Menos Defensivos',
    'sust.s2p': 'Aplicação localizada de agroquímicos reduz o uso em até 30%, preservando o ecossistema.',
    'sust.s3t': 'Solo Saudável',
    'sust.s3p': 'Monitoramento constante garante a saúde do solo para as próximas gerações.',
    'sust.s4t': 'Menos Emissões',
    'sust.s4p': 'Máquinas modernas e energia solar reduzem emissões de CO₂ em propriedades rurais.',
    'sust.s5t': 'Energia Renovável',
    'sust.s5p': 'O Paraná é líder regional em adoção de energia solar em propriedades rurais.',
    'sust.s6t': 'Biodiversidade',
    'sust.s6p': 'Tecnologia auxilia no mapeamento e preservação de áreas de mata nativa e corredores ecológicos.',

    'faq.eyebrow': 'Perguntas Frequentes',
    'faq.title': 'Dúvidas sobre<br>Tecnologia no Campo',
    'faq.q1': 'O que é agricultura de precisão?',
    'faq.a1': 'É o uso integrado de tecnologias como GPS, sensores, drones e inteligência artificial para gerenciar variações dentro das lavouras, aumentando a eficiência e reduzindo desperdícios de insumos e recursos naturais.',
    'faq.q2': 'Como os drones ajudam os agricultores?',
    'faq.a2': 'Drones sobrevoam as lavouras capturando imagens multiespectrais que revelam problemas invisíveis ao olho humano, como deficiências nutricionais, áreas com estresse hídrico e focos iniciais de pragas.',
    'faq.q3': 'O que a Inteligência Artificial faz na agricultura?',
    'faq.a3': 'A IA processa enormes volumes de dados — histórico climático, imagens de satélite, dados de sensores — para fazer previsões, diagnosticar problemas e recomendar ações precisas.',
    'faq.q4': 'Por que o Paraná é referência no agronegócio?',
    'faq.a4': 'O Paraná combina clima favorável, solo fértil e alta tecnologia. O estado lidera a produção nacional de frango, é um dos maiores produtores de soja e milho, e possui centros de pesquisa de excelência.',
    'faq.q5': 'Como a tecnologia ajuda o meio ambiente?',
    'faq.a5': 'A tecnologia permite produzir mais com menos: menos água, menos agroquímicos, menos combustível, menos área desmatada. Sensores evitam irrigação em excesso, drones permitem pulverização cirúrgica.',
    'faq.q6': 'Pequenos produtores também podem usar essas tecnologias?',
    'faq.a6': 'Sim! Muitas tecnologias estão se tornando acessíveis a pequenos e médios produtores através de cooperativas, modelos de assinatura e programas governamentais.',

    'conclusao.eyebrow': 'Conclusão',
    'conclusao.title': 'O Futuro do Campo<br><em>Começa Hoje</em>',
    'conclusao.p': 'O Paraná demonstra para o Brasil e o mundo que ciência, tecnologia e sustentabilidade podem — e devem — caminhar juntas. Produzir mais alimentos, preservar o meio ambiente e impulsionar a economia não são objetivos conflitantes.',
    'conclusao.cta1': 'Voltar ao Início',
    'conclusao.cta2': 'Explorar o Mapa',

    'footer.desc': 'Projeto educacional sobre Ciência, Tecnologia, Inovação e Sustentabilidade no Agronegócio Paranaense.',
    'footer.nav': 'Navegação',
    'footer.temas': 'Temas',
    'footer.edu': 'Projeto Educacional',
  },

  en: {
    'nav.inicio': 'Home', 'nav.sobre': 'About', 'nav.desafios': 'Challenges',
    'nav.solucoes': 'Solutions', 'nav.indicadores': 'Data', 'nav.tecnologias': 'Tech',
    'nav.mapa': 'Map', 'nav.faq': 'FAQ',
    'hero.eyebrow': 'SCIENCE · TECHNOLOGY · INNOVATION · SUSTAINABILITY',
    'hero.line2': 'AgroTech',
    'hero.sub': 'The state that feeds Brazil and the world — with science, cutting-edge technology and love for the land.',
    'hero.cta1': 'Discover the Project', 'hero.cta2': 'See the Numbers',
    'hero.stat1': 'Brazilian Chicken', 'hero.stat2': 'Tons of Soy', 'hero.stat3': 'Partner Countries',
    'sobre.eyebrow': 'About the Project',
    'sobre.title': 'Science & Technology<br>Transforming Agriculture',
    'sobre.lead': 'Paraná AgroTech shows how science, technology and sustainability are revolutionizing agribusiness through smart and innovative solutions.',
    'sobre.p1': 'Farmers use sensors, satellites, drones and artificial intelligence to monitor crops, predict climate issues and increase production efficiency.',
    'sobre.p2': 'These technologies help produce more food, reduce costs and preserve natural resources, contributing to a more sustainable future.',
    'sobre.b1': 'Chicken Leader', 'sobre.b2': 'Top Soy', 'sobre.b3': 'Export Port', 'sobre.b4': 'Innovation',
    'sobre.imgbadge': 'Innovation in the Field',
    'brasil.eyebrow': 'Brazil & Paraná',
    'brasil.title': 'A State that Drives<br>the National Economy',
    'brasil.f1t': 'Brazil in the World', 'brasil.f1p': 'Brazil is the world\'s largest exporter of soybeans, coffee, beef and orange juice — and Paraná is central to this chain.',
    'brasil.f2t': 'Paraná in Brazil', 'brasil.f2p': 'Paraná accounts for over 20% of national agricultural output, being a reference in grains, poultry, pork and dairy.',
    'brasil.f3t': 'Cutting-Edge Tech', 'brasil.f3p': 'With research centers like EMBRAPA and excellent universities, Paraná leads the adoption of agrotech in Brazil.',
    'brasil.f4t': 'Global Impact', 'brasil.f4p': 'Products from Paraná reach more than 100 countries, feeding millions of people and generating billions in foreign exchange.',
    'desafios.eyebrow': 'Challenges',
    'desafios.title': 'The Major Challenges<br>of Agribusiness',
    'desafios.c1t': 'Climate Change', 'desafios.c1p': 'Droughts, frosts and extreme events directly affect agricultural productivity, requiring constant adaptation.',
    'desafios.c2t': 'Water Use', 'desafios.c2p': 'Inadequate irrigation generates waste and raises costs, making water management an imperative.',
    'desafios.c3t': 'Pests & Disease', 'desafios.c3p': 'Insects, fungi and agricultural diseases cause billions in losses each harvest season.',
    'desafios.c4t': 'Population Growth', 'desafios.c4p': 'Food demand keeps growing, requiring greater productive efficiency with fewer natural resources.',
    'solucoes.eyebrow': 'Tech Solutions',
    'solucoes.title': 'How Technology<br>Solves These Problems',
    'sol.s1t': 'Agricultural Drones', 'sol.s1p': 'Monitor large areas quickly and identify failures, pests and diseases in crops with high precision.', 'sol.s1tag': 'Monitoring',
    'sol.s2t': 'Artificial Intelligence', 'sol.s2p': 'Analyzes thousands of data points to predict problems and assist farmers in making the right decisions.', 'sol.s2tag': 'Prediction',
    'sol.s3t': 'Satellites', 'sol.s3p': 'Track crops in real time through high-resolution imagery and spectral soil analysis.', 'sol.s3tag': 'Analysis',
    'sol.s4t': 'IoT Sensors', 'sol.s4p': 'Measure soil temperature, moisture and nutrients continuously, sending real-time data.', 'sol.s4tag': 'Data',
    'sol.s5t': 'Automation', 'sol.s5p': 'Modern machines perform agricultural tasks with far greater precision, speed and efficiency.', 'sol.s5tag': 'Efficiency',
    'sol.s6t': 'Renewable Energy', 'sol.s6p': 'Solar panels and clean energy sources help reduce operating costs and environmental impacts.', 'sol.s6tag': 'Sustainable',
    'indicadores.eyebrow': 'Indicators', 'indicadores.title': 'Paraná by the Numbers',
    'ind.s1': 'Brazilian Chicken Production', 'ind.s2': 'Brazilian Soy Production', 'ind.s3': 'Brazilian Corn Production', 'ind.s4': 'National Agricultural Exports',
    'ind.p1t': '🌱 Soybean', 'ind.p1p': 'Among the largest producers in Brazil',
    'ind.p2t': '🌽 Corn', 'ind.p2p': 'Essential for human food and animal feed',
    'ind.p3t': '🐔 Chicken', 'ind.p3p': 'Absolute leader in national production',
    'ind.p4t': '🚢 Exports', 'ind.p4p': 'Products from Paraná reaching the whole world',
    'tecnologias.eyebrow': 'Technologies', 'tecnologias.title': 'The Tools that<br>Revolutionize Agriculture',
    'tech.tab1': 'Drones', 'tech.tab2': 'Satellites', 'tech.tab3': 'AI', 'tech.tab4': 'IoT', 'tech.tab5': 'Machines', 'tech.tab6': 'Solar',
    'tech.d1t': 'Agricultural Drones', 'tech.d1p': 'Fly over crop hectares capturing multispectral images, identifying problems invisible to the human eye.',
    'tech.d1l1': '📸 High-resolution aerial mapping', 'tech.d1l2': '🦟 Early pest and disease detection', 'tech.d1l3': '💊 Smart targeted spraying', 'tech.d1l4': '📈 Crop growth analysis',
    'tech.d2t': 'Satellites', 'tech.d2p': 'Enable agricultural monitoring at regional scale, tracking crop development in real time.',
    'tech.d2l1': '🌤️ Accurate climate monitoring', 'tech.d2l2': '🌿 Vegetation index (NDVI) analysis', 'tech.d2l3': '📅 Harvest planning', 'tech.d2l4': '🗺️ High-resolution real-time images',
    'tech.d3t': 'Artificial Intelligence', 'tech.d3p': 'Advanced algorithms process terabytes of data to deliver precise recommendations to farmers.',
    'tech.d3l1': '🔮 Plot-level productivity forecasting', 'tech.d3l2': '🧪 Automatic disease diagnosis', 'tech.d3l3': '💡 Fertilization recommendations', 'tech.d3l4': '📊 Predictive market analysis',
    'tech.d4t': 'IoT Sensors', 'tech.d4p': 'Connected devices collect soil and atmospheric data, sending real-time info to the farmer.',
    'tech.d4l1': '💧 Soil moisture monitoring', 'tech.d4l2': '🌡️ Temperature and microclimate', 'tech.d4l3': '🧂 Available nutrient analysis', 'tech.d4l4': '🚿 Smart automated irrigation',
    'tech.d5t': 'Autonomous Tractors', 'tech.d5p': 'Equipped with high-precision GPS and autonomous navigation, operating with minimal human intervention.',
    'tech.d5l1': '🎯 Centimeter-precise planting', 'tech.d5l2': '⏱️ 24-hour operation', 'tech.d5l3': '♻️ Less input waste', 'tech.d5l4': '📱 Smartphone remote control',
    'tech.d6t': 'Solar Energy', 'tech.d6p': 'Rural properties adopt photovoltaic panels to generate clean energy, cut costs and gain energy independence.',
    'tech.d6l1': '⚡ On-grid and off-grid generation', 'tech.d6l2': '💰 ROI in 5–7 years', 'tech.d6l3': '🌿 Zero carbon emissions', 'tech.d6l4': '🔋 Battery storage',
    'mapa.eyebrow': 'Interactive Map', 'mapa.title': 'Agricultural Regions<br>of Paraná',
    'mapa.sub': 'Click a region to explore its agricultural characteristics',
    'mapa.default.title': 'Explore Paraná', 'mapa.default.sub': 'Select a region on the map to see details about its agricultural production, technologies and highlights.',
    'mapa.back': 'Back',
    'cidades.eyebrow': 'Cities', 'cidades.title': 'Cities that Make<br>a Difference',
    'cidades.c1': 'National reference in agricultural technology and agribusiness',
    'cidades.c2': 'University hub and major agricultural research center',
    'cidades.c3': 'Highlight in innovation, cooperativism and agricultural production',
    'cidades.c4': 'One of Brazil\'s largest wheat producers',
    'cidades.c5': 'National reference in poultry and pork production',
    'cidades.c6': 'One of Latin America\'s largest export ports',
    'pesquisa.eyebrow': 'Scientific Research', 'pesquisa.title': 'Innovation Born<br>in Laboratories',
    'pesquisa.s1t': 'Genetic Improvement', 'pesquisa.s1p': 'Development of more resistant, productive seeds adapted to Paraná\'s conditions.',
    'pesquisa.s2t': 'Biotechnology', 'pesquisa.s2p': 'Application of science to increase productivity, pest resistance and environmental sustainability.',
    'pesquisa.s3t': 'Climate Monitoring', 'pesquisa.s3p': 'High-precision weather forecasts support agricultural planning and risk management.',
    'pesquisa.s4t': 'Applied Research', 'pesquisa.s4p': 'Universities and centers like EMBRAPA continuously develop new solutions for Paraná\'s fields.',
    'futuro.eyebrow': 'Future Vision', 'futuro.title': 'Agribusiness<br>in 2050',
    'futuro.lead': 'The future of agriculture will be marked by full automation, advanced AI, robotics and complete environmental sustainability.',
    'futuro.f1t': 'Agricultural Robots', 'futuro.f1p': 'Fully automated planting, harvesting and maintenance by intelligent robots.',
    'futuro.f2t': '5G Farms', 'futuro.f2p': 'Fully connected properties with sensors in every centimeter of the soil.',
    'futuro.f3t': 'Advanced AI', 'futuro.f3p': 'Systems that make autonomous decisions to maximize productivity and minimize impact.',
    'futuro.f4t': 'Drone Fleets', 'futuro.f4p': 'Hundreds of coordinated drones monitoring and treating crops automatically.',
    'futuro.f5t': '100% Clean Energy', 'futuro.f5p': 'Rural properties fully powered by renewables, without fossil fuel dependence.',
    'futuro.f6t': 'Net Zero Carbon', 'futuro.f6p': 'Farming with a neutral or positive carbon balance, reversing climate change.',
    'sust.eyebrow': 'Sustainability', 'sust.title': 'Technology that<br>Cares for the Planet',
    'sust.s1t': 'Water Savings', 'sust.s1p': 'Smart sensors and irrigation can cut water consumption by up to 40%.',
    'sust.s2t': 'Fewer Chemicals', 'sust.s2p': 'Targeted application of agrochemicals reduces use by up to 30%, preserving the ecosystem.',
    'sust.s3t': 'Healthy Soil', 'sust.s3p': 'Constant monitoring ensures soil health for future generations.',
    'sust.s4t': 'Less Emissions', 'sust.s4p': 'Modern machines and solar energy reduce CO₂ emissions from rural properties.',
    'sust.s5t': 'Renewable Energy', 'sust.s5p': 'Paraná is the regional leader in solar energy adoption at rural properties.',
    'sust.s6t': 'Biodiversity', 'sust.s6p': 'Technology helps map and preserve native forest areas and ecological corridors.',
    'faq.eyebrow': 'FAQ', 'faq.title': 'Questions About<br>Technology in Agriculture',
    'faq.q1': 'What is precision agriculture?',
    'faq.a1': 'It\'s the integrated use of technologies like GPS, sensors, drones and AI to manage variations within crops, increasing efficiency and reducing waste of inputs and natural resources.',
    'faq.q2': 'How do drones help farmers?',
    'faq.a2': 'Drones fly over crops capturing multispectral images revealing problems invisible to the human eye, such as nutrient deficiencies, water-stressed areas and early pest outbreaks.',
    'faq.q3': 'What does AI do in agriculture?',
    'faq.a3': 'AI processes massive volumes of data — climate history, satellite images, sensor data — to make predictions, diagnose problems and recommend precise actions.',
    'faq.q4': 'Why is Paraná a benchmark in agribusiness?',
    'faq.a4': 'Paraná combines favorable climate, fertile soil and high technology. The state leads national chicken production and is among the top soy and corn producers, with excellent research centers.',
    'faq.q5': 'How does technology help the environment?',
    'faq.a5': 'Technology allows producing more with less: less water, fewer chemicals, less fuel, less deforestation. Sensors prevent over-irrigation, drones enable surgical spraying.',
    'faq.q6': 'Can small farmers also use these technologies?',
    'faq.a6': 'Yes! Many technologies are becoming accessible to small and medium farmers through cooperatives, subscription models and government programs.',
    'conclusao.eyebrow': 'Conclusion', 'conclusao.title': 'The Future of the Field<br><em>Starts Today</em>',
    'conclusao.p': 'Paraná shows Brazil and the world that science, technology and sustainability can — and should — go hand in hand. Producing more food, preserving the environment and boosting the economy are not conflicting goals.',
    'conclusao.cta1': 'Back to Top', 'conclusao.cta2': 'Explore the Map',
    'footer.desc': 'Educational project on Science, Technology, Innovation and Sustainability in Paraná\'s Agribusiness.',
    'footer.nav': 'Navigation', 'footer.temas': 'Topics', 'footer.edu': 'Educational Project',
  },

  es: {
    'nav.inicio': 'Inicio', 'nav.sobre': 'Acerca', 'nav.desafios': 'Desafíos',
    'nav.solucoes': 'Soluciones', 'nav.indicadores': 'Datos', 'nav.tecnologias': 'Tecnologías',
    'nav.mapa': 'Mapa', 'nav.faq': 'Preguntas',
    'hero.eyebrow': 'CIENCIA · TECNOLOGÍA · INNOVACIÓN · SOSTENIBILIDAD',
    'hero.line2': 'AgroTech',
    'hero.sub': 'El estado que alimenta a Brasil y al mundo — con ciencia, tecnología de punta y amor a la tierra.',
    'hero.cta1': 'Descubrir el Proyecto', 'hero.cta2': 'Ver los Datos',
    'hero.stat1': 'Pollo Brasileño', 'hero.stat2': 'Ton. de Soya', 'hero.stat3': 'Países Socios',
    'sobre.eyebrow': 'Sobre el Proyecto',
    'sobre.title': 'Ciencia y Tecnología<br>Transformando el Campo',
    'sobre.lead': 'Paraná AgroTech muestra cómo la ciencia, la tecnología y la sostenibilidad están revolucionando el agronegocio paranaense.',
    'sobre.p1': 'Los productores usan sensores, satélites, drones e inteligencia artificial para monitorear cultivos y mejorar la eficiencia.',
    'sobre.p2': 'Estas tecnologías ayudan a producir más alimentos, reducir costos y preservar los recursos naturales.',
    'sobre.b1': 'Líder en Pollo', 'sobre.b2': 'Top Soya', 'sobre.b3': 'Puerto Exportador', 'sobre.b4': 'Innovación',
    'sobre.imgbadge': 'Innovación en el Campo',
    'brasil.eyebrow': 'Brasil y Paraná',
    'brasil.title': 'Un Estado que Impulsa<br>la Economía Nacional',
    'brasil.f1t': 'Brasil en el Mundo', 'brasil.f1p': 'Brasil es el mayor exportador mundial de soya, café, carne bovina y zumo de naranja — y Paraná es pieza clave.',
    'brasil.f2t': 'Paraná en Brasil', 'brasil.f2p': 'Paraná responde por más del 20% de la producción agrícola nacional.',
    'brasil.f3t': 'Tecnología de Punta', 'brasil.f3p': 'Con centros como EMBRAPA y universidades de excelencia, Paraná lidera la adopción de agrotecnología.',
    'brasil.f4t': 'Impacto Global', 'brasil.f4p': 'Productos paranaenses llegan a más de 100 países, alimentando millones de personas.',
    'desafios.eyebrow': 'Desafíos',
    'desafios.title': 'Los Grandes Desafíos<br>del Agronegocio',
    'desafios.c1t': 'Cambio Climático', 'desafios.c1p': 'Sequías, heladas y eventos extremos afectan directamente la productividad agrícola.',
    'desafios.c2t': 'Uso del Agua', 'desafios.c2p': 'El uso inadecuado del riego genera desperdicios y eleva costos.',
    'desafios.c3t': 'Plagas y Enfermedades', 'desafios.c3p': 'Insectos, hongos y enfermedades causan millones en pérdidas cada temporada.',
    'desafios.c4t': 'Crecimiento Poblacional', 'desafios.c4p': 'La demanda de alimentos crece sin parar, exigiendo mayor eficiencia productiva.',
    'solucoes.eyebrow': 'Soluciones Tecnológicas',
    'solucoes.title': 'Cómo la Tecnología<br>Resuelve Estos Problemas',
    'sol.s1t': 'Drones Agrícolas', 'sol.s1p': 'Monitorean grandes áreas rápidamente e identifican plagas y enfermedades.', 'sol.s1tag': 'Monitoreo',
    'sol.s2t': 'Inteligencia Artificial', 'sol.s2p': 'Analiza miles de datos para predecir problemas y ayudar a los productores.', 'sol.s2tag': 'Predicción',
    'sol.s3t': 'Satélites', 'sol.s3p': 'Monitorean cultivos en tiempo real con imágenes de alta resolución.', 'sol.s3tag': 'Análisis',
    'sol.s4t': 'Sensores IoT', 'sol.s4p': 'Miden temperatura, humedad y nutrientes del suelo continuamente.', 'sol.s4tag': 'Datos',
    'sol.s5t': 'Automatización', 'sol.s5p': 'Máquinas modernas ejecutan tareas agrícolas con mayor precisión y eficiencia.', 'sol.s5tag': 'Eficiencia',
    'sol.s6t': 'Energía Renovable', 'sol.s6p': 'Paneles solares y energías limpias reducen costos e impactos ambientales.', 'sol.s6tag': 'Sostenible',
    'indicadores.eyebrow': 'Indicadores', 'indicadores.title': 'Paraná en Números',
    'ind.s1': 'Producción Brasileña de Pollo', 'ind.s2': 'Producción Brasileña de Soya', 'ind.s3': 'Producción Brasileña de Maíz', 'ind.s4': 'Exportaciones Agrícolas Nacionales',
    'ind.p1t': '🌱 Soya', 'ind.p1p': 'Entre los mayores productores de Brasil',
    'ind.p2t': '🌽 Maíz', 'ind.p2p': 'Esencial para la alimentación humana y animal',
    'ind.p3t': '🐔 Pollo', 'ind.p3p': 'Líder absoluto en la producción nacional',
    'ind.p4t': '🚢 Exportaciones', 'ind.p4p': 'Productos paranaenses en todo el mundo',
    'tecnologias.eyebrow': 'Tecnologías', 'tecnologias.title': 'Las Herramientas que<br>Revolucionan el Campo',
    'tech.tab1': 'Drones', 'tech.tab2': 'Satélites', 'tech.tab3': 'IA', 'tech.tab4': 'IoT', 'tech.tab5': 'Máquinas', 'tech.tab6': 'Solar',
    'tech.d1t': 'Drones Agrícolas', 'tech.d1p': 'Vuelan sobre hectáreas de cultivo capturando imágenes multiespectrales.',
    'tech.d1l1': '📸 Mapeo aéreo de alta resolución', 'tech.d1l2': '🦟 Detección temprana de plagas', 'tech.d1l3': '💊 Fumigación inteligente y localizada', 'tech.d1l4': '📈 Análisis del crecimiento de los cultivos',
    'tech.d2t': 'Satélites', 'tech.d2p': 'Permiten monitoreo agrícola a escala regional en tiempo real.',
    'tech.d2l1': '🌤️ Monitoreo climático preciso', 'tech.d2l2': '🌿 Análisis de índice de vegetación (NDVI)', 'tech.d2l3': '📅 Planificación de cosechas', 'tech.d2l4': '🗺️ Imágenes en tiempo real',
    'tech.d3t': 'Inteligencia Artificial', 'tech.d3p': 'Algoritmos avanzados procesan terabytes de datos para dar recomendaciones precisas.',
    'tech.d3l1': '🔮 Previsión de productividad por parcela', 'tech.d3l2': '🧪 Diagnóstico automático de enfermedades', 'tech.d3l3': '💡 Recomendaciones de fertilización', 'tech.d3l4': '📊 Análisis predictivo de mercado',
    'tech.d4t': 'Sensores IoT', 'tech.d4p': 'Dispositivos conectados recogen datos del suelo y del ambiente en tiempo real.',
    'tech.d4l1': '💧 Monitoreo de humedad del suelo', 'tech.d4l2': '🌡️ Temperatura y microclima', 'tech.d4l3': '🧂 Análisis de nutrientes disponibles', 'tech.d4l4': '🚿 Riego inteligente y automatizado',
    'tech.d5t': 'Tractores Autónomos', 'tech.d5p': 'Equipados con GPS de alta precisión y navegación autónoma.',
    'tech.d5l1': '🎯 Siembra con precisión centimétrica', 'tech.d5l2': '⏱️ Operación 24 horas al día', 'tech.d5l3': '♻️ Menor desperdicio de insumos', 'tech.d5l4': '📱 Control remoto por smartphone',
    'tech.d6t': 'Energía Solar', 'tech.d6p': 'Las propiedades rurales adoptan paneles fotovoltaicos para generar energía limpia.',
    'tech.d6l1': '⚡ Generación on-grid y off-grid', 'tech.d6l2': '💰 Retorno de inversión en 5-7 años', 'tech.d6l3': '🌿 Cero emisiones de carbono', 'tech.d6l4': '🔋 Almacenamiento en baterías',
    'mapa.eyebrow': 'Mapa Interactivo', 'mapa.title': 'Regiones Agrícolas<br>de Paraná',
    'mapa.sub': 'Haga clic en una región para explorar sus características agrícolas',
    'mapa.default.title': 'Explore Paraná', 'mapa.default.sub': 'Seleccione una región en el mapa para ver detalles sobre su producción agrícola.',
    'mapa.back': 'Volver',
    'cidades.eyebrow': 'Ciudades', 'cidades.title': 'Ciudades que Hacen<br>la Diferencia',
    'cidades.c1': 'Referencia nacional en tecnología agrícola y agronegocio',
    'cidades.c2': 'Polo universitario y gran centro de investigación agrícola',
    'cidades.c3': 'Destaque en innovación, cooperativismo y producción agrícola',
    'cidades.c4': 'Uno de los mayores productores de trigo de Brasil',
    'cidades.c5': 'Referencia nacional en producción de aves y cerdos',
    'cidades.c6': 'Uno de los mayores puertos exportadores de América Latina',
    'pesquisa.eyebrow': 'Investigación Científica', 'pesquisa.title': 'Innovación Nacida<br>en los Laboratorios',
    'pesquisa.s1t': 'Mejoramiento Genético', 'pesquisa.s1p': 'Desarrollo de semillas más resistentes y productivas adaptadas a Paraná.',
    'pesquisa.s2t': 'Biotecnología', 'pesquisa.s2p': 'Aplicación de la ciencia para aumentar la productividad y la sostenibilidad ambiental.',
    'pesquisa.s3t': 'Monitoreo Climático', 'pesquisa.s3p': 'Pronósticos meteorológicos de alta precisión apoyan la planificación agrícola.',
    'pesquisa.s4t': 'Investigación Aplicada', 'pesquisa.s4p': 'Universidades y centros como EMBRAPA desarrollan nuevas soluciones para el campo paranaense.',
    'futuro.eyebrow': 'Visión Futura', 'futuro.title': 'El Agronegocio<br>en 2050',
    'futuro.lead': 'El futuro del campo estará marcado por la automatización total, la IA avanzada y la plena sostenibilidad ambiental.',
    'futuro.f1t': 'Robots Agrícolas', 'futuro.f1p': 'Siembra, cosecha y mantenimiento totalmente automatizados por robots inteligentes.',
    'futuro.f2t': 'Granjas 5G', 'futuro.f2p': 'Propiedades totalmente conectadas con sensores en cada centímetro del suelo.',
    'futuro.f3t': 'IA Avanzada', 'futuro.f3p': 'Sistemas que toman decisiones autónomas para maximizar la productividad.',
    'futuro.f4t': 'Flotas de Drones', 'futuro.f4p': 'Cientos de drones coordinados monitoreando y tratando cultivos automáticamente.',
    'futuro.f5t': 'Energía 100% Limpia', 'futuro.f5p': 'Propiedades rurales completamente abastecidas por fuentes renovables.',
    'futuro.f6t': 'Carbono Cero', 'futuro.f6p': 'Agricultura con saldo neutro o positivo de carbono, revirtiendo el cambio climático.',
    'sust.eyebrow': 'Sostenibilidad', 'sust.title': 'Tecnología que<br>Cuida el Planeta',
    'sust.s1t': 'Ahorro de Agua', 'sust.s1p': 'Sensores y riego inteligente pueden reducir el consumo de agua hasta un 40%.',
    'sust.s2t': 'Menos Agroquímicos', 'sust.s2p': 'La aplicación localizada reduce el uso de agroquímicos hasta un 30%.',
    'sust.s3t': 'Suelo Saludable', 'sust.s3p': 'El monitoreo constante garantiza la salud del suelo para las próximas generaciones.',
    'sust.s4t': 'Menos Emisiones', 'sust.s4p': 'Máquinas modernas y energía solar reducen las emisiones de CO₂.',
    'sust.s5t': 'Energía Renovable', 'sust.s5p': 'Paraná es líder regional en adopción de energía solar en propiedades rurales.',
    'sust.s6t': 'Biodiversidad', 'sust.s6p': 'La tecnología ayuda a mapear y preservar áreas de bosque nativo y corredores ecológicos.',
    'faq.eyebrow': 'Preguntas Frecuentes', 'faq.title': 'Dudas sobre<br>Tecnología en el Campo',
    'faq.q1': '¿Qué es la agricultura de precisión?',
    'faq.a1': 'Es el uso integrado de tecnologías como GPS, sensores, drones e IA para gestionar variaciones dentro de los cultivos, aumentando la eficiencia y reduciendo desperdicios.',
    'faq.q2': '¿Cómo ayudan los drones a los agricultores?',
    'faq.a2': 'Los drones sobrevuelan los cultivos capturando imágenes multiespectrales que revelan problemas invisibles al ojo humano.',
    'faq.q3': '¿Qué hace la IA en la agricultura?',
    'faq.a3': 'La IA procesa enormes volúmenes de datos para hacer predicciones, diagnosticar problemas y recomendar acciones precisas.',
    'faq.q4': '¿Por qué Paraná es referencia en agronegocio?',
    'faq.a4': 'Paraná combina clima favorable, suelo fértil y alta tecnología. Lidera la producción nacional de pollo y es uno de los mayores productores de soya y maíz.',
    'faq.q5': '¿Cómo ayuda la tecnología al medio ambiente?',
    'faq.a5': 'La tecnología permite producir más con menos: menos agua, menos agroquímicos, menos combustible, menos deforestación.',
    'faq.q6': '¿Los pequeños productores también pueden usar estas tecnologías?',
    'faq.a6': '¡Sí! Muchas tecnologías se están volviendo accesibles a través de cooperativas, modelos de suscripción y programas gubernamentales.',
    'conclusao.eyebrow': 'Conclusión', 'conclusao.title': 'El Futuro del Campo<br><em>Empieza Hoy</em>',
    'conclusao.p': 'Paraná demuestra que ciencia, tecnología y sostenibilidad pueden y deben ir de la mano para un futuro más próspero y sostenible.',
    'conclusao.cta1': 'Volver al Inicio', 'conclusao.cta2': 'Explorar el Mapa',
    'footer.desc': 'Proyecto educativo sobre Ciencia, Tecnología, Innovación y Sostenibilidad en el Agronegocio de Paraná.',
    'footer.nav': 'Navegación', 'footer.temas': 'Temas', 'footer.edu': 'Proyecto Educativo',
  },

  de: {
    'nav.inicio': 'Start', 'nav.sobre': 'Über', 'nav.desafios': 'Herausforderungen',
    'nav.solucoes': 'Lösungen', 'nav.indicadores': 'Daten', 'nav.tecnologias': 'Technologien',
    'nav.mapa': 'Karte', 'nav.faq': 'FAQ',
    'hero.eyebrow': 'WISSENSCHAFT · TECHNOLOGIE · INNOVATION · NACHHALTIGKEIT',
    'hero.line2': 'AgroTech',
    'hero.sub': 'Der Bundesstaat, der Brasilien und die Welt ernährt — mit Wissenschaft, Spitzentechnologie und Liebe zur Erde.',
    'hero.cta1': 'Projekt entdecken', 'hero.cta2': 'Zahlen ansehen',
    'hero.stat1': 'Brasilianisches Hühnchen', 'hero.stat2': 'Tonnen Soja', 'hero.stat3': 'Partnerländer',
    'sobre.eyebrow': 'Über das Projekt',
    'sobre.title': 'Wissenschaft & Technologie<br>Transformieren die Landwirtschaft',
    'sobre.lead': 'Paraná AgroTech zeigt, wie Wissenschaft, Technologie und Nachhaltigkeit die Landwirtschaft Paranás revolutionieren.',
    'sobre.p1': 'Landwirte nutzen Sensoren, Satelliten, Drohnen und KI um Felder zu überwachen und die Effizienz zu steigern.',
    'sobre.p2': 'Diese Technologien helfen, mehr Lebensmittel zu produzieren, Kosten zu senken und natürliche Ressourcen zu schützen.',
    'sobre.b1': 'Hühnerführer', 'sobre.b2': 'Top Soja', 'sobre.b3': 'Exporthafen', 'sobre.b4': 'Innovation',
    'sobre.imgbadge': 'Innovation auf dem Feld',
    'brasil.eyebrow': 'Brasilien & Paraná',
    'brasil.title': 'Ein Bundesstaat, der<br>die Wirtschaft antreibt',
    'brasil.f1t': 'Brasilien in der Welt', 'brasil.f1p': 'Brasilien ist der weltgrößte Exporteur von Soja, Kaffee, Rindfleisch und Orangensaft — und Paraná ist dabei zentral.',
    'brasil.f2t': 'Paraná in Brasilien', 'brasil.f2p': 'Paraná macht über 20% der nationalen Agrarproduktion aus.',
    'brasil.f3t': 'Spitzentechnologie', 'brasil.f3p': 'Mit Forschungszentren wie EMBRAPA und exzellenten Universitäten führt Paraná die Agrotechnologie an.',
    'brasil.f4t': 'Globale Wirkung', 'brasil.f4p': 'Produkte aus Paraná erreichen mehr als 100 Länder weltweit.',
    'desafios.eyebrow': 'Herausforderungen',
    'desafios.title': 'Die Großen Herausforderungen<br>der Landwirtschaft',
    'desafios.c1t': 'Klimawandel', 'desafios.c1p': 'Dürren, Fröste und Extremereignisse beeinflussen die Ernteerträge direkt.',
    'desafios.c2t': 'Wassernutzung', 'desafios.c2p': 'Unangemessene Bewässerung erzeugt Verschwendung und treibt die Kosten in die Höhe.',
    'desafios.c3t': 'Schädlinge & Krankheiten', 'desafios.c3p': 'Insekten, Pilze und Pflanzenkrankheiten verursachen jährlich Millionenschäden.',
    'desafios.c4t': 'Bevölkerungswachstum', 'desafios.c4p': 'Die Nachfrage nach Lebensmitteln wächst stetig und erfordert höhere Produktionseffizienz.',
    'solucoes.eyebrow': 'Technologische Lösungen',
    'solucoes.title': 'Wie Technologie<br>Diese Probleme Löst',
    'sol.s1t': 'Agrardrohnen', 'sol.s1p': 'Überwachen große Flächen schnell und erkennen Fehler, Schädlinge und Krankheiten.', 'sol.s1tag': 'Überwachung',
    'sol.s2t': 'Künstliche Intelligenz', 'sol.s2p': 'Analysiert Tausende von Datenpunkten, um Probleme vorherzusagen und Entscheidungen zu erleichtern.', 'sol.s2tag': 'Vorhersage',
    'sol.s3t': 'Satelliten', 'sol.s3p': 'Verfolgen Felder in Echtzeit mit hochauflösenden Bildern und Spektralanalysen.', 'sol.s3tag': 'Analyse',
    'sol.s4t': 'IoT-Sensoren', 'sol.s4p': 'Messen Temperatur, Feuchtigkeit und Nährstoffe im Boden kontinuierlich.', 'sol.s4tag': 'Daten',
    'sol.s5t': 'Automatisierung', 'sol.s5p': 'Moderne Maschinen führen landwirtschaftliche Aufgaben mit mehr Präzision und Effizienz aus.', 'sol.s5tag': 'Effizienz',
    'sol.s6t': 'Erneuerbare Energie', 'sol.s6p': 'Solaranlagen und saubere Energiequellen reduzieren Betriebskosten und Umweltauswirkungen.', 'sol.s6tag': 'Nachhaltig',
    'indicadores.eyebrow': 'Indikatoren', 'indicadores.title': 'Paraná in Zahlen',
    'ind.s1': 'Brasilianische Hühnerproduktion', 'ind.s2': 'Brasilianische Sojaproduktion', 'ind.s3': 'Brasilianische Maisproduktion', 'ind.s4': 'Nationale Agrarexporte',
    'ind.p1t': '🌱 Soja', 'ind.p1p': 'Unter den größten Produzenten Brasiliens',
    'ind.p2t': '🌽 Mais', 'ind.p2p': 'Wesentlich für Mensch und Tier',
    'ind.p3t': '🐔 Hühnchen', 'ind.p3p': 'Absoluter Marktführer bei der nationalen Produktion',
    'ind.p4t': '🚢 Exporte', 'ind.p4p': 'Paranáer Produkte in aller Welt',
    'tecnologias.eyebrow': 'Technologien', 'tecnologias.title': 'Die Werkzeuge, die<br>die Landwirtschaft Revolutionieren',
    'tech.tab1': 'Drohnen', 'tech.tab2': 'Satelliten', 'tech.tab3': 'KI', 'tech.tab4': 'IoT', 'tech.tab5': 'Maschinen', 'tech.tab6': 'Solar',
    'tech.d1t': 'Agrardrohnen', 'tech.d1p': 'Fliegen über Hektar von Feldern und erfassen Multispektralbilder.',
    'tech.d1l1': '📸 Hochauflösende Luftkartierung', 'tech.d1l2': '🦟 Frühzeitige Schädlingserkennung', 'tech.d1l3': '💊 Intelligentes gezieltes Sprühen', 'tech.d1l4': '📈 Analyse des Pflanzenwachstums',
    'tech.d2t': 'Satelliten', 'tech.d2p': 'Ermöglichen landwirtschaftliche Überwachung auf regionaler Ebene in Echtzeit.',
    'tech.d2l1': '🌤️ Präzise Klimaüberwachung', 'tech.d2l2': '🌿 Vegetationsindex-Analyse (NDVI)', 'tech.d2l3': '📅 Ernteplanung', 'tech.d2l4': '🗺️ Hochauflösende Echtzeit-Bilder',
    'tech.d3t': 'Künstliche Intelligenz', 'tech.d3p': 'Fortschrittliche Algorithmen verarbeiten Terabytes von Daten für präzise Empfehlungen.',
    'tech.d3l1': '🔮 Produktivitätsprognosen pro Parzelle', 'tech.d3l2': '🧪 Automatische Krankheitsdiagnose', 'tech.d3l3': '💡 Düngeempfehlungen', 'tech.d3l4': '📊 Prädiktive Marktanalyse',
    'tech.d4t': 'IoT-Sensoren', 'tech.d4p': 'Vernetzte Geräte sammeln Boden- und Atmosphärendaten in Echtzeit.',
    'tech.d4l1': '💧 Bodenfeuchtigkeitsüberwachung', 'tech.d4l2': '🌡️ Temperatur und Mikroklima', 'tech.d4l3': '🧂 Analyse verfügbarer Nährstoffe', 'tech.d4l4': '🚿 Intelligente automatisierte Bewässerung',
    'tech.d5t': 'Autonome Traktoren', 'tech.d5p': 'Mit hochpräzisem GPS und autonomer Navigation — minimaler menschlicher Eingriff erforderlich.',
    'tech.d5l1': '🎯 Zentimetergenaue Aussaat', 'tech.d5l2': '⏱️ 24-Stunden-Betrieb', 'tech.d5l3': '♻️ Weniger Ressourcenverschwendung', 'tech.d5l4': '📱 Fernsteuerung per Smartphone',
    'tech.d6t': 'Solarenergie', 'tech.d6p': 'Ländliche Betriebe nutzen Photovoltaik für saubere Energie und Kosteneinsparungen.',
    'tech.d6l1': '⚡ On-grid und Off-grid-Erzeugung', 'tech.d6l2': '💰 Investitionsrendite in 5–7 Jahren', 'tech.d6l3': '🌿 Null CO₂-Emissionen', 'tech.d6l4': '🔋 Batteriespeicherung',
    'mapa.eyebrow': 'Interaktive Karte', 'mapa.title': 'Landwirtschaftliche Regionen<br>von Paraná',
    'mapa.sub': 'Klicken Sie auf eine Region, um ihre landwirtschaftlichen Merkmale zu erkunden',
    'mapa.default.title': 'Erkunden Sie Paraná', 'mapa.default.sub': 'Wählen Sie eine Region auf der Karte aus, um Details zu ihrer landwirtschaftlichen Produktion zu sehen.',
    'mapa.back': 'Zurück',
    'cidades.eyebrow': 'Städte', 'cidades.title': 'Städte, die<br>den Unterschied Machen',
    'cidades.c1': 'Nationale Referenz für Agrartechnologie und Agrarunternehmen',
    'cidades.c2': 'Universitätszentrum und bedeutendes landwirtschaftliches Forschungszentrum',
    'cidades.c3': 'Highlight für Innovation, Genossenschaftswesen und Agrarproduktion',
    'cidades.c4': 'Einer der größten Weizenproduzenten Brasiliens',
    'cidades.c5': 'Nationale Referenz für Geflügel- und Schweineproduktion',
    'cidades.c6': 'Einer der größten Exporthäfen Lateinamerikas',
    'pesquisa.eyebrow': 'Wissenschaftliche Forschung', 'pesquisa.title': 'Innovation aus<br>den Labors',
    'pesquisa.s1t': 'Züchtungsverbesserung', 'pesquisa.s1p': 'Entwicklung widerstandsfähigerer und produktiverer Samen für Paranás Bedingungen.',
    'pesquisa.s2t': 'Biotechnologie', 'pesquisa.s2p': 'Anwendung der Wissenschaft zur Steigerung der Produktivität und Umweltnachhaltigkeit.',
    'pesquisa.s3t': 'Klimaüberwachung', 'pesquisa.s3p': 'Hochpräzise Wettervorhersagen unterstützen die landwirtschaftliche Planung.',
    'pesquisa.s4t': 'Angewandte Forschung', 'pesquisa.s4p': 'Universitäten und EMBRAPA entwickeln kontinuierlich neue Lösungen für den Agrarsektor Paranás.',
    'futuro.eyebrow': 'Zukunftsvision', 'futuro.title': 'Agrarunternehmen<br>im Jahr 2050',
    'futuro.lead': 'Die Zukunft der Landwirtschaft wird durch vollständige Automatisierung, fortgeschrittene KI und vollständige Umweltnachhaltigkeit geprägt sein.',
    'futuro.f1t': 'Agrarroboter', 'futuro.f1p': 'Vollautomatisches Pflanzen, Ernten und Warten durch intelligente Roboter.',
    'futuro.f2t': '5G-Farmen', 'futuro.f2p': 'Vollständig vernetzte Betriebe mit Sensoren in jedem Zentimeter des Bodens.',
    'futuro.f3t': 'Fortgeschrittene KI', 'futuro.f3p': 'Systeme, die autonome Entscheidungen treffen, um Produktivität zu maximieren.',
    'futuro.f4t': 'Drohnenflotten', 'futuro.f4p': 'Hunderte koordinierte Drohnen überwachen Felder automatisch.',
    'futuro.f5t': '100% Saubere Energie', 'futuro.f5p': 'Ländliche Betriebe vollständig mit erneuerbaren Energiequellen versorgt.',
    'futuro.f6t': 'Netto-null CO₂', 'futuro.f6p': 'Landwirtschaft mit neutraler oder positiver Kohlenstoffbilanz.',
    'sust.eyebrow': 'Nachhaltigkeit', 'sust.title': 'Technologie, die<br>den Planeten Schützt',
    'sust.s1t': 'Wassereinsparungen', 'sust.s1p': 'Intelligente Sensoren und Bewässerung können den Wasserverbrauch um bis zu 40% senken.',
    'sust.s2t': 'Weniger Chemikalien', 'sust.s2p': 'Gezielte Anwendung reduziert den Einsatz von Agrochemikalien um bis zu 30%.',
    'sust.s3t': 'Gesunder Boden', 'sust.s3p': 'Kontinuierliche Überwachung sichert die Bodengesundheit für kommende Generationen.',
    'sust.s4t': 'Weniger Emissionen', 'sust.s4p': 'Moderne Maschinen und Solarenergie reduzieren CO₂-Emissionen.',
    'sust.s5t': 'Erneuerbare Energie', 'sust.s5p': 'Paraná ist regionaler Marktführer bei der Einführung von Solarenergie.',
    'sust.s6t': 'Biodiversität', 'sust.s6p': 'Technologie hilft bei der Kartierung und Erhaltung von Naturwaldgebieten.',
    'faq.eyebrow': 'Häufige Fragen', 'faq.title': 'Fragen zur<br>Agrartechnologie',
    'faq.q1': 'Was ist Präzisionslandwirtschaft?',
    'faq.a1': 'Es ist der integrierte Einsatz von Technologien wie GPS, Sensoren, Drohnen und KI zur Bewirtschaftung von Variationen innerhalb der Felder.',
    'faq.q2': 'Wie helfen Drohnen den Landwirten?',
    'faq.a2': 'Drohnen überfliegen Felder und erfassen Multispektralbilder, die für das menschliche Auge unsichtbare Probleme enthüllen.',
    'faq.q3': 'Was macht KI in der Landwirtschaft?',
    'faq.a3': 'KI verarbeitet enorme Datenmengen, um Vorhersagen zu treffen und präzise Empfehlungen zu geben.',
    'faq.q4': 'Warum ist Paraná eine Referenz im Agrarunternehmen?',
    'faq.a4': 'Paraná kombiniert günstiges Klima, fruchtbaren Boden und Hochtechnologie. Der Staat führt die nationale Hühnerproduktion an.',
    'faq.q5': 'Wie hilft Technologie der Umwelt?',
    'faq.a5': 'Technologie ermöglicht mehr mit weniger zu produzieren: weniger Wasser, weniger Chemikalien, weniger Kraftstoff.',
    'faq.q6': 'Können Kleinbauern diese Technologien auch nutzen?',
    'faq.a6': 'Ja! Viele Technologien werden durch Genossenschaften, Abonnementmodelle und staatliche Programme zugänglich.',
    'conclusao.eyebrow': 'Fazit', 'conclusao.title': 'Die Zukunft des Feldes<br><em>Beginnt Heute</em>',
    'conclusao.p': 'Paraná zeigt, dass Wissenschaft, Technologie und Nachhaltigkeit Hand in Hand gehen können und müssen.',
    'conclusao.cta1': 'Zurück zum Anfang', 'conclusao.cta2': 'Karte Erkunden',
    'footer.desc': 'Bildungsprojekt über Wissenschaft, Technologie, Innovation und Nachhaltigkeit in Paranás Landwirtschaft.',
    'footer.nav': 'Navigation', 'footer.temas': 'Themen', 'footer.edu': 'Bildungsprojekt',
  },

  zh: {
    'nav.inicio': '首页', 'nav.sobre': '关于', 'nav.desafios': '挑战',
    'nav.solucoes': '解决方案', 'nav.indicadores': '数据', 'nav.tecnologias': '技术',
    'nav.mapa': '地图', 'nav.faq': '常见问题',
    'hero.eyebrow': '科学 · 技术 · 创新 · 可持续发展',
    'hero.line2': '农业科技',
    'hero.sub': '这个州用科学、尖端技术和对土地的热爱，养活了巴西和世界。',
    'hero.cta1': '了解项目', 'hero.cta2': '查看数据',
    'hero.stat1': '巴西鸡肉产量占比', 'hero.stat2': '大豆总产量（吨）', 'hero.stat3': '合作国家数量',
    'sobre.eyebrow': '关于项目',
    'sobre.title': '科学与技术<br>改变农业',
    'sobre.lead': '巴拉那农业科技展示了科学、技术和可持续发展如何通过智能创新解决方案，革新巴拉那的农业综合企业。',
    'sobre.p1': '农民使用传感器、卫星、无人机和人工智能来监测作物、预测气候问题并提高生产效率。',
    'sobre.p2': '这些技术有助于生产更多食物、降低成本、保护自然资源，助力更可持续的未来。',
    'sobre.b1': '鸡肉领导者', 'sobre.b2': '大豆强省', 'sobre.b3': '出口港口', 'sobre.b4': '创新',
    'sobre.imgbadge': '田间创新',
    'brasil.eyebrow': '巴西与巴拉那',
    'brasil.title': '推动国家经济<br>的重要州',
    'brasil.f1t': '巴西在世界', 'brasil.f1p': '巴西是全球最大的大豆、咖啡、牛肉和橙汁出口国——巴拉那州是核心。',
    'brasil.f2t': '巴拉那在巴西', 'brasil.f2p': '巴拉那占全国农业产量的20%以上，在谷物、禽类、猪肉和乳制品方面是标杆。',
    'brasil.f3t': '尖端技术', 'brasil.f3p': '凭借EMBRAPA等研究中心和优秀大学，巴拉那引领着巴西农业技术的应用。',
    'brasil.f4t': '全球影响', 'brasil.f4p': '巴拉那产品销往100多个国家，养活数百万人并为国家创造数十亿外汇收入。',
    'desafios.eyebrow': '挑战',
    'desafios.title': '农业综合企业<br>的主要挑战',
    'desafios.c1t': '气候变化', 'desafios.c1p': '干旱、霜冻和极端气候事件直接影响农业生产率，需要不断适应。',
    'desafios.c2t': '水资源利用', 'desafios.c2p': '不当灌溉造成浪费并提高成本，水资源管理至关重要。',
    'desafios.c3t': '病虫害', 'desafios.c3p': '昆虫、真菌和农业病害每年造成数十亿损失。',
    'desafios.c4t': '人口增长', 'desafios.c4p': '食品需求持续增长，需要用更少的资源实现更高的生产效率。',
    'solucoes.eyebrow': '技术解决方案',
    'solucoes.title': '技术如何<br>解决这些问题',
    'sol.s1t': '农业无人机', 'sol.s1p': '快速监控大面积区域，精准识别作物中的故障、病虫害。', 'sol.s1tag': '监控',
    'sol.s2t': '人工智能', 'sol.s2p': '分析海量数据，预测问题并协助农民在正确时机做出正确决策。', 'sol.s2tag': '预测',
    'sol.s3t': '卫星', 'sol.s3p': '通过高分辨率图像和光谱土壤分析实时跟踪作物。', 'sol.s3tag': '分析',
    'sol.s4t': '物联网传感器', 'sol.s4p': '持续测量土壤温度、湿度和养分，实时传输数据。', 'sol.s4tag': '数据',
    'sol.s5t': '自动化', 'sol.s5p': '现代机器以更高的精度、速度和效率执行农业任务。', 'sol.s5tag': '效率',
    'sol.s6t': '可再生能源', 'sol.s6p': '太阳能电池板和清洁能源有助于降低运营成本和环境影响。', 'sol.s6tag': '可持续',
    'indicadores.eyebrow': '指标', 'indicadores.title': '巴拉那数字一览',
    'ind.s1': '巴西鸡肉产量占比', 'ind.s2': '巴西大豆产量占比', 'ind.s3': '巴西玉米产量占比', 'ind.s4': '全国农业出口占比',
    'ind.p1t': '🌱 大豆', 'ind.p1p': '巴西最大生产商之一',
    'ind.p2t': '🌽 玉米', 'ind.p2p': '人畜食品的重要来源',
    'ind.p3t': '🐔 鸡肉', 'ind.p3p': '全国产量绝对领先',
    'ind.p4t': '🚢 出口', 'ind.p4p': '巴拉那产品遍布全球',
    'tecnologias.eyebrow': '技术', 'tecnologias.title': '革命性农业<br>工具一览',
    'tech.tab1': '无人机', 'tech.tab2': '卫星', 'tech.tab3': '人工智能', 'tech.tab4': '物联网', 'tech.tab5': '机械', 'tech.tab6': '太阳能',
    'tech.d1t': '农业无人机', 'tech.d1p': '飞越数百公顷农田，捕捉多光谱图像，识别肉眼不可见的问题。',
    'tech.d1l1': '📸 高分辨率航空测绘', 'tech.d1l2': '🦟 病虫害早期探测', 'tech.d1l3': '💊 智能精准喷洒', 'tech.d1l4': '📈 作物生长分析',
    'tech.d2t': '卫星', 'tech.d2p': '实现区域规模的农业监控，实时追踪作物发育情况。',
    'tech.d2l1': '🌤️ 精确气候监测', 'tech.d2l2': '🌿 植被指数（NDVI）分析', 'tech.d2l3': '📅 收割规划', 'tech.d2l4': '🗺️ 高分辨率实时影像',
    'tech.d3t': '人工智能', 'tech.d3p': '先进算法处理海量数据，为农民提供精准建议。',
    'tech.d3l1': '🔮 地块级生产率预测', 'tech.d3l2': '🧪 自动疾病诊断', 'tech.d3l3': '💡 施肥建议', 'tech.d3l4': '📊 预测性市场分析',
    'tech.d4t': '物联网传感器', 'tech.d4p': '互联设备实时采集土壤和大气数据，发送给农民。',
    'tech.d4l1': '💧 土壤湿度监测', 'tech.d4l2': '🌡️ 温度与微气候', 'tech.d4l3': '🧂 可用营养分析', 'tech.d4l4': '🚿 智能自动灌溉',
    'tech.d5t': '自动驾驶拖拉机', 'tech.d5p': '配备高精度GPS和自主导航系统，只需极少的人工干预。',
    'tech.d5l1': '🎯 厘米级精准播种', 'tech.d5l2': '⏱️ 全天24小时运行', 'tech.d5l3': '♻️ 减少投入品浪费', 'tech.d5l4': '📱 智能手机远程控制',
    'tech.d6t': '太阳能', 'tech.d6p': '农村物业采用光伏电池板发电，降低成本，实现能源自给。',
    'tech.d6l1': '⚡ 并网和离网发电', 'tech.d6l2': '💰 5-7年投资回报', 'tech.d6l3': '🌿 零碳排放', 'tech.d6l4': '🔋 电池储能',
    'mapa.eyebrow': '互动地图', 'mapa.title': '巴拉那<br>农业区域',
    'mapa.sub': '点击区域探索其农业特征',
    'mapa.default.title': '探索巴拉那', 'mapa.default.sub': '在地图上选择一个区域，查看有关其农业生产、技术和亮点的详细信息。',
    'mapa.back': '返回',
    'cidades.eyebrow': '城市', 'cidades.title': '创造差异的<br>城市',
    'cidades.c1': '农业技术和农业综合企业的全国参考标杆',
    'cidades.c2': '大学中心和重要的农业研究中心',
    'cidades.c3': '创新、合作精神和农业生产的突出代表',
    'cidades.c4': '巴西最大的小麦产区之一',
    'cidades.c5': '禽类和猪肉生产的全国参考',
    'cidades.c6': '拉丁美洲最大的出口港之一',
    'pesquisa.eyebrow': '科学研究', 'pesquisa.title': '实验室孕育的<br>创新',
    'pesquisa.s1t': '遗传改良', 'pesquisa.s1p': '开发适应巴拉那条件的更具抗性和生产力的种子。',
    'pesquisa.s2t': '生物技术', 'pesquisa.s2p': '应用科学提高生产力、抗病能力和环境可持续性。',
    'pesquisa.s3t': '气候监测', 'pesquisa.s3p': '高精度天气预报支持农业规划和风险管理。',
    'pesquisa.s4t': '应用研究', 'pesquisa.s4p': '各大学和EMBRAPA等中心持续为巴拉那农业开发新解决方案。',
    'futuro.eyebrow': '未来愿景', 'futuro.title': '2050年的<br>农业综合企业',
    'futuro.lead': '农业的未来将以全面自动化、先进人工智能、机器人技术和完全环境可持续性为标志。',
    'futuro.f1t': '农业机器人', 'futuro.f1p': '由智能机器人全自动播种、收割和维护。',
    'futuro.f2t': '5G农场', 'futuro.f2p': '完全互联的农场，土壤每一厘米都有传感器。',
    'futuro.f3t': '高级人工智能', 'futuro.f3p': '能自主决策以最大化生产力、最小化影响的系统。',
    'futuro.f4t': '无人机机队', 'futuro.f4p': '数百架协调无人机自动监控和处理农田。',
    'futuro.f5t': '100%清洁能源', 'futuro.f5p': '农村物业完全依靠可再生能源供电，无需化石燃料。',
    'futuro.f6t': '碳净零', 'futuro.f6p': '实现碳中和或碳正值农业，逆转气候变化。',
    'sust.eyebrow': '可持续性', 'sust.title': '守护地球的<br>技术',
    'sust.s1t': '节水', 'sust.s1p': '智能传感器和灌溉可将用水量降低多达40%。',
    'sust.s2t': '减少化学品', 'sust.s2p': '精准施用农用化学品可将使用量减少高达30%，保护生态系统。',
    'sust.s3t': '健康土壤', 'sust.s3p': '持续监测确保土壤健康，造福后代。',
    'sust.s4t': '减少排放', 'sust.s4p': '现代机器和太阳能减少农村物业的CO₂排放。',
    'sust.s5t': '可再生能源', 'sust.s5p': '巴拉那是农村物业采用太阳能的区域领先者。',
    'sust.s6t': '生物多样性', 'sust.s6p': '技术有助于绘制和保护原生林区和生态廊道。',
    'faq.eyebrow': '常见问题', 'faq.title': '关于农业技术<br>的问题',
    'faq.q1': '什么是精准农业？',
    'faq.a1': '精准农业是综合运用GPS、传感器、无人机和人工智能等技术管理农田内的变化，提高效率并减少投入品和自然资源浪费。',
    'faq.q2': '无人机如何帮助农民？',
    'faq.a2': '无人机飞越农田捕捉多光谱图像，揭示肉眼看不到的问题，如营养缺乏、水分胁迫区域和早期病虫害。',
    'faq.q3': '人工智能在农业中做什么？',
    'faq.a3': '人工智能处理大量数据——气候历史、卫星图像、传感器数据——进行预测、诊断问题并推荐精准行动。',
    'faq.q4': '为什么巴拉那是农业综合企业的标杆？',
    'faq.a4': '巴拉那结合了有利气候、肥沃土壤和高科技。该州引领全国鸡肉生产，是大豆和玉米最大生产商之一。',
    'faq.q5': '技术如何帮助环境？',
    'faq.a5': '技术让我们用更少的资源生产更多：更少的水、更少的农化品、更少的燃料、更少的森林砍伐。',
    'faq.q6': '小农也能使用这些技术吗？',
    'faq.a6': '是的！许多技术通过合作社、订阅模式和政府项目越来越惠及中小农户。',
    'conclusao.eyebrow': '结论', 'conclusao.title': '田野的未来<br><em>从今天开始</em>',
    'conclusao.p': '巴拉那向巴西和世界表明，科学、技术和可持续性可以并且应该携手共进。生产更多食物、保护环境和促进经济是互补的目标。',
    'conclusao.cta1': '返回顶部', 'conclusao.cta2': '探索地图',
    'footer.desc': '关于巴拉那农业综合企业中科学、技术、创新和可持续性的教育项目。',
    'footer.nav': '导航', 'footer.temas': '主题', 'footer.edu': '教育项目',
  }
};

/* =============================================
   2. DADOS DO MAPA
============================================= */
const regionData = {
  noroeste: {
    icon: '🌽',
    title: 'Noroeste do Paraná',
    desc: 'Região com intensa produção de cana-de-açúcar, soja, mandioca e pecuária. Solo arenoso com alta temperatura, exigindo irrigação eficiente e tecnologia de gestão hídrica.',
    tags: ['🌾 Cana-de-açúcar', '🌱 Soja', '🥕 Mandioca', '🐄 Pecuária'],
    cities: '📍 Cidades: Umuarama, Paranavaí, Cianorte'
  },
  norte: {
    icon: '☕',
    title: 'Norte do Paraná',
    desc: 'Berço do café paranaense e hoje um dos maiores polos de soja, trigo e milho do estado. Abriga Londrina e Maringá, centros de inovação e pesquisa agrícola de excelência.',
    tags: ['☕ Café', '🌱 Soja', '🌾 Trigo', '🔬 Pesquisa'],
    cities: '📍 Cidades: Londrina, Maringá, Apucarana'
  },
  nordeste: {
    icon: '🌿',
    title: 'Nordeste do Paraná',
    desc: 'Região conhecida pela diversidade de culturas como algodão, amendoim e milho. Área de transição climática que exige adaptação tecnológica constante nas práticas agrícolas.',
    tags: ['🌿 Algodão', '🥜 Amendoim', '🌽 Milho', '🌡️ Clima Diverso'],
    cities: '📍 Cidades: Jacarezinho, Bandeirantes, Cornélio Procópio'
  },
  oeste: {
    icon: '🐔',
    title: 'Oeste do Paraná',
    desc: 'O coração do agronegócio paranaense. Líder em soja, milho, aves e suínos, com forte cooperativismo. Cascavel é referência nacional em tecnologia agrícola e Itaipu representa a energia limpa da região.',
    tags: ['🌱 Soja', '🐔 Aves', '🐷 Suínos', '⚡ Itaipu'],
    cities: '📍 Cidades: Cascavel, Toledo, Foz do Iguaçu'
  },
  centroOeste: {
    icon: '🌾',
    title: 'Centro-Oeste do Paraná',
    desc: 'Região de alta produção de grãos, especialmente soja e milho. Área de grande expansão tecnológica, com forte adoção de agricultura de precisão e automação das fazendas.',
    tags: ['🌱 Soja', '🌽 Milho', '🚜 Automação', '🎯 Precisão'],
    cities: '📍 Cidades: Campo Mourão, Mamborê, Ubiratã'
  },
  centro: {
    icon: '🌾',
    title: 'Centro do Paraná',
    desc: 'Área de transição entre o norte cafeeiro e o sul cerealista. Guarapuava é um dos maiores polos de trigo do Brasil. Região de grande diversidade produtiva com destaque para pecuária e avicultura.',
    tags: ['🌾 Trigo', '🐄 Pecuária', '🌱 Soja', '🐔 Avicultura'],
    cities: '📍 Cidades: Guarapuava, Pitanga, Irati'
  },
  leste: {
    icon: '🌲',
    title: 'Leste do Paraná',
    desc: 'Região de relevo mais acidentado com produção de batata, feijão e horticultura. Próxima à capital Curitiba, abriga importantes centros de pesquisa e processamento agroindustrial.',
    tags: ['🥔 Batata', '🫘 Feijão', '🥦 Horticultura', '🏭 Agroindústria'],
    cities: '📍 Cidades: Ponta Grossa, Castro, Lapa'
  },
  sudoeste: {
    icon: '🐄',
    title: 'Sudoeste do Paraná',
    desc: 'Região de forte agricultura familiar, com destaque para leite, soja, milho e feijão. Área de grande adoção de cooperativismo e tecnologias acessíveis para pequenos e médios produtores.',
    tags: ['🥛 Leite', '🌱 Soja', '🫘 Feijão', '🤝 Cooperativas'],
    cities: '📍 Cidades: Francisco Beltrão, Pato Branco, Dois Vizinhos'
  },
  sul: {
    icon: '🌿',
    title: 'Sul do Paraná',
    desc: 'Região fria com destaque para erva-mate, maçã e produção leiteira. Alto índice de agricultura sustentável e preservação ambiental. Área de belezas naturais com ecoturismo em crescimento.',
    tags: ['🍃 Erva-mate', '🍎 Maçã', '🥛 Leite', '🌿 Sustentabilidade'],
    cities: '📍 Cidades: União da Vitória, São Mateus do Sul, Palmas'
  },
  sudeste: {
    icon: '🏭',
    title: 'Sudeste do Paraná',
    desc: 'Região de Ponta Grossa e dos Campos Gerais, celeiro nacional de trigo, cevada e aveia. Alto grau de mecanização e adoção de tecnologias de precisão. Área estratégica para o corredor de exportação.',
    tags: ['🌾 Trigo', '🫘 Cevada', '🚜 Mecanização', '🎯 Precisão'],
    cities: '📍 Cidades: Ponta Grossa, Castro, Tibagi'
  },
  metro: {
    icon: '🏙️',
    title: 'Região Metropolitana de Curitiba',
    desc: 'Além de ser o polo industrial e tecnológico do Paraná, a Grande Curitiba abriga importantes centros de pesquisa agroindustrial, startups de agtech e o maior porto graneleiro do Brasil em Paranaguá.',
    tags: ['🔬 Pesquisa', '💻 AgTech', '🚢 Paranaguá', '🏭 Agroindústria'],
    cities: '📍 Cidades: Curitiba, Paranaguá, São José dos Pinhais'
  }
};

/* =============================================
   3. ESTADO GLOBAL
============================================= */
let currentLang = 'pt';
let fontSize = 100;

/* =============================================
   4. CANVAS — PARTÍCULAS HERO
============================================= */
(function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  const PARTICLE_COUNT = 60;

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function createParticle() {
    return {
      x: rand(0, W), y: rand(0, H),
      r: rand(1, 3),
      vx: rand(-0.3, 0.3),
      vy: rand(-0.6, -0.15),
      alpha: rand(0.15, 0.5),
      color: Math.random() > 0.6 ? '#74c69d' : '#f5c518'
    };
  }

  function init() {
    resize();
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(createParticle());
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.0008;
      if (p.alpha <= 0 || p.y < -10) Object.assign(p, createParticle(), { y: H + 10, alpha: rand(0.1, 0.4) });
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', init);
  init();
  draw();
})();

/* =============================================
   5. HEADER SCROLL
============================================= */
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function () {
  header.classList.toggle('scrolled', window.scrollY > 40);

  // Active nav link
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

/* =============================================
   6. MENU MOBILE
============================================= */
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', function () {
  const open = nav.classList.toggle('open');
  menuToggle.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', open);
});

document.addEventListener('click', function (e) {
  if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
    nav.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', false);
  }
});

/* =============================================
   7. MODO ESCURO
============================================= */
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', function () {
  const dark = document.body.classList.toggle('dark');
  themeBtn.textContent = dark ? '☀️' : '🌙';
  themeBtn.title = dark ? 'Tema claro' : 'Tema escuro';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
});

// Restore theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  themeBtn.textContent = '☀️';
}

/* =============================================
   8. TAMANHO DA FONTE
============================================= */
document.getElementById('fontIncrease').addEventListener('click', function () {
  fontSize = Math.min(fontSize + 8, 140);
  document.documentElement.style.fontSize = fontSize + '%';
});
document.getElementById('fontDecrease').addEventListener('click', function () {
  fontSize = Math.max(fontSize - 8, 80);
  document.documentElement.style.fontSize = fontSize + '%';
});

/* =============================================
   9. TRADUÇÃO
============================================= */
function applyTranslation(lang) {
  const t = translations[lang];
  if (!t) return;
  currentLang = lang;
  document.documentElement.lang = { pt: 'pt-BR', en: 'en', es: 'es', de: 'de', zh: 'zh-CN' }[lang] || 'pt-BR';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });
  localStorage.setItem('lang', lang);
}

// Language menu
const langToggle = document.getElementById('langToggle');
const langDropdown = document.getElementById('langDropdown');

langToggle.addEventListener('click', function (e) {
  e.stopPropagation();
  langDropdown.classList.toggle('open');
});

document.addEventListener('click', function (e) {
  if (!langDropdown.contains(e.target) && !langToggle.contains(e.target)) {
    langDropdown.classList.remove('open');
  }
});

langDropdown.querySelectorAll('button[data-lang]').forEach(btn => {
  btn.addEventListener('click', function () {
    applyTranslation(this.getAttribute('data-lang'));
    langDropdown.classList.remove('open');
  });
});

// Restore language
const savedLang = localStorage.getItem('lang');
if (savedLang && translations[savedLang]) applyTranslation(savedLang);

/* =============================================
   10. TECH TABS
============================================= */
const techTabs = document.querySelectorAll('.tech-tab');
const techPanels = document.querySelectorAll('.tech-panel');

techTabs.forEach(tab => {
  tab.addEventListener('click', function () {
    const target = this.getAttribute('data-tab');

    techTabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', false); });
    techPanels.forEach(p => p.classList.remove('active'));

    this.classList.add('active');
    this.setAttribute('aria-selected', true);
    const panel = document.getElementById('tab-' + target);
    if (panel) panel.classList.add('active');
  });
});

/* =============================================
   11. MAPA SVG
============================================= */
const mapRegions = document.querySelectorAll('.map-region');
const mapDefault = document.getElementById('mapDefault');
const mapDetail = document.getElementById('mapDetail');
const mapDetailIcon = document.getElementById('mapDetailIcon');
const mapDetailTitle = document.getElementById('mapDetailTitle');
const mapDetailDesc = document.getElementById('mapDetailDesc');
const mapDetailTags = document.getElementById('mapDetailTags');
const mapDetailCities = document.getElementById('mapDetailCities');
const mapBack = document.getElementById('mapBack');

function showRegion(regionKey) {
  const data = regionData[regionKey];
  if (!data) return;

  mapRegions.forEach(r => r.classList.remove('active'));
  const reg = document.querySelector('[data-region="' + regionKey + '"]');
  if (reg) reg.classList.add('active');

  mapDetailIcon.textContent = data.icon;
  mapDetailTitle.textContent = data.title;
  mapDetailDesc.textContent = data.desc;
  mapDetailTags.innerHTML = data.tags.map(t => '<span>' + t + '</span>').join('');
  mapDetailCities.innerHTML = '<p>' + data.cities + '</p>';

  mapDefault.style.display = 'none';
  mapDetail.style.display = 'block';
  mapDetail.style.animation = 'fadeSlide .3s ease';
}

mapRegions.forEach(region => {
  region.addEventListener('click', function () {
    showRegion(this.getAttribute('data-region'));
  });
  region.setAttribute('tabindex', '0');
  region.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' || e.key === ' ') showRegion(this.getAttribute('data-region'));
  });
});

// Region pills
document.querySelectorAll('.mreg-pill').forEach(pill => {
  const cls = pill.className.match(/(\w+)-pill/);
  if (cls) {
    pill.addEventListener('click', () => showRegion(cls[1]));
    pill.setAttribute('tabindex', '0');
    pill.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') showRegion(cls[1]);
    });
  }
});

mapBack.addEventListener('click', function () {
  mapRegions.forEach(r => r.classList.remove('active'));
  mapDefault.style.display = 'block';
  mapDetail.style.display = 'none';
});

/* =============================================
   12. FAQ ACCORDION
============================================= */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', function () {
    const answer = this.nextElementSibling;
    const isOpen = this.getAttribute('aria-expanded') === 'true';

    // Close all
    document.querySelectorAll('.faq-q').forEach(b => {
      b.setAttribute('aria-expanded', false);
      b.nextElementSibling.hidden = true;
    });

    // Toggle this
    if (!isOpen) {
      this.setAttribute('aria-expanded', true);
      answer.hidden = false;
    }
  });
});

/* =============================================
   13. SCROLL REVEAL
============================================= */
const revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* =============================================
   14. COUNTER ANIMATION (indicadores)
============================================= */
let countersStarted = false;

function startCounters() {
  if (countersStarted) return;
  countersStarted = true;

  document.querySelectorAll('.stat-number').forEach(el => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1600;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });

  // Animate bars
  document.querySelectorAll('.stat-fill, .sus-fill').forEach(bar => {
    const w = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => { bar.style.width = w; }, 100);
  });
}

const counterSection = document.getElementById('indicadores');
if (counterSection) {
  const counterObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) startCounters();
  }, { threshold: 0.3 });
  counterObserver.observe(counterSection);
}

/* =============================================
   15. SUAVE FECHAR MENU AO CLICAR LINK
============================================= */
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    nav.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', false);
  });
});
/* ============================================================
   data.js — Dados centralizados do Paraná AgroTech v4
============================================================ */

const DATA = {

  /* ---- LINHA DO TEMPO ---- */
  timeline: [
    {year:'1850',icon:'🐂',title:'Era do Arado',desc:'Primeiros colonos utilizam arado de tração animal. Produção manual e extensiva dominam o campo paranaense.'},
    {year:'1930',icon:'🚜',title:'Mecanização Inicial',desc:'Chegada dos primeiros tratores importados. A tração mecânica começa a substituir os animais na lavoura.'},
    {year:'1950',icon:'☕',title:'Ciclo do Café',desc:'O Paraná se torna o maior produtor de café do Brasil. As fazendas de café moldam a economia e a sociedade paranaense.'},
    {year:'1970',icon:'🌱',title:'Revolução Verde',desc:'Introdução de sementes melhoradas, fertilizantes químicos e defensivos. Produtividade dispara, mas surgem preocupações ambientais.'},
    {year:'1975',icon:'🏢',title:'EMBRAPA Soja',desc:'Fundação da EMBRAPA Soja em Londrina. Pesquisas desenvolvem variedades adaptadas ao clima do Paraná, transformando o estado no celeiro nacional.'},
    {year:'1990',icon:'🛰️',title:'GPS Agrícola',desc:'Primeiros sistemas de GPS chegam ao campo. Início do conceito de agricultura de precisão com guia automático nos tratores.'},
    {year:'2000',icon:'💻',title:'Agricultura Digital',desc:'Computadores e softwares de gestão agrícola chegam às fazendas. Registros digitais e planejamento computadorizado ganham espaço.'},
    {year:'2008',icon:'📡',title:'Sensores IoT',desc:'Sensores de solo conectados via internet começam a monitorar umidade, temperatura e pH. Dados em tempo real chegam ao celular do produtor.'},
    {year:'2015',icon:'🚁',title:'Era dos Drones',desc:'Drones agrícolas com câmeras multiespectrais mapeiam lavouras inteiras em horas. Detecção precoce de pragas e doenças revoluciona o manejo.'},
    {year:'2020',icon:'🧠',title:'IA no Campo',desc:'Inteligência Artificial analisa imagens de satélite e dados de sensores para prever produtividade e recomendar aplicação localizada de insumos.'},
    {year:'2024',icon:'🤖',title:'Robótica Agrícola',desc:'Robôs autônomos realizam plantio, colheita seletiva e monitoramento. Tratores sem motorista operam 24h com precisão centimétrica.'},
    {year:'2026',icon:'🌿',title:'AgriTech Sustentável',desc:'Paraná lidera integração de tecnologia e sustentabilidade. IA, energia solar, IoT e biotecnologia convergem para uma agricultura carbono-neutro.'},
  ],

  /* ---- MAPA — REGIÕES ---- */
  regions: {
    noroeste:{
      icon:'🌽',title:'Noroeste do Paraná',
      desc:'Região de solo arenoso e clima quente, destaque na produção de cana-de-açúcar, soja, mandioca e pecuária extensiva. Grande potencial para irrigação tecnológica.',
      tags:['🌾 Cana-de-açúcar','🌱 Soja','🥕 Mandioca','🐄 Pecuária'],
      techs:['Irrigação por gotejamento','Sensores de umidade do solo','Drones para mapeamento','Sistemas de fertirrigação automatizada'],
      curiosities:['A região produz mais de 40% da cana-de-açúcar paranaense.','Umuarama possui uma das maiores agroindústrias de mandioca do Brasil.','O clima semiárido exige sistemas de irrigação de alta eficiência.'],
      cities:'📍 Umuarama, Paranavaí, Cianorte, Loanda',
      img:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=70'
    },
    norte:{
      icon:'☕',title:'Norte do Paraná',
      desc:'Berço do café paranaense e hoje um dos maiores polos de soja, trigo e milho do estado. Abriga Londrina e Maringá, centros de inovação, pesquisa e cooperativismo.',
      tags:['☕ Café','🌱 Soja','🌾 Trigo','🔬 Pesquisa'],
      techs:['EMBRAPA Soja (Londrina)','Sensores climáticos de precisão','Tratores autônomos com GPS RTK','Análise espectral por satélite NDVI'],
      curiosities:['Londrina abriga a EMBRAPA Soja, referência mundial em pesquisa.','Maringá é a 2ª cidade mais informatizada do Brasil.','A região produziu o primeiro cultivar de soja adaptado ao trópico.'],
      cities:'📍 Londrina, Maringá, Apucarana, Cambé',
      img:'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=70'
    },
    nordeste:{
      icon:'🌿',title:'Nordeste do Paraná',
      desc:'Região de transição climática com diversidade de culturas como algodão, amendoim, milho e cana. Área em expansão tecnológica com suporte de cooperativas regionais.',
      tags:['🌿 Algodão','🥜 Amendoim','🌽 Milho','🌡️ Clima Diverso'],
      techs:['Monitoramento climático por drones','Aplicação variável de defensivos VRT','Georreferenciamento de talhões','Controle biológico de pragas'],
      curiosities:['Jacarezinho é a capital do café da região nordeste.','A área tem a maior diversidade de culturas do Paraná.','Pioneira na adoção de controle biológico de pragas na cana.'],
      cities:'📍 Jacarezinho, Bandeirantes, Cornélio Procópio',
      img:'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=70'
    },
    oeste:{
      icon:'🐔',title:'Oeste do Paraná',
      desc:'O coração do agronegócio paranaense. Líder absoluto em soja, milho, aves e suínos. Itaipu fornece energia limpa para toda a agroindústria da região.',
      tags:['🌱 Soja','🐔 Aves','🐷 Suínos','⚡ Itaipu'],
      techs:['Granjas automatizadas com IoT','Tratores GPS precisão centimétrica','Biodigestores para geração de energia','Drones para pulverização de lavouras'],
      curiosities:['Cascavel é a capital tecnológica do agronegócio paranaense.','Toledo abate mais de 600 mil frangos por dia.','A Itaipu gera energia suficiente para toda a agroindústria da região.'],
      cities:'📍 Cascavel, Toledo, Foz do Iguaçu, Marechal Cândido Rondon',
      img:'https://images.unsplash.com/photo-1589923188651-268a9765e432?w=600&q=70'
    },
    centroOeste:{
      icon:'🌾',title:'Centro-Oeste do Paraná',
      desc:'Região de alta produção de grãos, especialmente soja e milho, com grande expansão tecnológica e forte adoção de agricultura de precisão e automação.',
      tags:['🌱 Soja','🌽 Milho','🚜 Automação','🎯 Precisão'],
      techs:['Plantadeiras com controle de taxa variável','Pulverização por drone','Sensores de nutrientes no solo','Plataformas de gestão agrícola digital'],
      curiosities:['Campo Mourão é o maior polo de esmagamento de soja do estado.','A região tem a maior taxa de adoção de agricultura de precisão do Paraná.','Mamborê produz sementes de alta tecnologia genética.'],
      cities:'📍 Campo Mourão, Mamborê, Ubiratã, Goioerê',
      img:'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=70'
    },
    centro:{
      icon:'🌾',title:'Centro do Paraná',
      desc:'Guarapuava é um dos maiores polos de trigo do Brasil. Região de grande diversidade produtiva com destaque para pecuária, avicultura e grãos de inverno.',
      tags:['🌾 Trigo','🐄 Pecuária','🌱 Soja','🐔 Avicultura'],
      techs:['Semeadoras de trigo de alta precisão','Monitoramento de pastagens por satélite','Sistemas de rastreamento de gado','Estações climáticas automatizadas'],
      curiosities:['Guarapuava é uma das cidades com maior produção de trigo por hectare do Brasil.','A região tem as maiores altitudes agrícolas do Paraná (1.100m).','O clima frio favorece cultivares especiais de alta qualidade.'],
      cities:'📍 Guarapuava, Pitanga, Irati, Turvo',
      img:'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&q=70'
    },
    leste:{
      icon:'🌲',title:'Leste do Paraná',
      desc:'Região de relevo acidentado com produção de batata, feijão e horticultura. Próxima à capital Curitiba, abriga centros de pesquisa e processamento agroindustrial.',
      tags:['🥔 Batata','🫘 Feijão','🥦 Horticultura','🏭 Agroindústria'],
      techs:['Hidroponia e cultivo protegido','Sensores de solo para culturas especiais','Rastreabilidade por QR Code','Logística refrigerada inteligente'],
      curiosities:['Castro é a capital leiteira do Paraná com produção recorde.','Ponta Grossa tem o maior terminal graneleiro privado do sul do Brasil.','A região produz mais de 60% da batata consumida no Paraná.'],
      cities:'📍 Ponta Grossa, Castro, Lapa, Palmeira',
      img:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=70'
    },
    sudoeste:{
      icon:'🐄',title:'Sudoeste do Paraná',
      desc:'Região de forte agricultura familiar, destaque para leite, soja, milho e feijão. Grande adoção de cooperativismo e tecnologias acessíveis para pequenos produtores.',
      tags:['🥛 Leite','🌱 Soja','🫘 Feijão','🤝 Cooperativas'],
      techs:['Ordenhadeiras robotizadas','Resfriadores de leite inteligentes','Apps de gestão para pequenos produtores','Energia solar em propriedades familiares'],
      curiosities:['Francisco Beltrão tem a maior concentração de agricultores orgânicos certificados do PR.','A cooperativa C.Vale é uma das 10 maiores do Brasil.','Dois Vizinhos abriga um dos maiores centros de pesquisa em avicultura.'],
      cities:'📍 Francisco Beltrão, Pato Branco, Dois Vizinhos, Chopinzinho',
      img:'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=70'
    },
    sul:{
      icon:'🍃',title:'Sul do Paraná',
      desc:'Região fria com destaque para erva-mate, maçã, produção leiteira e sustentabilidade ambiental. Alto índice de preservação da Mata Atlântica.',
      tags:['🍃 Erva-mate','🍎 Maçã','🥛 Leite','🌿 Sustentabilidade'],
      techs:['Secadores de erva-mate sustentáveis','Sensores de geada para pomares','Sistemas de certificação orgânica digital','Biodigestores em propriedades leiteiras'],
      curiosities:['São Mateus do Sul possui a maior reserva de xisto do Brasil.','A região produz 80% da erva-mate do Paraná.','Palmas tem a temperatura mínima média mais baixa do estado: -3°C.'],
      cities:'📍 União da Vitória, São Mateus do Sul, Palmas, Bituruna',
      img:'https://images.unsplash.com/photo-1504608524841-42f0f88b6b0e?w=600&q=70'
    },
    sudeste:{
      icon:'🏭',title:'Sudeste do Paraná',
      desc:'Celeiro nacional de trigo, cevada e aveia. Campos Gerais com alto grau de mecanização e tecnologia de precisão. Área estratégica para exportação via corredor ferroviário.',
      tags:['🌾 Trigo','🌽 Cevada','🚜 Mecanização','🎯 Precisão'],
      techs:['Colhedoras com rendimento por parcela','Mapeamento de solo por eletrocondutividade','Sistemas de irrigação por pivô central','Análise de qualidade de grãos por IA'],
      curiosities:['Ponta Grossa é conhecida como a "Capital do Agronegócio" do PR.','Os Campos Gerais têm o maior índice de mecanização agrícola do estado.','Castro detém o recorde brasileiro de produtividade leiteira por vaca.'],
      cities:'📍 Ponta Grossa, Castro, Tibagi, Carambeí',
      img:'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600&q=70'
    },
    metro:{
      icon:'🏙️',title:'Região Metropolitana de Curitiba',
      desc:'Polo industrial e tecnológico do Paraná. Abriga startups de AgTech, centros de pesquisa agroindustrial e o Porto de Paranaguá — maior porto graneleiro da América Latina.',
      tags:['🔬 Pesquisa','💻 AgTech','🚢 Paranaguá','🏭 Agroindústria'],
      techs:['Startups de AgTech no hub de inovação','IA para análise de commodities','Blockchain para rastreabilidade de alimentos','Porto automatizado com IA logística'],
      curiosities:['Paranaguá é o maior porto exportador de grãos da América Latina.','Curitiba tem mais de 80 startups de tecnologia agrícola registradas.','O Tecnoparque Industrial de Curitiba abriga laboratórios de biotecnologia.'],
      cities:'📍 Curitiba, Paranaguá, São José dos Pinhais, Araucária',
      img:'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=70'
    }
  },

  /* ---- DASHBOARD ---- */
  dashboard:[
    {icon:'🌱',val:'25M ton',label:'Produção de Soja',trend:'+8% ↑',up:true},
    {icon:'🐔',val:'35%',label:'Frango Nacional',trend:'+2% ↑',up:true},
    {icon:'🌽',val:'15M ton',label:'Produção de Milho',trend:'+5% ↑',up:true},
    {icon:'🚢',val:'R$ 48Bi',label:'Exportações 2024',trend:'+12% ↑',up:true},
    {icon:'💧',val:'40%',label:'Economia de Água (IoT)',trend:'Meta: 50%',up:true},
    {icon:'☀️',val:'28mil',label:'Propriedades com Solar',trend:'+40% ↑',up:true},
    {icon:'🤖',val:'12mil',label:'Tratores Autônomos',trend:'+18% ↑',up:true},
    {icon:'🔬',val:'847',label:'Pesquisadores EMBRAPA',trend:'Ativo',up:true},
  ],

  barChartData:[
    {label:'Soja',val:25,max:30,unit:'M ton'},
    {label:'Milho',val:15,max:30,unit:'M ton'},
    {label:'Trigo',val:4.2,max:30,unit:'M ton'},
    {label:'Frango',val:4.8,max:30,unit:'M ton'},
    {label:'Suíno',val:1.9,max:30,unit:'M ton'},
    {label:'Leite',val:3.6,max:30,unit:'B litros'},
  ],

  donutData:[
    {label:'Drones',pct:68,color:'#40916c'},
    {label:'IoT/Sensores',pct:54,color:'#74c69d'},
    {label:'IA Agrícola',pct:41,color:'#f5c518'},
    {label:'GPS Precisão',pct:79,color:'#b7e4c7'},
    {label:'Energia Solar',pct:35,color:'#06b6d4'},
  ],

  /* ---- QUIZ ---- */
  quiz:[
    {q:'Qual é a porcentagem da produção brasileira de frango que vem do Paraná?',opts:['25%','30%','35%','40%'],a:2,exp:'O Paraná é responsável por 35% de todo o frango produzido no Brasil, tornando-o líder absoluto no setor avícola nacional.'},
    {q:'O que significa a sigla IoT no contexto da agricultura?',opts:['Irrigação de Tecnologia','Internet of Things','Índice de Otimização Técnica','Insumos Orgânicos Totais'],a:1,exp:'IoT (Internet das Coisas) são dispositivos conectados que coletam e transmitem dados, como sensores de solo na agricultura.'},
    {q:'Qual cidade do Paraná abriga a EMBRAPA Soja?',opts:['Curitiba','Maringá','Londrina','Cascavel'],a:2,exp:'A EMBRAPA Soja está localizada em Londrina e é referência mundial em pesquisa de soja tropical.'},
    {q:'Qual tecnologia permite analisar a saúde das plantas por cor invisível ao olho humano?',opts:['GPS','NDVI com câmera multiespectral','Termômetro digital','Pluviômetro'],a:1,exp:'O NDVI (Índice de Vegetação por Diferença Normalizada) usa câmeras multiespectrais em drones e satélites para detectar estresse nas plantas.'},
    {q:'Quantos países recebem produtos do agronegócio paranaense?',opts:['50 países','75 países','Mais de 100 países','Mais de 150 países'],a:2,exp:'O Paraná exporta para mais de 100 países, demonstrando a importância global do seu agronegócio.'},
    {q:'Qual é o maior porto graneleiro da América Latina?',opts:['Porto de Santos-SP','Porto de Paranaguá-PR','Porto de Rio Grande-RS','Porto de Vitória-ES'],a:1,exp:'O Porto de Paranaguá é o maior porto exportador de grãos da América Latina, essencial para as exportações do agronegócio.'},
    {q:'Quanto pode ser reduzido o uso de defensivos com aplicação localizada por drone?',opts:['10%','20%','30%','50%'],a:2,exp:'A aplicação localizada por drone pode reduzir o uso de defensivos em até 30%, diminuindo custos e impacto ambiental.'},
    {q:'Qual tecnologia permite ao trator trabalhar sozinho com precisão de centímetros?',opts:['Bluetooth agrícola','GPS RTK com piloto automático','WiFi rural','Rádio AM'],a:1,exp:'O GPS RTK (Cinemático em Tempo Real) permite precisão centimétrica, possibilitando tratores operarem de forma autônoma.'},
    {q:'Qual é o percentual da produção agrícola nacional que vem do Paraná?',opts:['Mais de 10%','Mais de 15%','Mais de 20%','Mais de 30%'],a:2,exp:'O Paraná responde por mais de 20% da produção agrícola nacional, sendo um dos estados mais produtivos do Brasil.'},
    {q:'Qual energia renovável lidera a adoção em propriedades rurais do Paraná?',opts:['Eólica','Hidrelétrica','Solar fotovoltaica','Biomassa'],a:2,exp:'A energia solar fotovoltaica lidera a adoção em propriedades rurais, com retorno do investimento em 5-7 anos e zero emissões.'},
  ],

  /* ---- CURIOSIDADES ---- */
  curiosities:[
    {n:'01',icon:'🌱',title:'Soja Tropical',desc:'O Paraná foi pioneiro na adaptação da soja ao clima tropical. As pesquisas da EMBRAPA Soja em Londrina revolucionaram a agricultura brasileira nos anos 70.'},
    {n:'02',icon:'🚁',title:'Drones Registrados',desc:'O Paraná possui mais de 8.000 drones agrícolas registrados, sendo o estado com maior densidade de drones por hectare cultivado do Brasil.'},
    {n:'03',icon:'💧',title:'Rio Paraná',desc:'O Rio Paraná, fronteira natural do estado, tem seu volume de água monitorado por sensores IoT que ajudam agricultores a planejar a irrigação de suas lavouras.'},
    {n:'04',icon:'⚡',title:'Itaipu e Agricultura',desc:'Itaipu Binacional fornece energia para mais de 30 mil propriedades rurais do Paraná, incentivando a eletrificação de equipamentos agrícolas e redução de diesel.'},
    {n:'05',icon:'🤖',title:'Robôs na Colheita',desc:'Fazendas da região de Cascavel já utilizam robôs para colheita seletiva de frutas e hortaliças, aumentando a produtividade em 40% comparado à colheita manual.'},
    {n:'06',icon:'🛰️',title:'Satélites Monitorando',desc:'Mais de 1.200 satélites monitoram as lavouras paranaenses diariamente, gerando relatórios automáticos de saúde das plantações disponíveis em aplicativos móveis.'},
    {n:'07',icon:'🌿',title:'Florestas de Carbono',desc:'Proprietários rurais do Paraná vendem créditos de carbono por preservar a Mata Atlântica. Em 2024, mais de R$ 120 milhões foram gerados nessa economia verde.'},
    {n:'08',icon:'📱',title:'App do Agricultor',desc:'O aplicativo "PR Rural" tem mais de 400.000 agricultores cadastrados e oferece previsão climática por talhão, cotação de commodities e recomendações de IA.'},
    {n:'09',icon:'🏆',title:'Cooperativas Líderes',desc:'As cooperativas paranaenses COAMO, C.Vale e COCAMAR estão entre as 10 maiores cooperativas agrícolas do Brasil, conectando 120 mil produtores à tecnologia.'},
  ],

  /* ---- FAQ ---- */
  faq:[
    {q:'O que é agricultura de precisão?',a:'É o uso integrado de GPS, sensores, drones e IA para gerenciar cada ponto da lavoura individualmente. Em vez de tratar toda a área igual, cada metro quadrado recebe o manejo exato que precisa, economizando insumos e maximizando a produção.'},
    {q:'Como os drones ajudam os agricultores?',a:'Drones com câmeras multiespectrais voam sobre as lavouras capturando imagens que revelam problemas invisíveis ao olho humano: deficiências nutricionais, estresse hídrico, focos de pragas e fungos. Tudo isso em fração do tempo e custo de uma vistoria manual.'},
    {q:'O que a Inteligência Artificial faz na agricultura?',a:'A IA processa dados de satélites, sensores e histórico climático para prever problemas, recomendar ações precisas e otimizar recursos. Ela indica quando irrigar, quanto fertilizar, quando colher e até prevê pragas antes delas aparecerem.'},
    {q:'Por que o Paraná é referência no agronegócio?',a:'O Paraná combina clima favorável, solo fértil, centros de pesquisa de excelência como a EMBRAPA Soja, cooperativas fortes e alta adoção tecnológica. O estado lidera a produção nacional de frango e é top 3 em soja, milho e trigo.'},
    {q:'Como a tecnologia ajuda o meio ambiente?',a:'Tecnologia permite produzir mais com menos impacto: drones reduzem defensivos em 30%, sensores evitam irrigação excessiva (economia de 40% de água), energia solar elimina emissões e o monitoramento por satélite protege áreas de reserva legal.'},
    {q:'Pequenos produtores também podem usar essas tecnologias?',a:'Sim! Cooperativas, apps de baixo custo, drones por assinatura e programas do governo democratizam o acesso. Um smartphone com o app certo já entrega previsão climática e cotações em tempo real para qualquer produtor.'},
    {q:'Quais são as principais cooperativas do Paraná?',a:'COAMO (Campo Mourão), C.Vale (Palotina), COCAMAR (Maringá), LAR (Medianeira), CASTROLANDA (Castro) e FRISIA (Carambeí) são as principais, unindo mais de 150 mil produtores ao mercado global com tecnologia de ponta.'},
    {q:'O que é NDVI e para que serve?',a:'NDVI (Índice de Vegetação por Diferença Normalizada) é uma medida de saúde das plantas feita por câmeras em satélites e drones. Plantas saudáveis refletem mais infravermelho, gerando mapas coloridos que mostram onde a lavoura está com problemas antes de ser visível a olho nu.'},
  ],

  /* ---- CONQUISTAS ---- */
  achievements:[
    {id:'welcome',icon:'👋',title:'Bem-vindo!',desc:'Acessou o site'},
    {id:'scroll50',icon:'📜',title:'Explorador',desc:'Leu metade do conteúdo'},
    {id:'scroll100',icon:'🗺️',title:'Desbravador',desc:'Leu tudo!'},
    {id:'map1',icon:'🗺️',title:'Cartógrafo',desc:'Explorou o mapa'},
    {id:'map5',icon:'🌍',title:'Geógrafo',desc:'Visitou 5 regiões'},
    {id:'mapAll',icon:'🏅',title:'Conhecedor do PR',desc:'Visitou todas as regiões'},
    {id:'quiz1',icon:'🧠',title:'Curioso',desc:'Fez o quiz'},
    {id:'quiz100',icon:'🏆',title:'Mestre AgroTech',desc:'Acertou tudo no quiz'},
    {id:'calc1',icon:'🔢',title:'Calculista',desc:'Usou uma calculadora'},
    {id:'calcAll',icon:'📊',title:'Analista',desc:'Usou todas as calculadoras'},
    {id:'game1',icon:'🎮',title:'Fazendeiro',desc:'Jogou FazendaTech'},
    {id:'game500',icon:'⭐',title:'Fazenda Top',desc:'500+ pontos no jogo'},
    {id:'ai1',icon:'🤖',title:'Tech Talker',desc:'Conversou com AgroBot'},
    {id:'dark',icon:'🌙',title:'Notívago',desc:'Ativou o modo escuro'},
    {id:'share',icon:'📢',title:'Compartilhador',desc:'Compartilhou resultado'},
    {id:'settings',icon:'⚙️',title:'Configurador',desc:'Ajustou as configurações'},
  ],

  /* ---- JOGO — SHOP ---- */
  shopItems:[
    {id:'sensor',icon:'📡',name:'Sensores IoT',desc:'Monitoramento de solo em tempo real',cost:5000,prod:8,water:-15,carbon:-5,points:100},
    {id:'drone',icon:'🚁',name:'Drone Agrícola',desc:'Mapeamento e pulverização precisa',cost:12000,prod:12,water:-8,carbon:-8,points:200},
    {id:'gps',icon:'🛰️',name:'GPS de Precisão',desc:'Piloto automático centimétrico',cost:8000,prod:6,water:-3,carbon:-6,points:150},
    {id:'ia',icon:'🧠',name:'IA Agrícola',desc:'Previsão e recomendações por IA',cost:18000,prod:18,water:-20,carbon:-12,points:350},
    {id:'solar',icon:'☀️',name:'Energia Solar',desc:'Painel fotovoltaico 10kW',cost:22000,prod:4,water:0,carbon:-30,points:400},
    {id:'trator',icon:'🚜',name:'Trator Autônomo',desc:'Opera 24h sem motorista',cost:35000,prod:22,water:-5,carbon:-18,points:500},
    {id:'biodig',icon:'♻️',name:'Biodigestor',desc:'Energia do lixo orgânico',cost:14000,prod:2,water:0,carbon:-25,points:300},
    {id:'gotejamento',icon:'💧',name:'Irrigação Gotejamento',desc:'Reduz 60% do consumo de água',cost:9000,prod:10,water:-40,carbon:-4,points:200},
    {id:'satelite',icon:'🔭',name:'Imagens de Satélite',desc:'Monitoramento NDVI semanal',cost:3000,prod:5,water:-10,carbon:-3,points:80},
    {id:'robot',icon:'🤖',name:'Robô Colhedor',desc:'Colheita seletiva automatizada',cost:50000,prod:28,water:-6,carbon:-15,points:600},
  ],

  /* ---- EVENTOS DO JOGO ---- */
  gameEvents:[
    {type:'bad',icon:'🌧️',msg:'Chuva excessiva! Perdeu 15% da produção.',prod:-15,money:-5000},
    {type:'bad',icon:'🦟',msg:'Praga detectada! Custos de controle altos.',prod:-8,money:-8000},
    {type:'bad',icon:'🌡️',msg:'Seca severa! Irrigação emergencial necessária.',prod:-20,money:-10000},
    {type:'bad',icon:'💹',msg:'Queda no preço da commodity! Receita menor.',prod:0,money:-12000},
    {type:'good',icon:'🌤️',msg:'Clima perfeito! Produção aumentou 10%.',prod:10,money:5000},
    {type:'good',icon:'💰',msg:'Alta no preço da soja! Colheita mais lucrativa.',prod:0,money:15000},
    {type:'good',icon:'🏆',msg:'Prêmio de produtividade recebido!',prod:0,money:20000},
    {type:'good',icon:'🤝',msg:'Cooperativa negociou melhor preço!',prod:0,money:10000},
    {type:'neutral',icon:'🔬',msg:'Pesquisa de solo revelou deficiência de zinco. Corrija!',prod:-5,money:-3000},
    {type:'neutral',icon:'📡',msg:'Sensor detectou problema precoce. Dano minimizado.',prod:-3,money:-2000},
  ],

  /* ---- IA — BASE DE CONHECIMENTO ---- */
  aiKB:[
    {keys:['drone','drones','voo'],resp:'🚁 Os drones agrícolas são aeronaves não tripuladas equipadas com câmeras multiespectrais e sensores. No Paraná, eles mapeiam lavouras inteiras em horas, detectam pragas precocemente e fazem pulverização cirúrgica reduzindo defensivos em até 30%! São uma das tecnologias mais adotadas no estado.'},
    {keys:['ia','inteligência artificial','machine learning','algoritmo'],resp:'🧠 A IA no agronegócio processa dados de satélites, sensores de solo e histórico climático para recomendar ações precisas. No Paraná, ela prevê quando irrigar, quanto fertilizar, onde aplicar defensivos e até antecipa doenças antes de aparecerem. A EMBRAPA já tem modelos de IA que predizem safras meses antes da colheita!'},
    {keys:['soja','feijão','milho','trigo','cana','cultura'],resp:'🌱 O Paraná é top produtor nacional! Soja: 25 milhões de toneladas (18% do Brasil). Milho: 15 milhões de toneladas. Trigo: líder absoluto no Brasil. Cana-de-açúcar no Noroeste. Frango: 35% da produção nacional! Cada cultura usa tecnologias específicas para maximizar a produção.'},
    {keys:['água','irrigação','hídrico','gotejamento'],resp:'💧 O Paraná lidera o uso racional da água na agricultura! Com sensores IoT de umidade no solo e irrigação por gotejamento controlada por IA, as fazendas economizam até 40% da água. O Rio Paraná tem sensores que monitoram o nível e ajudam no planejamento hídrico regional.'},
    {keys:['solar','energia','renovável','painel','fotovoltaico'],resp:'☀️ O Paraná tem mais de 28 mil propriedades rurais com energia solar instalada! Com a irradiação média de 5,0 kWh/m²/dia, o retorno do investimento em painéis é de 5-7 anos. Combinado com biodigestores, muitas fazendas já são 100% energeticamente autossuficientes.'},
    {keys:['iot','sensor','monitoramento','internet'],resp:'📡 IoT (Internet das Coisas) no campo paranaense são sensores espalhados pela lavoura medindo temperatura do solo, umidade, pH, nutrientes e microclima. Os dados chegam ao celular do produtor em tempo real e acionam automaticamente a irrigação quando necessário. São mais de 180 mil sensores ativos no PR!'},
    {keys:['embrapa','pesquisa','universidade','ciência'],resp:'🔬 A EMBRAPA Soja em Londrina é referência mundial! Desenvolveu cultivares de soja adaptados ao trópico brasileiro. A UTFPR, UEM, UEL e UFPR formam pesquisadores em agrotecnologia. O Paraná tem mais de 800 pesquisadores dedicados à inovação agrícola.'},
    {keys:['cooperativa','coamo','c.vale','cocamar'],resp:'🤝 As cooperativas são o motor da inovação rural no Paraná! COAMO (500 mil hectares monitorados), C.Vale (maior exportadora de frango), COCAMAR (pioneira em bioestimulantes), LAR (energia solar em cooperados). Elas conectam mais de 150 mil agricultores à tecnologia e ao mercado global.'},
    {keys:['paranaguá','porto','exportação','embarque'],resp:'🚢 O Porto de Paranaguá é o maior porto graneleiro da América Latina! Em 2024 exportou mais de 48 bilhões de dólares em commodities. Usa IA para otimizar filas de caminhões, sistema automatizado de carregamento de navios e rastreabilidade blockchain de toda a carga.'},
    {keys:['carbono','sustentável','sustentabilidade','verde','ambiental'],resp:'🌿 O Paraná é referência em agricultura sustentável! Com 40% do território em áreas de conservação, o estado lidera a venda de créditos de carbono. Fazendas que adotam plantio direto e preservam nascentes recebem pagamento por serviços ambientais. Meta: carbono neutro no agronegócio até 2035!'},
    {keys:['trator','autônomo','robô','maquinário','mecanização'],resp:'🚜 O Paraná tem mais de 12 mil tratores com GPS de alta precisão e piloto automático! Alguns já operam completamente autônomos 24h por dia. Os robôs colhedores chegaram às fazendas de café e frutas, aumentando a produtividade em 40% comparado à colheita manual.'},
    {keys:['paraná','estado','produção','brasil'],resp:'🌾 O Paraná é o estado mais tecnológico do agronegócio brasileiro! Responsável por: 35% do frango nacional, 18% da soja, 100% do liderança em trigo, 28% das exportações agrícolas. Com apenas 2,3% do território nacional, produz mais de 20% dos alimentos do país. É o estado que alimenta o Brasil!'},
    {keys:['quiz','jogo','game','pontuação','score'],resp:'🎮 Você pode testar seus conhecimentos no Quiz AgroTech (10 perguntas sobre o agronegócio paranaense) e jogar o FazendaTech — simulador onde você gerencia uma fazenda virtual aplicando tecnologias reais! Acesse pelas seções acima.'},
    {keys:['calculadora','calcular','economia','roi'],resp:'📊 O site tem 6 calculadoras interativas: 💧 Economia de Água, 🌿 Redução de CO₂, 📈 Simulador de Produção, ⚡ Energia Solar, 🧪 Redução de Insumos e 💰 ROI Tecnológico. Cada uma usa dados reais do agronegócio paranaense para dar resultados precisos!'},
  ],

};