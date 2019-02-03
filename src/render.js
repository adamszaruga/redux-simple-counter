const render = (state) => {
    const counterDOM = document.getElementById('counterValue');
    counterDOM.innerHTML = state.value;
}