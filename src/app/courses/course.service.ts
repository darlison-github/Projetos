import { Injectable } from '@angular/core';
import {Course} from './course';

@Injectable({
    providedIn: 'root'
})

export class CourseService {

    retrieveAll(): Course[] {
        return COURSES;
    }

}

var COURSES: Course[] = [
    {
        id: 1,
        imageUrl: '/assets/Imagens/forms.png',
        nome: 'Angular: Forms',
        descricao: 'Neste curso os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        nivel: 'Intermediário',
        preco: 99.99,
        codigo: 'XPS-8796',
        duracao: '120 min.',
        avaliacao: 5.8,
        lancamento: '2, Novembro, 2021'
    },
    {
        id: 2,
        imageUrl: '/assets/Imagens/animations.png',
        nome: 'JavaScript',
        descricao: 'Neste curso os alunos irão obter conhecimento um pouco mais avançado sobre JavaScript.',
        nivel: 'Intermediário',
        preco: 49.99,
        codigo: 'JSP-8686',
        duracao: '80 min.',
        avaliacao: 4.5,
        lancamento: '12, Outubro, 2022'
    },
    {
        id: 3,
        imageUrl: '/assets/Imagens/cli.png',
        nome: 'Java',
        descricao: 'Neste curso os alunos terão um conhecimento básico sobre o curso de Java para iniciantes.',
        nivel: 'Básico',
        preco: 19.99,
        codigo: 'XIX-1817',
        duracao: '85 min.',
        avaliacao: 5.4,
        lancamento: '25, Novembro, 2021'
    },
    {
        id: 4,
        imageUrl: '/assets/Imagens/http.png',
        nome: 'Ionic',
        descricao: 'Neste curso os alunos vai obter conhecimentos básicos sobre o curso de Ionic.',
        nivel: 'Básico',
        preco: 25.99,
        codigo: 'SAD-1213',
        duracao: '60 min.',
        avaliacao: 5.1,
        lancamento: '5, Março, 2022'
    },
    {
        id: 5,
        imageUrl: '/assets/Imagens/router.png',
        nome: 'Java',
        descricao: 'Neste curso os alunos terão um conhecimento vasto e cheio de conhecimentos bem avançados.',
        nivel: 'Avançado',
        preco: 109.99,
        codigo: 'QWE-8015',
        duracao: '240 min.',
        avaliacao: 4.8,
        lancamento: '22, Janeiro, 2022'
    }

]