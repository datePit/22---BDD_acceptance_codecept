Feature('adding computers');
const { I, addComputerPage } = inject();

Scenario('Adding computer page opens',  ({ I, addComputerPage }) => {
    pause();
    addComputerPage.visit()
});


Scenario('creating a comp without a name causes an error',  ({ I, addComputerPage }) => {

});


Scenario('adding a comp with filled Computer name',  ({ I, addComputerPage }) => {

});


Scenario('creating a comp with not valid intro dates causes an error',  ({ I, addComputerPage }) => {

});


Scenario('creating a comp with not valid discounted dates causes an error',  ({ I, addComputerPage }) => {

});