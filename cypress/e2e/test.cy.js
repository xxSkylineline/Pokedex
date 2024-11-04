/// <reference types="Cypress" />
const URL = '127.0.0.1:5500/index.html'


describe('Testing de Pokedex', () => {

    beforeEach(() =>{
        cy.visit(URL);
    });

    it('Solicita la respuesta a la API de pokemon y obtiene un objeto como respuesta', () => {
        cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon', (req)=>{
           console.log(req.results[0])
        })
    })

    it('Deberia encontrar los botones de las paginas', ()=>{
        cy.get('.page-item').click();
    })

    it('Encuentra contenedor para los pokemones listados', () => {
        cy.get('.page-item').click();
        cy.get('#tarjeta-pokemon');
    })

    it('Deberia ubicar al boton de las estadisticas', () => {
        cy.get('.page-item').click();
        cy.get('.boton-estadisticas').first().click();
    });

    it('Confirma que tiene campo de estadisticas', () => {
        cy.get('.page-item').click()
        cy.get('.boton-estadisticas').last().click()
        cy.contains('TIPO')
    });

    it('Asegura que contiene una tabla',() => {
        cy.get('.page-item').click()
        cy.get('.boton-estadisticas').last().click()
        cy.get('table')
    });
});

