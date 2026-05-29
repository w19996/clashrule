// --- 静态配置区域 ---

// 脚本链接：https://raw.githubusercontent.com/w19996/clashrule/refs/heads/main/mihomoScript.js

/**
 * 整个脚本的总开关
 * true = 启用
 * false = 禁用
 */
const enable = true;

/**
 * 分流规则配置，会自动生成对应的策略组
 * true = 启用
 * false = 禁用
 */
const ruleOptionsEnable = {
  ai: true, // 国外AI服务
  youtube: true, // YouTube
  googlefcm: true, // FCM服务
  google: true, // Google服务
  github: true, // GitHub服务
  microsoft: true, // Microsoft服务
  apple: true, // Apple服务
  telegram: true, // Telegram通讯软件
  twitter: true, // Twitter社交平台
  instagram: true, // Instagram社交平台
  steam: true, // Steam游戏平台
  cloudflare: true, // Cloudflare服务
  pixiv: true, // Pixiv绘画网站
  emby: true, // Emby媒体服务
  spotify: true, // Spotify音乐服务
  tiktok: true, // TikTok短视频平台
  netflix: true, // Netflix视频服务
  adblock: true, // 广告拦截
};

/**
 * 节点组配置，用于分类地区节点和倍率节点
 * 未启用的节点组将不会被生成，且该节点组的节点会被分类到其他节点组中
 * true = 启用
 * false = 禁用
 */
const regionDefinitionsEnable = {
  香港: true,
  日本: true,
  美国: true,
  新加坡: true,
  台湾省: true,
  韩国: true,
  加拿大: true,
  英国: true,
  法国: true,
  德国: true,
  荷兰: true,
  意大利: true,
  西班牙: true,
  葡萄牙: true,
  瑞士: true,
  瑞典: true,
  挪威: true,
  芬兰: true,
  丹麦: true,
  爱尔兰: true,
  比利时: true,
  波兰: true,
  捷克: true,
  奥地利: true,
  匈牙利: true,
  罗马尼亚: true,
  保加利亚: true,
  希腊: true,
  土耳其: true,
  俄罗斯: true,
  乌克兰: true,
  拉脱维亚: true,
  立陶宛: true,
  爱沙尼亚: true,
  冰岛: true,
  卢森堡: true,
  澳大利亚: true,
  新西兰: true,
  印度: true,
  印度尼西亚: true,
  马来西亚: true,
  泰国: true,
  越南: true,
  菲律宾: true,
  以色列: true,
  阿联酋: true,
  沙特阿拉伯: true,
  巴西: true,
  阿根廷: true,
  智利: true,
  墨西哥: true,
  南非: true,
  低倍率节点: true,
  高倍率节点: true,
};

/**
 * 全局排除节点过滤配置
 * 该配置用于启用全局排除节点过滤功能
 * true = 启用
 * false = 禁用
 */
const excludeFilterEnable = true;

// 定义全局排除节点的正则表达式，用于排除非地区的信息节点
const excludeFilter =
  /群|返利|循环|官网|客服|网站|网址|获取|订阅|流量|到期|机场|下次|版本|官址|备用|过期|已用|联系|邮箱|工单|贩卖|通知|倒卖|防止|国内|地址|频道|无法|说明|使用|提示|特别|访问|支持|教程|关注|更新|作者|加入|超时|收藏|福利|邀请|好友|失联|选择|剩余|公益|发布|DIZTNA|通路|登录|禁止|定时|渠道|牢记|永久|余额|阁下|本站|刷新|导航|⚠️|@|Expire|http|com/u;

// 预定义 rules
const rules = [
  // 私有网络直连
  'RULE-SET,private,直连',
  'RULE-SET,private_ip,直连,no-resolve',

  // 进程规则
  'RULE-SET,DownloadApps,直连', // 常见磁力下载软件

  // 国内直连
  'RULE-SET,games_cn,直连',
  'RULE-SET,epicgames,直连',
  'RULE-SET,nvidia_cn,直连',
  'RULE-SET,microsoft_cn,直连',
  'RULE-SET,cloudflare_cn,直连',
  'RULE-SET,apple_cn,直连',
  'DOMAIN,fsend.cn,直连',
];

