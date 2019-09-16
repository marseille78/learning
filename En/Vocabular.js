const voc = {
  "Essay": [
    // {
    //   "ru": ["Вопросы, связанные с ..."],
    //   "en": ["Questions related to ..."]
    // },
    // {
    //   "ru": ["(вопросы) часто обсуждаются в наши дни"],
    //   "en": ["(questions) are (frequently|often) discussed nowadays"]
    // },
    // {
    //   "ru": ["(Пока|Хотя) некоторые люди (считают|верят|думают), что ..."],
    //   "en": ["While some people (believe|think) that ..."]
    // },
    // {
    //   "ru": ["другие спорят с этой позицией"],
    //   "en": ["others argue with this position"]
    // },
    // {
    //   "ru": ["Лично я (думаю|верю|считаю), что ..."],
    //   "en": ["Personally, I (think|believe) that ..."]
    // },
    // {
    //   "ru": ["В этом эссе будет подробно обсуждаться эта тема (до того|перед тем), как сделать вывод."],
    //   "en": ["This essay will discuss the topic in details prior to drawing a conclusion."]
    // },
    // {
    //   "ru": [
    //     "без сомнения ...",
    //     "нет сомнений, что ...",
    //     "без сомнения что ...",
    //     "нет сомнений в том что ..."
    //   ],
    //   "en": ["there is no doubt that ..."]
    // },
    // {
    //   "ru": [
    //     "в первую очередь",
    //     "на первом месте",
    //     "во-первых",
    //     "прежде всего",
    //   ],
    //   "en": [
    //     "in the first place",
    //     "firstly",
    //     "first of all",
    //   ]
    // },
    // {
    //   "ru": ["также (ясно|понятно), что ..."],
    //   "en": ["also, it is clear that ..."]
    // },
    // {
    //   ru: [
    //     "в тоже время, ...",
    //     "вместе с тем, ...",
    //   ],
    //   en: ["at the same time, ..."]
    // },
    // {
    //   ru: ["также следует (указать|сказать|обозначить), что ..."],
    //   en: ["it should also be stated that ..."],
    // },
    // {
    //   ru: [
    //     "дополнительно, ...",
    //     "кроме того, ...",
    //     "более того, ...",
    //     "вдобавок, ...",
    //   ],
    //   en: [
    //     "additionally, ...",
    //     "in addition, ...",
    //     "moreover, ...",
    //     "besides, ...",
    //     "furthermore, ...",
    //   ],
    // },
    // {
    //   ru: ["В заключение я (считаю|верю|думаю), что"],
    //   en: ["In conclusion, I (believe|think) that"],
    // },
    // {
    //   ru: ["После анализа (предмета|темы) стало очевидно, что ..."],
    //   en: ["After analyzing the (subject|topic), it has become evident that ..."],
    // },
    // {
    //   ru: ["некоторые люди (считают|верят|думают) что ..."],
    //   en: ["some people (believe|think) that ..."],
    // },
    // {
    //   ru: ["Я согласен, что ..."],
    //   en: ["I agree that ..."],
    // },
    // {
    //   ru: ["технологии сильно улучшились"],
    //   en: ["technology has improved (dramatically|extremely)"],
    // },
    // {
    //   ru: ["есть (несколько|ряд) преимуществ ... (чего-то)"],
    //   en: ["there are (a number of|some) benefits of ... (sth)"],
    // },
    // {
    //   ru: ["(что-то) имеет положительный эффект на ..."],
    //   en: ["(sth) has a positive effect on ..."],
    // },
    // {
    //   ru: ["положительные (эффекты|стороны) (чего-то)",],
    //   en: ["the positive effects of ..."],
    // },
    // {
    //   ru: ["(что-то) перевешивается (рядом недостатков|несколькими недостатками)"],
    //   en: ["(sth) is outweighed by (a number of|some) drawbacks"],
    // },
    // {
    //   ru: ["(Кто-то) может получить (выгоду|преимущество) от ..."],
    //   en: ["(Smbd) can benefit from ..."],
    // },
    // {
    //   ru: ["(Что-то) представляет угрозу для ... (здоровье, общество, ...)"],
    //   en: ["(Something) poses a threat to ... (one's health, society, ...)"]
    // },
    // {
    //   ru: ["(Что-то) чрезвычайно важно для ..."],
    //   en: ["(Something) is (extremely|dramatically) important for ..."],
    // },
    // {
    //   ru: ["решать проблему"],
    //   en: ["to (solve|tackle) the (problem|issue)"],
    // },
    // {
    //   ru: [
    //     "(ряд|несколько) (научно-исследовательских проектов|исследований) показали, что ...",
    //     "некоторые (научно-исследовательский проекты|исследования) показали, что ..."
    //   ],
    //   en: ["(a number of|some) scientific research projects have demonstrated that ..."],
    // },
    // {
    //   ru: ["например"],
    //   en: [
    //     "for example, ...",
    //     "for instance, ...",
    //   ],
    // },
    // {
    //   ru: ["такой как ..."],
    //   en: ["such (as|us) ..."],
    // },
    // {
    //   ru: ["причина (чего-то)"],
    //   en: ["reason for (sth)"],
    // },
    // {
    //   ru: ["(основная|главная) причина проблемы это ..."],
    //   en: ["the main reason for the (issue|problem) is that ..."],
    // },
    // {
    //   ru: [
    //     "хотя ...",
    //     "несмотря на ...",
    //     "если бы даже ...",
    //     "несмотря на то, что ...",
    //   ],
    //   en: ["although ..."],
    // },
    // {
    //   ru: ["however ..."],
    //   en: ["однако ..."],
    // },
    // {
    //   ru: [
    //     "следовательно",
    //     "таким образом",
    //   ],
    //   en: [
    //     "consequently",
    //     "therefore",
    //   ],
    // },
    // {
    //   ru: [
    //     "в результате",
    //   ],
    //   en: [
    //     "as a result",
    //   ],
    // },
    // {
    //   ru: [
    //     "без сомнений, ...",
    //     "несомненно, ...",
    //     "определенно, ...",
    //     "конечно ...",
    //   ],
    //   en: [
    //     "undoubtedly",
    //     "definitely",
    //     "certainly",
    //     "of course",
    //     "sure",
    //   ],
    // },
    // {
    //   ru: ["несмотря на это ..."],
    //   en: ["despite this ..."],
    // },
    // {
    //   ru: ["с одной стороны, ..."],
    //   en: ["on the one hand, ..."],
    // },
    // {
    //   ru: ["с другой стороны, ..."],
    //   en: ["on the other hand, ..."],
    // },
    // {
    //   ru: ["аналогично"],
    //   en: ["likewise"],
    // },
    // {
    //   ru: ["(что-то) необходимо для ..."],
    //   en: ["(sth) is essential for ..."],
    // },
    // {
    //   ru: [
    //     "потому что",
    //     "так как"
    //   ],
    //   en: ["because"],
    // },
    // {
    //   ru: ["из-за"],
    //   en: [
    //     "due to (~ the fact)",
    //     "because of ...",
    //   ],
    // },
    // {
    //   ru: ["влияние (чего-то) на (что-то)"],
    //   en: ["the impact of (sth) on (sth)"],
    // }
  ],
  "Speaking": [
    {
      "ru": ["Хочешь верь, хочешь нет, ..."],
      "en": ["Believe it or not, ..."]
    },
    {
      "ru": ["You may not believe it, but ..."],
      "en": ["You may not believe it, but ..."]
    },
    {
      "ru": ["Это может звучать странно, но ..."],
      "en": ["It may sound strange, but ..."]
    },
    {
      "ru": ["Удивительная вещь, ..."],
      "en": ["The surprising thing is ..."]
    },
    {
      "ru": [
        "Как ни странно, ...",
        "Довольно странно, ..."
      ],
      "en": [
        "Surprisingly, ...",
        "Funnily enough, ...",
        "Oddly enough, ..."
      ]
    },
    {
      "ru": [
        "В общем-то",
        "В общем",
        "В общем и целом",
        "В целом"
      ],
      "en": [
        "Generally",
        "By and large",
        "On the whole, ..."
      ]
    },
    {
      "ru": [
        "As a rule",
        "Normally",
        "Usually"
      ],
      "en": [
        "Как правило",
        "Как обычно",
        "Обычно"
      ]
    }
  ],
  "Idioms": [
    {
      "ru": "очень просто",
      "en": "a piece of cake"
    }
  ],
  "Expressions": [
    {
      "ru": "получать удовольствие от ...",
      "en": "to derive pleasure from ..."
    }
  ]
};