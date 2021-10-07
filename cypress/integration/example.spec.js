
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('rock photo', ()=>{
            cy.get('#rockphoto').should('be.visible');
        });
    });
});