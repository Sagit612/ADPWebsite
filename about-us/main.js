function copy(className, parentClassName) {
    var copy = document.querySelector(className).cloneNode(true);
    document.querySelector(parentClassName).appendChild(copy);
}

copy('.texts-slide', '.texts');
copy('.members-slide', '.members')