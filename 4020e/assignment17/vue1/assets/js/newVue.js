var header = new Vue({
    el: '#header',
    data: {
        yourName: 'Chase Lin',
        description: 'Undergrad in Terry College of Business',
        link1: 'Introduction',
        link2: 'My Portfolio',
        link3: 'Learn About Me',
        link4: 'Contact Me',
        link5: 'A Very Important List',
        avatar: 'images/avatar.png'
    }
});

var portfolio = new Vue({
    el: '#portfolio',
    data: {
        portfolioTitle: 'My Portfolio',
        image1: 'images/pic02.png',
        imgText1: 'Tech Consulting',
        image2: 'images/pic03.png',
        imgText2: 'Graphic Design',
        image3: 'images/pic04.png',
        imgText3: 'Content Creation',
        image4: 'images/pic05.png',
        imgText4: 'Journaling',
        image5: 'images/pic06.png',
        imgText5: 'Tech Consulting',
        image6: 'images/pic07.png',
        imgText6: 'Data Analytics',
        portfolioText: 'Here are some of my interests and projects involving technology, data, and creativity.'
    }
});

var list = new Vue({
    el: '#list',
    data: {
        favorites: [
            'Stray Kids',
            'The Legend of Zelda',
            'Cats',
            'Collage journaling',
            'Jasmine green tea'
        ]
    }
});

var conditional = new Vue({
    el: '#conditional',
    data: {
        gameAnswer: '',
        teacherName: ''
    }
});


var getColor = new Vue({
    el: '#function',
    data: {
        bgColor: 'white',
        colors: ['pink', 'lightblue', 'purple', 'gold', 'lightgreen']
    },
    methods: {
        changeColor(color) {
            this.bgColor = color;
        }
    }
});