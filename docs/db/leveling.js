export const leveling = {
  10: [
    {
      id: "0",
      level: '1 ~ 8',
      name: '🏰 法兰城外芙蕾雅地域',
      s: '任意',
      limitation: null,
      monster_num: '1 - 4',
      monsters: [
        {
          name: '迷你蝙蝠',
          race: '飞行系',
          s: '火6风4',
          skills: ['攻击', '防御', '逃跑'],
        },
        {
          name: '哥布林',
          race: '人形系',
          s: '地7水3',
          skills: ['攻击', '防御'],
        },
        {
          name: '红帽哥布林',
          race: '人形系',
          s: '水7火3',
          skills: ['攻击', '防御', '连击I'],
        },
        {
          name: '大地鼠',
          race: '野兽系',
          s: '水7火3',
          skills: ['攻击', '陨石魔法I', '逃跑'],
        },
        {
          name: '黄蜂',
          race: '昆虫系',
          s: '火7风3',
          skills: ['攻击', '毒性攻击Lv1'],
        },
        {
          name: '树精',
          race: '植物系',
          s: '水4火6',
          skills: ['攻击', '防御'],
        },
        {
          name: '盗贼',
          race: '人形系',
          s: '火5风5',
          skills: ['攻击', '防御'],
        },
      ],
      items: [
        '魔石 (12G)',
        '卡片',
        '绿头盔 (兑换全套面包卷, 就职士兵)',
        '红头盔 (就职士兵)',
        '锥形水晶 (双击可调查随机迷宫位置, 200G)',
      ],
      maps: [
        'https://user-images.githubusercontent.com/78347270/115149521-7817c500-a09f-11eb-85d9-0e10431e94dd.png',
      ],
      otherMaps: [],
      images: [
        'https://user-images.githubusercontent.com/78347270/115942546-ba993180-a4e5-11eb-98c0-70584922015b.png',
        'https://user-images.githubusercontent.com/78347270/115942595-f92eec00-a4e5-11eb-9916-a8efb5c05801.png',
        'https://user-images.githubusercontent.com/78347270/115943241-b4a54f80-a4e9-11eb-994e-466127ea07f3.png',
      ],
      boss: [],
    },
    {
      id: "1",
      level: '7 ~ 10',
      name: '🏕️ 哈巴鲁东边洞窟',
      s: '任意',
      limitation: null,
      monster_num: '1 - 8',
      monsters: [
        {
          name: '火蜘蛛',
          race: '昆虫系',
          s: '火10',
          skills: ['攻击', '防御', '昏睡攻击I'],
        },
        {
          name: '史莱姆',
          race: '特殊系',
          s: '地9水1',
          skills: ['攻击', '防御', '毒性攻击I'],
        },
      ],
      items: [
        '魔石 (48G)',
        '卡片',
        '杀熊者欧兹那克的戒指',
      ],
      maps: [
        'https://user-images.githubusercontent.com/78347270/115150339-ddb98080-a0a2-11eb-9bef-9d1de71837b9.png',
      ],
      otherMaps: [
        'https://user-images.githubusercontent.com/78347270/115150346-e3af6180-a0a2-11eb-8b98-e50650cd29ca.png',
        'https://user-images.githubusercontent.com/78347270/115150348-e4e08e80-a0a2-11eb-8201-2f5ad16b9c93.png',
        'https://user-images.githubusercontent.com/78347270/115150350-e5792500-a0a2-11eb-909a-6ee1e905c74e.png',
      ],
      images: [
        'https://user-images.githubusercontent.com/78347270/115943301-15cd2300-a4ea-11eb-9e64-9052210f1b96.png',
        'https://user-images.githubusercontent.com/78347270/115943303-1796e680-a4ea-11eb-9f9f-538cd986f19a.png',
      ],
      boss: [
        {
          name: '杀熊者欧兹那克',
          race: '邪魔系',
          s: '火5风5',
          skills: ['攻击', '防御', '崩击Ⅱ', '乾坤一掷Ⅳ', '明镜止水Ⅰ'],
        }, {
          name: '穴熊',
          race: '野兽系',
          s: '地8水2',
          skills: ['攻击', '防御', '崩击Ⅰ', '诸刃Ⅱ'],
        }
      ],
    },
  ],
  20: [
    {
      id: "3",
      level: '9 ~ 14',
      name: '🏟️ 法兰城灵堂',
      s: '地5风5',
      limitation: '只能在黄昏, 凌晨时间进入灵堂',
      monster_num: '1 - 6',
      monsters: [
        {
          name: '幽灵',
          race: '不死系',
          s: '地2水8',
          skills: ['攻击', '防御', '崩击Ⅱ'],
        },
        {
          name: '漂浮炸弹',
          race: '特殊系',
          s: '地2风8',
          skills: ['攻击', '防御', '风刃魔法I'],
        },
      ],
      items: [
        '魔石 (96G)',
        '卡片',
      ],
      maps: [
        'https://user-images.githubusercontent.com/78347270/115943599-cdaf0000-a4eb-11eb-923e-46c57d774d31.png',
        'https://user-images.githubusercontent.com/78347270/115943594-cbe53c80-a4eb-11eb-8aa2-654827a96c89.png',
        'https://user-images.githubusercontent.com/78347270/115943602-cf78c380-a4eb-11eb-8c37-8a513a321e66.png',
        'https://user-images.githubusercontent.com/78347270/115943445-fb477980-a4ea-11eb-8885-21655557e33b.png',
      ],
      otherMaps: [],
      images: [
        'https://user-images.githubusercontent.com/78347270/115943447-ff739700-a4ea-11eb-98d7-1126fd9f36c9.png',
        'https://user-images.githubusercontent.com/78347270/115943472-1fa35600-a4eb-11eb-9b1d-5d55a04dba1e.png',
      ],
      boss: [
        {
          name: '阴影',
          race: '邪魔系',
          s: '地10',
          skills: ['攻击', '防御', '陨石魔法Ⅲ', '强力陨石魔法Ⅲ', '超强陨石魔法Ⅱ', '吸血魔法Ⅲ'],
        }, {
          name: '幽灵',
          race: '不死系',
          s: '地2水8',
          skills: ['攻击', '防御', '崩击Ⅱ'],
        }, {
          name: '漂浮炸弹',
          race: '特殊系',
          s: '地2风8',
          skills: ['攻击', '防御', '风刃魔法Ⅰ'],
        }
      ],
      related: [
        {
          name: '毕安札的送礼',
          url: '/tasks/3',
        }, 
        {
          name: '城内的地下迷宫',
          url: '/tasks/4',
        }
      ]
    },
    {
      id: "2",
      level: '9 ~ 15',
      name: '🏞️ 亚留特村外区域',
      s: '地5风5',
      limitation: '只能在黄昏, 凌晨时间进入灵堂',
      recommend: '优先击杀冰冷树精',
      monster_num: '1 - 6',
      monsters: [
        {
          name: '冰冷树精',
          race: '植物系',
          s: '水7火3',
          skills: ['攻击', '防御', '冰冻魔法Ⅰ', '强力冰冻魔法Ⅰ'],
        },
        {
          name: '鸟人',
          race: '人形系',
          s: '地9风1',
          skills: ['攻击', '防御', '风刃魔法Ⅱ'],
        },
      ],
      items: [
        '魔石 (96G)',
        '卡片',
      ],
      maps: [
        'https://user-images.githubusercontent.com/78347270/115944240-8c205400-a4ef-11eb-840d-e5cfb96a23b9.png',
      ],
      otherMaps: [],
      images: [
        'https://user-images.githubusercontent.com/78347270/115944096-c50bf900-a4ee-11eb-9bfe-2c55b5916e61.png',
        'https://user-images.githubusercontent.com/78347270/115944097-c76e5300-a4ee-11eb-9389-807174e53f82.png',
        'https://user-images.githubusercontent.com/78347270/115944138-ef5db680-a4ee-11eb-9511-76781e792a28.png',
        'https://user-images.githubusercontent.com/78347270/115944099-c9d0ad00-a4ee-11eb-9772-fcae735fbd18.png',
      ],
      boss: [],
      related: [],
    },
    {
      id: "4",
      level: '15 ~ 20',
      name: '🏞️ 亚留特村外区域',
      s: '火5风5',
      limitation: '只能在黄昏, 凌晨时间进入灵堂',
      monster_num: '1 - 6',
      recommend: '优先击杀噩梦鼠, 遇敌率高',
      monsters: [
        {
          name: '冰冷树精',
          race: '植物系',
          s: '水7火3',
          skills: ['攻击', '防御', '冰冻魔法Ⅰ', '强力冰冻魔法Ⅰ'],
        },
        {
          name: '鸟人',
          race: '人形系',
          s: '地9风1',
          skills: ['攻击', '防御', '风刃魔法Ⅱ'],
        },
      ],
      items: [
        '魔石 (96G)',
        '卡片',
      ],
      maps: [
        'https://user-images.githubusercontent.com/78347270/115944240-8c205400-a4ef-11eb-840d-e5cfb96a23b9.png',
      ],
      otherMaps: [],
      images: [
        'https://user-images.githubusercontent.com/78347270/115944096-c50bf900-a4ee-11eb-9bfe-2c55b5916e61.png',
        'https://user-images.githubusercontent.com/78347270/115944097-c76e5300-a4ee-11eb-9389-807174e53f82.png',
        'https://user-images.githubusercontent.com/78347270/115944138-ef5db680-a4ee-11eb-9511-76781e792a28.png',
        'https://user-images.githubusercontent.com/78347270/115944099-c9d0ad00-a4ee-11eb-9772-fcae735fbd18.png',
      ],
      boss: [],
      related: [],
    },
    {
      id: "5",
      level: '16 ~ 22',
      name: '🐕 亚留特区域狗洞',
      s: '地5风5',
      limitation: '',
      monster_num: '1 - 6',
      recommend: '',
      monsters: [
        {
          name: '僵尸',
          race: '不死系',
          s: '地4风6',
          skills: ['攻击', '诸刃Ⅲ', '什么也不做'],
        },
        {
          name: '腐尸',
          race: '不死系',
          s: '地6水4',
          skills: ['攻击', '防御', '酒醉攻击Ⅱ'],
        },
        {
          name: '地狱看门犬',
          race: '野兽系',
          s: '水6火4',
          skills: ['攻击', '防御', '连击Ⅱ'],
        },
      ],
      items: [
        '魔石 (126 - 150G)',
        '卡片',
      ],
      maps: [
        'https://user-images.githubusercontent.com/78347270/115150912-69cca780-a0a5-11eb-89ac-c650597ccd02.png',
      ],
      otherMaps: [],
      images: [
        'https://user-images.githubusercontent.com/78347270/115944386-6ba4c980-a4f0-11eb-8fbe-248ba69e2645.png',
        'https://user-images.githubusercontent.com/78347270/115944389-6e072380-a4f0-11eb-8521-37cbd16061d5.png',
        'https://user-images.githubusercontent.com/78347270/115944392-6fd0e700-a4f0-11eb-89fc-a3bbc5ae28ac.png',
        'https://user-images.githubusercontent.com/78347270/115944395-71021400-a4f0-11eb-88a0-59849c9d2a23.png',
      ],
      boss: [],
      related: [],
    },
    {
      id: "6",
      level: '15 ~ 25',
      name: '🏛️ 法兰城内司令部地牢',
      s: '火5风5',
      limitation: '',
      monster_num: '1 - 6',
      recommend: '优先击杀噩梦鼠, 遇敌率高',
      monsters: [
        {
          name: '风蜘蛛',
          race: '昆虫系',
          s: '风10',
          skills: ['攻击', '防御', '醉酒魔法Ⅱ'],
        },
        {
          name: '噩梦鼠',
          race: '野兽系',
          s: '水10',
          skills: ['攻击', '防御', '冰冻魔法Ⅱ', '强力冰冻魔法Ⅱ'],
        },
      ],
      items: [
        '魔石 (12G)',
      ],
      maps: [],
      otherMaps: [],
      images: [
        'https://user-images.githubusercontent.com/78347270/115151190-c086b100-a0a6-11eb-9270-215da618edaa.png',
      ],
      boss: [],
      related: [
        {
          name: '被抹去的大陆',
          url: '/tasks/1.html#_8-穿过地下通道-到达最西边的楼梯口可进入司令部地牢',
        }, 
      ],
    },
  ],
  30: [
    {
      id: "7",
      level: '11 ~ 15',
      name: '🏞️ 维诺亚村外区域',
      s: '随意',
      limitation: '战斗系需要20级， 非战斗系需要3级物品或者20级',
      monster_num: '1 - 6',
      recommend: '',
      monsters: [
        {
          name: '异型蜂',
          race: '昆虫系',
          s: '火5风5',
          skills: ['攻击', '防御', '毒性攻击Ⅱ'],
        },
        {
          name: '妖草',
          race: '植物系',
          s: '地8水2',
          skills: ['攻击', '防御', '陨石魔法Ⅰ', '强力陨石魔法Ⅰ'],
        },
        {
          name: '黄色口臭鬼',
          race: '植物系',
          s: '地1风9',
          skills: ['攻击', '防御', '遗忘攻击Ⅱ'],
        },
        {
          name: '红帽哥布林',
          race: '人形系',
          s: '水7火3',
          skills: ['攻击', '防御', '连击Ⅰ'],
        },
        {
          name: '盗贼',
          race: '人形系',
          s: '火5风5',
          skills: ['攻击', '防御', '连击Ⅰ', '阳炎Ⅱ'],
        },
      ],
      items: [
        '魔石 (96G)',
        '卡片',
      ],
      maps: [],
      otherMaps: [],
      images: [
        'https://user-images.githubusercontent.com/78347270/116719012-89ed5680-aa15-11eb-8848-1b377e76f091.png',
      ],
      boss: [],
      related: [],
    },
    {
      id: "8",
      level: '18 ~ 22',
      name: '🏖️ 索奇亚海底洞窟',
      s: '地5风5',
      limitation: '',
      monster_num: '1 - 6',
      recommend: '',
      monsters: [
        {
          name: '蜥蜴斗士',
          race: '龙系',
          s: '地7风3',
          skills: ['攻击', '防御'],
        },
        {
          name: '水龙蜥',
          race: '龙系',
          s: '水8火2',
          skills: ['攻击', '防御', '石化攻击Ⅰ'],
        },
      ],
      items: [
        '魔石 (126G)',
        '卡片',
        '热砂欧兹尼克的戒指',
      ],
      maps: [],
      otherMaps: [],
      images: [
        'https://user-images.githubusercontent.com/78347270/115945039-9133d200-a4f4-11eb-8e79-10995d730acc.png',
        'https://user-images.githubusercontent.com/78347270/115945041-93962c00-a4f4-11eb-9870-ed81654c9cd7.png',
        'https://user-images.githubusercontent.com/78347270/115945042-95f88600-a4f4-11eb-8854-02e385d93ead.png',
      ],
      boss: [
        {
          name: '热砂的欧兹尼克',
          race: '邪魔系',
          s: '火5风5',
          skills: ['攻击', '圣盾Ⅵ', '崩击Ⅵ', '反击Ⅳ', '阳炎Ⅳ', '气功弹Ⅳ', '明镜止水Ⅵ', '逃跑'],
        }, {
          name: '蜥蜴斗士',
          race: '龙系',
          s: '地7风3',
          skills: ['攻击', '防御'],
        }, {
          name: '水龙蜥',
          race: '龙系',
          s: '水8火2',
          skills: ['攻击', '防御', '石化攻击Ⅰ'],
        }
      ],
      related: [],
    },
    {
      id: "9",
      level: '19 ~ 24',
      name: '🏜️ 索奇亚沙漠',
      s: '任意',
      limitation: '需要通过索奇亚海底洞窟',
      monster_num: '1 - 6',
      recommend: '',
      monsters: [
        {
          name: '蜥蜴斗士',
          race: '龙系',
          s: '地7风3',
          skills: ['攻击', '防御'],
        },
        {
          name: '水龙蜥',
          race: '龙系',
          s: '水8火2',
          skills: ['攻击', '防御', '石化攻击Ⅰ'],
        },
      ],
      items: [
        '魔石 (126G)',
        '卡片',
        '热砂欧兹尼克的戒指',
      ],
      maps: [],
      otherMaps: [],
      images: [
        'https://user-images.githubusercontent.com/78347270/115945039-9133d200-a4f4-11eb-8e79-10995d730acc.png',
        'https://user-images.githubusercontent.com/78347270/115945041-93962c00-a4f4-11eb-9870-ed81654c9cd7.png',
        'https://user-images.githubusercontent.com/78347270/115945042-95f88600-a4f4-11eb-8854-02e385d93ead.png',
      ],
      boss: [
        {
          name: '热砂的欧兹尼克',
          race: '邪魔系',
          s: '火5风5',
          skills: ['攻击', '圣盾Ⅵ', '崩击Ⅵ', '反击Ⅳ', '阳炎Ⅳ', '气功弹Ⅳ', '明镜止水Ⅵ', '逃跑'],
        }, {
          name: '蜥蜴斗士',
          race: '龙系',
          s: '地7风3',
          skills: ['攻击', '防御'],
        }, {
          name: '水龙蜥',
          race: '龙系',
          s: '水8火2',
          skills: ['攻击', '防御', '石化攻击Ⅰ'],
        }
      ],
      related: [],
    },
  ],

};