// 定义地区策略组
const regionDefinitions = [
  {
    name: '香港',
    regex: /(?:🇭🇰|香港|港|Hong\s*Kong|(?:^|[\s_\-|\[【(（])(?:HK)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png',
  },
  {
    name: '日本',
    regex: /(?:🇯🇵|日本|日|Japan|(?:^|[\s_\-|\[【(（])(?:JP)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png',
  },
  {
    name: '美国',
    regex: /(?:🇺🇸|美国|美|USA|America|United\s*States|(?:^|[\s_\-|\[【(（])(?:US)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png',
  },
  {
    name: '新加坡',
    regex: /(?:🇸🇬|新加坡|狮城|Singapore|(?:^|[\s_\-|\[【(（])(?:SG)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Singapore.png',
  },
  {
    name: '台湾省',
    regex: /(?:🇹🇼|台湾|台|Taiwan|(?:^|[\s_\-|\[【(（])(?:TW)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Taiwan.png',
  },
  {
    name: '韩国',
    regex: /(?:🇰🇷|韩国|韩|Korea|South\s*Korea|(?:^|[\s_\-|\[【(（])(?:KR)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Korea.png',
  },
  {
    name: '加拿大',
    regex: /(?:🇨🇦|加拿大|Canada|(?:^|[\s_\-|\[【(（])(?:CA)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Canada.png',
  },
  {
    name: '英国',
    regex: /(?:🇬🇧|英国|United\s*Kingdom|Britain|England|(?:^|[\s_\-|\[【(（])(?:GB|UK)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_Kingdom.png',
  },
  {
    name: '法国',
    regex: /(?:🇫🇷|法国|France|(?:^|[\s_\-|\[【(（])(?:FR)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/France.png',
  },
  {
    name: '德国',
    regex: /(?:🇩🇪|德国|Germany|(?:^|[\s_\-|\[【(（])(?:DE)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Germany.png',
  },
  {
    name: '荷兰',
    regex: /(?:🇳🇱|荷兰|Netherlands|Holland|(?:^|[\s_\-|\[【(（])(?:NL)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Netherlands.png',
  },
  {
    name: '意大利',
    regex: /(?:🇮🇹|意大利|Italy|(?:^|[\s_\-|\[【(（])(?:IT)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Italy.png',
  },
  {
    name: '西班牙',
    regex: /(?:🇪🇸|西班牙|Spain|(?:^|[\s_\-|\[【(（])(?:ES)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Spain.png',
  },
  {
    name: '葡萄牙',
    regex: /(?:🇵🇹|葡萄牙|Portugal|(?:^|[\s_\-|\[【(（])(?:PT)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Portugal.png',
  },
  {
    name: '瑞士',
    regex: /(?:🇨🇭|瑞士|Switzerland|(?:^|[\s_\-|\[【(（])(?:CH)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Switzerland.png',
  },
  {
    name: '瑞典',
    regex: /(?:🇸🇪|瑞典|Sweden|(?:^|[\s_\-|\[【(（])(?:SE)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Sweden.png',
  },
  {
    name: '挪威',
    regex: /(?:🇳🇴|挪威|Norway|(?:^|[\s_\-|\[【(（])(?:NO)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Norway.png',
  },
  {
    name: '芬兰',
    regex: /(?:🇫🇮|芬兰|Finland|(?:^|[\s_\-|\[【(（])(?:FI)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Finland.png',
  },
  {
    name: '丹麦',
    regex: /(?:🇩🇰|丹麦|Denmark|(?:^|[\s_\-|\[【(（])(?:DK)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Denmark.png',
  },
  {
    name: '爱尔兰',
    regex: /(?:🇮🇪|爱尔兰|Ireland|(?:^|[\s_\-|\[【(（])(?:IE)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Ireland.png',
  },
  {
    name: '比利时',
    regex: /(?:🇧🇪|比利时|Belgium|(?:^|[\s_\-|\[【(（])(?:BE)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Belgium.png',
  },
  {
    name: '波兰',
    regex: /(?:🇵🇱|波兰|Poland|(?:^|[\s_\-|\[【(（])(?:PL)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Poland.png',
  },
  {
    name: '捷克',
    regex: /(?:🇨🇿|捷克|Czech|Czechia|(?:^|[\s_\-|\[【(（])(?:CZ)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Czech_Republic.png',
  },
  {
    name: '奥地利',
    regex: /(?:🇦🇹|奥地利|Austria|(?:^|[\s_\-|\[【(（])(?:AT)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Austria.png',
  },
  {
    name: '匈牙利',
    regex: /(?:🇭🇺|匈牙利|Hungary|(?:^|[\s_\-|\[【(（])(?:HU)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hungary.png',
  },
  {
    name: '罗马尼亚',
    regex: /(?:🇷🇴|罗马尼亚|Romania|(?:^|[\s_\-|\[【(（])(?:RO)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Romania.png',
  },
  {
    name: '保加利亚',
    regex: /(?:🇧🇬|保加利亚|Bulgaria|(?:^|[\s_\-|\[【(（])(?:BG)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Bulgaria.png',
  },
  {
    name: '希腊',
    regex: /(?:🇬🇷|希腊|Greece|(?:^|[\s_\-|\[【(（])(?:GR)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Greece.png',
  },
  {
    name: '土耳其',
    regex: /(?:🇹🇷|土耳其|Turkey|Turkiye|(?:^|[\s_\-|\[【(（])(?:TR)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Turkey.png',
  },
  {
    name: '俄罗斯',
    regex: /(?:🇷🇺|俄罗斯|俄国|Russia|(?:^|[\s_\-|\[【(（])(?:RU)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Russia.png',
  },
  {
    name: '乌克兰',
    regex: /(?:🇺🇦|乌克兰|Ukraine|(?:^|[\s_\-|\[【(（])(?:UA)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Ukraine.png',
  },
  {
    name: '拉脱维亚',
    regex: /(?:🇱🇻|拉脱维亚|Latvia|(?:^|[\s_\-|\[【(（])(?:LV)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Latvia.png',
  },
  {
    name: '立陶宛',
    regex: /(?:🇱🇹|立陶宛|Lithuania|(?:^|[\s_\-|\[【(（])(?:LT)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Lithuania.png',
  },
  {
    name: '爱沙尼亚',
    regex: /(?:🇪🇪|爱沙尼亚|Estonia|(?:^|[\s_\-|\[【(（])(?:EE)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Estonia.png',
  },
  {
    name: '冰岛',
    regex: /(?:🇮🇸|冰岛|Iceland|(?:^|[\s_\-|\[【(（])(?:IS)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Iceland.png',
  },
  {
    name: '卢森堡',
    regex: /(?:🇱🇺|卢森堡|Luxembourg|(?:^|[\s_\-|\[【(（])(?:LU)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Luxembourg.png',
  },
  {
    name: '澳大利亚',
    regex: /(?:🇦🇺|澳大利亚|澳洲|Australia|(?:^|[\s_\-|\[【(（])(?:AU)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Australia.png',
  },
  {
    name: '新西兰',
    regex: /(?:🇳🇿|新西兰|New\s*Zealand|(?:^|[\s_\-|\[【(（])(?:NZ)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/New_Zealand.png',
  },
  {
    name: '印度',
    regex: /(?:🇮🇳|印度|India|(?:^|[\s_\-|\[【(（])(?:IN)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/India.png',
  },
  {
    name: '印度尼西亚',
    regex: /(?:🇮🇩|印度尼西亚|印尼|Indonesia|(?:^|[\s_\-|\[【(（])(?:ID)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Indonesia.png',
  },
  {
    name: '马来西亚',
    regex: /(?:🇲🇾|马来西亚|Malaysia|(?:^|[\s_\-|\[【(（])(?:MY)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Malaysia.png',
  },
  {
    name: '泰国',
    regex: /(?:🇹🇭|泰国|Thailand|(?:^|[\s_\-|\[【(（])(?:TH)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Thailand.png',
  },
  {
    name: '越南',
    regex: /(?:🇻🇳|越南|Vietnam|(?:^|[\s_\-|\[【(（])(?:VN)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Vietnam.png',
  },
  {
    name: '菲律宾',
    regex: /(?:🇵🇭|菲律宾|Philippines|(?:^|[\s_\-|\[【(（])(?:PH)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Philippines.png',
  },
  {
    name: '以色列',
    regex: /(?:🇮🇱|以色列|Israel|(?:^|[\s_\-|\[【(（])(?:IL)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Israel.png',
  },
  {
    name: '阿联酋',
    regex: /(?:🇦🇪|阿联酋|阿拉伯联合酋长国|UAE|United\s*Arab\s*Emirates|(?:^|[\s_\-|\[【(（])(?:AE)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_Arab_Emirates.png',
  },
  {
    name: '沙特阿拉伯',
    regex: /(?:🇸🇦|沙特|沙特阿拉伯|Saudi\s*Arabia|(?:^|[\s_\-|\[【(（])(?:SA)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Saudi_Arabia.png',
  },
  {
    name: '巴西',
    regex: /(?:🇧🇷|巴西|Brazil|(?:^|[\s_\-|\[【(（])(?:BR)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Brazil.png',
  },
  {
    name: '阿根廷',
    regex: /(?:🇦🇷|阿根廷|Argentina|(?:^|[\s_\-|\[【(（])(?:AR)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Argentina.png',
  },
  {
    name: '智利',
    regex: /(?:🇨🇱|智利|Chile|(?:^|[\s_\-|\[【(（])(?:CL)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Chile.png',
  },
  {
    name: '墨西哥',
    regex: /(?:🇲🇽|墨西哥|Mexico|(?:^|[\s_\-|\[【(（])(?:MX)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Mexico.png',
  },
  {
    name: '南非',
    regex: /(?:🇿🇦|南非|South\s*Africa|(?:^|[\s_\-|\[【(（])(?:ZA)(?:$|[\s_\-|\]】)）]|\d))/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/South_Africa.png',
  },
  {
    name: '低倍率节点',
    regex: /^(?!.*(?:剩|期|客户端|软件)).*(?:(?<!\d)0\.[0-5]|下载|低倍)/,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Available_1.png',
  },
  {
    name: '高倍率节点',
    regex:
      /(?:[*×xX✕✖⨉]\s*(?:[2-9]\d*|[1-9]\d+)(?:\.\d+)?)|(?:(?<![\d.])(?:[2-9]\d*|[1-9]\d+)(?:\.\d+)?\s*(?:倍|[*×xX✕✖⨉]))/u,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Airport.png',
  },
];

// Rule Providers 通用配置
const ruleProviderFormatYaml = { format: 'yaml' };
const ruleProviderFormatText = { format: 'text' };
const ruleProviderFormatMrs = { format: 'mrs' };

const ruleProviderCommonDomain = {
  type: 'http',
  interval: 86400,
  behavior: 'domain',
};
const ruleProviderCommonIpcidr = {
  type: 'http',
  interval: 86400,
  behavior: 'ipcidr',
};
const ruleProviderCommonClassical = {
  type: 'http',
  interval: 86400,
  behavior: 'classical',
};

// 定义基础 Rule Providers
const baseRuleProviders = {
  DownloadApps: {
    ...ruleProviderCommonClassical,
    ...ruleProviderFormatText,
    url: 'https://fastly.jsdelivr.net/gh/AIsouler/MyClash@main/Rules/DownloadApps.txt',
    path: './ruleset/DownloadApps.txt',
  },
  fakeip_filter: {
    ...ruleProviderCommonDomain,
    ...ruleProviderFormatMrs,
    url: 'https://fastly.jsdelivr.net/gh/wwqgtxx/clash-rules@release/fakeip-filter.mrs',
    path: './ruleset/fakeip-filter.mrs',
  },
  epicgames: {
    ...ruleProviderCommonDomain,
    ...ruleProviderFormatMrs,
    url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/epicgames.mrs',
    path: './ruleset/epicgames.mrs',
  },
  nvidia_cn: {
    ...ruleProviderCommonDomain,
    ...ruleProviderFormatMrs,
    url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/nvidia@cn.mrs',
    path: './ruleset/nvidia@cn.mrs',
  },
  microsoft_cn: {
    ...ruleProviderCommonDomain,
    ...ruleProviderFormatMrs,
    url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/microsoft@cn.mrs',
    path: './ruleset/microsoft@cn.mrs',
  },
  games_cn: {
    ...ruleProviderCommonDomain,
    ...ruleProviderFormatMrs,
    url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/category-games@cn.mrs',
    path: './ruleset/category-games@cn.mrs',
  },
  private: {
    ...ruleProviderCommonDomain,
    ...ruleProviderFormatMrs,
    url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/private.mrs',
    path: './ruleset/private.mrs',
  },
  private_ip: {
    ...ruleProviderCommonIpcidr,
    ...ruleProviderFormatMrs,
    url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/private.mrs',
    path: './ruleset/private_ip.mrs',
  },
  gfw: {
    ...ruleProviderCommonDomain,
    ...ruleProviderFormatMrs,
    url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/gfw.mrs',
    path: './ruleset/gfw.mrs',
  },
  cn_additional: {
    ...ruleProviderCommonDomain,
    ...ruleProviderFormatMrs,
    url: 'https://static-file-global.353355.xyz/rules/cn-additional-list.mrs',
    path: './ruleset/cn-additional-list.mrs',
  },
  cn: {
    ...ruleProviderCommonDomain,
    ...ruleProviderFormatMrs,
    url: 'https://fastly.jsdelivr.net/gh/wwqgtxx/clash-rules@release/direct.mrs',
    path: './ruleset/cn.mrs',
  },
  cn_ip: {
    ...ruleProviderCommonIpcidr,
    ...ruleProviderFormatMrs,
    url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/cn.mrs',
    path: './ruleset/cn_ip.mrs',
  },
  cloudflare_cn: {
    ...ruleProviderCommonDomain,
    ...ruleProviderFormatMrs,
    url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/cloudflare@cn.mrs',
    path: './ruleset/cloudflare_cn.mrs',
  },
  apple_cn: {
    ...ruleProviderCommonDomain,
    ...ruleProviderFormatMrs,
    url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/apple@cn.mrs',
    path: './ruleset/apple@cn.mrs',
  },
};

// 策略组公共配置
const groupBaseOption = {
  interval: 60,
  timeout: 3000,
  url: 'https://g.cn/generate_204',
  lazy: true,
  'max-failed-times': 3,
};

// select策略组通用配置
const selectBaseOption = {
  ...groupBaseOption,
  type: 'select',
  hidden: false,
};

// url-test策略组通用配置
const urlTestBaseOption = {
  ...groupBaseOption,
  type: 'url-test',
  tolerance: 100,
  icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Auto.png',
  hidden: true,
};

// 定义分流策略组配置
const serviceConfigs = [
  {
    key: 'ai',
    name: 'AI',
    providers: {
      ai: {
        ...ruleProviderCommonDomain,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/category-ai-!cn.mrs',
        path: './ruleset/ai.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png',
    rules: ['RULE-SET,ai,AI'],
  },
  {
    key: 'youtube',
    name: 'YouTube',
    providers: {
      youtube: {
        ...ruleProviderCommonDomain,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/youtube.mrs',
        path: './ruleset/youtube.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/YouTube.png',
    rules: [
      'AND,((NETWORK,UDP),(DST-PORT,443),(RULE-SET,youtube)),REJECT', // 阻断 YouTube UDP 流量
      'RULE-SET,youtube,YouTube',
    ],
  },
  {
    key: 'googlefcm',
    name: 'FCM',
    proxyMode: 'directfirst',
    providers: {
      googlefcm: {
        ...ruleProviderCommonDomain,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/googlefcm.mrs',
        path: './ruleset/googlefcm.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/MiToverG422/Qure@master/IconSet/Color/fcm.png',
    rules: ['RULE-SET,googlefcm,FCM'],
  },
  {
    key: 'google',
    name: 'Google',
    providers: {
      google: {
        ...ruleProviderCommonDomain,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/google.mrs',
        path: './ruleset/google.mrs',
      },
      google_ip: {
        ...ruleProviderCommonIpcidr,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/google.mrs',
        path: './ruleset/google_ip.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google_Search.png',
    rules: ['RULE-SET,google,Google', 'RULE-SET,google_ip,Google,no-resolve'],
  },
  {
    key: 'github',
    name: 'GitHub',
    providers: {
      github: {
        ...ruleProviderCommonDomain,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/github.mrs',
        path: './ruleset/github.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/GitHub.png',
    rules: ['RULE-SET,github,GitHub'],
  },
  {
    key: 'microsoft',
    name: 'Microsoft',
    proxyMode: 'direct',
    providers: {
      microsoft: {
        ...ruleProviderCommonDomain,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/microsoft.mrs',
        path: './ruleset/microsoft.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Microsoft.png',
    rules: ['RULE-SET,microsoft,Microsoft'],
  },
  {
    key: 'apple',
    name: 'Apple',
    proxyMode: 'direct',
    providers: {
      apple: {
        ...ruleProviderCommonDomain,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/apple.mrs',
        path: './ruleset/apple.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple.png',
    rules: ['RULE-SET,apple,Apple'],
  },
  {
    key: 'telegram',
    name: 'Telegram',
    providers: {
      telegram: {
        ...ruleProviderCommonDomain,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/telegram.mrs',
        path: './ruleset/telegram.mrs',
      },
      telegram_ip: {
        ...ruleProviderCommonIpcidr,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/telegram.mrs',
        path: './ruleset/telegram_ip.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Telegram.png',
    rules: [
      'RULE-SET,telegram,Telegram',
      'RULE-SET,telegram_ip,Telegram,no-resolve',
    ],
  },
  {
    key: 'cloudflare',
    name: 'Cloudflare',
    providers: {
      cloudflare: {
        ...ruleProviderCommonDomain,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/cloudflare.mrs',
        path: './ruleset/cloudflare.mrs',
      },
      cloudflare_ip: {
        ...ruleProviderCommonIpcidr,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/cloudflare.mrs',
        path: './ruleset/cloudflare_ip.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Cloudflare.png',
    rules: [
      'RULE-SET,cloudflare,Cloudflare',
      'RULE-SET,cloudflare_ip,Cloudflare,no-resolve',
    ],
  },
  {
    key: 'pixiv',
    name: 'Pixiv',
    providers: {
      pixiv: {
        ...ruleProviderCommonDomain,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/pixiv.mrs',
        path: './ruleset/pixiv.mrs',
      },
    },
    icon: 'https://play-lh.googleusercontent.com/Ls9opXo6-wfEWmbBU8heJaFS8HwWydssWE1J3vexIGvkF-UJDqcW7ZMD8w6dQABfygONd4z3Yt4TfRDZAPYq=w480-h960-rw',
    rules: [
      'RULE-SET,pixiv,Pixiv',
      'PROCESS-NAME,com.perol.pixez,Pixiv', // Pixez
      'PROCESS-NAME,com.perol.play.pixez,Pixiv', // Pixez Google Play 版
    ],
  },
  {
    key: 'steam',
    name: 'Steam',
    providers: {
      steam: {
        ...ruleProviderCommonDomain,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/steam.mrs',
        path: './ruleset/steam.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Steam.png',
    rules: ['RULE-SET,steam,Steam'],
  },
  {
    key: 'twitter',
    name: 'Twitter',
    providers: {
      twitter: {
        ...ruleProviderCommonDomain,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/twitter.mrs',
        path: './ruleset/twitter.mrs',
      },
      twitter_ip: {
        ...ruleProviderCommonIpcidr,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/twitter.mrs',
        path: './ruleset/twitter_ip.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Twitter.png',
    rules: [
      'RULE-SET,twitter,Twitter',
      'RULE-SET,twitter_ip,Twitter,no-resolve',
    ],
  },
  {
    key: 'instagram',
    name: 'Instagram',
    providers: {
      instagram: {
        ...ruleProviderCommonDomain,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/instagram.mrs',
        path: './ruleset/instagram.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Instagram.png',
    rules: ['RULE-SET,instagram,Instagram'],
  },
  {
    key: 'emby',
    name: 'Emby',
    providers: {
      emby: {
        ...ruleProviderCommonDomain,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/666OS/rules@release/mihomo/domain/Emby.mrs',
        path: './ruleset/emby.mrs',
      },
      emby_ip: {
        ...ruleProviderCommonIpcidr,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/666OS/rules@release/mihomo/ip/Emby.mrs',
        path: './ruleset/emby_ip.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Emby.png',
    rules: [
      'RULE-SET,emby,Emby',
      'RULE-SET,emby_ip,Emby,no-resolve',
      'DOMAIN-KEYWORD,emby,Emby',
    ],
  },
  {
    key: 'spotify',
    name: 'Spotify',
    proxyMode: 'direct',
    providers: {
      spotify: {
        ...ruleProviderCommonDomain,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/spotify.mrs',
        path: './ruleset/spotify.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Spotify.png',
    rules: ['RULE-SET,spotify,Spotify'],
  },
  {
    key: 'tiktok',
    name: 'TikTok',
    providers: {
      tiktok: {
        ...ruleProviderCommonDomain,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/tiktok.mrs',
        path: './ruleset/tiktok.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/TikTok.png',
    rules: ['RULE-SET,tiktok,TikTok'],
  },
  {
    key: 'netflix',
    name: 'Netflix',
    providers: {
      netflix: {
        ...ruleProviderCommonDomain,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/netflix.mrs',
        path: './ruleset/netflix.mrs',
      },
      netflix_ip: {
        ...ruleProviderCommonIpcidr,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/netflix.mrs',
        path: './ruleset/netflix_ip.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Netflix.png',
    rules: [
      'RULE-SET,netflix,Netflix',
      'RULE-SET,netflix_ip,Netflix,no-resolve',
    ],
  },
  {
    key: 'adblock',
    name: '广告拦截',
    proxyMode: 'reject',
    providers: {
      adblockmihomolite: {
        ...ruleProviderCommonDomain,
        ...ruleProviderFormatMrs,
        url: 'https://fastly.jsdelivr.net/gh/217heidai/adblockfilters@main/rules/adblockmihomolite.mrs',
        path: './ruleset/adblockmihomolite.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Advertising.png',
    rules: ['RULE-SET,adblockmihomolite,广告拦截'],
  },
];

// 定义创建地区策略组的函数
function createRegionGroup(name, icon, proxies) {
  const autoTestName = `${name}-自动选择`;
  return [
    {
      ...urlTestBaseOption,
      name: autoTestName,
      proxies,
    },
    {
      ...selectBaseOption,
      name,
      icon,
      proxies: [autoTestName, ...proxies],
    },
  ];
}

function getUniqueProxyName(name, usedNames) {
  let uniqueName = `${name}-节点`;
  let index = 2;

  while (usedNames.has(uniqueName)) {
    uniqueName = `${name}-节点${index}`;
    index += 1;
  }

  return uniqueName;
}

// --- 主入口 ---

function main(config) {
  if (!enable) return config;

  // 排除匹配到的节点
  if (excludeFilterEnable && Array.isArray(config.proxies)) {
    config.proxies = config.proxies.filter(
      (proxy) => !excludeFilter.test(proxy.name),
    );
  }

  // 获取节点列表
  const proxies = config.proxies || [];
  const enabledDefinitions = regionDefinitions.filter(
    (r) => regionDefinitionsEnable[r.name] === true,
  );
  const reservedGroupNames = new Set([
    '默认代理',
    '自动选择',
    '直连',
    'GLOBAL',
    '其他节点',
    '其他节点-自动选择',
    '🇨🇳 直连 | IPv4优先',
    '🇨🇳 直连 | IPv6优先',
    '🇨🇳 直连 | 双栈',
    ...enabledDefinitions.flatMap((r) => [r.name, `${r.name}-自动选择`]),
    ...serviceConfigs
      .filter((svc) => ruleOptionsEnable[svc.key])
      .map((svc) => svc.name),
  ]);
  const usedProxyNames = new Set();

  for (const proxy of proxies) {
    if (!proxy.name) continue;

    if (reservedGroupNames.has(proxy.name) || usedProxyNames.has(proxy.name)) {
      proxy.name = getUniqueProxyName(proxy.name, reservedGroupNames);
    }

    usedProxyNames.add(proxy.name);
    reservedGroupNames.add(proxy.name);
  }

  // 验证节点列表是否存在代理节点
  const allDirectOrReject = proxies.every((p) => {
    const type = p.type?.toLowerCase();
    return type === 'direct' || type === 'reject';
  });

  if (!proxies.length || allDirectOrReject) {
    throw new Error(
      '配置文件中未找到任何代理节点，请使用机场提供的配置文件进行覆写',
    );
  }

  // --- 构建地区组和倍率组 ---

  // 节点分类
  const regionGroups = Object.fromEntries(
    enabledDefinitions.map((r) => [r.name, { ...r, proxies: [] }]),
  );
  const otherProxies = [];

  for (const proxy of proxies) {
    let matched = false;

    for (const region of enabledDefinitions) {
      if (region.regex.test(proxy.name)) {
        regionGroups[region.name].proxies.push(proxy.name);

        // 如果匹配到的是地区组（非倍率组），则标记为已分类
        if (region.name !== '低倍率节点' && region.name !== '高倍率节点') {
          matched = true;
        }
      }
    }

    // 未匹配到地区组（不包含倍率组）的归为其他节点
    if (!matched) {
      otherProxies.push(proxy.name);
    }
  }

  // 构建地区策略组
  const generatedRegionGroups = enabledDefinitions
    .filter((r) => regionGroups[r.name].proxies.length > 0)
    .flatMap((r) =>
      createRegionGroup(r.name, r.icon, regionGroups[r.name].proxies),
    );

  if (otherProxies.length > 0) {
    generatedRegionGroups.push(
      ...createRegionGroup(
        '其他节点',
        'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/World_Map.png',
        otherProxies,
      ),
    );
  }

  // --- 构建分流策略组 ---

  const functionalGroups = [];
  const finalRules = [...rules];
  const finalRuleProviders = { ...baseRuleProviders };

  // 筛选类型为 select 的地区策略组
  const groupNamesOfSelect = generatedRegionGroups
    .filter((g) => g.type === 'select')
    .map((g) => g.name);
  const proxyNames = proxies.map((p) => p.name);

  // 定义分流策略组对应的策略组成员
  const proxyModes = {
    default: ['默认代理', ...groupNamesOfSelect],
    direct: ['默认代理', '直连', ...groupNamesOfSelect],
    directfirst: ['直连', '默认代理', ...groupNamesOfSelect],
    reject: ['REJECT', 'REJECT-DROP', 'PASS'],
  };

  // 生成默认代理策略组
  functionalGroups.push({
    ...selectBaseOption,
    name: '默认代理',
    proxies: ['自动选择', ...groupNamesOfSelect],
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png',
  });

  // 生成全局 url-test 自动选择策略组
  functionalGroups.push({
    ...urlTestBaseOption,
    name: '自动选择',
    proxies: proxyNames,
    hidden: false,
  });

  // 构建分流策略组
  for (const svc of serviceConfigs) {
    if (!ruleOptionsEnable[svc.key]) continue;

    finalRules.push(...svc.rules);

    // 添加分流策略组对应的 Rule Providers
    const providers = svc.providers || {};
    for (const [providerName, providerConfig] of Object.entries(providers)) {
      finalRuleProviders[providerName] = providerConfig;
    }

    functionalGroups.push({
      ...selectBaseOption,
      name: svc.name,
      icon: svc.icon,
      proxies: [...proxyModes[svc.proxyMode || 'default']],
    });
  }

  // 添加其他策略组
  functionalGroups.push({
    ...selectBaseOption,
    name: '直连',
    proxies: ['🇨🇳 直连 | IPv4优先', '🇨🇳 直连 | IPv6优先', '🇨🇳 直连 | 双栈'],
    url: 'https://connectivitycheck.platform.hicloud.com/generate_204',
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/China_Map.png',
  });

  // 构建 GLOBAL 全局策略组
  const globalGroup = {
    ...selectBaseOption,
    name: 'GLOBAL',
    proxies: [
      ...functionalGroups.map((g) => g.name),
      ...generatedRegionGroups.map((g) => g.name),
    ],
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Global.png',
  };

  // --- 覆盖基础配置 ---

  config.proxies.push(
    {
      name: '🇨🇳 直连 | IPv4优先',
      type: 'direct',
      'ip-version': 'ipv4-prefer',
    },
    {
      name: '🇨🇳 直连 | IPv6优先',
      type: 'direct',
      'ip-version': 'ipv6-prefer',
    },
    {
      name: '🇨🇳 直连 | 双栈',
      type: 'direct',
    },
  );

  config['proxy-groups'] = [
    ...functionalGroups,
    globalGroup,
    ...generatedRegionGroups,
  ];
  config['rule-providers'] = finalRuleProviders;

  config['allow-lan'] = true;
  config['ipv6'] = true;
  config['bind-address'] = '*';
  config['unified-delay'] = true;
  config['tcp-concurrent'] = true;
  config['keep-alive-idle'] = 600;
  config['keep-alive-interval'] = 60;
  config['find-process-mode'] = 'strict';

  config['external-controller'] = '[::]:9090';
  config['external-ui'] = 'ui';
  config['external-ui-url'] =
    'https://github.com/Zephyruso/zashboard/releases/latest/download/dist.zip';

  config['profile'] = {
    'store-selected': true,
    'store-fake-ip': true,
  };

  // 国内外 DNS 定义
  const chinaDNS = [
    'https://dns.alidns.com/dns-query#DIRECT',
    'https://doh.pub/dns-query#DIRECT',
  ];
  const foreignDNS = [
    'https://dns.cloudflare.com/dns-query#默认代理',
    'https://dns.google/dns-query#默认代理',
  ];

  config['dns'] = {
    enable: true,
    ipv6: true,
    listen: ':1053',
    'cache-algorithm': 'arc',
    'use-hosts': true,
    'use-system-hosts': true,
    'enhanced-mode': 'fake-ip',
    'fake-ip-range': '198.18.0.1/16',
    'fake-ip-range-v6': 'fc00::/18',
    'fake-ip-filter': ['rule-set:private', 'rule-set:fakeip_filter'],
    'proxy-server-nameserver': [...chinaDNS],
    'default-nameserver': ['223.5.5.5', '119.29.29.29'],
    nameserver: [...foreignDNS],
    'nameserver-policy': {
      '*': 'system',
      'rule-set:cn': [...chinaDNS],
    },
    'direct-nameserver': ['system', '223.5.5.5', '119.29.29.29'],
  };

  config['hosts'] = {
    'dns.alidns.com': ['223.5.5.5', '223.6.6.6'],
    'doh.pub': ['1.12.12.12', '120.53.53.53'],
    'dns.cloudflare.com': ['1.1.1.1', '1.0.0.1'],
    'dns.google': ['8.8.8.8', '8.8.4.4'],

    // 解决谷歌商店无法下载的问题
    'services.googleapis.cn': ['services.googleapis.com'],

    // 屏蔽哔哩哔哩PCDN，解决访问视频卡顿问题
    '+.mcdn.bilivideo.com': ['0.0.0.0'],
    '+.mcdn.bilivideo.cn': ['0.0.0.0'],
  };

  config['ntp'] = {
    enable: true,
    'write-to-system': false,
    server: 'ntp.aliyun.com',
    port: 123,
    interval: 60,
  };

  config['tun'] = {
    enable: true,
    stack: 'system',
    'auto-route': true,
    'strict-route': true,
    'auto-redirect': true,
    'auto-detect-interface': true,
    'dns-hijack': ['udp://any:53', 'tcp://any:53'],
  };

  config['rules'] = [
    ...finalRules,

    // 兜底规则
    'RULE-SET,gfw,默认代理',
    'RULE-SET,cn_additional,直连',
    'RULE-SET,cn_ip,直连',
    'MATCH,默认代理',
  ];

  return config;
}
