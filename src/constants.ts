import { Project, ProjectCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '《有风吹过》',
    category: '微电影',
    year: '2024',
    description: '一张结婚请帖，一台旧 DV，林子鸢在高风的故居里，意外撞破了昔日好友从满怀期待到彻底绝望的全部心事。',
    concept: '影片以林子鸢的视角展开。原本前来送出结婚请帖的她，在高风的故居中自己送给她的生日礼物DV机里，找到了自己和高风曾经相处点滴的录像，这些碎片的影像，将她带入了一段尘封的往事。它们记录了高风从希望到绝望的转变，直至最后的沉默，如同时间的碎片，拼凑出高风内心世界的全貌……',
    awards: '2024年福建省大学生影像大赛剧情片赛道二等奖',
    imageUrl: 'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E6%9C%89%E9%A3%8E%E5%90%B9%E8%BF%87%E3%80%8B%E6%B5%B7%E6%8A%A5.jpg',
    detailImages: [
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E6%9C%89%E9%A3%8E%E5%90%B9%E8%BF%87%E3%80%8B%20(1).png',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E6%9C%89%E9%A3%8E%E5%90%B9%E8%BF%87%E3%80%8B%20(2).png',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E6%9C%89%E9%A3%8E%E5%90%B9%E8%BF%87%E3%80%8B%20(3).png',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E6%9C%89%E9%A3%8E%E5%90%B9%E8%BF%87%E3%80%8B%20(4).png',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E6%9C%89%E9%A3%8E%E5%90%B9%E8%BF%87%E3%80%8B%20(5).png',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E6%9C%89%E9%A3%8E%E5%90%B9%E8%BF%87%E3%80%8B%20(6).png',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E6%9C%89%E9%A3%8E%E5%90%B9%E8%BF%87%E3%80%8B%20(7).png',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E6%9C%89%E9%A3%8E%E5%90%B9%E8%BF%87%E3%80%8B%20(8).png',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E6%9C%89%E9%A3%8E%E5%90%B9%E8%BF%87%E3%80%8B%20(9).png',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E6%9C%89%E9%A3%8E%E5%90%B9%E8%BF%87%E3%80%8B%20(10).png'
    ],
    role: '编剧 / 剪辑',
    link: 'https://www.xinpianchang.com/a13135291?mid=E6WlQg5jp6BwgdJz',
    iframeUrl: 'https://player.xinpianchang.com/?aid=13135291&mid=E6WlQg5jp6BwgdJz'
  },
  {
    id: '2',
    title: '《HERA》',
    category: '微电影',
    year: '2023',
    description: '本不喜孩子的早孕妈妈何柆，顶着社会舆论与身体病痛坚持重返校园，在孕期激素与怀中安睡的婴儿里，悄然拥有了无从言说的母性。',
    concept: '一部探讨生育的实验短片。不喜欢小孩的“早孕妈妈"何柆在面对社会舆论和身体病痛，依然决定重返校园。在雌二醇和孕酮的作用下，何柆怀抱着已经安睡的婴儿，脸上洋溢着幸福与静谧.....她的母性从何而来?没有回答。',
    imageUrl: 'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8AHERA%E3%80%8B%E6%B5%B7%E6%8A%A5.png',
    detailImages: [
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8AHERA%E3%80%8B%20(10).png',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8AHERA%E3%80%8B%20(9).png',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8AHERA%E3%80%8B%20(8).png',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8AHERA%E3%80%8B%20(7).png',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8AHERA%E3%80%8B%20(6).png',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8AHERA%E3%80%8B%20(5).png',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8AHERA%E3%80%8B%20(4).png',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8AHERA%E3%80%8B%20(3).png',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8AHERA%E3%80%8B%20(2).png'
    ],
    role: '编剧 / 剪辑',
    link: 'https://www.xinpianchang.com/a12902529?mid=eRPn7qWOnEl4m39p',
    iframeUrl: 'https://player.xinpianchang.com/?aid=12902529&mid=eRPn7qWOnEl4m39p'
  },
  {
    id: '3',
    title: '《完美伴侣》',
    category: '微电影',
    year: '2025',
    description: 'AI时代背景下的现实爱情故事。',
    concept: '一部探讨AI时代下的亲密关系的剧情短片。“完美伴侣”是一款专为亲密关系服务的人工智能软件，一对看似恩爱的情侣在一个雷电交加的晚上失去了“完美伴侣”的帮助，他们不得已面对真实的自己和对方……',
    awards: '2025年福建省大学生影像大赛剧情片赛道二等奖',
    imageUrl: 'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%AE%8C%E7%BE%8E%E4%BC%B4%E4%BE%A3%E3%80%8B%E6%B5%B7%E6%8A%A5.jpg',
    detailImages: [
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%AE%8C%E7%BE%8E%E4%BC%B4%E4%BE%A3%E3%80%8B%20(10).jpg',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%AE%8C%E7%BE%8E%E4%BC%B4%E4%BE%A3%E3%80%8B%20(9).jpg',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%AE%8C%E7%BE%8E%E4%BC%B4%E4%BE%A3%E3%80%8B%20(8).jpg',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%AE%8C%E7%BE%8E%E4%BC%B4%E4%BE%A3%E3%80%8B%20(7).jpg',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%AE%8C%E7%BE%8E%E4%BC%B4%E4%BE%A3%E3%80%8B%20(6).jpg',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%AE%8C%E7%BE%8E%E4%BC%B4%E4%BE%A3%E3%80%8B%20(5).jpg',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%AE%8C%E7%BE%8E%E4%BC%B4%E4%BE%A3%E3%80%8B%20(4).jpg',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%AE%8C%E7%BE%8E%E4%BC%B4%E4%BE%A3%E3%80%8B%20(3).jpg',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%AE%8C%E7%BE%8E%E4%BC%B4%E4%BE%A3%E3%80%8B%20(2).jpg',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%AE%8C%E7%BE%8E%E4%BC%B4%E4%BE%A3%E3%80%8B%20(1).jpg'
    ],
    role: '剪辑',
    link: 'https://www.xinpianchang.com/a13413596?mid=yM1l43VA25lwod2V',
    iframeUrl: 'https://player.xinpianchang.com/?aid=13413596&mid=yM1l43VA25lwod2V'
  },
  {
    id: '4',
    title: '《无限近似于透明》',
    category: '剧本',
    year: '2024',
    description: '一个关于寻找与迷失的剧作。',
    concept: '讲述了婚纱设计师安岁为修复母亲的婚礼录像带，在一家老街维修店邂逅年轻店主的故事。安岁试图通过录像看清母亲婚纱的细节，将其运用在自己的设计作品中。在修复CD的过程中，二人之间萌生了晦暗不明的情愫，安岁也潜移默化地被店主对待旧物的态度所影响。尽管CD最终未能成功修复，这段情愫亦未延续，但安岁由此照见深埋心底的思念，将对“修复”的执念转化为一种释怀，或许损坏的旧物无法复原，但爱与记忆不灭。',
    imageUrl: 'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E6%97%A0%E9%99%90%E8%BF%91%E4%BC%BC%E4%BA%8E%E9%80%8F%E6%98%8E%E3%80%8B%E5%B0%81%E9%9D%A2.jpg',
    groupedImages: [
      {
        title: '剧本节选',
        images: [
          'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E6%97%A0%E9%99%90%E8%BF%91%E4%BC%BC%E4%BA%8E%E9%80%8F%E6%98%8E%E3%80%8B%E5%89%A7%E6%9C%AC%20(1).png',
          'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E6%97%A0%E9%99%90%E8%BF%91%E4%BC%BC%E4%BA%8E%E9%80%8F%E6%98%8E%E3%80%8B%E5%89%A7%E6%9C%AC%20(2).png',
          'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E6%97%A0%E9%99%90%E8%BF%91%E4%BC%BC%E4%BA%8E%E9%80%8F%E6%98%8E%E3%80%8B%E5%89%A7%E6%9C%AC%20(3).png',
          'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E6%97%A0%E9%99%90%E8%BF%91%E4%BC%BC%E4%BA%8E%E9%80%8F%E6%98%8E%E3%80%8B%E5%89%A7%E6%9C%AC%20(4).png',
          'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E6%97%A0%E9%99%90%E8%BF%91%E4%BC%BC%E4%BA%8E%E9%80%8F%E6%98%8E%E3%80%8B%E5%89%A7%E6%9C%AC%20(5).png'
        ]
      }
    ],
    role: '编剧'
  },
  {
    id: '5',
    title: '《决战·首富之巅》',
    category: '综艺',
    year: '2025',
    description: '一部以桌游《我是大老板》为基础创作的校园综艺。',
    concept: '节目核心设定围绕《我是大老板》的经典规则展开，将情景设置在架空的城市“新海城”，以“投资者聚集、交易达成、利润分红、策略干扰”的核心逻辑策划脚本，五位玩家化身五位首富，需通过摇骰子、使用手中的影响力卡片，与其他参与者协商、谈判，促成交易并争夺分红，最终以积累的财富总额决出“新海城首富”。',
    imageUrl: 'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%86%B3%E6%88%98%C2%B7%E9%A6%96%E5%AF%8C%E4%B9%8B%E5%B7%85%E3%80%8B%E6%B5%B7%E6%8A%A5.jpg',
    videoUrl: 'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%86%B3%E6%88%98%C2%B7%E9%A6%96%E5%AF%8C%E4%B9%8B%E5%B7%85%E3%80%8B%E9%A2%84%E5%91%8A%E7%89%87.mp4',
    detailImages: [
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%86%B3%E6%88%98%C2%B7%E9%A6%96%E5%AF%8C%E4%B9%8B%E5%B7%85%E3%80%8B%E7%8E%B0%E5%9C%BA%20(3).jpg',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%86%B3%E6%88%98%C2%B7%E9%A6%96%E5%AF%8C%E4%B9%8B%E5%B7%85%E3%80%8B%E7%8E%B0%E5%9C%BA%20(2).jpg',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%86%B3%E6%88%98%C2%B7%E9%A6%96%E5%AF%8C%E4%B9%8B%E5%B7%85%E3%80%8B%E7%8E%B0%E5%9C%BA%20(1).jpg'
    ],
    role: '策划 / 后期',
    link: 'https://pan.baidu.com/s/1Xh3V7zWW_kubZ277lNQ0UQ?pwd=hekx'
  },
  {
    id: '6',
    title: '《佛祖明示》',
    category: '平面设计',
    year: '2024',
    description: '哇哈哈营养快线系列海报。',
    concept: '获得第十六届大学生广告大赛平面设计全国优秀奖、福建省三等奖。',
    imageUrl: 'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E4%BD%9B%E7%A5%96%E6%98%8E%E7%A4%BA%E3%80%8B%E5%A5%96%E7%8A%B6.jpg',
    detailImages: [
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E4%BD%9B%E7%A5%96%E6%98%8E%E7%A4%BA%E3%80%8B%20(3).jpg',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E4%BD%9B%E7%A5%96%E6%98%8E%E7%A4%BA%E3%80%8B%20(2).jpg',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E4%BD%9B%E7%A5%96%E6%98%8E%E7%A4%BA%E3%80%8B%20(1).jpg'
    ],
    role: '设计师'
  },
  {
    id: '7',
    title: '第五届“山与影像季”',
    category: '策展成果',
    year: '2024',
    description: '“山与影像季”由厦门理工学院在校大学生自主发起，与金鸡海峡两岸暨港澳青年短片季合作开展。',
    concept: '在第五届山与影像季中，我担任了沉浸式策展、设计、宣传和行政管理等多个角色，负责从创意策划到执行落地的全方位工作。我的工作目标是提升活动的沉浸感、互动性、视觉传达、宣传效果以及确保放映流程的顺利进行。',
    imageUrl: 'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%B1%B1%E4%B8%8E%E5%BD%B1%E5%83%8F%E5%AD%A3%E3%80%8B%E6%B5%B7%E6%8A%A5.jpg',
    groupedImages: [
      {
        title: '策划案',
        images: [
          'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%B1%B1%E4%B8%8E%E5%BD%B1%E5%83%8F%E5%AD%A3%E3%80%8B%E7%AD%96%E5%88%92%E6%A1%88%20(1).png',
          'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%B1%B1%E4%B8%8E%E5%BD%B1%E5%83%8F%E5%AD%A3%E3%80%8B%E7%AD%96%E5%88%92%E6%A1%88%20(2).png',
          'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%B1%B1%E4%B8%8E%E5%BD%B1%E5%83%8F%E5%AD%A3%E3%80%8B%E7%AD%96%E5%88%92%E6%A1%88%20(3).png',
          'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%B1%B1%E4%B8%8E%E5%BD%B1%E5%83%8F%E5%AD%A3%E3%80%8B%E7%AD%96%E5%88%92%E6%A1%88%20(4).png',
          'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%B1%B1%E4%B8%8E%E5%BD%B1%E5%83%8F%E5%AD%A3%E3%80%8B%E7%AD%96%E5%88%92%E6%A1%88%20(5).png',
          'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%B1%B1%E4%B8%8E%E5%BD%B1%E5%83%8F%E5%AD%A3%E3%80%8B%E7%AD%96%E5%88%92%E6%A1%88%20(6).png',
          'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%B1%B1%E4%B8%8E%E5%BD%B1%E5%83%8F%E5%AD%A3%E3%80%8B%E7%AD%96%E5%88%92%E6%A1%88%20(7).png'
        ]
      },
      {
        title: 'H5测试',
        images: ['https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%B1%B1%E4%B8%8E%E5%BD%B1%E5%83%8F%E5%AD%A3%E3%80%8BH5%E6%B5%8B%E8%AF%95(1).png']
      },
      {
        title: '平面设计',
        images: [
          'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%B1%B1%E4%B8%8E%E5%BD%B1%E5%83%8F%E5%AD%A3%E3%80%8B%E5%B9%B3%E9%9D%A2%E8%AE%BE%E8%AE%A1%20(2).png',
          'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%B1%B1%E4%B8%8E%E5%BD%B1%E5%83%8F%E5%AD%A3%E3%80%8B%E5%B9%B3%E9%9D%A2%E8%AE%BE%E8%AE%A1%20(1).png'
        ]
      },
      {
        title: '现场放映',
        images: [
          'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%B1%B1%E4%B8%8E%E5%BD%B1%E5%83%8F%E5%AD%A3%E3%80%8B%E7%8E%B0%E5%9C%BA(3).png',
          'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%B1%B1%E4%B8%8E%E5%BD%B1%E5%83%8F%E5%AD%A3%E3%80%8B%E7%8E%B0%E5%9C%BA(1).png',
          'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8A%E5%B1%B1%E4%B8%8E%E5%BD%B1%E5%83%8F%E5%AD%A3%E3%80%8B%E7%8E%B0%E5%9C%BA(2).png'
        ]
      }
    ],
    role: '策展人、公众号运营',
    extraLinks: [
      { label: '活动总结推文', url: 'https://mp.weixin.qq.com/s/xpGIMYIbMoRlvkftrEN_JQ' },
      { label: '排版推文 (1)', url: 'https://mp.weixin.qq.com/s/Y7oZtQZmiFmzPufr7vCiOQ' },
      { label: '排版推文 (2)', url: 'https://mp.weixin.qq.com/s/y2tng0CA1FmuZ_fTIgwsfw' },
      { label: '排版推文 (3)', url: 'https://mp.weixin.qq.com/s/dSd75wGyZ447aXMO6XZi1w' }
    ]
  },
  {
    id: '8',
    title: 'FIRST主动放映',
    category: '策展成果',
    year: '2025',
    description: 'FIRST主动放映厦门跳海站。',
    concept: '在FIRST主动放映厦门跳海站中，我担任了放映人、设计、宣传和行政管理等多个角色，负责从视觉输出到执行落地的全方位工作。',
    imageUrl: 'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8AFIRST%E4%B8%BB%E5%8A%A8%E6%94%BE%E6%98%A0%E3%80%8B%E6%B5%B7%E6%8A%A5.png',
    detailImages: [
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8AFIRST%E4%B8%BB%E5%8A%A8%E6%94%BE%E6%98%A0%E3%80%8B%E7%8E%B0%E5%9C%BA(1).jpg',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8AFIRST%E4%B8%BB%E5%8A%A8%E6%94%BE%E6%98%A0%E3%80%8B%E7%8E%B0%E5%9C%BA(2).jpg',
      'https://cdn.jsdelivr.net/gh/02evenn/images@main/%E3%80%8AFIRST%E4%B8%BB%E5%8A%A8%E6%94%BE%E6%98%A0%E3%80%8B%E7%8E%B0%E5%9C%BA(3).JPG'
    ],
    role: '放映人、公众号运营',
    extraLinks: [
      { label: '展映总结推文', url: 'https://mp.weixin.qq.com/s/HKRL4u9JmVtT1ZDhjv7STQ' },
      { label: '排版推文 (1)', url: 'https://mp.weixin.qq.com/s/7pMDtdHVNv-9uiRVnEu5bQ' },
      { label: '排版推文 (2)', url: 'https://mp.weixin.qq.com/s/mcTxvzQA6o10Z9oc56DS2A' }
    ]
  }
];

export const CATEGORIES: ProjectCategory[] = ['微电影', '剧本', '综艺', '平面设计', '策展成果'];
