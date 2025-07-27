const FG = 172.21;
const RANG = 74;
const N = [19.08, 16, 16.75, 18]

const F = Array(10);
F[0] = [11518, "Prépa intégrée", "Higher Institute of Digital Engineering of Tunis", 'HIDE', 'Université de Tunis', '<br>- AI in Data Science -<br>- AI in Industry & Robotics -<br>- AI in Arts -', 12, 187.37, false, "012"]
F[1] = [10520, "Prépa intégrée MPI(Math-Physique-Informatique)", "Instutut Supérieur des Sciences Appliqueés et Technologies", 'INSAT', 'Université de Carthage', '<br>- Math - Physique - Informatique -', 40, 196.06, false, "012"]
F[2] = [11523, "Licence en Sciences de l'Informatique", "Institut Supérieur d'Informatique", 'ISI', 'Université de Tunis El Manar', "<br>- Génie Logiciel et Systèmes d'Information -<br>- Informatique et Multimédia -", 53, 198.9933, true, "01"]
F[3] = [10566, "Licence en Technologies de l'Informatique", "Institut Supérieur des Études Technologiques de Rades", 'ISET Rades', "Université de la Manouba", "<br>- Réseaux et Services Informatiques -<br>- Développement des Systèmes d'Information -<br>- Systèmes Portable et Mobiles -", 60, 170.7, true, "01"]
F[4] = [12523, "Licence en Sciences de l'Informatique", "Faculté de Sciences de Tunis", 'FST', 'Université de Tunis El Manar', "<br>- Génie Logiciel et Systèmes d'Information -", 50, 193.41, true, "01"]
F[5] = [11524, "Licence en ingénierie des systèmes d'information", "Institut Supérieur d'Informatique", 'ISI', 'Université de Tunis El Manar', '<br>- Ingénierie des Réseaux et des Systèmes -', 25, 188.08, true, "01"]
F[6] = [10523, "Licence en Sciences de l'Informatique", "Institut Supérieur des Arts Multimédia de la Manouba", 'ISAMM', 'Université de la Manouba', '<br>- Science et Analyse des Données Massives -<br>- Informatique Embarquée et Systèmes Portables -<br>- Informatique et Multimédia -', 77, 185.91, true, "01"]
F[7] = [10524, "Licence en ingénierie des systèmes d'information", "Faculté de Sciences de Tunis", 'FST', 'Université de Tunis El Manar', "<br>- Les Systèmes Embarqués et l'Internet des Objets (IoT) -", 40, 181.69, true, "01"]
F[8] = [13523, "Licence en Sciences de l'Informatique", "Institut Supérieur de la Technologie d'Information et Communication", 'ISTIC', 'Université de Carthage', "<br>- Génie Logiciel et Systèmes d'Information -<br>- Informatique et Multimédia -", 60, 188.67, true, "01"]
F[9] = [12524, "Licence en ingénierie des systèmes d'information", "Institut Supérieur de la Technologie d'Information et Communication", 'ISTIC', 'Université de Carthage', "<br>- Les Systèmes Embarqués et l'Internet des Objets (IoT) -<br>- Réseaux et Services Informatiques -", 60, 168.51, true, "01"]
const L = [];
const C = [0, 2, 1, 5, 4, 7, 3, 6, 8, 9];
for (let i = 0; i < C.length; i++) {
    L[i] = F[C[i]]
    
}

function col_show(col, v) {
    document.getElementById(`th${col}`).style.display = v;
    for (let l = 1; l <= 10; l++) {
        document.getElementById(`td${l}-${col}`).style.display = v;
    }
}

