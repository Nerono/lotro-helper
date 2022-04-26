document.getElementById('addBlock').onclick = addNewBlock;
document.querySelector('#delete').onclick = deleteBlock;

function addNewBlock() {
   let block = document.getElementById('block');
   let clonedBlock = block.cloneNode(true);
   clonedBlock.querySelector('#delete').onclick = deleteBlock;
   document.getElementById('blocks').appendChild(clonedBlock);

   updateDeleteButtonsAfterBlockAmountChanged();
}

function deleteBlock() {
    this.parentNode.remove();

    updateDeleteButtonsAfterBlockAmountChanged();
}

function updateDeleteButtonsAfterBlockAmountChanged() {
    var deleteButtons = document.querySelectorAll('#delete');
    if (deleteButtons.length == 1) {
        deleteButtons[0].disabled = true;
    } else {
        deleteButtons.forEach(function(deleteButton) {
            deleteButton.removeAttribute('disabled');
        })
    }

}