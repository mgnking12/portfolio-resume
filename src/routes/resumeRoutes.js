var express = require('express');
var resumeRoutes = express.Router();
var skills = [{
    skill: 'CSS',
    precent: '95',
    logo: '/photos/css.png'
}, {
    skill: 'HTML5',
    precent: '95',
    logo: '/photos/html.png'
}, {
    skill: 'jQuery',
    precent: '85',
    logo: '/photos/jquery.png'
}, {
    skill: 'JavaScript',
    precent: '85',
    logo: '/photos/javascript.png'
}, {
    skill: 'Node.js',
    precent: '70',
    logo: '/photos/Node-js.png'
}, {
    skill: 'React',
    precent: '50',
    logo: '/photos/reactjs.png'
}, {
    skill: 'mySQL',
    precent: '30',
    logo: '/photos/mysql.png'
}];
var experience = [{

    title: 'Developer, MicroMain',
    dates: 'Austin, TX — September 2015 - Present',
    description: 'MicroMain is a small company that builds maintenance management and facility management products.',
    day2day: [
        '- Oversee and implement the UI/UX aspects of MicroMain’s products',
        '- Create design mockups for our products using Photoshop and Experience Design CC',
        '- Test and implement mobile responsive elements of MicroMain’s products',
        '- Implement JavaScript elements into the Outsystems platform for more complicated aspects of the product',
        '- Collaborate with Outsystem teams in Portugal'
    ],
    achievements: [
        '- My team released internal and external beta of a completely new product in less than 6 months',
        '- Took on the role of a UI / UX Developer 4 months after starting the Jr. Developer role'
    ]
}, {
    title: 'Recruiting / Onboarding, Favor Delivery',
    dates: 'Austin, TX — September 2014 - September 2015',
    description: 'Favor is a start up on demand delivery company based out of Austin.',
    day2day: [
        '- Created recruiting ads with Photoshop and Illustrator and managing the analytics produced',
        '- Mentored new mass recruiters in Austin and across the U.S',
        '- Collaborated with the PlaybookHR team to customize the mass recruiting platform for organizing independent workforces (Intuit has acquired PlaybookHR).',
        '- Create ads for the marketing team when the design backlog was overflowing with Tickets',
        '- Planned future recruiting events'
    ],
    achievements: [
        '- Brought applicant pool to 300+/week with different marketing concepts and events',
        '- Became head of our team within 4 months'
    ]
}];

var router = function() {
    resumeRoutes.get('/', function(req, res) {
        res.render('resume', {
            title: 'Resume',
            skills: skills,
            experience: experience
        });
    });

    return resumeRoutes;

};

module.exports = router;