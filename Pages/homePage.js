class homePage{
    elements = {
        btnElements: () => cy.get(':nth-child(1) > :nth-child(1) > .card-up'),
        btnForms: () => cy.get(':nth-child(2) > :nth-child(1) > .card-up'),
        btnAFW: () => cy.get(':nth-child(3) > :nth-child(1) > .card-up'),
        btnWidgets: () => cy.get(':nth-child(4) > :nth-child(1) > .card-up'),
        btnInteractions: () => cy.get(':nth-child(5) > :nth-child(1) > .card-up'),
        btnBookStoreApp: () => cy.get(':nth-child(6) > :nth-child(1) > .card-up'),
    }
    clickBtnElements(){
        this.elements.btnElements().click();
    }
    clickBtnForms(){
        this.elements.btnForms().click();
    }
    clickBtnAFW(){
        this.elements.btnAFW().click();
    }
    clickBtnWidgets(){
        this.elements.btnWidgets().click();
    }
    clickBtnInteractions(){
        this.elements.btnInteractions().click();
    }
    clickBtnBookStoreApp(){
        this.elements.btnBookStoreApp().click();
    }
}
module.exports = new homePage();