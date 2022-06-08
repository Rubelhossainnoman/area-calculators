const area_form = document.getElementById('area_form');
const area_select = document.getElementById('area_select');
const rec = document.querySelector('.rec');
const squ = document.querySelector('.squ');
const tri = document.querySelector('.tri');
const cir = document.querySelector('.cir');
const submit_button = document.getElementById('submit_button');
const details_area = document.getElementById('details_area');


area_select.onchange = () =>{

    if (area_select.value == 'Rectangle') {
        rec.style.display = 'block';
    } else {
        rec.style.display = '';
    }
    if (area_select.value == 'Square') {
        squ.style.display = 'block';
    } else {
        squ.style.display = '';
    }
    if (area_select.value == 'Tringle') {
        tri.style.display = 'block';
    } else {
        tri.style.display = '';
    }
    if (area_select.value == 'Circle') {
        cir.style.display = 'block';
    } else {
        cir.style.display = '';
    }
}

area_form.onsubmit = (event) => {
    event.preventDefault();

    const length = document.getElementById('length').value;
    const width = document.getElementById('width').value;
    const bahu = document.getElementById('bahu').value;
    const base = document.getElementById('base').value;
    const height = document.getElementById('height').value;
    const radious = document.getElementById('radious').value;

    if (area_select.value == 'Rectangle') {
        details_area.innerHTML = arecal(area_select.value, +length, +width);
    } else if(area_select.value == 'Square') {
        details_area.innerHTML = arecal(area_select.value, +bahu);
    } else if(area_select.value == 'Tringle') {
        details_area.innerHTML = arecal(area_select.value, +base, +height);
    } else if(area_select.value == 'Circle') {
        details_area.innerHTML = arecal(area_select.value, +radious);
    }
}


