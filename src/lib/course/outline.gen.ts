import type { ModuloOutline } from '../types';

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  ARQUIVO GERADO — não edite à mão.                                       │
// │  Fonte: os ep-*.json (título) + slots.json (ordem e módulo).             │
// │  Regenerar: npm run outline   ·   Conferir: npm run outline:conferir     │
// │                                                                          │
// │  O título vivia aqui E no episódio. Duas canônicas para a mesma string   │
// │  é o defeito que fez duas partes reescritas aparecerem na tela com o     │
// │  título antigo e duas partes novas não aparecerem. Agora deriva.         │
// └──────────────────────────────────────────────────────────────────────────┘

export const outline: ModuloOutline[] = [
  {
    nivel: 'basico',
    nome: 'Basic · Get by',
    descricao: 'The Italian that gets the day done: arriving, ordering, paying, moving, and getting help.',
    cor: 'terracota',
    licoes: [
      { id: 'b01', titulo: '每个字母都要发音', pronta: true },
      { id: 'b02', titulo: '在需要之前就先说出口', pronta: true },
      { id: 'b03', titulo: '换频道，而不是换语言', pronta: true },
      { id: 'b04', titulo: '和你一起登机的四份文件', pronta: true },
      { id: 'b05', titulo: '三个回答，然后停下', pronta: true },
      { id: 'b06', titulo: 'Posso，后面接你想做的事', pronta: true },
      { id: 'b07', titulo: 'Dov\'è——让你迈开脚步的那个问题', pronta: true },
      { id: 'b08', titulo: '问一个答案装得进脑子的问题', pronta: true },
      { id: 'b09', titulo: '会自己验票的车票，和不会的那种', pronta: true },
      { id: 'b10', titulo: '你能看懂的标识，恰恰是骗你的那些', pronta: true },
      { id: 'b11', titulo: 'Quanto costa——两个词，趁着问还免费的时候问', pronta: true },
      { id: 'b12', titulo: 'Senza——用减法，而不是解释', pronta: true },
      { id: 'b13', titulo: '重锤句，以及替你开口的卡片', pronta: true },
      { id: 'b14', titulo: 'Mi porta——账单，以及上面那两行不是错误的项目', pronta: true },
      { id: 'b15', titulo: '购物：价格、尺码、试穿、换货', pronta: true },
      { id: 'b16', titulo: '入住：趁开口还不要钱的时候，问那些能让房间更好的事', pronta: true },
      { id: 'b17', titulo: '药房、疼痛、急救', pronta: true },
      { id: 'b18', titulo: '最后一天——退房、寄存行李，说一句让你被欢迎再来的话', pronta: true },
    ]
  },
  {
    nivel: 'intermediario',
    nome: 'Intermediate · Get the good stuff',
    descricao: 'Eat where they eat, when they eat, at the price they pay.',
    cor: 'oliva',
    licoes: [
      { id: 'i01', titulo: '他们的时间表，以及为什么太早吃饭会让你错过好餐桌', pronta: true },
      { id: 'i02', titulo: '在吧台点单的操作顺序', pronta: true },
      { id: 'i03', titulo: '那道你本来永远不会点的菜', pronta: true },
      { id: 'i04', titulo: '夜晚：餐前酒、请客的那一轮，以及如何离席', pronta: true },
      { id: 'i05', titulo: '人人都会问你的那五个问题', pronta: true },
      { id: 'i06', titulo: '向他们讲述昨天', pronta: true },
      { id: 'i07', titulo: '能传到厨房的赞美，以及能让菜被换掉的那句话', pronta: true },
      { id: 'i08', titulo: '被请到别人家里', pronta: true },
      { id: 'i09', titulo: '像他们那样度过下午', pronta: true },
      { id: 'i10', titulo: '这里的钱：他们必须收的那张卡，没人指望的那笔小费', pronta: true },
    ]
  },
  {
    nivel: 'avancado',
    nome: 'Advanced · Read the room',
    descricao: 'The humour, the pride, the old argument, and what their silence means.',
    cor: 'indigo',
    licoes: [
      { id: 'a01', titulo: '他们不对你说话时是怎么讲的', pronta: true },
      { id: 'a02', titulo: '他们笑什么，以及你可以安全开的那一个玩笑', pronta: true },
      { id: 'a03', titulo: '他们认为自己是谁', pronta: true },
      { id: 'a04', titulo: '那场老争论', pronta: true },
      { id: 'a05', titulo: '另一种语言', pronta: true },
      { id: 'a06', titulo: '他们的日历', pronta: true },
      { id: 'a07', titulo: '信号：欢迎、轻微的不悦，以及该走了', pronta: true },
      { id: 'a08', titulo: '让你被再次邀请的那句告别', pronta: true },
    ]
  },
];

// Gerado de static/img/ — a home só pede imagem que existe.
export const COM_IMAGEM = new Set(["a01","a02","a03","a04","a05","a06","a07","a08","b01","b02","b03","b04","b05","b06","b07","b08","b09","b10","b11","b12","b13","b14","b15","b16","b17","b18","i01","i02","i03","i04","i05","i06","i07","i08","i09","i10"]);
