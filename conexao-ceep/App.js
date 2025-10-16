import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Button, ImageBackground} from 'react-native';


const characters = [

  {
    id: '1',
    name: 'Haley',
    image: 'https://gustavocavarlho.github.io/Conex-o-2025/imagens/546879068_1190771223109761_7574708144175450839_n.jpg',
    description:
      'Ser rica e popular durante todo o ensino médio tornou Haley um pouco convencida e egoísta. Ela tem uma tendência de julgar as pessoas por razões superficiais. Mas é muito tarde para ela descobrir o verdadeiro significado da vida? Existe uma jovem mulher engraçada, mente aberta escondida embaixo de toda essa beleza?.',
    hobbies: ['Fotografia', 'Moda', 'Tirar fotos'],
  },
  {
    id: '2',
    name: 'Leah',
    image: 'https://gustavocavarlho.github.io/Conex-o-2025/imagens/547319033_3767414340223250_4065456244929428003_n.jpg',
    description:
      'Leah vive sozinha em uma pequena cabana fora da vila. Ela ama passar o tempo fora de casa, coletando uma refeição selvagem ou simplesmente apreciando os presentes da estação. Ela é uma artista talentosa com um grande portfólio... ainda assim ela é muito nervosa para mostrá-lo para o público.',
    hobbies: ['Escultura', 'Caminhadas', 'Desenho'],
  },
  {
    id: '3',
    name: 'Shane',
    image: 'https://gustavocavarlho.github.io/Conex-o-2025/imagens/546419795_758865977055268_2689215211821629429_n.jpg',
    description:'Alugo o quarto da Marnie por um bom preço. É pequeno, mas não posso reclamar. Se eu pudesse começar a minha vida novamente, provavelmente criaria galinhas. Só animais criados ao ar livre, é claro.',
    hobbies: ['Tomar cerveja', 'Socializar', 'Trabalhar'],
  },
  {
    id: '3',
    name: 'Abigail',
    image: 'https://gustavocavarlho.github.io/Conex-o-2025/imagens/545611560_1155247666482084_6266472948971491330_n.jpg',
    description:
      'Abigail mora na loja com seus pais. Às vezes discute com sua mãe que se preocupa com o "estilo de vida alternativo" de Abigail. Sua mãe diz o seguinte: "Eu gostaria que Abby se vestisse mais apropriadamente e parasse de tingir seu cabelo de azul. Ela tem uma maravilhosa cor de cabelo natural, assim como sua avó.',
    hobbies: ['Explorar cavernas', 'Tocar flauta', 'Comer doces'],
  },
  {
    id: '3',
    name: 'Harvey',
    image: 'https://gustavocavarlho.github.io/Conex-o-2025/imagens/546221529_1485645609317178_4390909651417368196_n.jpg',
    description:
      'Harvey é o médico da cidade. Ele é um pouco velho para um solteiro, mas tem um grande coração amável e uma posição respeitada na comunidade. Ele mora em um pequeno apartamento em cima da clínica, mas gasta grande parte do seu tempo trabalhando. Você consegue sentir uma tristeza nele, como se houvesse algo que ele não diz.',
    hobbies: ['Medicina ', 'Cuidar das saúde dos outros', 'Pilotar'],
  },
  {
    id: '3',
    name: 'Penny',
    image: 'https://gustavocavarlho.github.io/Conex-o-2025/imagens/545619376_1115715853989099_854279479671631143_n.jpg',
    description:
      'Penny mora com sua mãe, Pam, num pequeno trailer perto do rio. Enquanto Pam está fora bebendo no salão, Penny silenciosamente costuma fazer suas tarefas no quarto escuro e abafado que ela é forçada a chamar de lar. Ela é tímida e modesta, sem nenhuma outra grande ambição na vida a não ser se acomodar e criar uma família.',
    hobbies: ['Ler', 'Encinar crianças', 'Cuidar da casa'],
  },
  {
    id: '3',
    name: 'Alex',
    image: 'https://gustavocavarlho.github.io/Conex-o-2025/imagens/547153893_2304148550022879_3349885700113265799_n.jpg',
    description:
      'Alex ama esportes e passar o tempo na praia. Ele é um pouco arrogante e conta vantagem a todos que ele irá ser um atleta profissional. Seria sua arrogância apenas uma fachada para mascarar sua devastadora insegurança? Estaria ele usando seus sonhos com esportes para preencher o vazio deixado pelo desaparecimento de seus pais?',
    hobbies: ['Praticar exportes', 'correr', 'Flexões'],
  },
  {
    id: '3',
    name: 'Emily',
    image: 'https://gustavocavarlho.github.io/Conex-o-2025/imagens/547508700_2590098601353422_4463216177327277468_n.jpg',
    description:
      'Eu só estou trabalhando com o Gus para sobreviver... mas a minha verdadeira paixão é alfaiataria. Eu fiz essas roupas a partir do zero.',
    hobbies: ['Costurar', 'Mediatar', 'Cuidar de cristais'],
  },
  {
    id: '3',
    name: 'Sam',
    image: 'https://gustavocavarlho.github.io/Conex-o-2025/imagens/546656893_801960182362559_7896359124051410466_n.jpg',
    description:
      'Sam é um cara extrovertido e amigável que está repleto de energia jovem. Ele toca guitarra e bateria, e quer começar uma banda com Sebastian assim que eles tiverem musicas juntos. Entretanto, ele tem o hábito de começar várias coisas ao mesmo tempo e não terminá-las. Sam está um pouco estressado com a volta repentina de seu pai, que esteve fora por anos devido ao seu trabalho.',
    hobbies: ['Tocar guitarra', 'skate', 'Música'],
  },
  {
    id: '3',
    name: 'Maru',
    image: 'https://gustavocavarlho.github.io/Conex-o-2025/imagens/547225185_2309380926163820_1341545318921474146_n.jpg',
    description:
      'Criada por uma mãe carpinteira e o pai cientista, Maru adquiriu uma paixão por criar ferramentas desde jovem. Quando ela não está em seu quarto, brincando com máquinas e ferramentas, às vezes ela trabalha na clínica local. Amigável, extrovertida e ambiciosa, Maru seria um golpe de sorte para um humilde recém chegado como você.',
    hobbies: ['Programar', 'Motociclismo', 'Jogos'],
  },
  {
    id: '3',
    name: 'Elliott',
    image: 'https://gustavocavarlho.github.io/Conex-o-2025/imagens/546171712_1276555137484864_396868121266091397_n.jpg',
    description:
      'Elliott mora sozinho em uma cabana na praia. Ele é um escritor que sonha em, um dia, escrever um romance magnífico. Ele é sentimental e “romântico” com tendências a fazer poesias sobre flores. Quando ele pode pagar, gosta de uma bebida forte no Saloon Fruta Estrelar. Poderia um humilde fazendeiro como você ser a inspiração que Elliott procura? Só existe um jeito de descobrir.',
    hobbies: ['Programar', 'Motociclismo', 'Jogos'],
  },
  {
    id: '3',
    name: 'Lewis',
    image: 'https://gustavocavarlho.github.io/Conex-o-2025/imagens/546664077_2782702265266741_1367744044252515828_n.jpg',
    description:
      'Sou o prefeito da Vila Pelicanos há mais de vinte anos! Ninguém concorre comigo na eleição. Gosto de pensar que isso indica que estou fazendo um bom trabalho. Gosto de ser prefeito.',
    hobbies: ['Programar', 'Motociclismo', 'Jogos'],
  },
  {
    id: '3',
    name: 'Marlon',
    image: 'https://gustavocavarlho.github.io/Conex-o-2025/imagens/547811255_1533534640976897_4152673115483994445_n.jpg',
    description:
      'Eu gostaria de falar sobre a famosa Guilda dos Aventureiros próximo a vila pelicanos. O líder da guilda, Marlon, tem um ótimo programa de recompensas para qualquer um corajoso o suficiente para matar monstros nas cavernas locais. Os aventureiros receberão itens poderosos em troca de matar grandes quantidades de monstros. Há um cartaz na parede com mais detalhes. Muito legal!',
    hobbies: ['Programar', 'Motociclismo', 'Jogos'],
  },
  {
    id: '3',
    name: 'Avô',
    image: 'https://gustavocavarlho.github.io/Conex-o-2025/imagens/548483233_1092502723086521_8430936810016133857_n.jpg',
    description:
      'Se você está lendo isso, significa que você está desesperado por uma mudança na sua vida. Há muito tempo atrás, o mesmo aconteceu comigo. Eu perdi de vista o que mais importa na vida: vínculos concretos com a natureza e outras pessoas. Foi então que decidi largar tudo e me mudar para o meu verdadeiro lar.',
    hobbies: ['Programar', 'Motociclismo', 'Jogos'],
  },
  {
    id: '3',
    name: 'Pierre',
    image: 'https://gustavocavarlho.github.io/Conex-o-2025/imagens/547857874_1102186245404204_4025245266543648586_n.jpg',
    description:
      'Se você está procurando sementes, minha loja é o lugar para ir. Eu também vou comprar produtos de você por um bom preço! Um pouco de agricultura poderia realmente injetar uma nova vida na economia local!',
    hobbies: ['Programar', 'Motociclismo', 'Jogos'],
  },
  {
    id: '3',
    name: 'Krobus',
    image: 'https://gustavocavarlho.github.io/Conex-o-2025/imagens/546169816_1461923318370436_154810323406569646_n.jpg',
    description:
      'Você encontrou outros como eu nas minas? Desculpe se eles foram hostis com você. Sabe, nós aprendemos a temer humanos... houve muitos... encontros desagradáveis.',
    hobbies: ['Programar', 'Motociclismo', 'Jogos'],
  },
  {
    id: '3',
    name: 'Anão',
    image: 'https://gustavocavarlho.github.io/Conex-o-2025/imagens/546381773_652294644590740_2217723154121125789_n.jpg',
    description:
      'Há muito tempo, meu povo conhecia os segredos da tecnologia avançada. A evidência arqueológica prova isso. Mas eu me pergunto de onde veio? E para onde foi tudo? Acho que algumas perguntas nunca serão respondidas.',
    hobbies: ['Programar', 'Motociclismo', 'Jogos'],
  },
  {
    id: '3',
    name: 'Clint',
    image: 'https://gustavocavarlho.github.io/Conex-o-2025/imagens/546371175_1307936407469554_2749851927634432661_n.jpg',
    description:
      'É muito melhor trabalhar ao ar livre do que passar o dia todo ao lado da fornalha quente. Sou um ferreiro apenas porque meu pai me obrigou.',
    hobbies: ['Programar', 'Motociclismo', 'Jogos'],
  },
  {
    id: '3',
    name: 'Marnie',
    image: 'https://gustavocavarlho.github.io/Conex-o-2025/imagens/546374669_2196195737473986_4519429474593746434_n.jpg',
    description:
      'Os animais são tão doces... tão inocentes. E se eu não cuidar deles, quem vai? Só espero que as minhas galinhas não fiquem muito chateadas quando pego os ovos delas.',
    hobbies: ['Programar', 'Motociclismo', 'Jogos'],
  },
  {
    id: '3',
    name: 'Sebastian',
    image: 'https://gustavocavarlho.github.io/Conex-o-2025/imagens/546435503_1828257541092698_4164948960843028047_n.jpg',
    description:
      'Sebastian é um rebelde solitário que mora no porão dos seus pais. Ele é o meio-irmão mais velho da Maru, e sente que sua irmã ganha toda a atenção e adoração, enquanto ele é largado para apodrecer na escuridão.Ele tende a ficar muito vidrado em jogos de computador, quadrinhos, e livros de ficção científica, e às vezes passa muito tempo atrás desses hobbies sozinho em seu quarto.',
    hobbies: ['Programar', 'Motociclismo', 'Jogos'],
  },

];

