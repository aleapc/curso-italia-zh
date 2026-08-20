// A CONFIG DE CURSO — o que muda entre EN/DE/FR/IT→Espanha (e o futuro →França)
// mora AQUI e só aqui. Componentes agnósticos de língua (busca, tradutor,
// bolso do viajante) leem daqui; nenhum deles tem par de idioma ou moeda
// hard-coded. Derivar um SKU novo = copiar este arquivo e trocar os valores.

export const curso = {
  /**
   * Identidade do SKU, e ela NÃO é cosmética: é o namespace de
   * localStorage. Todos os cursos servem de aleapc.github.io/<curso>/, e
   * localStorage é por ORIGEM, não por caminho — sem isto, os cursos leem e
   * sobrescrevem o progresso uns dos outros.
   */
  sku: 'curso-italia-zh',
  /** Idioma do comprador (a voz-guia). */
  buyerLang: 'zh',
  /** Idioma do destino (a fala nativa ensinada). */
  targetLang: 'it',
  /** Par para o link do Google Tradutor: sl = comprador, tl = destino. */
  translatorPair: { sl: 'zh-CN', tl: 'it' },
  /** Moeda do destino. */
  destCurrency: 'EUR',
  /**
   * Moedas de "casa" do comprador que vale converter no bolso do viajante.
   * Vazio quando o comprador já usa a moeda do destino (ex.: DE/FR/IT→Espanha,
   * todos em EUR) — nesse caso o /bolso mostra a nota "mesma moeda", sem conversor.
   */
  homeCurrencies: ['CNY'] as string[],
  timeZone: 'Europe/Rome',
  cidadeExibicao: 'Roma',
  faixasNow: [
    { de: 0, linha: '厨房都熄灯了，但城市静得正好——此刻的罗马全属于你。' },
    { de: 5 * 60, linha: '还没有店开门。头几家酒吧(bar)刚开始预热浓缩咖啡机。' },
    { de: 7 * 60, linha: 'colazione（早餐）时间到了：站在吧台前来一个 cornetto 配 cappuccino，你来得正是时候。' },
    { de: 9 * 60 + 30, linha: '上午就该站在吧台来一杯 espresso，又快又利落。（cappuccino 只在早晨喝。）' },
    { de: 11 * 60, linha: '离 pranzo 还有两个来小时，正好趁午市人潮前四处走走。' },
    { de: 13 * 60, linha: 'pranzo（午餐）开席了——坐下来的正餐从现在开始，不用赶。' },
    { de: 14 * 60 + 30, linha: 'pausa 来了：卷帘半掩，一杯 espresso 为这顿饭收尾。' },
    { de: 16 * 60 + 30, linha: '安静的 riposo 时段。此刻来一份 gelato 是绝妙的主意。' },
    { de: 18 * 60 + 30, linha: 'aperitivo 时间——夜晚拉开序幕，来一杯 spritz 配 stuzzichini。你来得早，这正好。' },
    { de: 20 * 60, linha: 'cena（晚餐）现在开始，天生就晚、就慢，餐桌会在整晚里渐渐坐满。' },
    { de: 22 * 60, linha: '该拿上一支 gelato，慢慢来一段 passeggiata——夜色才刚刚入味。' },
    { de: 23 * 60 + 30, linha: '虽已夜深，罗马仍在漫步。街巷归于安静前，再来最后一口 gelato。' }
  ] as { de: number; linha: string }[]
} as const;

export type CursoConfig = typeof curso;
