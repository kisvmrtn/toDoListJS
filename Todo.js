export default class Todo {
    #text 
    #index
    constructor(text, pElem, index) {
        this.#text = text; // megadjuk a szoveget amit kiirunk (feladat)
        this.#index = index; // custom eventnél, egyedi index azonosító
        this.pElem = pElem;  //  HTML elem, amelyhez a teendőt hozzáadjuk
        this.view();
        this.textElem = document.querySelector(".text:last-child"); // utoljára beszúrt textelem
        this.OKELem = this.textElem.querySelector(".ready"); // pipa gomb
        this.deleteElem = this.textElem.querySelector(".delete:last-child") // delete gomb
        this.eventListeners();
        this.remEventListener();
    }
    view() {
        // html elem megirasa
        let html = `<p class = text>${this.#text}
                    <button class="ready">✅</button>
                    <button class="delete">❌</button>
                    </p>`
        //html elem hozzaadasa a pElemhez
        this.pElem.insertAdjacentHTML("beforeend", html);
    }
    eventListeners()  {
        // eseménykezelő kattintásra
        this.OKELem.addEventListener("click", () => {
            // A pipára kattintva megváltoztatja a szöveg színét zöldre
            this.textElem.style.color="green"
            // customevent, jelzi hogy kész a teendő
            const stateChange = new CustomEvent("change", { detail: this.#index})
            // továbbítja a stateChange eseményt
            window.dispatchEvent(stateChange)
        })
    }
    remEventListener() {
        // esemenykezelo katt-ra
        this.deleteElem.addEventListener("click", () => {
            // egyedi esemeny ami jelzi hogy torolni kell az X-edik indexen levo elemet
            const removeEvent = new CustomEvent("remove", { detail: this.#index });
            // továbbítja a removeEvent eseményt
            window.dispatchEvent(removeEvent);
        })
    }
}