function fill_choices() {
    HIDE = [6, 7, 8, 9, 10]
    // HIDE = []
    HIDE.forEach(h => {
        col_show(h, 'none')        
    });
    document.getElementById('fg').innerText = FG;
    document.getElementById('rang').innerText = RANG;
    
    for (let li = 0; li < L.length; li++) {
        let ci;
        for (ci = 0; ci < L[li].length - 2; ci++) {
            document.getElementById(`td${li+1}-${ci+2}`).textContent = L[li][ci]
        }
        const derscore = L[li][ci-1];
        let monscore =  FG
        const mats = L[li][ci+1];
        if (mats.length != 0) {
            let s = 0;
            for (let i = 0; i < mats.length; i++) {
                s += N[mats[i]]
            }
            monscore += s / mats.length
        }
        let bonus = 1;
        if (L[li][ci]){
            bonus = 1.07;
        }
        monscore *= bonus
        const diffscore = monscore - derscore;
        document.getElementById(`td${li+1}-${ci+2}`).innerText = monscore;
        document.getElementById(`td${li+1}-${ci+3}`).innerText = diffscore;
        const tabrow = document.getElementById(`tr${li+1}`);
        const pinfo = document.getElementById(`td${li+1}-12`);
        if (diffscore < -5) {
            tabrow.style.background = 'rgba(207, 40, 40, 0.5)';
            tabrow.dataset.state = 'not';
            pinfo.style.color = 'var(--dark-not-ok)';

        } else if (-5 <= diffscore && diffscore <= 5) {
            tabrow.style.background = 'rgba(46, 84, 197, 0.5)';
            tabrow.dataset.state = 'almost';
            pinfo.style.color = 'var(--dark-almost-ok)';

        } else {
            tabrow.style.background = 'rgba(18, 171, 74, 0.5)';
            tabrow.dataset.state = 'is';
            pinfo.style.color = 'var(--dark-is-ok)';

        }
        
    }
}

const next = () => {
    const pn = document.getElementById('popup-next');
    const ph = document.getElementById('popup-hide');
    pn.style.scale = '0';
    document.getElementById('pup1').style.opacity = '0';
    setTimeout(() => {
        ph.style.scale = '1';
        document.getElementById('pup1').style.display = 'none';
        document.getElementById('pup2').style.display = 'block';
    }, 1000);
    setTimeout(() => {
        document.getElementById('pup2').style.opacity = '1';
    }, 1200);


}

const start = () => {
    let pu = document.getElementById('popup');
    setTimeout(() => {
        pu.style.opacity = '1';
    }, 1000);
}

function popup_show() {
    let pu = document.getElementById('popup');
    let main = document.querySelector('main').style;
    if (pu.dataset.open == '1') {
        pu.style.opacity = '0';
        pu.dataset.open = '0';
        main.filter = 'none';
        main.pointerEvents = 'auto';
        pu.style.pointerEvents = 'none';
    } else {
        pu.style.opacity = '1';
        pu.dataset.open = '1';
        main.filter = 'blur(4px)';
        main.pointerEvents = 'none';
        pu.style.pointerEvents = 'auto';
    }
    
}

function num_ordre(n) {
    const NORD = ['premier', 'deuxième', 'troisième', 'quatrième', 'cinquième', 'sixième', 'septième', 'huitième', 'neuvième', 'dixième'];
    return NORD[Number(n)-1];
}

function popup_color(line) {
    const state = document.getElementById(`tr${line}`).dataset.state;
    const popup = document.getElementById('popup').style;
    const hide = document.getElementById('popup-hide').style;
    popup.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    hide.background = `var(--${state}-okay)`;
    hide.color = `var(--dark-${state}-ok)`;
    hide.borderColor = `var(--dark-${state}-ok)`;
    popup.borderColor = `var(--dark-${state}-ok)`;
    return state;
}

function morinfo(line) {
    let pu = document.getElementById('popup-content');
    pu.innerHTML = '';
    const state = popup_color(line);
    const content = num_ordre(document.getElementById(`td${line}-${1}`).innerText);
    pu.innerHTML += `<h2 class='dark-${state}-okay'>Le ${content} choix</h3>`
    for (let i = 2; i <= 11; i++) {
        const header = document.getElementById(`th${i}`).textContent;
        const content = document.getElementById(`td${line}-${i}`).innerText;
        pu.innerHTML += `<p><span class='name ${state}-okay'>${header}: </span><span class='cont'>${content}</span></p>`
    }
    if (document.getElementById('popup').dataset.open == '0') {
        popup_show();
    }
}

document.addEventListener('keypress', (event) => {
    if (event.key == 'x') {
        popup_show()
    }
    if (event.key == 'n') {
        next()
    }
    else{
        if ('1' <= event.key && event.key <= '9') {
            morinfo(event.key)
        }else if (event.key == '0') {
            morinfo(10)
        }
    }
})