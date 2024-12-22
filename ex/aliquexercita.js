// Assuming 'view' is an object from a custom library
if (view._resizeWidth && typeof view._resizeWidth.skip === 'function') {
    view._resizeWidth.skip(true);
} else {
    console.error('The resizeWidth object or skip function is not defined.');
}
