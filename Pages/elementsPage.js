class elementsPage{
    elements = {
        tituloPage: () => cy.get('.main-header'),
        btnTextBox: () => cy.get(':nth-child(1) > .element-list > .menu-list > #item-0'),
        btnCheckBox: () => cy.get(':nth-child(1) > .element-list > .menu-list > #item-1'),
        /*btnRadioButton: () => cy.get(':nth-child(1) > .element-list > .menu-list > #item-2'),
        btnWebTables: () => cy.get('#item-3'),
        btnButtons: () => cy.get('#item-4'),
        btnLinks: () => cy.get('#item-5'),
        btnBrokenLinks: () => cy.get('#item-6'),
        btnUpLoadDownLoad: () => cy.get('#item-7'),
        btnDynamicProperties: () => cy.get('#item-8'),
        inputFullName: () => cy.get('#userName'),
        inptEMail: () => cy.get('#userEmail'),
        InputCurrentAddress: () => cy.get('#currentAddress'),
        InputPermanentAddress: () => cy.get('#permanentAddress'),
        btnSubmit: () => cy.get('#submit'),
        folderHome: () => cy.get('rct-title').eq(0),
        expandHome: () => cy.get('.rct-icon rct-icon-expand-close'),
        expandDesktop: () => cy.get('.rct-title').eq(1),
        expandDocuments: () => cy.get('.rct-title').eq(2),
        expandDownloads: () => cy.get('.rct-title').eq(3),
        checkBoxHome: () => cy.get('.rct-icon rct-icon-uncheck').eq(0),
        checkDesktop: () => cy.get('.rct-icon rct-icon-uncheck').eq(1),
        checkNotes: () => cy.get('.rct-icon rct-icon-uncheck').eq(2),
        checkCommands: () => cy.get('.rct-icon rct-icon-uncheck').eq(2),
        checkDocuments: () => cy.get('.rct-icon rct-icon-uncheck').eq(3),
        checkWorkSpace: () => cy.get('.rct-icon rct-icon-uncheck').eq(4),
        checkOffice: () => cy.get('.rct-icon rct-icon-uncheck').eq(5),
        checkDownloads: () => cy.get('.rct-icon rct-icon-uncheck').eq(6),
        checkWordFiles: () => cy.get('.rct-icon rct-icon-uncheck').eq(7),
        checkExcelFiles: () => cy.get('.rct-icon rct-icon-uncheck').eq(8),
        btnexpandAll: () => cy.get('.rct-icon rct-icon-expand-all'),
        btnRadioButtonCollapseAll: () => cy.get('.rct-icon rct-icon-expand-all'),*/
    }
    clickBtnCheckBox(){
        this.elements.btnCheckBox().click();
    }
    verifyTituloPage(titulodepagina){
        this.elements.tituloPage().should('have.text',titulodepagina);
    }
    
}
module.exports = new elementsPage();