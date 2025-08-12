import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Clock, Eye, Search, Home, Users, Download, Image, FileText, Bell, BookOpen, Award, UserCheck, Calendar, Store } from 'lucide-react';
import './App.css';

// Import das imagens existentes
import profileSaraiva from './assets/wrtfUetrlPVr.jpg';
import profileThomas from './assets/mqb1FaFIJEai.jpg';
import profileRussian1 from './assets/4suL6JaPFYzW.jpg';
import profileRussian2 from './assets/lfL4IVG9thzx.jpg';

// Import dos GIFs
import gifRussianMafia1 from './assets/3mhOjM8Ys3YC.gif';
import gifMafia from './assets/Dgfr99GN4iax.gif';
import gifRussianMafia2 from './assets/jlU6qFGQAjB6.gif';
import gifThomasShelby1 from './assets/YnU1gZ2zAza3.gif';
import gifThomasShelby2 from './assets/EQkVEjkr6ZPP.gif';
import gifSmile from './assets/W4biW0EjpUxX.gif';

const App = () => {
  const [likes, setLikes] = useState(4567);
  const [shares, setShares] = useState(3421);
  const [isLiked, setIsLiked] = useState(false);
  
  // Comentários expandidos (40+ comentários)
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'VladimirK_Moscow',
      avatar: profileRussian1,
      content: 'Finalmente alguém que fala a verdade nua e crua. O Brasil virou um circo de hipocrisia digital.',
      likes: 234,
      timestamp: '2h',
      replies: 12
    },
    {
      id: 2,
      author: 'ThomasShelby_BR',
      avatar: gifThomasShelby1,
      content: 'Por ordem dos Peaky Blinders... essa análise está certeira. A sociedade brasileira precisa olhar no espelho.',
      likes: 189,
      timestamp: '3h',
      replies: 8
    },
    {
      id: 3,
      author: 'DmitriVolkov',
      avatar: gifRussianMafia1,
      content: 'Na Rússia temos um ditado: "Quem grita mais alto, menos faz". Isso se aplica perfeitamente aqui.',
      likes: 156,
      timestamp: '4h',
      replies: 5
    },
    {
      id: 4,
      author: 'AntonioCorleone',
      avatar: profileRussian1,
      content: 'Respeito quem tem coragem de falar o que todos pensam mas não têm peito pra dizer. Salve, saraivapsyc.',
      likes: 298,
      timestamp: '5h',
      replies: 15
    },
    {
      id: 5,
      author: 'Ivan_TheTerrible',
      avatar: gifRussianMafia2,
      content: 'A hipocrisia reina, e o pior é que a maioria nem percebe.',
      likes: 167,
      timestamp: '6h',
      replies: 9
    },
    {
      id: 6,
      author: 'Natasha_KGB',
      avatar: profileRussian2,
      content: 'Concordo plenamente! É um ciclo vicioso de indignação seletiva.',
      likes: 203,
      timestamp: '7h',
      replies: 14
    },
    {
      id: 7,
      author: 'ArthurShelby_Ltd',
      avatar: gifThomasShelby2,
      content: 'Duro, mas necessário. Alguém tinha que dizer.',
      likes: 145,
      timestamp: '8h',
      replies: 6
    },
    {
      id: 8,
      author: 'PollyGray_Wisdom',
      avatar: gifSmile,
      content: 'Essa é a realidade que muitos se recusam a enxergar.',
      likes: 178,
      timestamp: '9h',
      replies: 11
    },
    {
      id: 9,
      author: 'DonVito_NYC',
      avatar: gifMafia,
      content: 'Onde assino embaixo? Perfeito!',
      likes: 89,
      timestamp: '10h',
      replies: 3
    },
    {
      id: 10,
      author: 'LucaBrasi_Silent',
      avatar: profileRussian1,
      content: 'Triste ver como a tragédia virou entretenimento.',
      likes: 234,
      timestamp: '11h',
      replies: 18
    },
    {
      id: 11,
      author: 'EliasVance_Analyst',
      avatar: profileThomas,
      content: 'A verdade dói, mas liberta. Parabéns pela coragem.',
      likes: 156,
      timestamp: '12h',
      replies: 7
    },
    {
      id: 12,
      author: 'Sophia_Mystic',
      avatar: profileRussian2,
      content: 'Precisamos de mais vozes como a sua, sem medo de expor a podridão.',
      likes: 267,
      timestamp: '13h',
      replies: 22
    },
    {
      id: 13,
      author: 'Boris_TheBlade',
      avatar: gifRussianMafia1,
      content: 'É um tapa na cara da sociedade. Chocante e real.',
      likes: 198,
      timestamp: '14h',
      replies: 13
    },
    {
      id: 14,
      author: 'Olga_IronLady',
      avatar: profileRussian2,
      content: 'A cada dia que passa, a internet se torna um palco de vaidades.',
      likes: 145,
      timestamp: '15h',
      replies: 8
    },
    {
      id: 15,
      author: 'AlCapone_Legacy',
      avatar: gifMafia,
      content: 'A adultização é um problema gravíssimo e pouco discutido a fundo.',
      likes: 289,
      timestamp: '16h',
      replies: 25
    },
    {
      id: 16,
      author: 'Pablo_Escobar_Jr',
      avatar: profileRussian1,
      content: 'Pais que expõem os filhos por likes... o fundo do poço.',
      likes: 234,
      timestamp: '17h',
      replies: 19
    },
    {
      id: 17,
      author: 'AdaShelby_Sharp',
      avatar: gifSmile,
      content: 'A inversão de valores é assustadora.',
      likes: 167,
      timestamp: '18h',
      replies: 12
    },
    {
      id: 18,
      author: 'MichaelGray_Ambition',
      avatar: gifThomasShelby1,
      content: 'Enquanto uns lacram, outros lutam de verdade. A diferença é gritante.',
      likes: 345,
      timestamp: '19h',
      replies: 28
    },
    {
      id: 19,
      author: 'Vincenzo_Gambino',
      avatar: profileThomas,
      content: 'A empatia virou maquiagem para a vaidade. Que vergonha!',
      likes: 178,
      timestamp: '20h',
      replies: 15
    },
    {
      id: 20,
      author: 'Isabella_Shadow',
      avatar: profileRussian2,
      content: 'O texto é um soco no estômago. Precisamos acordar.',
      likes: 256,
      timestamp: '21h',
      replies: 21
    },
    {
      id: 21,
      author: 'Grigori_Rasputin',
      avatar: gifRussianMafia2,
      content: 'Cada palavra aqui é uma verdade que machuca.',
      likes: 189,
      timestamp: '22h',
      replies: 14
    },
    {
      id: 22,
      author: 'Anastasia_Dark',
      avatar: profileRussian2,
      content: 'A sociedade brasileira precisa de um choque de realidade.',
      likes: 167,
      timestamp: '23h',
      replies: 9
    },
    {
      id: 23,
      author: 'Silas_TheQuiet',
      avatar: profileRussian1,
      content: 'Infelizmente, a hipocrisia é a moeda corrente da internet.',
      likes: 134,
      timestamp: '1d',
      replies: 6
    },
    {
      id: 24,
      author: 'Eleanor_Vixen',
      avatar: gifSmile,
      content: 'Texto necessário e corajoso. Parabéns!',
      likes: 298,
      timestamp: '1d',
      replies: 23
    },
    {
      id: 25,
      author: 'Viktor_Kozlov',
      avatar: gifRussianMafia1,
      content: 'Na Rússia, chamamos isso de "teatro da virtude".',
      likes: 245,
      timestamp: '1d',
      replies: 17
    },
    {
      id: 26,
      author: 'Carmela_Soprano',
      avatar: profileRussian2,
      content: 'A realidade é dura, mas alguém precisa falar.',
      likes: 156,
      timestamp: '1d',
      replies: 11
    },
    {
      id: 27,
      author: 'Tommy_Shelby_Real',
      avatar: gifThomasShelby2,
      content: 'By order of the Peaky Blinders... isso é verdade pura.',
      likes: 367,
      timestamp: '1d',
      replies: 29
    },
    {
      id: 28,
      author: 'Katarina_Volga',
      avatar: profileRussian2,
      content: 'O Brasil precisa olhar no espelho e ver o que se tornou.',
      likes: 189,
      timestamp: '1d',
      replies: 13
    },
    {
      id: 29,
      author: 'Salvatore_Luciano',
      avatar: gifMafia,
      content: 'Respeito total por quem tem coragem de falar a verdade.',
      likes: 234,
      timestamp: '1d',
      replies: 18
    },
    {
      id: 30,
      author: 'Yelena_Belova',
      avatar: profileRussian2,
      content: 'A hipocrisia digital é uma epidemia mundial.',
      likes: 167,
      timestamp: '1d',
      replies: 8
    },
    {
      id: 31,
      author: 'John_Shelby_Wild',
      avatar: gifThomasShelby1,
      content: 'Cada palavra aqui é um tiro certeiro na hipocrisia.',
      likes: 278,
      timestamp: '2d',
      replies: 22
    },
    {
      id: 32,
      author: 'Dimitri_Petrov',
      avatar: gifRussianMafia2,
      content: 'Na minha terra, quem fala assim é respeitado.',
      likes: 145,
      timestamp: '2d',
      replies: 9
    },
    {
      id: 33,
      author: 'Francesca_Corleone',
      avatar: gifSmile,
      content: 'A verdade sempre incomoda os hipócritas.',
      likes: 198,
      timestamp: '2d',
      replies: 15
    },
    {
      id: 34,
      author: 'Alexei_Volkov',
      avatar: profileRussian1,
      content: 'Texto que deveria ser lido por todos os brasileiros.',
      likes: 234,
      timestamp: '2d',
      replies: 19
    },
    {
      id: 35,
      author: 'Grace_Shelby_Memory',
      avatar: profileRussian2,
      content: 'A sociedade precisa parar de fingir que se importa.',
      likes: 167,
      timestamp: '2d',
      replies: 12
    },
    {
      id: 36,
      author: 'Vito_Corleone_Jr',
      avatar: gifMafia,
      content: 'Família é tudo, mas a sociedade esqueceu disso.',
      likes: 289,
      timestamp: '2d',
      replies: 24
    },
    {
      id: 37,
      author: 'Irina_Kozlova',
      avatar: profileRussian2,
      content: 'A internet virou um palco de falsas virtudes.',
      likes: 156,
      timestamp: '2d',
      replies: 10
    },
    {
      id: 38,
      author: 'Finn_Shelby_Young',
      avatar: gifThomasShelby2,
      content: 'Aprendi com meus irmãos: a verdade sempre vence.',
      likes: 178,
      timestamp: '2d',
      replies: 14
    },
    {
      id: 39,
      author: 'Sergei_Bratva',
      avatar: gifRussianMafia1,
      content: 'Na Bratva, respeitamos quem fala a verdade.',
      likes: 245,
      timestamp: '3d',
      replies: 17
    },
    {
      id: 40,
      author: 'Polly_Gray_Wisdom',
      avatar: gifSmile,
      content: 'Como sempre digo: a verdade é como uma faca, corta mas cura.',
      likes: 334,
      timestamp: '3d',
      replies: 26
    }
  ]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const mainPost = {
    author: 'saraivapsyc',
    avatar: profileSaraiva,
    timestamp: '6h',
    content: `Felca, Felca, Felca… pasmem: o brasileiro precisa de um escândalo novo toda semana pra fingir que vive numa causa. Vocês berram indignação na internet, posam de guerreiros digitais, mas não teriam coragem de encarar nem 1% da podridão que existe fora dessa bolha de likes. Enquanto vocês transformam denúncia em entretenimento, tem hacker arrancando do ar páginas da deep web cheias de estupro infantil, investigador se infiltrando por meses em grupos de pedófilos, gente que não ganha aplauso, mas salva vidas de verdade. Vocês não querem justiça, querem palco. Vocês não querem mudança, querem curtida.

E vocês, perfis grandes que se vendem como voz da causa? São só abutres digitais. Se alimentam da dor alheia, transformam tragédia em vitrine, usam sofrimento como moeda de engajamento. O choro das vítimas vira legenda dramática, a miséria alheia vira filtro. Vocês não ajudam, vocês exploram.

E essa história de adultização… não se enganem. Isso fala muito mais sobre o Brasil do que sobre pornografia infantil. Fala sobre a podridão da nossa sociedade, sobre o fracasso da nossa educação, sobre a moral podre dessa nação. Não é só culpa de predadores, mas também de pais e mães que colocam os próprios filhos no palco da internet pra ganhar like, que transformam infância em produto. E sim, o comportamento do filho nem sempre é culpa direta dos pais, mas eles não ficam de fora dessa merda. O Brasil é um país onde a sexualização de menor é normalizada, onde música pornográfica toca em festa infantil, onde roupa de adulto é vendida no tamanho PP pra caber em criança. E o povo? Consome, aplaude e compartilha, depois finge indignação quando vira trend.

Enquanto esse circo roda, o mundo real continua sendo um cemitério de infância: criança vendida como mercadoria, estuprada em tempo real para alimentar o prazer de monstros atrás de uma tela, morrendo de fome em Gaza, sequestrada e esquecida em guerras que vocês não conseguem nem apontar no mapa. Aqui, basta um trend e um story bem editado pra fabricar um herói nacional. Vocês vestem a máscara da empatia, mas é só maquiagem pra vaidade. Transformam tragédia em decoração de feed e chamam isso de consciência.

Eu tenho vergonha. Vergonha de vocês. Vergonha dessa nação que troca vida por like.`
  };

  // Dados mockados para as sidebars
  const sidebarStats = {
    totalMembers: 2195,
    recordOnline: 631,
    newestMember: {
      name: 'xxxxxxxtdk',
      joinTime: '2 horas atrás'
    },
    activeMembers: [
      { name: 'ThomasShelby', posts: 396, avatar: gifThomasShelby1 },
      { name: 'Sanya', posts: 113, avatar: gifSmile },
      { name: 'Fumante1533', posts: 98, avatar: gifRussianMafia1 },
      { name: 'azarath1', posts: 66, avatar: profileRussian2 }
    ]
  };

  return (
    <div className="forum-bg min-h-screen flex">
      {/* Left Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-red-800 fixed h-full overflow-y-auto z-40">
        <div className="p-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center forum-logo">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <h1 className="forum-title text-xl font-bold text-white">darkpsyc.forum</h1>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Pesquisar" 
              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
            />
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-2">
            <a href="#" className="flex items-center space-x-3 px-4 py-3 bg-red-600 text-white rounded-lg">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
              <Search className="w-5 h-5" />
              <span>Pesquisar</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
              <Users className="w-5 h-5" />
              <span>Fóruns</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
              <Users className="w-5 h-5" />
              <span>Clubes</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
              <Download className="w-5 h-5" />
              <span>Downloads</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
              <Image className="w-5 h-5" />
              <span>Galeria</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
              <FileText className="w-5 h-5" />
              <span>Artigos</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              <span>Notícias e atualizações</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
              <BookOpen className="w-5 h-5" />
              <span>Blogs</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
              <Award className="w-5 h-5" />
              <span>Os Melhores</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
              <UserCheck className="w-5 h-5" />
              <span>Equipe de Moderação</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
              <Eye className="w-5 h-5" />
              <span>Usuários Online</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
              <Calendar className="w-5 h-5" />
              <span>Calendário</span>
            </a>
          </nav>

          {/* Store Section */}
          <div className="mt-8 pt-4 border-t border-gray-700">
            <button className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors w-full">
              <Store className="w-5 h-5" />
              <span>STORE</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 mr-80">
        {/* Header */}
        <header className="forum-header p-4 sticky top-0 z-30">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span className="text-sm">12.4k online</span>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto p-4 space-y-6">
          {/* Main Post */}
          <article className="post-card rounded-lg p-6 shadow-2xl">
            {/* Post Header */}
            <div className="flex items-start space-x-4 mb-4">
              <img 
                src={mainPost.avatar} 
                alt={mainPost.author}
                className="profile-avatar w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="username text-lg">{mainPost.author}</h3>
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">PSICÓLOGO</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="timestamp">{mainPost.timestamp}</span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-white">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Post Content */}
            <div className="post-content text-gray-200 mb-6 whitespace-pre-line">
              {mainPost.content}
            </div>

            {/* Post Stats */}
            <div className="flex items-center justify-between border-t border-gray-700 pt-4">
              <div className="flex items-center space-x-6">
                <button 
                  onClick={handleLike}
                  className={`interaction-btn flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    isLiked ? 'text-red-500' : 'text-gray-400'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  <span className="stats-number">{likes.toLocaleString()}</span>
                </button>
                
                <button className="interaction-btn flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-400">
                  <MessageCircle className="w-5 h-5" />
                  <span className="stats-number">{comments.length}</span>
                </button>
                
                <button className="interaction-btn flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-400">
                  <Share2 className="w-5 h-5" />
                  <span className="stats-number">{shares.toLocaleString()}</span>
                </button>
              </div>
              
              <div className="text-sm text-gray-500">
                {(likes + shares + comments.length * 50).toLocaleString()} visualizações
              </div>
            </div>
          </article>

          {/* Comments Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-4">
              Comentários ({comments.length})
            </h2>
            
            {comments.map((comment) => (
              <article key={comment.id} className="comment-card rounded-lg p-4 ml-4">
                <div className="flex items-start space-x-3">
                  <img 
                    src={comment.avatar} 
                    alt={comment.author}
                    className="profile-avatar w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="username text-sm">{comment.author}</h4>
                      <span className="timestamp">{comment.timestamp}</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{comment.content}</p>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-400 hover:text-red-500 text-xs">
                        <Heart className="w-4 h-4" />
                        <span>{comment.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500 text-xs">
                        <MessageCircle className="w-4 h-4" />
                        <span>{comment.replies}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* Load More Comments */}
          <div className="text-center">
            <button className="interaction-btn px-6 py-3 rounded-lg text-gray-400 hover:text-white">
              Carregar mais comentários...
            </button>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 bg-gray-900 border-l border-red-800 fixed right-0 h-full overflow-y-auto z-40">
        <div className="p-4 space-y-6">
          {/* User Statistics */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h3 className="text-white font-bold mb-4">Estatísticas de Usuários</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-red-500">{sidebarStats.totalMembers.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">Membros</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-500">{sidebarStats.recordOnline}</div>
                <div className="text-gray-400 text-sm">Recorde Online</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center space-x-3">
                <img 
                  src={profileRussian1} 
                  alt={sidebarStats.newestMember.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <div className="text-red-400 text-sm font-medium">{sidebarStats.newestMember.name}</div>
                  <div className="text-gray-500 text-xs">Membro Mais Novo • {sidebarStats.newestMember.joinTime}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Members */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h3 className="text-white font-bold mb-4">Membros mais ativos</h3>
            <div className="space-y-3">
              {sidebarStats.activeMembers.map((member, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="text-red-400 text-sm font-medium">{member.name}</div>
                    <div className="text-gray-500 text-xs">Total de Posts: {member.posts}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Online Users */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h3 className="text-white font-bold mb-4">Usuários Online</h3>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500">12.4k</div>
              <div className="text-gray-400 text-sm">usuários online agora</div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h3 className="text-white font-bold mb-4">Estatísticas Rápidas</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Total de Posts:</span>
                <span className="text-red-400">45.2k</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tópicos:</span>
                <span className="text-red-400">8.7k</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Hoje:</span>
                <span className="text-red-400">234 posts</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default App;

