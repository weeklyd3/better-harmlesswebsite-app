function back(num = 1) {
    if (!localStorage.getItem('history')) return;
    var hi = JSON.parse(localStorage.getItem('history'));
    for (var i = 0; i < num; i++) hi.pop();
    console.log(hi);
    localStorage.setItem('history', JSON.stringify(hi));
    var h = hi[hi.length - 1];
    switch (h.level) {
        case 1:
            goto(h.place, false);
            break;
        case 3:
            goto3(h.place, false)
            break;
        case 4:
            goto4(h.place, false);
            break;
        case 5:
            goto5(h.place, false);
            break;
        case 6: 
            goto6(h.place, false);
            break;
    }
    console.log(hi);
}

function saveCallbackFunction(level, place) {
    globalThis.detatchPusher = false;
    console.log(globalThis.detatchPusher);
    document.getElementById('level').textContent = level;
    document.getElementById('leveli').value = level;
    document.getElementById('place').textContent = JSON.stringify(place);
    document.getElementById('minileveli').value = JSON.stringify(place);
}
function showHist() {
    if (document.getElementById('history').style.display === 'block') {document.getElementById('history').style.display = 'none'; return document.getElementById('baudy').style.display = 'block'; }
    document.getElementById('history').style.display = 'block';
    document.getElementById('baudy').style.display = 'none';
    document.getElementById('historyul').innerHTML = '';
    var h = JSON.parse(localStorage.getItem('history') ?? '[]').reverse();
    document.getElementById('histcount').textContent = h.length;
    for (var i = 0; i < h.length; i++) {
        var l = document.createElement('li');
        l.style.padding = '7px';
        l.style.border = '1px solid lightgray';
        l.textContent = `Level ${h[i].level}, minilevel ${h[i].place}`;
        l.setAttribute('data-goback', i);
        l.classList.add('histitem');
        l.addEventListener('click', function() {
            back(this.getAttribute('data-goback'));
            showHist();
        });
        document.getElementById('historyul').appendChild(l);
    }
}