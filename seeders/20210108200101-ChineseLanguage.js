"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("chinese_languages", [
      {
        phrases: "Hello",
        translation: "你好",
        romanization: "Nǐ hǎo",
      },
      {
        phrases: "Nice to meet you",
        translation: "很高興見到你",
        romanization: "Hěn gāoxìng jiàn dào nǐ",
      },
      {
        phrases: "My name is ___.",
        translation: "我的名字是 ___.",
        romanization: "Wǒ de míngzì shì ___.",
      },
      {
        phrases: "Can you speak English?",
        translation: "你會說英文嗎?",
        romanization: "Nǐ huì shuō yīngwén ma?",
      },
      {
        phrases: "Good Morning, Good Afternoon, Good Evening, Good Night",
        translation: "早上好, 下午好, 晚上好, 晚安",
        romanization: "Zǎoshang hǎo, Xiàwǔ hǎo, Wǎnshàng hǎo, Wǎn'ān",
      },
      {
        phrases: "One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten",
        translation: "一, 二, 三, 四, 五, 六, 七, 八, 九, 十",
        romanization: "Yī, Èr, Sān, Sì, Wǔ, Liù, Qī, Bā, Jiǔ, Shí",
      },
      {
        phrases: "How much is this?",
        translation: "這個多少錢?",
        romanization: "Zhège duōshǎo qián?",
      },
      {
        phrases: "I want to buy this",
        translation: "我想買這個",
        romanization: "Wǒ xiǎng mǎi zhège",
      },
      {
        phrases: "Can I order?",
        translation: "我可以點菜嗎?",
        romanization: "Wǒ kěyǐ diǎn cài ma?",
      },
      {
        phrases: "Check, please",
        translation: "我要買單",
        romanization: "Wǒ yāo mǎidān",
      },
      {
        phrases: "Thank you",
        translation: "謝謝",
        romanization: "Xièxiè",
      },
      {
        phrases: "You are welcome",
        translation: "不客氣",
        romanization: "Bù kèqì",
      },
      {
        phrases: "I would like water / tea / coffee please",
        translation: "我要 水 / 茶 / 咖啡",
        romanization: "Wǒ yào Shuǐ/ Chá/ Kāfēi",
      },
      {
        phrases: "Where is the bathroom?",
        translation: "洗手間在哪裏?",
        romanization: "Xǐshǒujiān zài nǎlǐ?",
      },
      {
        phrases: "Excuse me...",
        translation: "對不起...",
        romanization: "Duìbùqǐ...",
      },
      {
        phrases: "I am sorry",
        translation: "對不起",
        romanization: "Duìbùqǐ",
      },
      {
        phrases: "Yes / No",
        translation: "是 / 不是",
        romanization: "Shì / Bùshì",
      },
      {
        phrases: "Sorry, I don't understand",
        translation: "對不起, 我聽不懂",
        romanization: "Duìbùqǐ, wǒ tīng bù dǒng",
      },
      {
        phrases: "Can you help me please?",
        translation: "可以幫我嗎?",
        romanization: "Kěyǐ bāng wǒ ma?",
      },
      {
        phrases: "I'm hungry / I'm sleepy / I'm tired",
        translation: "我肚子餓 / 我很睏 / 我很累",
        romanization: "Wǒ dùzi è / Wǒ hěn kùn / Wǒ hěn lèi",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("chinese_languages");
  },
};