export default function App() {
  const [selectedChar, setSelectedChar] = useState(null);
  

  if (selectedChar) {
    // Tela de detalhes do personagem
    return (
      <View style={styles.container}>
        <Button style={styles.butao} title="Voltar" onPress={() => setSelectedChar(null)} />
        <Image source={{ uri: selectedChar.image }} style={styles.imageLarge} />
        <Text style={styles.name}>{selectedChar.name}</Text>
        <Text style={styles.description}>{selectedChar.description}</Text>
        <Text style={styles.subtitle}>Hobbies:</Text>
        {selectedChar.hobbies.map((hobby, idx) => (
          <Text key={idx} style={styles.hobby}>
            - {hobby}
          </Text>
        ))}

        
      </View>
    );
  }

  // Tela da lista de personagens
  return (
    <View style={styles.container}>
    
    <ImageBackground source={{ uri: 'https://i.imgur.com/wXOsWGI.jpg' }} style={styles.container}>
    
      <Text style={styles.title}>Personagens de Stardew Valley</Text>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.charItem}
            onPress={() => setSelectedChar(item)}
          >
            <Image source={{ uri: item.image }} style={styles.imageSmall} />
            <Text style={styles.charName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 0,
    flex: 1,
    backgroundColor: '#3A5FCD',
    bacgraundImage:'https://i.pinimg.com/736x/75/23/e1/7523e1ae03826253461c87f6152d7ddb.jpg',  
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color:'#FFD700',
  },
  charItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#FFA500',
    padding: 9,
    borderRadius: 10,
  },
  imageSmall: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 25,
  },
  charName: {
    fontSize: 20,
  },
  imageLarge: {
    width: 155,
    height: 150,
    alignSelf: 'center',
    marginVertical: 30,
    borderRadius: 75,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: '600',
  },
  hobby: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
  },
  fundo:{
    bacgraundImage:'https://i.pinimg.com/736x/75/23/e1/7523e1ae03826253461c87f6152d7ddb.jpg',    
  },
  butao:{
    backgroundColor:'#fff'
  }


});