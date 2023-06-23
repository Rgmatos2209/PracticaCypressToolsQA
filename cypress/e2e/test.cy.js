/// <reference types="cypress" />
import homePage from "../../Pages/homePage";
import elementsPage from "../../Pages/elementsPage";


describe('Pruebas con la web toolsQA',()=>{

    beforeEach(()=>{
        cy.visit('https://demoqa.com/');
    })
    it('Prueba icono elementos',()=>{
        homePage.clickBtnElements();
        elementsPage.verifyTituloPage('Elements');
    })
    it('Prueba de icono checkbok',() => {
        homePage.clickBtnElements();
        elementsPage.clickBtnCheckBox();
    })
    



})