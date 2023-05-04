const accordion = document.querySelector(".accordion");

accordion.addEventListener("click" , (e)=>{
    const active_panel = e.target.closest(".accordion-panel");
    if(!active_panel) return;
    toggleAccordion(active_panel);
});

function toggleAccordion(panelToActivate) {
    const buttons = panelToActivate.parentElement.querySelectorAll("button");
    const contents =panelToActivate.parentElement.querySelectorAll('.accordion-content');    

    buttons.forEach(button => {
        button.setAttribute("aria-expanded" , false);
    });
    contents.forEach(content => {
        content.setAttribute("aria-hidden" , true);
    });

    panelToActivate.querySelector('button').setAttribute('aria-expanded' , true);
    panelToActivate.querySelector('accordion-content').setAttribute('aria-hidden' , false);
}