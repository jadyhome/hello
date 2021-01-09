"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("korean_languages", [
      {
        phrases: "Hello",
        translation: "안녕하세요",
        romanization: "Annyeonghaseyo",
      },
      {
        phrases: "Nice to meet you",
        translation: "반갑습니다",
        romanization: "Bangabseubnida",
      },
      {
        phrases: "My name is ___.",
        translation: "내 이름은 ___ 입니다.",
        romanization: "Nae ileum-eun ___ ibnida.",
      },
      {
        phrases: "Can you speak English?",
        translation: "영어 할 수 있어요?",
        romanization: "Yeong-eo hal su iss-eoyo?",
      },
      {
        phrases: "Good Morning, Good Afternoon, Good Evening, Good Night",
        translation: "좋은 아침입니다, 안녕하세요, 좋은 밤 보내세요, 잘자요",
        romanization: "Joh-eun achim-ibnida, Annyeonghaseyo, Joh-eun bam bonaeseyo, Jal jayo",
      },
      {
        phrases: "One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten",
        translation: "일, 이, 삼, 사, 오, 육, 칠, 팔, 구, 십",
        romanization: "il, i, sam, sa, o, yug, chil, pal, gu, sib",
      },
      {
        phrases: "How much is this?",
        translation: "이거 얼마에요?",
        romanization: "Igeo eolma-eyo?",
      },
      {
        phrases: "I want to buy this",
        translation: "이거 사고싶어",
        romanization: "Igeo sagosip-eo",
      },
      {
        phrases: "Can I order?",
        translation: "주문 해도 돼요?",
        romanization: "Jumun haedo dwaeyo?",
      },
      {
        phrases: "Check, please",
        translation: "계산서 주세요",
        romanization: "Gyesanseo juseyo",
      },
      {
        phrases: "Thank you",
        translation: "감사합니다",
        romanization: "Gamsahabnida",
      },
      {
        phrases: "You are welcome",
        translation: "아니에요",
        romanization: "Ani-eyo",
      },
      {
        phrases: "I would like water / tea / coffee please",
        translation: "물 / 차 / 커피 주세요",
        romanization: "Mul / Cha / Keopi juseyo",
      },
      {
        phrases: "Where is the bathroom?",
        translation: "화장실 어디서요?",
        romanization: "Hwajangsil eodiseoyo?",
      },
      {
        phrases: "Excuse me...",
        translation: "실례합니다...",
        romanization: "Sillyehabnida",
      },
      {
        phrases: "I am sorry",
        translation: "미안합니다 / 죄송합니다",
        romanization: "Mianhabnida / Joesonghabnida",
      },
      {
        phrases: "Yes / No",
        translation: "예 / 아니오",
        romanization: "Ye / Anio",
      },
      {
        phrases: "Sorry, I don't understand",
        translation: "죄송합니다 이해가 안 돼요",
        romanization: "Joesonghabnida ihaega an dwaeyo",
      },
      {
        phrases: "Can you help me please?",
        translation: "도와 줄수있으세요?",
        romanization: "Dowa julsu-iss-euseyo?",
      },
      {
        phrases: "I'm hungry / I'm sleepy / I'm tired",
        translation: "배고파 / 졸려 / 피곤해",
        romanization: "Baegopa / Jollyeo / Pigonhae",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("korean_languages");
  },
};
