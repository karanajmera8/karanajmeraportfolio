import python from '../Assets/python.png';
import cpp from '../Assets/cpp.png';
import django from '../Assets/django.png';
import docker from '../Assets/docker.png';
import git from '../Assets/git.png';
import html from '../Assets/html.png';
import javascript from '../Assets/javascript.png';
import nodejs from '../Assets/nodejs.png';
import reactjs from '../Assets/reactjs.png';
import sql from '../Assets/sql.png';
import css from '../Assets/css.png';

export const languages = [
    {title: 'Python', icon: python, invert: false },
    {title: 'C++', icon: cpp, invert: false },
    {title: 'HTML', icon: html, invert: false },
    {title: 'CSS', icon: css, invert: false },
    {title: 'Javascript', icon: javascript, invert: false },
    {title: 'SQL', icon: sql, invert: true },
];

export const frameworks = [
    {title: 'React', icon: reactjs, invert: false },
    {title: 'Node.js', icon: nodejs, invert: true },
    {title: 'Django', icon: django, invert: true },
    {title: 'Git', icon: git, invert: false },
    {title: 'Docker', icon: docker, invert: false },
];
