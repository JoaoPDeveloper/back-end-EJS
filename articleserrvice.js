const articles = [
    {
        id : 1,
        title: 'Meritocracia: o que é e quais os cuidados para adotar na sua empresa',
        description: 'Muito se fala em meritocracia nos dias de hoje. Seja nas empresas, na carreira ou no desenvolvimento pessoal, é um conceito que cada vez mais pessoas querem entender e aplicar. Mas é fundamental entender exatamente o que isso significa.'
    },
    {
        id: 2,
        title: 'Por que a Xiaomi decidiu lançar carros elétricos?',
        description: 'Xiaomi anuncia parceria com uma das principais montadoras da China para a construção de seus carros elétricos e autônomos.'
    }
];

function getArticles(){
    return articles;
}

function getArticlesById(articleId) {
    return articles.find(article => {
       return article.id === Number(articleId)
    });
  }

  export {getArticles, getArticlesById};